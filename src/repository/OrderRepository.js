module.exports=({orders,logger,user,product})=>{
    return{
    getOrdersByUserId:(userId)=>{
        logger.info("OrderRepository ::: getOrdersByUserId ::: started");
        return orders.findAll({
            include:[
                {
                    model:user,
                    required:true
                },
                {
                    model:product,
                    required:true
                }
            ],
            where:{
                user_id:userId,
            }
        })
        .then(data=>{
            logger.info("OrderRepository ::: getOrdersByUserId ::: ended");
            return data.map(obj=>obj.get({plain:true}));
        })
        .catch(error=>{
            logger.info(`Error Occurred in OrderRepository ::: getOrdersByUserId ::: ${error}`);
            throw new Error(error);
        })
}

    }
}