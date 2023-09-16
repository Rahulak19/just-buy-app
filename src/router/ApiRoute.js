module.exports=({app,express,cors,logger,constant})=>{
    return{
        preHandler:()=>{
            /* To Handle all pre-validations */
            app.use(cors);
            app.use(express.urlencoded({extended : true}));
            app.use(express.json());

            app.use(function(err,req,res,next){
                if(err instanceof SyntaxError && err.status ===constant.BAD_REQUEST && 'body' in err){
                    logger.error("Invalid JSON request body");
                    return res.status(constant.BAD_REQUEST).send({
                        error:{
                            ErrorCode: constant.ERROR_CODE_2001,
                            ErrorMessage:constant.VALID_JSON_ERROR
                        }
                    })
                }else{
                    next();
                }
            });

        },
        pathDefination:(container)=>{
             /* Step into the Controller */
             app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'));
            app.get(constant.GET_ALL_PRODUCTS,container.resolve("productController").getAllProducts);
            app.get(constant.GET_PRODUCT_BY_ID,container.resolve("productController").getProductById);
            app.get(constant.GET_PRODUCT_BY_CATEGORY_ID,container.resolve("productController").getProductByCategory);
            app.get(constant.GET_ALL_PRODUCT_CATEGORY,container.resolve("productCategoryController").getAllProductCategory);
            app.post(constant.CREATE_USER,container.resolve("userController").createUser);
            app.post(constant.UPDATE_USER,container.resolve("userController").updateUser);
            app.get(constant.GET_USER_BY_ID,container.resolve("userController").getUserById);
            app.get(constant.GET_ORDER_BY_USER_ID,container.resolve("orderController").getOrderByUserId);
        },
        postHandler:()=>{
             /* Post Message After every API Call */
           app.use(function(req,res,next){
            logger.info(`Request Completed at ::: ${new Date}`);
            next();
           })
        }
    }
}