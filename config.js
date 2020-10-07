module.exports={
    redis:{
        host: process.env.REDIS_HOST || "Your host",
        port: process.env.REDIS_PORT || 'Your port',
        password: process.env.REDIS_PASSWORD || "Your password",
    },
}