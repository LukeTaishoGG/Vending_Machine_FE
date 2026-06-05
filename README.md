# フロントエンド設計仕様書

対象リポジトリ: `Vending_Machine_FE`  
最終更新: 2026-06-04（コードベース調査に基づく）

---

## 1. 概要

### プロジェクトの目的

**Deep 自販機 Map** は、Google マップ上に自動販売機の位置情報（ピン）を表示・検索し、ログインユーザーが新規ピンの登録・編集を行える Web アプリケーションである。※推定: 学習・チーム開発用の総合演習プロジェクト（`package.json` の `name: react-sougou-1` より）

### 技術スタックサマリー

| 区分 | 採用技術 |
|------|----------|
| ランタイム / ビルド | Node.js、Vite 6 |
| UI フレームワーク | React 18 |
| 言語 | TypeScript 5.8（`strict: true`） |
| ルーティング | react-router-dom 7 |
| UI コンポーネント | Chakra UI 2 |
| 地図 | @react-google-maps/api、Google Maps Geocoding API |
| API 通信 | ネイティブ `fetch`（axios / SWR / React Query 未使用） |
| 状態管理 | React Context + カスタムフック + コンポーネント `useState` |
| テスト | Vitest、@testing-library/react |
| コンポーネントカタログ | Storybook 9 |
| 品質 | ESLint 9（flat config）、Prettier |

### アプリケーション構成（エントリ）

```7:13:Vending_Machine_FE/src/main.tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>,
)
```

```81:92:Vending_Machine_FE/src/App.tsx
function App() {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <UserProvider>
        <ChakraProvider>
          <BrowserRouter>
            <MainApp />
          </BrowserRouter>
        </ChakraProvider>
      </UserProvider>
    </LoadScript>
  )
}
```

**注意:** `UserProvider` が `main.tsx` と `App.tsx` の両方でネストされている（二重ラップ）。意図的か要確認。

---

## 2. ディレクトリ構成

```
Vending_Machine_FE/
├── .storybook/          # Storybook 設定
├── index.html           # Vite エントリ HTML
├── public/              # 静的アセット（要確認: 現状ほぼ未使用の可能性）
├── src/
│   ├── main.tsx         # React マウント
│   ├── App.tsx          # ルートレイアウト・ヘッダー・Provider 束ね
│   ├── App.css          # グローバル / ヘッダー用クラス CSS
│   ├── index.css        # ベーススタイル（Vite テンプレート由来）
│   ├── router/
│   │   └── AppRouter.tsx    # ルート定義
│   ├── pages/               # 画面単位コンポーネント
│   ├── components/
│   │   ├── Map/             # 地図ドメイン（MyGoogleMap、hooks、logic）
│   │   ├── ui/              # 再利用 UI（フォーム、地図部品など）
│   │   ├── search/          # 検索バー
│   │   └── HeaderUser/      # ヘッダー用ユーザー領域
│   ├── hooks/               # 画面・機能横断のカスタムフック
│   ├── services/            # API 呼び出し層（fetch ラッパー）
│   ├── logic/               # ドメインロジック（ジオコーディング、debounce 等）
│   ├── types/               # 共有型定義
│   ├── Contexts/            # React Context
│   ├── data/                # モックデータ
│   └── stories/             # Storybook サンプル（本番 UI とは別系統）
├── eslint.config.js
├── prettier.config.cjs
├── vite.config.ts
├── vitest.config.ts
└── package.json
```

### 主要ディレクトリの役割

| パス | 役割 |
|------|------|
| `src/pages/` | ルートと 1:1 対応する画面。ロジックは hooks に委譲し、UI は `components/ui` を組み合わせる |
| `src/components/Map/` | トップ地図画面。表示・検索・idle 取得・InfoWindow を hooks / logic に分割 |
| `src/components/ui/` | Chakra UI ベースの Presentational コンポーネント。`.stories.ts` を同居 |
| `src/hooks/` | フォーム状態・API 連携・ナビゲーションをまとめたカスタムフック |
| `src/services/` | バックエンド REST API への `fetch` 実装。`config.ts` でベース URL 定義 |
| `src/logic/` | UI に依存しない純粋ロジック（バリデーション、debounce、Geocoder 等） |
| `src/types/` | API・フォーム・地図用の TypeScript 型 |
| `src/Contexts/` | ログインユーザー情報の Context |
| `src/data/` | API 失敗時のフォールバック用モックピン |

---

## 3. 技術スタック

### 本番依存関係（`package.json`）

