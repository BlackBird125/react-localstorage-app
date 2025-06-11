# React LocalStorage Todo App

シンプルな Todo アプリケーションで、React、TypeScript、Material-UI を使用し、localStorage でデータを永続化する実装例です。

## 機能

- タスクの追加・削除
- ブラウザ再読み込み後もデータを保持（localStorage 使用）
- Material-UI によるモダンな UI
- TypeScript による型安全性

## 技術スタック

- React 18
- TypeScript
- Material-UI
- localStorage

## セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm start
```

## カスタムフック

### useLocalStorage

localStorage と React の状態を同期するカスタムフックを実装しています。

```typescript
const [value, setValue] = useLocalStorage<T>(key: string, initialValue: T)
```

## ライセンス

MIT
