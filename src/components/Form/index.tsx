import { SyntheticEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


export const Form = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');

    const formSubmission = (e: SyntheticEvent) => {
        e.preventDefault();
        debugger
        window.dataLayer.push({email: email})
        navigate('/');
    }

    return (
        <form onSubmit={formSubmission}>
            <div>
                <label>Email:</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="password" />
            </div>
            <div>
                <button type="submit"> Sign in</button>
                <Link to={"/signup"}>Create new account</Link>
            </div>
        </form>
    )
}