import HomeButton from "../../HomeButton"
import { BsCart2 } from "react-icons/bs";
import GabayMenu from './GabayMenu'
import { GabayMap } from "../../Maps"
import gabayCSS from './Gabay.module.css'

const Gabay = (props) => {

    return(
        <div>
            <header className={gabayCSS.restaurant}>
                <HomeButton/>
                <img src="https://d25t2285lxl5rf.cloudfront.net/images/shops/10912.jpeg" alt="Avatar" className={gabayCSS["icon-image"]}/>
                <BsCart2 className="navbar-cart-icon" onClick={props.onShowCart}/>
            </header>
            <div className={gabayCSS["main-image"]}>
                <img src="https://i.ytimg.com/vi/r19Wcot3kDA/maxresdefault.jpg" alt=""/>
            </div>
            <GabayMenu/>
            <GabayMap/>
        </div>
    );
}

export default Gabay