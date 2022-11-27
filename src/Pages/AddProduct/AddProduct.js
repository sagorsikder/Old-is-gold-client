import  {React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const AddProduct = () => {

    const {user} = useContext(AuthContext
        )

    const {email} = user;
    const navigate = useNavigate()

    const handleProduct =(event)=>{
        event.preventDefault()
        const form = event.target;
        const productName = form.product.value;
        const condition = form.condition.value;
        const img = form.img.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const category = form.category.value;
        const description = form.description.value;
        const year = form.year.value;

        const product = {
            name:productName,
            condition,
            img,
            email,
            price,
            phone,
            location,
            category,
            description,
            year
        }

        fetch('http://localhost:5000/newproduct',{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(product)

            })
            .then(res => res.json())
            .then(data =>{
                console.log('saved product',data);
                alert('product upload successfully')
                navigate('/dashboard/myproduct')

            })

        console.log(product)
    }
    return (
        <div className='border p-5 m-5 w-3/4 mx-auto flex flex-col justify-center items-center '>
              <h1 className='text-center text-3xl font-semibold my-7'>Add a product</h1>
              <form  onSubmit={handleProduct}>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is product name?</span>
                </label>
                <input type="text" name='product' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
             </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Image URL?</span>
                </label>
                <input type="text" name='img' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
             </div>
              <select name='condition' className="select select-bordered w-full max-w-xs">
                <option disabled selected>Product Condition?</option>
                <option>Excellent</option>
                <option>Good</option>
                <option>Fair</option>
                </select>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Price?</span>
                </label>
                <input type="number" name='price' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
             </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Mobile number?</span>
                </label>
                <input type="number" name='phone' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
             </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Location?</span>
                </label>
                <input type="text" name='location' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
             </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Category?</span>
                </label>
                <input type="text" name='category' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
             </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Description?</span>
                </label>
                <input type="text"  name='description' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
             </div>
              
              <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Purchase year?</span>
                </label>
                <input type="number"  name='year' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
             </div>
             <input className='btn btn-success' type="submit" value="Add product" />
              </form>
        </div>
    );
};

export default AddProduct;