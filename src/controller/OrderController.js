module.exports=({orderService})=>{
    return{
        getOrderByUserId:(req,res,next)=>{
            return orderService.getOrderByUserId({userId:req.params.id}).then(data=>{
                res.status(data.status).send(data);
                next();
            }).catch(error=>{
                res.status(error.status).send(error);
                next();
            });
        }
        
    }
}