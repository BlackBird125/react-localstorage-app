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

localStorage と React の状態を同期するカスタムフックを実装しています。このフックを使用することで、React の状態管理と localStorage の永続化を簡単に連携させることができます。

```typescript
const [value, setValue] = useLocalStorage<T>(key: string, initialValue: T)
```

#### パラメータ

- `key`: localStorage に保存する際のキー名
- `initialValue`: 初期値（localStorage にデータが存在しない場合に使用）
- `T`: 保存するデータの型（ジェネリック型パラメータ）

#### 戻り値

- `value`: 現在の値（localStorage から読み込んだ値、または initialValue）
- `setValue`: 値を更新するための関数（自動的に localStorage も更新）

#### 使用例

```typescript
// 文字列の場合
const [name, setName] = useLocalStorage<string>("userName", "");

// 配列の場合
const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);

// オブジェクトの場合
const [settings, setSettings] = useLocalStorage<Settings>("settings", {
  theme: "light",
  language: "ja",
});
```

#### 機能

- 型安全性: TypeScript のジェネリクスによる型チェック
- 自動シリアライズ: JSON.stringify/parse による自動変換
- エラーハンドリング: localStorage アクセス時のエラーを適切に処理
- SSR 対応: window オブジェクトの存在確認

## ライセンス

MIT
