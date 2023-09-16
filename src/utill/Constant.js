module.exports=()=>{
    return{
        
        /* Standard Error Codes */

        SUCCESS:200,
        CREATED:201,
        BAD_REQUEST:400,
        FORBIDDEN:403,
        NOT_FOUND:404,
        INTERNAL_SERVER_ERROR:500,

        /* Custom Error Codes */

        ERROR_CODE_2001:2001, // Invalid JSON ERROR
        ERROR_CODE_2002:2002, // Product Data not available
        ERROR_CODE_2003:2003, // Internal Unknown Error
        ERROR_CODE_2004:2004, // User Not Created
        ERROR_CODE_2005:2005, // User Data not available
        ERROR_CODE_2006:2006, // No Orders Available

        /* Static Error Messages */

        SUCCESS_MSG:"Success",
        ERROR_MSG:"Error",
        VALID_JSON_ERROR:"Please provide valid JSON",
        NO_DATA_ERROR:"No Data Available",
        INTERNAL_SERVER_ERROR_MSG:"Internal Server Error",
        INVALID_PRODUCT_CATEGORY:"Invalid Product Category Id",
        PRODUCT_CATEGORY_NAME:"product_category_name",
        USER_CREATED_MSG:"User Created Successfully",
        USER_NOT_CREATED_MSG:"User Not Created",
        USER_UPDATED_MSG:"User Updated Successfully",
        USER_NOT_UPDATED_MSG:"User Not Updated",
        NO_ORDERS_AVAILABLE:"No Orders Available for this user",


        /* API Endpoints */

        GET_ALL_PRODUCTS:"/getAllProducts",
        GET_PRODUCT_BY_ID:"/getProductById/:id",
        GET_PRODUCT_BY_CATEGORY_ID:"/getProductByCategoryId/:id",
        GET_ALL_PRODUCT_CATEGORY:"/getAllProductCategory",
        CREATE_USER:"/user/create",
        UPDATE_USER:"/user/update",
        GET_USER_BY_ID:"/user/getUserById/:id",
        GET_ORDER_BY_USER_ID:"/order/getByUserId/:id",
       
    }
}