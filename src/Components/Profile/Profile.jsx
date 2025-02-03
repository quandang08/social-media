import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const naviagte = useNavigate();

    const handleBack = () => naviagte(-1);

    return (
        <div className="">
            <section className='{`z-50 flex items-center sticky top-0 bg-opacity-95`}'>
                <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />

                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Code With Amu</h1>
            </section>
        </div>
    )
}

export default Profile