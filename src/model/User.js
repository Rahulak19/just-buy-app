module.exports=(dbConnection,dbObject)=>{
    return dbConnection.define('user',{
        firstname:{
            type: dbObject.STRING,
            allowNull:false
        },
        lastname:{
            type: dbObject.STRING,
            allowNull:false
        },
        email:{
            type: dbObject.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:{
                    msg:"Invalid Email Id"
                }
            }
        },
        mobile:{
            type: dbObject.STRING,
            allowNull:false
        },
        address:{
            type: dbObject.STRING,
            allowNull:false
        },
        city:{
            type: dbObject.STRING,
            allowNull:false
        },
        state:{
            type: dbObject.STRING,
            allowNull:false
        },
        country:{
            type: dbObject.STRING,
            allowNull:false
        },
        zipcode:{
            type: dbObject.STRING,
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