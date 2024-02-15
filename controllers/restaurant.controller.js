import {_getDominosMenu, _getMcdonaldsMenu, _getGabayMenu} from '../models/restaurant.model.js'

export const getDominosMenu = (req, res) => {
    _getDominosMenu()
    .then(data => {
        res.json(data)
    })
    .catch((err) => {
        res.status(404).json({message: 'Menu not found'});
    })
};

export const getMcdonaldsMenu = (req, res) => {
    _getMcdonaldsMenu()
    .then(data => {
        res.json(data)
    })
    .catch((err) => {
        res.status(404).json({message: 'Menu not found'});
    })
};

export const getGabayMenu = (req, res) => {
    _getGabayMenu()
    .then(data => {
        res.json(data)
    })
    .catch((err) => {
        res.status(404).json({message: 'Menu not found'});
    })
};