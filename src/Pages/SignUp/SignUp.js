import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../assets/signup.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp');
    const navigate = useNavigate();

    const {createUser, updateUserProfile} = useContext(AuthContext);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const userType = form.user_type.value;
        const name = form.name.value;
        const photoURL = form.photo_url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(userType, name, photoURL, email, password);

        createUser(email, password)
        .then(result => {
            // const user = result.user;
            // const currentuser = {
            //     email: user.email
            // }

            form.reset();
            handleUpdateUserProfile(name, photoURL);

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
                navigate('/');
            // });
        })
        .catch(err => console.error(err));
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error));
    }

    return (
        <div className="container col-xl-10 col-xxl-8 px-4 py-5 bg-light">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <img src={signup} alt="" width="500px" />
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form onSubmit={handleSignUp} className="p-4 p-md-5 border rounded-3 bg-light">
                        <h3 className='text-center mb-5'>Sign Up</h3>

                        <div className='d-flex flex-row bd-highlight mb-3'>
                            <div className="form-check">
                                <input className="form-check-input" defaultChecked type="radio" name="user_type" value='user' />
                                <label className="form-check-label">
                                    User
                                </label>
                            </div>
                            <div className="mx-3 form-check">
                                <input className="form-check-input" type="radio" name="user_type" value='seller'/>
                                <label className="form-check-label">
                                    Seller
                                </label>
                            </div>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" name='name' className="form-control" placeholder="Your Name" />
                            <label>Your Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" name='photo_url' className="form-control" placeholder="Photo URL" />
                            <label>Photo Link</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" name='email' className="form-control" id="floatingInput" placeholder="Email" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">SIGN UP</button>
                        <hr className="my-4" />
                        <small className="text-muted">Already have an account ? Please <Link to='/login'>Login</Link></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;