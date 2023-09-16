let env = require('dotenv');
if(process.env.ENV_PATH)
{
    env.config({
        path:__dirname+process.env.ENV_PATH,
    });
    const appContainer = require("./config/container").init();
    require("./config/DbContainer").init(appContainer).then(data =>{
    if(data){
       
        appContainer.resolve("apiRoute").preHandler();
      
        appContainer.resolve("apiRoute").pathDefination(appContainer);
     
        appContainer.resolve("apiRoute").postHandler();
     
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