| パッケージ | バージョン | 用途 |
|------------|------------|------|
| `react` / `react-dom` | ^18.2.0 | UI |
| `react-router-dom` | ^7.6.3 | SPA ルーティング |
| `@chakra-ui/react` | ^2.10.9 | レイアウト・フォーム・Drawer 等 |
| `@chakra-ui/icons` | ^2.2.4 | 検索アイコン等 |
| `@emotion/react` / `@emotion/styled` | ^11.14.0 | Chakra のスタイル基盤 |
| `framer-motion` | ^10.18.0 | Chakra アニメーション依存 |
| `@react-google-maps/api` | ^2.20.7 | GoogleMap / Marker ラッパー |

### 開発依存関係

| パッケージ | 用途 |
|------------|------|
| `vite` + `@vitejs/plugin-react` | 開発サーバー・HMR・本番ビルド |
| `typescript` | 型チェック（`tsc -b` を build に含む） |
| `vitest` + `jsdom` + `@testing-library/react` | ユニットテスト |
| `storybook` + `@storybook/react-vite` | UI カタログ |
| `eslint` + `typescript-eslint` + `eslint-plugin-react-hooks` 等 | 静的解析 |
| `prettier` | フォーマット |

### 採用していないもの（コード上確認）

- Redux / Zustand / Jotai 等の外部ストア
- axios
- SWR / TanStack Query
- Tailwind CSS / CSS Modules / styled-components（Chakra + 素の CSS が中心）
- Next.js 等のメタフレームワーク

---

## 4. コンポーネント設計

### 設計方針

1. **Container / Presentational の緩い分離**
   - `pages/` と `hooks/` が状態・副作用を保持
   - `components/ui/` は props 駆動の表示コンポーネント
2. **ドメイン単位のフォルダ**
   - 地図関連は `components/Map/` に hooks（`useMapPins` 等）と logic（`convertApiPin`）を同居
3. **サービス層の分離**
   - HTTP は `src/services/*` に集約し、hooks / コンポーネントから import

### 命名規則

| 対象 | 規則 | 例 |
|------|------|-----|
| ページ | `*Page.tsx`、`default export` | `LoginPage.tsx` |
| UI コンポーネント | PascalCase ディレクトリ + 同名 TSX。named / default 混在 | `AddPinForm/AddPinForm.tsx` |
| カスタムフック | `use` プレフィックス | `useAddPin`, `useMapIdle` |
| サービス | `*Service.ts`、動詞始まりの関数 export | `fetchAllMapPins` |
| 型ファイル | ドメイン名 | `types/pin.ts`, `types/auth.ts` |
| Storybook | `*.stories.ts` を UI 横に配置 | `AddPinForm.stories.ts` |

### 階層構造（データフロー例: 地図トップ）

```
App (search state, header)
 └── AppRouter
      └── MyGoogleMap
           ├── useMapPins → pinService
           ├── useMapIdle → debounce → fetchPinsInBounds
           ├── useMapSuggestions → searchMapPins
           ├── MapDisplay (GoogleMap + Marker)
           ├── SuggestList
           └── InfoWindow → InfoWindowContent → pinDetailService
```

### 再利用パターン

- **共通検索 UI:** `components/search/Search.tsx` をヘッダーと Add/Edit ページで共用
- **ピンフォーム:** `AddPinForm` を `AddPinPage` と `EditPinPage` で共用
- **地図選択:** `MapSelector`（追加・編集）、`MapDisplay`（一覧表示）で役割分担
- **地図 hooks の合成:** `MyGoogleMap` が複数の `useMap*` を組み合わせてオーケストレーション

```19:37:Vending_Machine_FE/src/components/Map/MyGoogleMap.tsx
const MyGoogleMap = ({ search }: MyGoogleMapProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const center = useCurrentLocation()
  const mapRef = useRef<google.maps.Map | null>(null)

  const { convertedPins, isLoading, setApiPins } = useMapPins()
  const { suggestPins } = useMapSuggestions(search)
  const { selectedPinId, handleMarkerClick, handleSuggestClick } = useMapInteractions()
  const displayPins = useMapDisplayPins(search, convertedPins)
  // ...
}
```

### Storybook

- 設定: `.storybook/main.ts` — `src/**/*.stories.@(js|jsx|ts|tsx)` を対象
- `src/stories/` は Vite デフォルトの Button/Header サンプル（本番画面とは無関係）
- 本番 UI は `components/ui/**/**.stories.ts` に配置

---

## 5. 状態管理

