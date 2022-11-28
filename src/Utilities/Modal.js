import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Modal = ({product}) => {

  const {user} = useContext(AuthContext)
  const {email} = user;
  console.log(email)
    const {img,name,orginalPrice} = product;

    const handleSubmit =(event)=>{

      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const product = form.product.value;
      const price = form.price.value;
      const location = form.location.value;
      const phone = form.phone.value;

      const order = {
        name,
        email,
        product,
        price,
        img,
        location,
        phone
      }

      fetch('https://old-is-gold-server.vercel.app/order',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(order)

    })
    .then(res => res.json())
    .then(data =>{
        console.log('saved order',data);
    })

      console.log(order)
      form.reset()
      alert('order successfully')

    }
    


    return (
        <div>

<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <img src={img} alt="" />
    <h3 className="font-bold text-lg">{name}</h3>
    <p className="py-4">Please fill up this form for ensure your order!!</p>

    <form onSubmit={handleSubmit}>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text" defaultValue={user?.displayName} name='name' placeholder="Name " className="input input-bordered w-full " />
 
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="text" name='email' defaultValue={user?.email} disabled className="input input-bordered w-full " />
 
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Product</span>
  </label>
  <input type="text" name='product' defaultValue={name} disabled className="input input-bordered w-full " />
 
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <input type="text" name='price' defaultValue={orginalPrice} className="input input-bordered w-full " />
 
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Phone</span>
  </label>
  <input type="text" name='phone' placeholder="Type your phone no " className="input input-bordered w-full " />
 
</div>
    <div className="form-control w-full ">
  <label className="label">
    <span className="label-text">Meeting location</span>
  </label>
  <input type="text" name='location' placeholder="Type your location " className="input input-bordered w-full " />
 
</div>

<div className="modal-action">
<input  htmlFor="booking-modal" className="btn" type="submit" value="Submit" />
    </div>
    </form>
    
  </div>
</div>
        </div>
    );
};

export default Modal;