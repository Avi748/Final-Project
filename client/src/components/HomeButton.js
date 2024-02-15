import { Link } from "react-router-dom"
import buttoncss from './Button.module.css'

const HomeButton = () => {

    return(
        <Link to="/">
        <button className={buttoncss.button}>
            <span>Home</span>
        </button>
        </Link>
    );
}

export default HomeButton