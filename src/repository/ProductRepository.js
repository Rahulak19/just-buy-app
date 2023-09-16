module.exports=({product,logger,productCategory})=>{
    return{
        getAllProducts:()=>{
                logger.info("ProductRepository ::: getAllProducts ::: started");
                return product.findAll({
                    where:{
                        status:1
                    }
                })
                .then(data=>{
                    logger.info("ProductRepository ::: getAllProducts ::: ended");
                    return data.map(obj=>obj.get({plain:true}));
                })
                .catch(error=>{
                    logger.info(`Error Occurred in ProductRepository ::: getAllProducts ::: ${error}`);
                    throw new Error(error);
                })
        },
        getByProductId:(pId)=>{
            logger.info("ProductRepository ::: getByProductId ::: started");
            return product.findOne({
                where:{
                    id:pId,
                    status:1
                }
            })
            .then(data=>{
                logger.info("ProductRepository ::: getByProductId ::: ended");
                return data;
            })
            .catch(error=>{
                logger.info(`Error Occurred in ProductRepository ::: getByProductId ::: ${error}`);
                throw new Error(error);
            })
        },

        getByProductByCategoryId:(categoryId)=>{
            logger.info("ProductRepository ::: getByProductByCategoryId ::: started");
            return product.findAll({
                include:[
                    {
                        model:productCategory,
                        required:true
                    }
                ],
                where:{
                    product_category_id:categoryId,
                    status:1
                }
            })
            .then(data=>{
                logger.info("ProductRepository ::: getByProductByCategoryId ::: ended");
                return data.map(obj=>obj.get({plain:true}));
            })
            .catch(error=>{
                logger.info(`Error Occurred in ProductRepository ::: getByProductByCategoryId ::: ${error}`);
                throw new Error(error);
            })
        }

    }
}