module.exports=({user,logger})=>{
    return{
        saveUser:(userObject)=>{
                logger.info("UserRepository ::: saveUser ::: started");
                return user.create(userObject)
                .then(data=>{
                    logger.info("UserRepository ::: saveUser ::: ended");
                    return data;
                })
                .catch(error=>{
                    logger.info(`Error Occurred in UserRepository ::: saveUser ::: ${error}`);
                    throw new Error(error);
                })
        },
        updateUser:(userObject,userId)=>{
            logger.info("UserRepository ::: updateUser ::: started");
            return user.update({...userObject},{
                where:{
                    id: userId
                }
            })
            .then(data=>{
                logger.info("UserRepository ::: updateUser ::: ended");
                return data;
            })
            .catch(error=>{
                logger.info(`Error Occurred in UserRepository ::: updateUser ::: ${error}`);
                throw new Error(error);
            })
    },
    getUserByUserId:(userId)=>{
        logger.info("UserRepository ::: getUserByUserId ::: started");
        return user.findOne({
            where:{
                id:userId,
                status:1
            }
        })
        .then(data=>{
            logger.info("UserRepository ::: getUserByUserId ::: ended");
            return data;
        })
        .catch(error=>{
            logger.info(`Error Occurred in UserRepository ::: getUserByUserId ::: ${error}`);
            throw new Error(error);
        })
}

    }
}