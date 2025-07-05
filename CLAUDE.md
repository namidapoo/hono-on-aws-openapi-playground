# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Hono フレームワークを AWS 上で OpenAPI と組み合わせて使用するための実験的なプロジェクトです。AWS CDK を使用してインフラストラクチャをコードとして管理します。

## 開発コマンド

### ビルドとテスト

```bash
npm run build     # TypeScriptをJavaScriptにコンパイル
npm run watch     # ファイル変更を監視して自動コンパイル
npm run test      # Jestユニットテストを実行
```

### CDK コマンド

```bash
npx cdk deploy    # スタックをデフォルトのAWSアカウント/リージョンにデプロイ
npx cdk diff      # デプロイ済みスタックと現在の状態を比較
npx cdk synth     # CloudFormationテンプレートを生成
npx cdk destroy   # スタックを削除
```

### 単一テストの実行

```bash
npm test -- test/hono-on-aws-openapi-playground.test.ts  # 特定のテストファイルを実行
npm test -- --testNamePattern="テスト名"                   # 特定のテストケースを実行
```

## アーキテクチャ

### プロジェクト構成

- **bin/**: CDK アプリケーションのエントリーポイント
  - `hono-on-aws-openapi-playground.ts`: CDK アプリケーションの起動ファイル
- **lib/**: CDK スタック定義
  - `hono-on-aws-openapi-playground-stack.ts`: メインの CDK スタック定義（現在は空の実装）
- **test/**: テストコード

### TypeScript 設定

- ターゲット: ES2022
- モジュール: NodeNext
- strict モード有効
- インラインソースマップ有効

### CDK 設定

- AWS CDK v2 を使用
- TypeScript での開発に対応
- 多数のベストプラクティス設定が有効化済み（cdk.json の context 参照）
