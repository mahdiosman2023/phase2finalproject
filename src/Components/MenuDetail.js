import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Menu.css";

function MenuDetail() {
    
    const [menu, setMenu] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8002/menu")
        .then(res => res.json())
        .then(data => setMenu(data))
    }

    useEffect(() => {
        fetchData(menu)
    }, [])
    
    return (
    <div className='menu' style={{background : `url(${"https://pixy.org/src/6/thumbs350/63228.jpg"})`}}>
         <h1>Nomad Menu</h1>
         <Link to='/contact'>
         <button>PLACE ORDER </button>
         </Link>
          
         
          

      <div>
        
            <ul>
                {menu.map((menu) => (
                    <ul key={menu.id}>
                        <img src={menu.image} alt= "pizza" />
                        <br></br>
                        {menu.name}
                        <br></br>
                        {menu.price}
                    </ul>
                    
                    
                ))}
            </ul>
        
      </div>
    </div>
  )
}


export default MenuDetail;
