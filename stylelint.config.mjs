/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard"],
  plugins: [
    "stylelint-declaration-strict-value",
    "stylelint-value-no-unknown-custom-properties",
  ],
  rules: {
    // === Token guardrails ===
    // Ban raw hex colors in consumer files. globals.css is exempted
    // via the `overrides` block below since that's where tokens live.
    "color-no-hex": true,
    "color-named": "never",

    // var(--foo) must refer to a property declared somewhere we know.
    "csstools/value-no-unknown-custom-properties": [
      true,
      { importFrom: ["app/globals.css"] },
    ],

    // Token-able properties must use a var(--…) reference, calc/clamp,
    // or an allowlisted keyword. Do NOT add transform / opacity / flex /
    // grid here — those are legitimate one-offs that should NOT be tokens.
    // The plugin's defaults: ignoreVariables=true (var() always passes),
    // ignoreFunctions=true (calc/clamp/rgba/etc. pass), plus an explicit
    // ignoreValues allowlist for universal keywords.
    "scale-unlimited/declaration-strict-value": [
      [
        "/color$/",
        "fill",
        "stroke",
        "font-size",
        "line-height",
        "border-radius",
      ],
      {
        ignoreValues: [
          "0",
          "100%",
          "auto",
          "inherit",
          "currentColor",
          "transparent",
          "none",
          "unset",
          "initial",
        ],
      },
    ],

    // === Disabled stylistic rules from stylelint-config-standard ===
    // These would force broad CSS rewrites unrelated to token enforcement.
    "selector-class-pattern": null,            // CSS modules generate hashed classes
    "no-descending-specificity": null,         // common false-positives in modules
    "alpha-value-notation": null,              // allow 0.5 and 50%
    "color-function-notation": null,           // allow rgba(…) over modern rgb(… / …)
    "color-function-alias-notation": null,     // allow rgba alias
    "media-feature-range-notation": null,      // allow `@media (max-width: 860px)`
    "declaration-block-no-redundant-longhand-properties": null,
    "comment-empty-line-before": null,         // section comments and tight blocks both OK
    "custom-property-empty-line-before": null, // allow grouped blocks between blank lines
  },
  overrides: [
    {
      // globals.css is the design-token definition file — it MUST contain
      // hex values and literal numbers. Disable the token-enforcement
      // rules here; everything else from the base config still applies.
      files: ["app/globals.css"],
      rules: {
        "color-no-hex": null,
        "color-named": null,
        "scale-unlimited/declaration-strict-value": null,
      },
    },
  ],
  ignoreFiles: [".next/**", "node_modules/**", "out/**"],
};
