// Layers under app/:
//   lib/        pure data and utilities; imports only lib/
//   components/ shared UI; imports lib/, components/, styles/
//   _og/        Open Graph card primitives; imports lib/, _og/
//   styles/     shared CSS modules
//   views/      page views shared by every locale's route; imports lib/,
//               components/, styles/, views/
//   everything else is a route: it imports the shared layers and files in
//   its own folder, never another route's files.
// Every route sits inside a per-locale route group, e.g. app/(en)/yii2/. The
// group segment is matched separately so `$1` below is the route folder alone.
const sharedLayers = "^app/(lib|components|_og|styles|views)/";
const routeGroup = "[(][a-z-]+[)]/";
// The feed route of a locale's blog; $1 is the locale (without parentheses, so
// it can be substituted back into a pattern safely).
const blogFeedRoute = "^app/[(]([a-z-]+)[)]/blog/feed[.]xml/route[.]ts$";

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
      name: "views-import-only-shared",
      comment: "Page views are shared by every locale's route; they must not depend on a route's files.",
      severity: "error",
      from: { path: "^app/views/" },
      to: { path: "^app/", pathNot: "^app/(lib|components|styles|views)/" }
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
      from: { path: `^app/${routeGroup}([^()]+)/[^/]+$`, pathNot: [sharedLayers, blogFeedRoute] },
      to: { path: "^app/", pathNot: [sharedLayers, `^app/${routeGroup}$1/[^/]+$`] }
    },
    {
      name: "blog-feed-reads-only-its-blog-content",
      comment: "A locale's RSS feed route takes the channel title and description from that locale's blog index content, and nothing else from routes.",
      severity: "error",
      from: { path: blogFeedRoute },
      to: { path: "^app/", pathNot: [sharedLayers, "^app/[(]$1[)]/blog/content[.]ts$"] }
    },
    {
      name: "no-root-route-to-nested-route",
      comment: "Root route files (app/(en)/page.tsx, app/(en)/layout.tsx, ...) must not reach into another route's folder.",
      severity: "error",
      from: { path: ["^app/[^/]+$", `^app/${routeGroup}[^/]+$`] },
      to: { path: "^app/.+/", pathNot: [sharedLayers, `^app/${routeGroup}[^/]+$`] }
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
