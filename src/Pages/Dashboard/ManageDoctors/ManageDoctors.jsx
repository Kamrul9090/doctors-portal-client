import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BeatLoader } from 'react-spinners';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctors = () => {
    const [doctorsModal, setDoctorsModal] = useState(null);
    const { data: doctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://doctors-portal-server-sandy-sigma.vercel.app/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem(`accessToken`)}`
                    }
                });
                const data = await res.json();
                return data;
            } catch (error) {
                console.error(error);
            }
        }
    })

    const handleDeleteModal = doctor => {
        console.log(doctor);
        fetch(`https://doctors-portal-server-sandy-sigma.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} successfully delete`)
                }
            })
    }

    const handleCancel = () => {
        setDoctorsModal(null)
    }

    if (isLoading) {
        return <BeatLoader></BeatLoader>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDoctorsModal(doctor)} htmlFor="doctor-modal" className="btn btn-primary">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                doctorsModal &&
                <ConfirmationModal
                    doctorsModal={doctorsModal}
                    handleCancel={handleCancel}
                    handleDeleteModal={handleDeleteModal}
                    successButtonName='Delete'
                    title={`Are you sure you want to delete ${doctorsModal.name}`}
                    message={`If you delete ${doctorsModal.name}. It cannot be undo`}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;