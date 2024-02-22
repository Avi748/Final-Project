import {db} from '../config/db.js'

export const _getAllItems = () => {
    return db('dominos').select('*').orderBy('id');
}

export const _getDominosMenu = () => {
    return db.select('*').from('menus').innerJoin('restaurants', 'menus.restaurant_id', 'restaurants.restaurant_id')
    .where('restaurants.restaurant_id','1')
}

export const _getMcdonaldsMenu = () => {
    return db.select('*').from('menus').innerJoin('restaurants', 'menus.restaurant_id', 'restaurants.restaurant_id')
    .where('restaurants.restaurant_id','2')
}

export const _getGabayMenu = () => {
    return db.select('*').from('menus').innerJoin('restaurants', 'menus.restaurant_id', 'restaurants.restaurant_id')
    .where('restaurants.restaurant_id','3')
}

export const _register = (email, password) => {
    return db("users").insert({email,password}, ["id","email","password"])
};

export const _login = (email) => {
    return db("users").select("id","email","password").where({email:email})
}

export const _all = () => {
    return db("users").select("id","email","password").orderBy("id")
}