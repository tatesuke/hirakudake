# Hirakudake


## リリース手順

### `devlop`ブランチを最新にする。

```
git checkout develop
git pull
npm install
npm run lint
```

### バージョンを上げる。

パッチなら（0.0.**1**）
```
npm version patch
```

マイナーなら（0.**1**.0）
```
npm version minor
```

メジャーなら(**1**.0.0)
```
npm version major
```

### developをmasterにマージする
githubからPRしてね。

### deployする

```
git checkout develop
git pull
npm install
npm run lint
npm run deploy
```