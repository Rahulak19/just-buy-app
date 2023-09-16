module.exports=({constant,logger,orderRepository})=>{
    return{
       

          /* Function to get Order by UserId */
          getOrderByUserId:(req)=>{
            let response={
                message:constant.SUCCESS_MSG,
                data:{},
                status:constant.SUCCESS,
                error:{}
            }
            return new Promise(async(resolve,reject)=>{
               try{
                logger.info("OrderService ::: getOrderByUserId :: started");
                let userId = req.userId;
                let orders = await orderRepository.getOrdersByUserId(userId);
                if(orders.length>0)
                {
                   
                    response.data.orders = orders;
                   
                }
                else{
                    response.error.ErrorCode=constant.ERROR_CODE_2006,
                    response.error.ErrorMessage=constant.NO_ORDERS_AVAILABLE,
                    response.message=constant.ERROR_MSG;
                    response.status=constant.NOT_FOUND;
                }
                resolve(response);
               }
               catch(error){
                logger.info(`UserService ::: updateUserService :: Error ${error}`);
                response.error.ErrorCode=constant.ERROR_CODE_2006,
                response.error.ErrorMessage=constant.INTERNAL_SERVER_ERROR_MSG,
                response.message=constant.ERROR_MSG;
                response.status=constant.INTERNAL_SERVER_ERROR;
                reject(response)
               }
            })

        },
    }
}