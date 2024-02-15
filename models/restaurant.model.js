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