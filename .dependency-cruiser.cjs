// Layers under app/:
//   lib/        pure data and utilities; imports only lib/
//   components/ shared UI; imports lib/, components/, styles/
//   _og/        Open Graph card primitives; imports lib/, _og/
//   styles/     shared CSS modules
//   everything else is a route: it imports the shared layers and files in
//   its own folder, never another route's files.
const sharedLayers = "^app/(lib|components|_og|styles)/";

/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [
    {
      name: "no-circular",
      severity: "error",
      from: {},
      to: {
        circular: true
      }
    },
    {
      name: "lib-imports-only-lib",
      comment: "app/lib holds pure data and utilities; UI and routes depend on it, never the reverse.",
      severity: "error",
      from: { path: "^app/lib/" },
      to: { path: "^app/", pathNot: "^app/lib/" }
    },
    {
      name: "components-import-only-shared",
      comment: "Shared components must not depend on a route's files.",
      severity: "error",
      from: { path: "^app/components/" },
      to: { path: "^app/", pathNot: "^app/(lib|components|styles)/" }
    },
    {
      name: "og-imports-only-shared",
      comment: "Open Graph primitives are shared by every route's opengraph-image.",
      severity: "error",
      from: { path: "^app/_og/" },
      to: { path: "^app/", pathNot: "^app/(lib|_og)/" }
    },
    {
      name: "no-cross-route-imports",
      comment: "A route imports only shared layers and its own folder. Move shared code to app/components or app/lib.",
      severity: "error",
      from: { path: "^app/(.+)/[^/]+$", pathNot: sharedLayers },
      to: { path: "^app/", pathNot: [sharedLayers, "^app/$1/[^/]+$"] }
    },
    {
      name: "no-root-route-to-nested-route",
      comment: "Root route files (app/page.tsx, app/layout.tsx, ...) must not reach into another route's folder.",
      severity: "error",
      from: { path: "^app/[^/]+$" },
      to: { path: "^app/.+/", pathNot: sharedLayers }
    }
  ],
  options: {
    tsConfig: {
      fileName: "tsconfig.json"
    },
    doNotFollow: {
      path: "node_modules"
    },
    includeOnly: "^app/",
    reporterOptions: {
      dot: {
        collapsePattern: "node_modules/[^/]+"
      }
    }
  }
};
