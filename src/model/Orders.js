module.exports=(dbConnection,dbObject)=>{
    return dbConnection.define('orders',{
        user_id:{
            type: dbObject.INTEGER,
        },
        product_id:{
            type: dbObject.INTEGER,
        },
        order_status:{
            type: dbObject.STRING,
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