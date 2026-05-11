import nextPlugin from "@next/eslint-plugin-next";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

const projectIgnores = [
  ".next/**",
  "node_modules/**",
  "coverage/**",
  "next-env.d.ts"
];

export default tseslint.config(
  {
    ignores: projectIgnores
  },
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        project: "./tsconfig.typecheck.json"
      }
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      complexity: ["error", 10],
      "max-depth": ["error", 4],
      // TODO: lower max back to 300 once page.tsx files are split into sections
      "max-lines": [
        "error",
        {
          max: 700,
          skipBlankLines: true,
          skipComments: true
        }
      ],
      "max-lines-per-function": [
        "error",
        {
          max: 80,
          skipBlankLines: true,
          skipComments: true
        }
      ]
    }
  },
  {
    files: ["app/_og/**/*.{ts,tsx}", "app/**/opengraph-image.tsx"],
    rules: {
      "@next/next/no-img-element": "off"
    }
  }
);
