import dotenv from "dotenv";
// biome-ignore lint/style/useNodejsImportProtocol: Bunでnode:pathが動作しないため
import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		coverage: {
			reporter: ["text", "json", "html"],
		},
		// テスト環境用の環境変数を設定
		env: {
			...dotenv.config({ path: ".env.test" }).parsed,
			...dotenv.config({ path: ".env" }).parsed,
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./"),
		},
	},
});
