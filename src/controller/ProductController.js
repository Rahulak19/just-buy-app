module.exports=({productService})=>{
    return{
        getAllProducts:(req,res,next)=>{
            return productService.getAllProducts(req).then(data=>{
                res.status(data.status).send(data);
                next();
            }).catch(error=>{
                res.status(error.status).send(error);
                next();
            });
        },
        getProductById:(req,res,next)=>{
            return productService.getProductById({productId:req.params.id}).then(data=>{
                res.status(data.status).send(data);
                next();
            }).catch(error=>{
                res.status(error.status).send(error);
                next();
            });
        },
        getProductByCategory:(req,res,next)=>{
            return productService.getProductByCategoryId({categoryId:req.params.id}).then(data=>{
                res.status(data.status).send(data);
                next();
            }).catch(error=>{
                res.status(error.status).send(error);
                next();
            });
        },
        
    }
}