module.exports=({constant,logger})=>{
    return{
        dummyService:(req)=>{
            let response={
                payload:{},
                message:"Success",
                status:200,
                error:{}
            }
            return new Promise((resolve,reject)=>{
                console.log("inside servide",response)
                resolve(response);
            })
            
        }
    }
}