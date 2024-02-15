import MenuItem from '../items/MenuItem';
import menuCSS from '../Menu.module.css'
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import axios from "axios";

const GabayMenu = () => {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu()
  },[])
  
  const getMenu = async() => {
    try {
        const response = await axios.get('https://food-ordering-app-project.onrender.com/api/Gabay')
        const data = response.data
        setMenu(data)
    } catch (error) {
        console.log(error);
    }
  }

    const menulist = menu.map((item) => (
        <MenuItem key={item.id}
        id={nanoid()}
        name={item.name}
        description={item.description}
        img={item.image}
        price={item.price}
        />
    ))

    return(
        <section className={menuCSS.menu}>
          <ul>{menulist}</ul>
        </section>
    );
}

export default GabayMenu