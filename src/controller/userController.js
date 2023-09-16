module.exports=({userService})=>{
    return{
        createUser:(req,res,next)=>{
            return userService.createUserService(req.body).then(data=>{
                res.status(data.status).send(data);
                next();
            }).catch(error=>{
                res.status(error.status).send(error);
                next();
            });
        },
        updateUser:(req,res,next)=>{
            return userService.updateUserService(req.body).then(data=>{
                res.status(data.status).send(data);
                next();
            }).catch(error=>{
                res.status(error.status).send(error);
                next();
            });
        },
        getUserById:(req,res,next)=>{
            return userService.getUserByUserId({userId:req.params.id}).then(data=>{
                res.status(data.status).send(data);
                next();
            }).catch(error=>{
                res.status(error.status).send(error);
                next();
            });
        },
        
    }
}