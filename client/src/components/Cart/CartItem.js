import cartitemcss from './CartItem.module.css'

const CartItem = (props) => {

    const price = `₪${props.price}`

    return(
        <li className={cartitemcss["cart-item"]}>
            <div>
                <h2>{props.name}</h2>
                <div className={cartitemcss.summary}>
                    <span className={cartitemcss.price}>{price}</span>
                    <span className={cartitemcss.amount}>{props.amount}</span>
                </div>
            </div>
            <div className={cartitemcss.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
}

export default CartItem