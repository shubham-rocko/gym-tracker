import { Link, useNavigate } from 'react-router-dom';


export const Form = () => {
    let navigate = useNavigate();
    return (
        <form onSubmit={(e) => {e.preventDefault(); navigate('/');}}>
            <div>
                <label>Email:</label>
                <input type="text" name="email" />
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