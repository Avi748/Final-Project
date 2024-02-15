import menuitemcss from './MenuItem.module.css'
import MenuItemForm from './MenuItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/CartContext';

const MenuItem = (props) => {
    const cartCtx = useContext(CartContext);
    const price = `₪${props.price}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return(
        <li className={menuitemcss.item}>
            <div>
                <img className={menuitemcss.img} src={props.img} alt=''></img>
                <h3>{props.name}</h3>
                <div className={menuitemcss.description}>{props.description}</div>
                <div className={menuitemcss.price}>{price}</div>
            </div>
            <div>
                <MenuItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );

}

export default MenuItem;