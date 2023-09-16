module.exports=({testService,logger})=>{
    return{
        testService:(req,res,next)=>{
            return testService.dummyService(req).then(data=>{
                console.log(data);
                res.status(data.status).send(data);
                next();
            }).catch(error=>{
                res.status(error.status).send(error);
                next();
            });
        }
    }
}