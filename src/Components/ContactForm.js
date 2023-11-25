import React from 'react';
import "../Styles/Contact.css";



function ContactForm(id) {

  const BASE_URL = "http://localhost:8002/menu"



  const handleDelete = () => {
    fetch(`${BASE_URL}/menu/${id}`, {
      method : "DELETE",
      headers : {
        "Contact-Type" : "application/json"
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
  }

  
  
  const handlePost = () => {
    fetch(`${BASE_URL}/menu/${id}`, {
      method : "POST",
      headers : {
        "Contact-Type" : "application/json"
      },
    })
    .then(res => res.json())
    .then(data => console.log(data))
    
  }
  
  
  return (
    
    <div className='contactForm'>
      <h1>Contact To Place Order</h1>

      <form id= "contact-form">
        <label htmlFor="name"></label>
        <input className="name" placeholder="Enter Full Name.." type="text" />
        <label htmlFor="email"></label>
        <input className="email" placeholder="Enter Email.." type="email" />
        <textarea rows= "6" placeholder="Enter Pizza Type Order.." name="message" required></textarea>
        <button type="submit" onClick={handlePost}>Submit Order</button>
        <button className='delete' onClick={handleDelete}>Delete Order</button>
      </form>

    </div>
  )
}

export default ContactForm;


