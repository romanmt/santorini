var cluster = require('cluster')
  , app = require('./app');

cluster('./app')
  .use(cluster.logger('logs'))
  .use(cluster.stats())
  .use(cluster.pidfiles('pids'))
  .use(cluster.cli())
  .use(cluster.repl(8888))
  .use(cluster.reload('lib', 'app'))
  .listen(3000);
console.log('Server started on %d. Repl listening on %d', 3000, 8888);
