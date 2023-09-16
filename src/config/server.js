module.exports=({https,http,app,logger})=>{
    return{
        start:(container)=>{
            try{
                if(process.env.ENV==='local')
                {
                    console.log("in")
                    const server = http.createServer(app)
                    console.log("in1")
                    const host = '0.0.0.0'; 
                    server.listen(process.env.PORT,host,()=>{
                    logger.info(`Application started at port http ${process.env.PORT}`);
                })
                    server.on('close',()=>{
                    logger.info(`Server stopped`);
                    container.dispose();
                })
                }
                else{
                    console.log("in")
                    const server = https.createServer(app)
                    console.log("in1")
                    const host = '0.0.0.0'; 
                    server.listen(process.env.PORT,host,()=>{
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