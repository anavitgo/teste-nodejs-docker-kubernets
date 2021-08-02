const routes = async (fastify, options) =>{
    fastify.get('/', async (request, reply) => {
        await reply.status(200).send({ hello: 'worldinho aninha uuuuuuuuuuuuuuuuuuuuuuuuu' });
    })
    
    fastify.post('/postName', async(request, reply) =>{
        let name = request.body.name;
        await reply.status(200).send({hello: name});
    })

    fastify.get('/health', async(request, reply) =>{
        await reply.status(200).send({health: `everything's okay`});
    })

    fastify.get('/pod', async(request, reply) =>{
        await reply.status(200).send({pod: process.env.POD_NAME});
    })
}


module.exports = routes;