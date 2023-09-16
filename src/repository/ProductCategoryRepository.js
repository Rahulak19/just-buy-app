module.exports=({productCategory,logger})=>{
    return{
        getAllProductCategory:()=>{
                logger.info("ProductCategoryRepository ::: getAllProductCategory ::: started");
                return productCategory.findAll()
                .then(data=>{
                    logger.info("ProductCategoryRepository ::: getAllProductCategory ::: ended");
                    return data.map(obj=>obj.get({plain:true}));
                })
                .catch(error=>{
                    logger.info(`Error Occurred in ProductCategoryRepository ::: getAllProductCategory ::: ${error}`);
                    throw new Error(error);
                })
        },

    }
}