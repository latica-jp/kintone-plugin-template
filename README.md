# kintone プラグイン開発テンプレート

kintone 公式から配布されている create-plugin パッケージは node 環境を使用したモダンな kintone プラグイン開発環境を提供しています。

このテンプレートは create-plugin パッケージで作成したプロジェクトに以下の改良を加えたものです。

- Webpack + Babel による ES6 対応
- ESLint/Prettier による構文チェックとフォーマット

## 使いかた

```
git clone https://github.com/latica-jp/kintone-plugin-template.git sample
cd sample
yarn
```

- `yarn` 実行時にプラグインの秘密鍵ファイルが作成され、以降、パッケージングの際はこの秘密鍵ファイルが使用されます。
- 秘密鍵ファイルを破棄した場合は、`yarn prepare` を実行して再生成してください。

`.env` ファイルを作成し、kintone プラグインのアップロード情報を入力します。

```
KINTONE_DOMAIN=domain.cybozu.com
KINTONE_USERNAME=username
KINTONE_PASSWORD=password
```

プラグインのビルド（コードのプリコンパイル、プラグインのパッケージング）は下記のコマンドを入力します。

```
# 開発ビルド
yarn build

# リリースビルド
yarn release
```

- 開発ビルドは Source Map を含みます（inline-source-map）。
- リリースビルドは Source Map を含まず、uglify されたコードが出力されます。

プラグインのアップロードは下記のコマンドを入力します。

```
yarn upload
```

下記のコマンドを入力すると、ソースコードおよびパッケージングされたプラグイン変更を監視し、検知すると自動的に開発ビルドとプラグインのパッケージング、アップロードを行います。開発時に便利です。

```
yarn start
```

## このプラグインの作成過程

[プラグインの作成過程](./doc/process.md)
