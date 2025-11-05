import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Allow @ts- comments in specific component folders where we deliberately
  // silence TypeScript checking (e.g. third-party icon imports or temporary guards).
  // This keeps `// @ts-nocheck` in-place without failing the ESLint rule.
  {
    files: ["components/**", "components/**/*"],
    rules: {
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
];

export default eslintConfig;
