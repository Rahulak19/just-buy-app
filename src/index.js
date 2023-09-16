let env = require('dotenv');
if(process.env.ENV_PATH)
{
    env.config({
        path:__dirname+process.env.ENV_PATH,
    });
    const appContainer = require("./config/container").init();
    require("./config/DbContainer").init(appContainer).then(data =>{
    if(data){
        console.log("before pre")
        appContainer.resolve("apiRoute").preHandler();
        console.log("before path")
        appContainer.resolve("apiRoute").pathDefination(appContainer);
        console.log("before pos")
        appContainer.resolve("apiRoute").postHandler();
        console.log("before server")
        appContainer.resolve("server").start(appContainer);
    }
    else{
        process.exit(0);
    }
})
}
else{
    console.log("Unable to load environment details");
    process.exit(0);
}