### 採用手法

| 手法 | 用途 | 実装 |
|------|------|------|
| **React Context** | ログインユーザー | `Contexts/UserContext.tsx` |
| **useState（コンポーネント）** | ヘッダー検索文字列 | `App.tsx` の `search` |
| **useState（カスタムフック）** | フォーム・地図・ローディング | `useAddPin`, `useLogin` 等 |
| **useRef** | 地図インスタンス、debounce タイマー | `mapRef`, `useDebounce` |

### UserContext

```1:14:Vending_Machine_FE/src/Contexts/UserContext.tsx
import React, { createContext, useState, useContext } from 'react';
export const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
```

- `user` の型は `any`（`types/auth.ts` の `LoginResponse.user` も `any`）
- ログイン成功時に `setUser(result.user)`（`useLogin.ts`）
- ログアウトは `setUser(null)`（`useHeaderUser.ts`）
- **JWT `token` は API から受け取るが永続化・Authorization ヘッダー付与は未実装**（要確認）

### 使い分けの基準（※推定: コードからの整理）

| 状態の種類 | 置き場所 |
|------------|----------|
| 複数画面で参照する認証ユーザー | Context |
| 単一画面・単一機能のフォーム / UI | 専用 hooks 内の `useState` |
| 地図ドメインのみ | `components/Map/hooks/*` |
| サーバー同期データ | hooks 内で `useEffect` + service 呼び出し（キャッシュライブラリなし） |

### 認可の実装

- ルートガード（`ProtectedRoute`）は**なし**
- ピン追加: `App.tsx` の `AddPinButton` で `user` 未設定時に `alert` + `/login` へ遷移
- ピン編集: `useEditPinForm` / `InfoWindowContent` で `user.id === data.user_id` をクライアント側チェック

---

## 6. ルーティング

### 定義場所

`src/router/AppRouter.tsx`（`BrowserRouter` は `App.tsx`）

### ページ一覧

| パス | コンポーネント | 説明 |
|------|----------------|------|
| `/` | `MyGoogleMap` | 地図トップ。`search` props でヘッダー検索と連動 |
| `/login` | `LoginPage` | ログイン |
| `/signup` | `SignUpPage` | ユーザー登録 |
| `/user` | `UserPage` | ログイン後のユーザー情報表示 |
| `/add-pin` | `AddPinPage` | 自販機ピン新規登録 |
| `/edit-pin/:pinId` | `EditPinPage` | ピン編集（動的パラメータ） |

```14:24:Vending_Machine_FE/src/router/AppRouter.tsx
const AppRouter = ({ search }: AppRouterProps) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/add-pin" element={<AddPinPage />} />
      <Route path="/edit-pin/:pinId" element={<EditPinPage />} />
      <Route path="/" element={<MyGoogleMap search={search} />} />
    </Routes>
  )
}
```

### レイアウト

- ヘッダー（タイトル・検索・ユーザーメニュー・ピン追加）は全ルート共通で `App.tsx` の `MainApp` に固定
- 地図以外のページも同一ヘッダー下にコンテンツが表示される

### ナビゲーション例

- ログイン成功 → `/user`（`useLogin.ts`）
- ピン追加成功 → `/`（`useAddPinForm.ts`）
- 編集ボタン → `/edit-pin/${pin_id}`（`InfoWindowContent.tsx`）

---

## 7. スタイリング

### 手法の併用

| 手法 | 使用箇所 |
|------|----------|
| **Chakra UI** | ページレイアウト、フォーム、Drawer、Menu、Spinner 等 |
| **グローバル CSS** | `index.css`（ベース）、`App.css`（`.header` 等） |
| **インライン `style`** | 一部ボタン・タイトルクリック領域（`App.tsx`） |
| **Chakra `sx` prop** | `UserMenu` の MenuItem 色 |

### CSS Modules / Tailwind

- **未使用**

### テーマ設定

- Chakra のカスタム `theme` 拡張は**未設定**（デフォルト `ChakraProvider` のみ）
- `index.css` に `prefers-color-scheme` による light/dark のベース色定義あり（Chakra テーマとは独立）

### 地図のスタイル

```14:17:Vending_Machine_FE/src/components/ui/MapDisplay/MapDisplay.tsx
const containerStyle = {
  width: '100vw',
  height: '100vh',
}
```

Google Map の `options` で各種コントロールを無効化（`MapDisplay.tsx`）。

### 注意事項

- Google Maps API キーが `App.tsx` にハードコードされている（環境変数化は要確認）
- `index.css` と `App.css` の `.header` 定義が競合する可能性あり（要確認）

