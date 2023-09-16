module.exports=({https,http,app,logger})=>{
    return{
        start:(container)=>{
            try{
                if(process.env.ENV==="local")
                {
                    const server = http.createServer(app)
                    server.listen(process.env.PORT,()=>{
                    logger.info(`Application started at port http ${process.env.PORT}`);
                })
                    server.on('close',()=>{
                    logger.info(`Server stopped`);
                    container.dispose();
                })
                }
                else{
                    const server = https.createServer(app)
                    server.listen(process.env.PORT,()=>{
                    logger.info(`Application started at port https ${process.env.PORT}`);
                })
                    server.on('close',()=>{
                    logger.info(`Server stopped`);
                    container.dispose();
                })
                }
                
            }
            catch(error){
                logger.error(`Error Occurred while starting the server ${error}`);
            }
           
        }
    }
}