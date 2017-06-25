const profile = {
    user_address:"Донецк",
    user_email:"antoha@email.com",
    user_facebook_id:null,
    user_id:"53edea04bdfe552e7bb21a01ddfb61f3",
    user_instagram_id:null,
    user_lastname:"Горюнов",
    user_name:"Антон",
    user_phone:"88005552525",
    user_photo:"",
    user_register:"1",
    user_token:"e34cc1e6d828450fc347ba8f5f3fc32d",
    user_vkontakte_id:null
}

export default function user(state = {token:'', profile:{}, loyalty:{}, logging: false}, action) {
    if (action.type === '@user.TOKEN'){
        return {...state, token:action.payload}
    } else if (action.type === '@user.PROFILE'){
        return {...state, profile:action.payload, logging:true}
    } else if (action.type === '@user.LOYALITY'){
        return {...state, loyalty:action.payload}
    }
    return state
}