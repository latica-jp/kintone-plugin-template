# kintone プラグイン開発テンプレート

サイボウズ社から公式に配布されている [create-plugin](https://github.com/kintone/create-plugin) パッケージは node 環境を使用したモダンな kintone プラグイン開発環境を提供しています。

このテンプレートは同パッケージで作成したプロジェクトに以下の改良を加えたものです。

- Webpack + Babel による ES6 対応
- ESLint/Prettier による構文チェックとフォーマット
- 開発モード（ファイル修正の監視と自動アップロード）に Webpack ビルド処理を追加

## 環境の準備

- このリポジトリはテンプレートリポジトリですので、直接 `git clone` せずに Github 上で「Use this template」ボタンをクリックしてリポジトリを作成します。
  - https://help.github.com/ja/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
- 作成したリポジトリを `git clone` します。
- プロジェクトのルートで `yarn` を実行します。
  - 実行時にプラグインの秘密鍵ファイルが作成され、以降、パッケージングの際はこの秘密鍵ファイルが使用されます。
  - 秘密鍵ファイルを破棄した場合のみ、`yarn prepare` を実行して再生成してください。
- `.env.sample` をコピーして `.env` ファイルを作成し、プラグインのアップロード先となる kintone 環境の情報を入力します。

```
KINTONE_DOMAIN=domain.cybozu.com
KINTONE_USERNAME=username
KINTONE_PASSWORD=password
```

## 使いかた

プラグインのビルド（コードのトランスパイル、プラグインのパッケージング）は、下記のコマンドを入力します。

```
# 開発ビルド
yarn build

# リリースビルド
yarn release
```

- 開発ビルドは Source Map を含みます（inline-source-map）。
- リリースビルドは Source Map を含まず、uglify されたコードが出力されます。
- プラグインファイルは `dist` に出力されます。

`.env` に設定した kintone 環境へのプラグインのアップロードは、下記のコマンドを入力します。

```
yarn upload
```

下記のコマンドを入力すると、ソースコードおよびパッケージングされたプラグイン変更を監視し、検知すると自動的に開発ビルドとプラグインのパッケージング、アップロードを行います。開発時に便利です。

```
yarn start
```

## このプラグインの作成過程

[プラグインの作成過程](./doc/process.md)
