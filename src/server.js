const fastify = require('fastify')({logger: true});
fastify.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
  try {
    var json = JSON.parse(body)
    done(null, json)
  } catch (err) {
    err.statusCode = 400
    done(err, undefined)
  }
})

const routes = require('./routes');

fastify.register(routes);
  
const start = async () => {
  try {
    await fastify.listen(8080, "0.0.0.0")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()