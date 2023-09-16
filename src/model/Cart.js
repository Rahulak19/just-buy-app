module.exports=(dbConnection,dbObject)=>{
    return dbConnection.define('cart',{
        user_id:{
            type: dbObject.INTEGER,
        },
        product_id:{
            type: dbObject.INTEGER,
        },
        product_count:{
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