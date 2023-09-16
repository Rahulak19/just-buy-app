module.exports=(dbConnection,dbObject,dataTypes)=>{
    return dbConnection.define('product',{
       
        product_category_id:{
            type: dbObject.INTEGER,
        },
        product_name:{
            type: dbObject.STRING,
        },
        product_description:{
            type: dataTypes.STRING(1000),
        },
        product_image:{
            type: dbObject.STRING,
        },
        product_price:{
            type: dbObject.FLOAT,
        },
        product_rating:{
            type: dbObject.FLOAT,
        },
        product_rating_count:{
            type: dbObject.INTEGER,
        },
        status:{
            type: dbObject.BOOLEAN,
            defaultValue: true
        },
        created_by:{
            type: dbObject.STRING,
            defaultValue:"ADMIN"
        },
        updated_by:{
            type: dbObject.STRING,
            defaultValue:"ADMIN"
        }
    })
}