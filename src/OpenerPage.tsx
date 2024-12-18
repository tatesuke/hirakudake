import { useQueryParameters } from "./useQueryParameters";
import * as QRCode from "qrcode";
import "./OpenerPage.scss";
import { useEffect, useRef } from "react";
import { APP_BASE_PATH } from "./constants";

export function OpenerPage() {
  const { url, title } = useQueryParameters();
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    (async () => {
      if (!qrCanvasRef.current) {
        return;
      }
      await QRCode.toCanvas(qrCanvasRef.current, location.href);
    })();
  }, [qrCanvasRef]);

  const open = () => {
    window.open(url);
  };

  return (
    <div className="OpenerPage">
      <header>
        <h1>ひらくだけ</h1>
      </header>
      <div className="OpenerPage__main-button-area">
        <button className="OpenerPage__main-button" onClick={open}>
          {title}
          <br />
          を開く
        </button>
        <p>{url}</p>
      </div>
      <div>
        <p>このページは以下のQRコードからも開けます</p>
        <canvas ref={qrCanvasRef} />
      </div>
      <div>
        <a href={`/${APP_BASE_PATH}`}>戻る</a> {/*  TODO これenv化できませんか */}
      </div>
    </div>
  );
}
