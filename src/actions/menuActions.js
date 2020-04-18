export const actionTypes = {
    COLLAPSE_MENU:'COLLAPSE_MENU',
    CHANGE_CURRENT_MENU:'CHANGE_CURRENT_MENU'
}

export const actions = {
    toggle_collapse:()=>({ type:actionTypes.COLLAPSE_MENU}),
    change_current:(location)=>({type:actionTypes.CHANGE_CURRENT_MENU,location})
}