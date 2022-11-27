import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import useTitle from '../../Hooks/useTitle';
import './SignUp.css';

const SignUp = () => {
    useTitle('signup')
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const select = form.select.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password should be at least 6 characters.');
            return;
        }

        if (password !== confirm) {
            setError('Password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                savedUser(name,email,select)
                navigate('/')
            })
            .catch(error => console.error(error));

    }

    const savedUser = (name,email,select)=>{
        const user = {name,email,role:select};
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(user)

        })
        .then(res => res.json())
        .then(data =>{
            console.log('saved user',data);
        })
    }

    return (
        <div className='form-container  max-w-[400px] py-7 max-h-[600px] bg-slate-500'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>


            <select name='select' className="select form-control my-5 text-2xl select-bordered w-full ">
            <option  selected>Buyer</option>
            <option>Seller</option>
            </select>


                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;