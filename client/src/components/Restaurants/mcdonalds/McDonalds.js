import HomeButton from "../../HomeButton"
import { BsCart2 } from "react-icons/bs";
import McDonaldsMenu from "./McDonaldsMenu"
import { McDonaldsMap } from "../../Maps"
import mcdonaldsCSS from './McDonalds.module.css'

const McDonalds = (props) => {

    return(
        <div>
            <header className={mcdonaldsCSS.restaurant}>
                <HomeButton/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png" alt="Avatar" className={mcdonaldsCSS["icon-image"]}/>
                <BsCart2 className="navbar-cart-icon" onClick={props.onShowCart}/>
            </header>
            <div className={mcdonaldsCSS["main-image"]}>
                <img src="https://flo.health/uploads/media/sulu-1200x630/09/1599-Fast%20food.jpg" alt=""/>
            </div>
            <McDonaldsMenu/>
            <McDonaldsMap/>
        </div>
    );
}

export default McDonalds