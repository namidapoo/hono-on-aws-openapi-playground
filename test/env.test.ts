import { describe, expect, it } from "vitest";

describe("環境変数の設定確認", () => {
	it("環境変数が正しく読み込まれること", () => {
		const { SAMPLE_KEY } = process.env;
		expect(SAMPLE_KEY).toBe("sample-value");
	});
});
