export const disconnectWallet = async () => {
	localStorage.removeItem('referCode');
	localStorage.removeItem('walletAddress');
	await window.ethereum.request({
		method: 'wallet_revokePermissions',
		params: [
			{
				eth_accounts: {},
			},
		],
	});
};

export const walletAddressResize = (address) => {
	return `${address.slice(0, 4)}...${address.slice(-4)}`;
};

export const formatDate = (isoDate) => {
	const date = new Date(isoDate);

	// Define options for formatting the date
	const options = { day: 'numeric', month: 'short', year: '2-digit' };

	// Format the date to "23 Sep, 24"
	return date.toLocaleDateString('en-GB', options).replace(' ', ', ');
};