---

## 8. API通信

### ベース URL

```1:2:Vending_Machine_FE/src/services/config.ts
export const API_BASE_URL = 'http://localhost:3001'
export const API_URL = `${API_BASE_URL}/api`
```

開発時、Vite プロキシで `/api` → `http://localhost:3001`（`vite.config.ts`）。  
ただしサービス層は `API_URL`（フル URL）を直接指定しているため、**プロキシは現状ほぼ未活用**の可能性あり。※推定

### 通信パターン

- **ライブラリ:** ネイティブ `fetch` のみ
- **認証ヘッダー:** 未実装（`token` を保存・送信していない）
- **Content-Type:** `application/json`（POST/PUT）
- **エラーハンドリング:** サービスごとに不統一
  - `authService`: `{ success, error }` を返却
  - `pinService` / `addPinService`: `!response.ok` で `throw new Error(...)`
  - UI 層: `console.error`、`alert`、Chakra のエラーテキスト

### フロントエンドが呼び出すエンドポイント一覧

ベース: `http://localhost:3001/api`（バックエンド `app.ts` で `/api` マウント）

#### 認証

| メソッド | パス | サービス | 備考 |
|----------|------|----------|------|
| POST | `/users` | `authService.signUp` | サインアップ |
| POST | `/login` | `authService.login` | ログイン |

#### 地図ピン（取得）

| メソッド | パス | サービス | 備考 |
|----------|------|----------|------|
| GET | `/map_pins` | `pinService.fetchAllMapPins` | 初期読み込み |
| GET | `/map_pins/search?query=` | `pinService.searchMapPins` | サジェスト検索 |
| GET | `/map_pins?ne_lat=&ne_lng=&sw_lat=&sw_lng=` | `pinService.fetchPinsInBounds` | 地図 idle 時（500ms debounce） |

#### 地図ピン・マスタ（登録）

| メソッド | パス | サービス |
|----------|------|----------|
| POST | `/map_pins` | `addPinService.createPin` |
| POST | `/categories` | `createCategory` |
| POST | `/manufacturers` | `createManufacturer` |
| POST | `/price_ranges` | `createPriceRange` |
| POST | `/products` | `createProduct` |
| POST | `/machine_descriptions` | `createMachineDescription` |
| POST | `/vending_machines` | `createVendingMachine` |

登録フローは `useAddPin` が上記を**直列で 7 回**呼び出す。

#### 詳細・更新

| メソッド | パス | サービス | 備考 |
|----------|------|----------|------|
| GET | `/vending_machines/by_pin/:pinId` | `pinDetailService.getPinDetail` | InfoWindow・編集初期化 |
| PUT | `/pins/:pinId` | `updatePin` | **バックエンドに PUT ルート未登録**（要確認） |
| PUT | `/machine_descriptions/:id` | `updateMachineDescription` | 同上 |
| PUT | `/products/:id` | `updateProduct` | 同上 |
| PUT | `/price_ranges/:id` | `updatePriceRange` | 同上 |
| PUT | `/manufacturers/:id` | `updateManufacturer` | 同上 |
| PUT | `/vending_machines/:id` | `updateVendingMachine` | 同上 |

バックエンド `Vending_Machine_BE/app.ts` には PUT 系 API のマウントがなく、編集機能は API 未実装の可能性が高い。

#### フロント未使用（バックエンドに存在）

| メソッド | パス | 備考 |
|----------|------|------|
| POST | `/send-verification` | メール認証（EmailVerification / Resend） |
| POST | `/verify-code` | 同上 |

### 外部 API

- **Google Maps JavaScript API**（`LoadScript`）
- **Geocoding**（`logic/geocoding/geocodingService.ts` の `window.google.maps.Geocoder`）

### デバウンス

- 地図移動後のピン取得: 500ms（`useMapIdle` + `useDebounce`）
- 検索サジェスト: 300ms（`useMapSuggestions` 内の `setTimeout`）

---

## 9. 型定義

### 配置方針

- 共有型は `src/types/` にドメイン別ファイル
- API レスポンス固有の型はサービス内に定義される場合あり（例: `PinDetailData` in `pinDetailService.ts`）

### 主要な型

#### `types/pin.ts` — 地図表示用

