import React, { useState } from 'react';
import axios from 'axios';

const Student = () => {
    const [formData, setFormData] = useState({
        id: '',
        fname: '',
        lname: '',
        phone: '',
        email: '',
        date: '',
        course: '',
        gender: '',
        password: '',
        ConfirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://your-api-url.com/api/students/', formData);
            console.log("Student was created", response.data);
        } catch (error) {
            console.error("Error creating student", error);
        }
    };

    return (
        <>
            <form className='rounded p-5 container w-50 bg-light'>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="fname"
                        value={formData.fname}
                        onChange={handleChange}
                        id="fname"
                        placeholder="First Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lname"
                        value={formData.lname}
                        onChange={handleChange}
                        id="lname"
                        placeholder="Last Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <input
                        type="text"
                        className="form-control"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        id="gender"
                        placeholder="Gender"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="number"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        id="phone"
                        placeholder="Phone"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-outline-success">Add Info</button>
                <button type="button" className="btn btn-outline-primary">Update</button>
                <button type="button" className="btn btn-outline-danger">Delete</button>
            </form>
        </>
    );
};

export default Student;
