# Genkit YouTube Summary

Genkit と Gemini Developer API を使用して YouTube 動画を要約するアプリケーションです。

## 概要

このプロジェクトは「Flutter エンジニアのための生成 AI アプリ開発入門」書籍のハンズオン教材として作成されています。Genkit の公式チュートリアル「[Summarize YouTube videos](https://genkit.dev/docs/tutorials/summarize-youtube-videos/)」をベースにしています。

## 技術スタック

- Node.js (v20 以上)
- TypeScript
- [Genkit](https://genkit.dev/) + Google AI (Gemini 2.5 Flash)
- Biome

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

Gemini API キーを取得して、`.env` ファイルを作成します。

```yaml:.env
GEMINI_API_KEY=your_api_key_here
```

API キーは [Google AI Studio](https://aistudio.google.com/app/api-keys) で取得できます。

## 使い方

### 開発サーバーの起動

Genkit Developer UI を起動して、Flow をテストできます。

```bash
npm run dev
```

ブラウザで `http://localhost:4000` にアクセスすると、Genkit Developer UI が表示されます。

### Flow の実行

`summarizeYoutubeFlow` に YouTube 動画の URL を入力すると、動画の内容を要約してくれます。

入力例:

```text
https://www.youtube.com/watch?v=YUgXJkNqH9Q
```

## プロジェクト構成

```bash
.
├── src/
│   └── index.ts      # メインのアプリケーションコード
├── docs/
│   └── official_document.md  # 公式ドキュメントの参照
├── biome.json        # Biome の設定
├── package.json
└── README.md
```
