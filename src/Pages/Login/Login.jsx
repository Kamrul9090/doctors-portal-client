import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../../Layout/AuthProvider';
const Login = () => {
    const [authError, setAuthError] = useState('')
    const [handleEmail, setHandleEmail] = useState('');
    const { signIn, signWithGoogle, forgotPassword } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [logInUserEmail, setLogInUserEmail] = useState('');
    const [token] = useToken(logInUserEmail);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true })
    }
    const handleLogin = (data) => {
        setHandleEmail(data.email)
        setAuthError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login successfully')
                setLogInUserEmail(data.email)
            })
            .catch(err => {
                setAuthError(err.message)
            })
    }

    const handleGoogleLogin = () => {
        signWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => {
                console.log(e.message);
            })
    }

    const handleForgotPassword = () => {
        forgotPassword(handleEmail)
            .then(() => { })
            .catch((e) => console.log(e.message))
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center mb-10 font-bold'>Login</h2>
                <form className='font-semibold' onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email' {...register("email", {
                            required: "Email Address is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500' role={alert}>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'Password should be 6 characters longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p role={alert} className="text-red-500">{errors.password?.message}</p>}
                    </div>
                    <input type="submit" value='Login' className='btn btn-accent w-full max-w-xs mt-5' />
                    <label onClick={handleForgotPassword} className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    <div>
                        {
                            authError && <small className='text-red-500'>{authError}</small>
                        }
                    </div>
                </form>
                <p className='font-semibold my-5'>New to Doctors Portal? <Link className='text-secondary underline' to='/signUp'>Create a account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogin} className='btn btn-outline w-full max-w-xs btn-accent'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;