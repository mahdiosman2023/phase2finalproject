import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../Styles/NavBar.css";

function NavBar() {
    
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavBar = () => {
        setOpenLinks(!openLinks);

    };
  
  
    return (
    <div className='navbar'>
        
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={"https://static.vecteezy.com/system/resources/previews/021/311/744/original/pizza-transparent-background-png.png"} alt="logo" />
                <div className='hiddenLinks'>
                    <Link to= "/"> Home </Link>
                    <Link to= "/menu"> Menu </Link>
                    <Link to= "/contact"> Contact </Link>

                </div>
        </div>

        
        <div className="rightSide">
            <Link to= "/"> Home </Link>
            <Link to= "/menu"> Menu </Link>
            <Link to= "/contact"> Contact </Link>
            <button onClick={toggleNavBar}>
                <ReorderIcon />
            </button>
        </div>



      
    </div>
  )
}

export default NavBar
