const {asValue} = require('awilix');
const {Sequelize,DataTypes} = require('sequelize');
module.exports={
    init:async(container)=>{
        let logger = container.resolve("logger");
        try{
            let password=process.env.DB_PASS;
            const sequlizeConnection=new Sequelize(process.env.DB_NAME,process.env.DB_USER,password,{
                host:process.env.DB_HOST,
                dialect:process.env.DB_DIALECT,
                port:process.env.DB_PORT,
                logging:false,
                define:{
                    freezeTableName:true
                } 
            });
            return sequlizeConnection.authenticate()
            .then(()=>{
                logger.info("DB Connection Successful");
                const Cart=require("../model/Cart.js")(sequlizeConnection,Sequelize);
                const Orders=require("../model/Orders.js")(sequlizeConnection,Sequelize);
                const Product=require("../model/Product.js")(sequlizeConnection,Sequelize,DataTypes);
                const ProductCategory=require("../model/ProductCategory.js")(sequlizeConnection,Sequelize);
                const User=require("../model/User.js")(sequlizeConnection,Sequelize);
                

                User.hasOne(Cart,{
                    foreignKey:{
                        name:"user_id",
                    }
                });

                Product.belongsTo(ProductCategory, {
                    foreignKey:{
                        name:"product_category_id",
                    }
                });

                ProductCategory.hasMany(Product, {
                    foreignKey:{
                        name:"product_category_id",
                    }
                })

                Orders.belongsTo(Product,{
                    foreignKey:{
                        name:"product_id",
                    }
                });
                Product.hasMany(Orders, {
                    foreignKey:{
                        name:"product_id",
                    }
                })
                Orders.belongsTo(User,{
                    foreignKey:{
                        name:"user_id",
                    }
                });
                User.hasMany(Orders, {
                    foreignKey:{
                        name:"user_id",
                    }
                })


                Product.hasOne(Cart,{
                    foreignKey:{
                        name:"product_id",
                    }
                });

                sequlizeConnection.sync();

                container
                    .register("dbConnection",asValue(sequlizeConnection))
                    .register("dbObject",asValue(Sequelize))
                    .register("dbOperation",asValue(Sequelize.Op))
                    .register("cart",asValue(Cart))
                    .register("orders",asValue(Orders))
                    .register("product",asValue(Product))
                    .register("productCategory",asValue(ProductCategory))
                    .register("user",asValue(User))
    
                    logger.info("DB modules loaded");
                    return true;
            })
            .catch((error)=>{
                logger.error(`Unable to connect DB ${error}`);
            });   
        } 
        catch(error){
            logger.error(`Unable to connect DB ${error}`);
        }
    }
}