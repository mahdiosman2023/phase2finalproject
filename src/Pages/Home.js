import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

function Home() {
  return (
    <div className="home"  style={{backgroundImage : `url(${"https://i.pinimg.com/originals/a3/e0/6c/a3e06c8f7b389ecacdbcd59f2b29fc17.jpg"})`}}>
        <div className="headerContainer" >
            <h1>Nomad's Pizza</h1>
            <p>ON THE GO</p>
            <Link to="/menu">
            <button>START ORDER </button>
            </Link>
        </div>
   
    </div>
  )
}

export default Home;
