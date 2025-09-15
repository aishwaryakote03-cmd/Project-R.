import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
    const [form, setForm] = useState({ name: '', email: '', address: '', password: '', role: 'user' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/auth/signup', form);
        alert('Registered successfully!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
            <input name="address" placeholder="Address" onChange={handleChange} required />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
            <select name="role" onChange={handleChange}>
                <option value="user">Normal User</option>
                <option value="admin">System Administrator</option>
                <option value="store_owner">Store Owner</option>
            </select>
            <button type="submit">Sign Up</button>
        </form>
    );
}
export default SignupForm





