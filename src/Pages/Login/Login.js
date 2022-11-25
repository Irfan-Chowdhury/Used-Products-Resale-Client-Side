import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import login from '../../assets/login.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    useTitle('Login');
    const {logIn, providerLogin} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form     = event.target;
        const email    = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(result => {
            // const user = result.user;
            // const currentuser = {
            //     email: user.email
            // }

            // // get JWT token
            // fetch('https://service-review-server-murex.vercel.app/jwt',{
            //     method:'POST',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify(currentuser)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     // local storage is the easiest but not the best place to store jwt token
            //     localStorage.setItem('travelServiceToken',data.token);
            //     form.reset(); 
            //     navigate(from, {replace:true});
            // });

            form.reset(); 
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.error(error);
        });
    }

    // Log In with Google
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            // const user = result.user;
            // const currentuser = {
            //     email: user.email
            // }

            // get JWT token
            // fetch('https://service-review-server-murex.vercel.app/jwt',{
            //     method:'POST',
            //     headers:{
            //         'content-type':'application/json'
            //     },
            //     body:JSON.stringify(currentuser)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     // local storage is the easiest but not the best place to store jwt token
            //     localStorage.setItem('travelServiceToken',data.token);
            //     navigate(from, {replace:true});
            // });
            // console.log(user);
            navigate(from, {replace:true});
        })
        .catch(error => {
            console.error(error)
            // setError(error.message)
        });
    }
    



    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-light">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-md-7 text-center text-lg-start">
                    <img src={login} alt="" style={{width:'100%',height:'500px'}}/>
                </div>
                <div className="col-md-5 mx-auto col-lg-5">
                    <form onSubmit={handleLogin} className="p-4 p-md-5 border rounded-3 bg-light">
                        <h3 className='text-center mb-5'>Login</h3>

                        <div className="form-floating mb-3">
                            <input type="email" name='email' className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">LOGIN</button>
                        <Button onClick={handleGoogleSignIn} className='mb-2 mt-3 w-100' variant="btn btn-lg btn-outline-dark"> <FaGoogle></FaGoogle> Login with Google</Button>

                        <hr className="my-4" />
                        <small className="text-muted">New to E-Recycle-Phone ? Please <Link to='/signup'>Sign Up</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;