import { useEffect, useRef } from "react";
import * as QRCode from "qrcode";

export interface QrCodeProps {
  /** 表示するデータ。 undefinedのときは0x0のcanvasになる。*/
  data?: string;

  // 以下説明は略
  className?: string;
  style?: React.CSSProperties;
}

/**
 * QRコードを表示するコンポーネント。
 *
 * 注意：
 * - 入力データが大きすぎる場合、描画に失敗する可能性がありますが、
 *   現時点ではエラーハンドリングを行っていません。
 */
export function QrCode(props: QrCodeProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    (async () => {
      if (!ref.current) {
        return;
      }

      // データがある場合はQRコードを表示。ないときはサイズを0にする。
      const canvas = ref.current;
      if (props.data) {
        try {
          await QRCode.toCanvas(canvas, props.data);
        } catch(e) {
          console.error("QRコードの描画に失敗しました", e);
        }
      } else {
        canvas.width = 0;
        canvas.height = 0;
      }
    })();
  }, [props.data]);

  return <canvas className={props.className} style={props.style} ref={ref} />;
}
