import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"
import jsxA11y from "eslint-plugin-jsx-a11y"
import eslintPluginImport from "eslint-plugin-import"
import unusedImports from "eslint-plugin-unused-imports"
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript"

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
      import: eslintPluginImport,
      "unused-imports": unusedImports,
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      ...eslintPluginImport.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "no-console": "warn",
      "no-debugger": "warn",
      "no-unused-vars": "warn",
      "import/order": ["warn", { groups: ["builtin", "external", "internal"] }],
      "import/no-unresolved": "error",
      "import/no-extraneous-dependencies": "error",
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": ["warn", { vars: "all", varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {},
        node: {
          extensions: [".js", ".ts", ".tsx", ".css", ".css.ts"],
        },
      },
    },
  }
)
