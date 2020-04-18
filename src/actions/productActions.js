export const actionTypes = {
    PRODUCTS_FETCH:'PRODUCTS_FETCH',
    PRODUCTS_RESPONSE:'PRODUCTS_RESPONSE',
    RESET_FETCH:'RESET_FETCH'
}

export const actions = {
    reset_fetch:(boolean)=>({type:actionTypes.RESET_FETCH, isLoading:boolean}),
    get_products:(pageNum=1)=>({type:actionTypes.PRODUCTS_FETCH, pageNum})
}