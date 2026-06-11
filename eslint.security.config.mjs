import js from "@eslint/js";
import globals from "globals";
import security from "eslint-plugin-security";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "coverage/**",
      "next-env.d.ts"
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    plugins: {
      security
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      ...security.configs.recommended.rules
    }
  },
  {
    // Test files read project source files via hardcoded join() paths — no
    // user input reaches readFileSync, so the path-traversal rule is a
    // false positive here.
    files: ["tests/**/*.{ts,tsx}"],
    rules: {
      "security/detect-non-literal-fs-filename": "off"
    }
  }
);
