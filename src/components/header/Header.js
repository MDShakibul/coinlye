/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';
import Logo from '../../images/site_logo/site_logo_1.svg';
import { disconnect } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hook';
import { disconnectWallet, walletAddressResize } from '../../util/interact';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
	const [mobailActive, setMobailState] = useState(false);

	const [isSticky, setSticky] = useState(false);
	const loggedInInfo = useSelector((state) => state?.auth);
	const dispatch = useAppDispatch();
	const push = useNavigate();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 80) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Clean up
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const ClickHandler = () => {
		window.scrollTo(10, 0);
	};

	const handleDisconnect = () => {
		/* Swal.fire({
			title: 'Are you sure?',
			text: 'You want to disconnect wallet',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Disconnect',
		}).then((result) => {
			if (result.isConfirmed) { */
		const { address, status } = disconnectWallet();
		/* setWallet(address);
				setStatus(status); */

		// Clear local storage and reset address
		dispatch(
			disconnect({
				walletAddress: loggedInInfo?.walletAddress,
				referCode: loggedInInfo?.referCode,
			})
		);
		//setAddress(''); // Update state after disconnection

		/* Swal.fire({
					title: 'Disconnected!',
					text: 'Wallet Disconnected.',
					icon: 'success',
				}); */

		push('/'); // Redirect to home page
	};
	/* });
	}; */
	return (
		<header className={`site_header  ${isSticky ? 'sticky' : ''}`}>
			<div className="nav_wrapper">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-3 col-5 d-flex align-items-center">
							<div className="site_logo">
								<NavLink className="site_link" to="/" onClick={ClickHandler}>
									<img loading="lazy" src={Logo} alt="ICO Site Logo" />
								</NavLink>
							</div>
						</div>
						<div className="col-lg-6 col-2">
							
						</div>
						<div className="col-lg-3 col-5">
							<ul className="btns_group unordered_list p-0 justify-content-end">
								<li className="d-lg-none">
									<button
										className="mobile_menu_btn"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#main_menu_dropdown"
										aria-expanded="false"
										aria-label="Toggle navigation"
										onClick={() => setMobailState(!mobailActive)}
									>
										<i className="far fa-bars"></i>
									</button>
								</li>
								<li>
									{loggedInInfo?.walletAddress ? (
										<div
											onClick={handleDisconnect}
											className="ico_btn_outline"
											style={{ cursor: 'pointer' }}
										>
											<span className="btn_icon">
												<i className="fa-solid fa-user"></i>
											</span>
											<span className="btn_label">
												{walletAddressResize(loggedInInfo?.walletAddress)}
											</span>
										</div>
									) : (
										<NavLink
											onClick={ClickHandler}
											className="ico_btn_outline"
											to="/sign_in"
										>
											<span className="btn_icon">
												<i className="fa-solid fa-user"></i>
											</span>
											<span className="btn_label">Login</span>
										</NavLink>
									)}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
