import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';
import { AuthContext } from '../../Layout/AuthProvider';

const SignUp = () => {
    const [signUpError, setSignUpError] = useState('');
    const { createUser, updateUser, emailVerify } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [createUserEmail, setCreateUserEmail] = useState('');
    const [token] = useToken(createUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }
    const handleSignUp = data => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Sign Up successfully')
                handleEmailVerification()
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                    })
                    .catch(e => console.log(e))
            })
            .catch(e => {
                setSignUpError(e.message)
            })
    }

    // email verify
    const handleEmailVerification = () => {
        emailVerify()
            .then(() => {
                alert('Please check your email')
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch(`https://doctors-portal-server-sandy-sigma.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
            })
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center mb-10 font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} className='font-semibold'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type='name'
                            {...register("name", { maxLength: { value: 20, message: 'name should be less than 20 characters' } })}
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors.name && <small className='text-red-500'>{errors.name.message}</small>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email'
                            {...register("email", { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors?.email && errors?.email?.type === "required" && <small className='text-red-500'>Email address is required</small>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password'
                            {...register("password",
                                {
                                    minLength: { value: 6, message: "Password should be at least 6 characters" },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must be strong'
                                    }
                                }
                            )}
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors.password && <small><p className='text-red-500'>{errors?.password.message}</p></small>
                        }
                    </div>
                    <input type="submit" value='Sign Up' className='btn btn-accent w-full max-w-xs mt-5' />
                    {
                        signUpError && <small className='text-red-500'>{signUpError}</small>
                    }
                </form>
                <p className='font-semibold my-5'>Already have an account <Link className='text-secondary underline' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full max-w-xs btn-accent'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;