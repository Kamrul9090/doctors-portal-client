import React from 'react';

const ConfirmationModal = ({ title, message, successButtonName, handleDeleteModal, doctorsModal, handleCancel }) => {


    return (
        <div>

            <input type="checkbox" id="doctor-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => handleDeleteModal(doctorsModal)} htmlFor="doctor-modal" className="btn">{successButtonName}</label>
                        <button onClick={handleCancel} className='btn btn-outline'>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;