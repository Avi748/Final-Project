import { useRef } from "react";
import formcss from './MenuItemForm.module.css'

const MenuItemForm = (props) => {
    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber =+ enteredAmount;
        props.onAddToCart(enteredAmountNumber);
        amountInputRef.current.value = 0;
    }

    return(
        <form className={formcss.form} onSubmit={submitHandler}>
            <div className={formcss.input}>
            <label htmlFor="input">Amount:</label>
            <input name="input" type="number" min="1" defaultValue={0} ref={amountInputRef}></input>
            </div>
            <button>Order</button>
        </form>
    );
};

export default MenuItemForm;