import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const FormValidation = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!email) {
            newErrors.email = "email is required!"
        } else if (!email.includes('@')) {
            newErrors.email = 'Email must be valid'
        }
        if (!password) {
            newErrors.password = ' password is required!'
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters"
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            alert('login Succesfully')
            setEmail('')
            setPassword('')
        }
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1>LOGIN-FORM</h1>
                    <div className="form-floating mb-3 w-50">
                        <input type="email"
                            value={email}
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    {errors.email && <p className="text-danger">{errors.email}</p>}
                    <div className="form-floating w-50">
                        <input type="password"
                            value={password}
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    {errors.password && <p className="text-danger">{errors.password}</p>}
                    <button type="submit" className='btn btn-primary w-50 mt-5'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default FormValidation