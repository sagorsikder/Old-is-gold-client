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
        <div className='form-container max-w-[600px] py-7 max-h-[800px] bg-slate-500 '>
            <div className='mx-auto w-[360px]'>
            <h2 className=' text-white form-title'>Login</h2>
            <form onSubmit={handleSubmit}>


         

                <div className="form-control">
                    <label className=' text-white' htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control ">
                    <label className=' text-white' htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit text-white ' type="submit" value="Login" />
                
            </form>
            <input onClick={googleLogin} className='btn-submit text-white' type="submit" value="Login with google" />
            <p className='text-white mt-2'>New to old is gold? <Link className='text-blue-800' to='/signup'>Create a New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;