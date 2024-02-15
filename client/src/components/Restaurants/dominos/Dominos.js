import HomeButton from "../../HomeButton"
import { BsCart2 } from "react-icons/bs";
import DominosMenu from "./DominosMenu"
import { DominosMap } from "../../Maps"
import dominosCSS from './Dominos.module.css'

const Dominos = (props) => {

    return(
        <div>
            <header className={dominosCSS.restaurant}>
                <HomeButton/>
                <img src="https://dennisfoodservice.com/wp-content/uploads/2017/06/dominos-pizza-logo.png" alt="Avatar" className={dominosCSS["icon-image"]}/>
                <BsCart2 className="navbar-cart-icon" onClick={props.onShowCart}/>
            </header>
            <div className={dominosCSS["main-image"]}>
                <img src="https://mediacdn.dominos.co.il/_media/images/our_pizzas/page-desktop.jpg" alt=""/>
            </div>
            <DominosMenu/>
            <DominosMap/>
        </div>
    );
}

export default Dominos