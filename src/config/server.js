module.exports=({https,http,app,logger})=>{
    return{
        start:(container)=>{
            try{
                const server = http.createServer(app)
                server.listen(process.env.PORT,()=>{
                    logger.info(`Application started at port ${process.env.PORT}`);
                })
                server.on('close',()=>{
                    logger.info(`Server stopped`);
                    container.dispose();
                })
            }
            catch(error){
                logger.error(`Error Occurred while starting the server ${error}`);
            }
           
        }
    }
}