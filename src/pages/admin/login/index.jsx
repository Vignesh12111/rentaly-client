import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import PrimaryInput from 'components/inputs/primary'
import PrimaryButton from 'components/buttons/primary'

import { adminLogin } from 'api/admin'

function AdminLogin({ setIsAdmin }) {
    const [credentials, setCredentials] = useState({});
    const navigator = useNavigate()

    const textEdit = (event) => {
        event.preventDefault();
        setCredentials({
            ...credentials,
            [event?.target?.name]: event?.target?.value
        })
    }

    const formSubmit = async(event) => {
        const button = event.target
        const { email, password } = credentials;
        if(!email || !password) return alert("Enter All Details");
        button.disabled = true;
        const { token } = await adminLogin(email, password);
        if(token){
            setIsAdmin(true)
            localStorage.setItem("rentalhub-admin", token)
            localStorage.setItem("rentalhub-admin-email", email)
            navigator("/")
        }
        button.disabled = false;
    }

    return (
        <div className='min-h-[90vh] py-10 flex-center flex-col gap-4'>
            <div className="rounded p-10 border shadow hover:shadow-lg w-full max-w-[350px] sm:w-[350px] lg:w-[350px] text-center">
                <h5 className='text-xl font-bold'>Admin Login</h5>
                <PrimaryInput type="text" placeholder="Enter email" customCss="my-5" name="email" onChange={(event) => textEdit(event)} />
                <PrimaryInput type="password" placeholder="Enter Password" customCss="mb-5" name="password" onChange={(event) => textEdit(event)}/>
                <PrimaryButton text="Login" onClick={formSubmit}/>
            </div>
                <div className="rounded shadow border p-5 sm:min-w-[350px] hover:shadow-lg">
                    <h2 className='font-medium text-lg text-center'>
                        Not yet Registered? <Link className='text-blue-700 hover:text-blue-800 ml-1' to="/admin-signup">Register Here</Link>
                    </h2>
                </div>
        </div>
    )
}

export default AdminLogin
