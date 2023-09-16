module.exports=(dbConnection,dbObject)=>{
    return dbConnection.define('product_category',{
        product_category_name:{
            type: dbObject.STRING,
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