```1:20:Vending_Machine_FE/src/types/pin.ts
export type MapPin = {
  id: number
  lat: number
  lng: number
  address: string
  machine_name?: string
}

export type ApiPin = {
  id: number
  latitude: string
  longitude: string
  address: string
  machine_name?: string
}

export type MapBounds = {
  ne: { lat: number; lng: number }
  sw: { lat: number; lng: number }
}
```

- API は緯度経度を **string**、フロント表示は **number**（`convertApiPin.ts` で `parseFloat`）

#### `types/auth.ts` — 認証

- `SignUpFormData` / `SignUpRequest` — フォームと API のフィールド名変換（`userId` → `user_id`）
- `LoginFormData` / `LoginRequest`
- `LoginResponse` — `user?: any`（要確認: 具体型未定義）

#### `types/addPin.ts` — ピン登録フォーム

- `AddPinFormData` — UI フォーム（`priceRange` 等キャメルケース）
- `PinData` / `VendingMachineData` — POST 用スネークケース相当の API 形状
- `ApiResponse` — 作成 API の `{ id, message? }`

#### `types/google-maps.d.ts`

- `window.google` と Geocoder 周辺の最小限の ambient 宣言

### TypeScript コンパイラ設定（抜粋）

`tsconfig.app.json`: `strict: true`, `noUnusedLocals`, `noUnusedParameters`, `jsx: react-jsx`, `verbatimModuleSyntax: true`

---

## 10. 開発ルール

### コーディング規約（コード・設定から読み取れるもの）

| 項目 | ルール |
|------|--------|
| 言語 | TypeScript（`.ts` / `.tsx`） |
| 引用符 | Prettier: `singleQuote: true` |
| セミコロン | `semi: false` |
| 行幅 | `printWidth: 100` |
| JSX | React 17+ の自動 JSX ランタイム（`react-in-jsx-scope: off`） |
| import 型 | `import type` 使用（`verbatimModuleSyntax`） |
| Hooks | `eslint-plugin-react-hooks` recommended |

### コメント方針

- ビジネスロジック・意図説明に日本語コメントが散見される（例: debounce の目的、`useAddPin` の登録ステップ）
- 自明な処理への過剰コメントは少ない

### フォルダルール（※推定: 慣習として整理）

1. 新規画面 → `pages/` + 必要なら `hooks/` + `router/AppRouter.tsx` に Route 追加  
2. 再利用 UI → `components/ui/<ComponentName>/`  
3. HTTP → `services/` に集約し、型は `types/` またはサービス横  
4. 純粋関数・フレームワーク非依存 → `logic/`  
5. 地図専用 → `components/Map/` 配下（hooks / logic 含む）  
6. UI カタログ → 同名 `*.stories.ts`

### npm スクリプト

| コマンド | 用途 |
|----------|------|
| `npm run dev` | Vite 開発サーバー |
| `npm run build` | `tsc -b && vite build` |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |
| `npm run test` | Vitest（ウォッチ） |
| `npm run storybook` | Storybook 起動 |

### テスト

- 現状確認できたテスト: `src/logic/centerSpot/index.spec.ts`（`useCurrentLocation`）
- カバレッジ設定は `vitest.config.ts` に定義

### 既知の技術的負債・要確認事項

| 項目 | 内容 |
|------|------|
| 認証トークン | ログインで `token` 取得するが未保存・未送信 |
| UserProvider 二重化 | `main.tsx` と `App.tsx` |
| 編集 API | フロント PUT 呼び出し vs バックエンド未実装の不整合 |
| API キー | Google Maps キーのハードコード |
| Context 型 | `createContext<any>` |
| モックフォールバック | `useMapDisplayPins` が API 結果空時に `mockMapPins` を表示 |
| メール認証 API | バックエンドにあるがフロント未連携 |

---

## 付録: 画面とコンポーネント対応

| 画面 | 主な hooks | 主な UI コンポーネント |
|------|------------|------------------------|
| 地図 `/` | `useMap*` 群 | `MapDisplay`, `SuggestList`, `InfoWindow` |
| ログイン | `useLogin` | `LoginForm` |
| サインアップ | `useSignUp` | `SignUpForm` |
| ユーザー | — | Chakra `Box` / `Text` のみ |
| ピン追加 | `useAddPinForm` → `useAddPin` | `Search`, `MapSelector`, `AddPinForm`, `AddPinButtons` |
| ピン編集 | `useEditPinForm` | 同上（ボタン文言のみ差替） |

---

*本ドキュメントは `Vending_Machine_FE/src` および関連バックエンド `Vending_Machine_BE` の静的解析に基づく。運用環境の URL・シークレット管理・本番デプロイ手順は要確認。*
