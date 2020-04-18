module.exports = {
    host:process.env.HOST || 'localhost',
    port:process.env.PORT ||(process.env.NODE_ENV === 'production'?8080:8000),
    apiHost:process.env.APIHOST || '127.0.0.1',
    apiPort:process.env.APIPORT || '3030',
    dbHost:"127.0.0.1",
    dbPort:"27017",
    appName:'酷友TV监控平台'
};