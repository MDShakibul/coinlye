
import React, { Fragment, useState } from 'react';
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from '../../components/header/Header';
import shape2 from '../../images/shapes/shape_flower_1.svg'
import { useAppDispatch } from '../../redux/hook';
import api from '../../util/api';
import { login } from '../../redux/features/auth/authSlice';

const SigninPage = (props) => {


    const push = useNavigate()
    const dispatch = useAppDispatch();
    const [value, setValue] = useState({
        address: '',
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));



    const submitForm = async(e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                address: '',
            });
            validator.hideMessages();

            try {
			const response = await api.post('/login', {
				address: value.address,
			});

			const data = response.data;

			if (data.success) {
				dispatch(
					login({
						walletAddress: value.address,
						referCode: data?.refer_code,
					})
				);
				toast.success('Successfully Login on Coinlye !');
				push('/dashboard'); // Redirect to dashboard page
			} else {
				// If API returns false, log the error
				console.error('Login failed: Invalid wallet address');
				/* Swal.fire({
					icon: 'error',
					title: 'Login Failed',
					text: 'Invalid wallet address. Please try again.',
				}); */
			}
		} catch (error) {
			console.error('Error logging in:', error);
			/* Swal.fire({
				icon: 'error',
				title: 'Error',
				text: 'Something went wrong. Please try again later.',
			}); */
		}

            /* const address = value.address;

            if (address) {
                toast.success('Successfully Login on Coinlye !');
                push('/dashboard');
            } */
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header />
                <main className="page_content">
                    <section className="register_section section_decoration">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 position-relative">
                                    <form className="register_form" onSubmit={submitForm}>
                                        <h1 className="heading_text text-center">Login to Your Account</h1>
                                        <p className="text-center">Enter your details to login.</p>
                                        {/* <Link className="btn_login_google" to="/sign_in">
                                            <span className="icon">
                                                <img src={sicon1} alt="Google Icon" />
                                            </span>
                                            <span className="label">Continue with Google</span>
                                        </Link>
                                        <div className="divider">
                                            <img src={shape1} alt="Divider" />
                                        </div> */}
                                        <div className="form-group">
                                            <label className="input_title" htmlFor="input_email">Address<sup>*</sup></label>
                                            <input
                                                className="form-control"
                                                placeholder="Enter you wallet address"
                                                value={value.address}
                                                variant="outlined"
                                                name="address"
                                                label="E-mail"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                            />
                                            {validator.message('address', value.address, 'required|address')}
                                        </div>
                                        {/* <div className="form-group">
                                            <label className="input_title" htmlFor="input_pass">Password<sup>*</sup></label>
                                            <input
                                                className="form-control"
                                                placeholder="***********"
                                                value={value.password}
                                                variant="outlined"
                                                name="password"
                                                type="password"
                                                label="Password"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                            />
                                            {validator.message('password', value.password, 'required')}
                                        </div> */}
                                        {/* <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="checkbox_remember_me" />
                                                    <label className="form-check-label" htmlFor="checkbox_remember_me">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <p className="forget_pass text-md-end mb-0">Forgot password? <Link to="/sign_in"><u>Reset</u></Link></p>
                                            </div>
                                        </div> */}
                                        <button className="btn" type="submit">
                                            <span className="btn_label">Login</span>
                                            <span className="btn_icon"><i className="ti-arrow-top-right"></i></span>
                                        </button>
                                    </form>
                                    <div className="decoration_item shape_flower">
                                        <img src={shape2} alt="Flower" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Fragment>
    )
};
export default SigninPage;