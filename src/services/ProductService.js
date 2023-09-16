module.exports=({constant,logger,productRepository})=>{
    return{
        /* Method to Fetch all product data */
        getAllProducts:(req)=>{
            let response={
                message:constant.SUCCESS_MSG,
                data:{},
                status:constant.SUCCESS,
                error:{}
            }
            return new Promise(async(resolve,reject)=>{
               try{
                logger.info("ProductService ::: getAllProducts :: started");
                let products = await productRepository.getAllProducts();
                if(products.length>0)
                {
                    response.data.product=products;
                   
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
                logger.info(`ProductService ::: getAllProducts :: Error ${error}`);
                response.error.ErrorCode=constant.ERROR_CODE_2002,
                response.error.ErrorMessage=constant.INTERNAL_SERVER_ERROR_MSG,
                response.message=constant.ERROR_MSG;
                response.status=constant.INTERNAL_SERVER_ERROR;
                reject(response)
               }
            })
            
        },

         /* Method to Fetch product by Id */
        getProductById:(req)=>{
            let response={
                message:constant.SUCCESS_MSG,
                data:{},
                status:constant.SUCCESS,
                error:{}
            }
            return new Promise(async(resolve,reject)=>{
               try{
                logger.info("ProductService ::: getProductById :: started");
                let productId = req.productId;
                let product = await productRepository.getByProductId(productId);
                if(product!==null)
                {
                    response.data.product=product.dataValues;
                   
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
                logger.info(`ProductService ::: getProductById :: Error ${error}`);
                response.error.ErrorCode=constant.ERROR_CODE_2002,
                response.error.ErrorMessage=constant.INTERNAL_SERVER_ERROR_MSG,
                response.message=constant.ERROR_MSG;
                response.status=constant.INTERNAL_SERVER_ERROR;
                reject(response)
               }
            })

        },

         /* Method to Fetch product by Category Id */
        getProductByCategoryId:(req)=>{
            let response={
                message:constant.SUCCESS_MSG,
                data:{},
                status:constant.SUCCESS,
                error:{}
            }
            return new Promise(async(resolve,reject)=>{
               try{
                logger.info("ProductService ::: getProductById :: started");
                let categoryId = req.categoryId;
                let products = await productRepository.getByProductByCategoryId(categoryId);
                let productCategoryName="";
                if(products.length>0)
                {
                   
                    productCategoryName = products[0]?.product_category[constant.PRODUCT_CATEGORY_NAME];
                    response.data.category = productCategoryName;
                    response.data.product = products;
                   
                }
                else{
                    response.error.ErrorCode=constant.ERROR_CODE_2002,
                    response.error.ErrorMessage=constant.INVALID_PRODUCT_CATEGORY,
                    response.message=constant.ERROR_MSG;
                    response.status=constant.NOT_FOUND;
                }
                resolve(response);
               }
               catch(error){
                logger.info(`ProductService ::: getProductById :: Error ${error}`);
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