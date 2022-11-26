import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import useTitle from '../../Hooks/useTitle';
import './Login.css';

const Login = () => {
    useTitle('login')
    const { signIn,popup } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/'
    const provider = new GoogleAuthProvider()


    const  googleLogin=()=>{
        popup(provider)
    .then(res=>{
        navigate('/')
        const user = res.user;
        console.log(user)
     
       
    })
    .catch(err=>console.log(err))
    }
    

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='form-container max-w-[400px] py-7 max-h-[600px] bg-slate-500 '>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>


            <select className="select form-control my-5 text-2xl select-bordered w-full ">
            <option  selected>User</option>
            <option>Seller</option>
            </select>

                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control ">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit ' type="submit" value="Login" />
                
            </form>
            <input onClick={googleLogin} className='btn-submit ' type="submit" value="Login with google" />
            <p className='text-white'>New to old is gold <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;