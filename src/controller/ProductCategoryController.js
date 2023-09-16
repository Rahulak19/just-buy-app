module.exports=({productCategoryService})=>{
    return{
        getAllProductCategory:(req,res,next)=>{
            return productCategoryService.getProductCategory(req).then(data=>{
                res.status(data.status).send(data);
                next();
            }).catch(error=>{
                res.status(error.status).send(error);
                next();
            });
        },
    }
}