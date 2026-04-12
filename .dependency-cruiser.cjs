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
      name: "no-orphans",
      severity: "warn",
      from: {
        orphan: true,
        pathNot: [
          "^content/",
          "^app/"
        ]
      },
      to: {}
    },
    {
      name: "no-app-to-content-cross-imports",
      severity: "error",
      from: {
        path: "^components/"
      },
      to: {
        path: "^app/"
      }
    }
  ],
  options: {
    tsConfig: {
      fileName: "tsconfig.json"
    },
    doNotFollow: {
      path: "node_modules"
    },
    includeOnly: "^(app|components|lib)",
    reporterOptions: {
      dot: {
        collapsePattern: "node_modules/[^/]+"
      }
    }
  }
};
