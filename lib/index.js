const app = require('./express');
const { port, env } = require('./vars');

exports.initApp = () => {
  return app.listen(port, () => console.info(`server started on port ${port} (${env})`));
};
