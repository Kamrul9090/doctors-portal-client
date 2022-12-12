import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate();
    const imageHostKey = process.env.REACT_APP_imagebb_key;
    const { data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-sandy-sigma.vercel.app/appointmentSpecialty`);
            const data = res.json();
            return data;
        }
    })


    const handleAddDoctors = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url,
                    }
                    fetch('https://doctors-portal-server-sandy-sigma.vercel.app/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem(`accessToken`)}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success('Doctor add successfully');
                                navigate('/dashboard/manageDoctors')
                            }
                        })
                }

            })
    }
    if (isLoading) {
        return <BeatLoader color="#36d7b7" />;
    }
    return (
        <div>
            <>Added Doctors</>
            <form onSubmit={handleSubmit(handleAddDoctors)} className='font-semibold'>
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
                    <label className="label"><span className="label-text">Specialty</span></label>
                    <select
                        {...register('specialty')}
                        className="select select-bordered w-full max-w-xs">
                        {
                            specialties.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type='file'
                        {...register("image", { maxLength: { value: 20, message: 'name should be less than 20 characters' } })}
                        className="input input-bordered w-full max-w-xs" />
                    {
                        errors.image && <small className='text-red-500'>{errors.image.message}</small>
                    }
                </div>
                <input type="submit" value='Add Doctors' className='btn btn-accent w-full max-w-xs mt-5' />

            </form>
        </div>
    );
};

export default AddDoctors;