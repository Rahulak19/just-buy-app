module.exports=({constant,logger,productCategoryRepository})=>{
    return{
        /* Method to Fetch all Category */
        getProductCategory:(req)=>{
            let response={
                message:constant.SUCCESS_MSG,
                data:{},
                status:constant.SUCCESS,
                error:{}
            }
            return new Promise(async(resolve,reject)=>{
               try{
                logger.info("ProductCategoryService ::: getProductCategory :: started");
                let categories = await productCategoryRepository.getAllProductCategory();
                if(categories.length>0)
                {
                    response.data.category=categories;
                   
                }
                else{
                    response.error.ErrorCode=constant.ERROR_CODE_2002,
                    response.error.ErrorMessage=constant.NO_DATA_ERROR,
                    response.message=constant.ERROR_MSG;
                    response.status=constant.NOT_FOUND;
                }
                resolve(response);
               }
               catch(error){
                logger.info(`ProductCategoryService ::: getProductCategory :: Error ${error}`);
                response.error.ErrorCode=constant.ERROR_CODE_2002,
                response.error.ErrorMessage=constant.INTERNAL_SERVER_ERROR_MSG,
                response.message=constant.ERROR_MSG;
                response.status=constant.INTERNAL_SERVER_ERROR;
                reject(response)
               }
            })
            
        },
    }
}