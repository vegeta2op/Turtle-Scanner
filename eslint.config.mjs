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
  {
    ignores: [
      "src/generated/**",
    ],
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": ["error", { ignoreRestArgs: true }],
      "@typescript-eslint/ban-ts-comment": ["warn", { "ts-ignore": false, "minimumDescriptionLength": 3 }],
    },
    files: ["src/lib/**/*.ts"],
  },
];

export default eslintConfig;
