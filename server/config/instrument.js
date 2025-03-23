// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
// const Sentry = require("@sentry/node");
import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://8582c59ca116b79bb2b4298280b761f5@o4508739686498304.ingest.us.sentry.io/4509015825186816",
  integrations: [Sentry.mongooseIntegration()]
});

  