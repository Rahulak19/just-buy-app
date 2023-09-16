module.exports=({constant,logger,userRepository})=>{
    return{
        /* Function to Create User */
        createUserService:(req)=>{
            let response={
                message:constant.SUCCESS_MSG,
                data:{},
                status:constant.SUCCESS,
                error:{}
            }
            return new Promise(async(resolve,reject)=>{
               try{
                logger.info("UserService ::: createUserService :: started");
                let createUser = await userRepository.saveUser(req);
                if(createUser)
                {
                    response.data.message=constant.USER_CREATED_MSG;
                   
                }
                else{
                    response.error.ErrorCode=constant.ERROR_CODE_2004,
                    response.error.ErrorMessage=constant.USER_NOT_CREATED_MSG,
                    response.message=constant.ERROR_MSG;
                    response.status=constant.NOT_FOUND;
                }
                resolve(response);
               }
               catch(error){
                logger.info(`UserService ::: createUserService :: Error ${error}`);
                response.error.ErrorCode=constant.ERROR_CODE_2005,
                response.error.ErrorMessage=constant.INTERNAL_SERVER_ERROR_MSG,
                response.message=constant.ERROR_MSG;
                response.status=constant.INTERNAL_SERVER_ERROR;
                reject(response)
               }
            })
            
        },

         /* Function to Update User */
        updateUserService:(req)=>{
            let response={
                message:constant.SUCCESS_MSG,
                data:{},
                status:constant.SUCCESS,
                error:{}
            }
            return new Promise(async(resolve,reject)=>{
               try{
                logger.info("UserService ::: updateUserService :: started");
                let userId = req.id;
                let updateUser = await userRepository.updateUser(req,userId);
                if(updateUser[0]>0)
                {
                    response.data.message=constant.USER_UPDATED_MSG;
                   
                }
                else{
                    response.error.ErrorCode=constant.ERROR_CODE_2005,
                    response.error.ErrorMessage=constant.USER_NOT_UPDATED_MSG,
                    response.message=constant.ERROR_MSG;
                    response.status=constant.NOT_FOUND;
                }
                resolve(response);
               }
               catch(error){
                logger.info(`UserService ::: updateUserService :: Error ${error}`);
                response.error.ErrorCode=constant.ERROR_CODE_2005,
                response.error.ErrorMessage=constant.INTERNAL_SERVER_ERROR_MSG,
                response.message=constant.ERROR_MSG;
                response.status=constant.INTERNAL_SERVER_ERROR;
                reject(response)
               }
            })

        },

          /* Function to get User by UserId */
        getUserByUserId:(req)=>{
            let response={
                message:constant.SUCCESS_MSG,
                data:{},
                status:constant.SUCCESS,
                error:{}
            }
            return new Promise(async(resolve,reject)=>{
               try{
                logger.info("UserService ::: getUserByUserId :: started");
                let userId = req.userId;
                let user = await userRepository.getUserByUserId(userId);
                if(user!==null)
                {
                   
                    response.data.user = user;
                   
                }
                else{
                    response.error.ErrorCode=constant.ERROR_CODE_2005,
                    response.error.ErrorMessage=constant.NO_DATA_ERROR,
                    response.message=constant.ERROR_MSG;
                    response.status=constant.NOT_FOUND;
                }
                resolve(response);
               }
               catch(error){
                logger.info(`UserService ::: updateUserService :: Error ${error}`);
                response.error.ErrorCode=constant.ERROR_CODE_2005,
                response.error.ErrorMessage=constant.INTERNAL_SERVER_ERROR_MSG,
                response.message=constant.ERROR_MSG;
                response.status=constant.INTERNAL_SERVER_ERROR;
                reject(response)
               }
            })

        },
    }
}