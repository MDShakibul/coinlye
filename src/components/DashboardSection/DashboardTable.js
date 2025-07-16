import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../util/api';
import { formatDate } from '../../util/interact';



const DashboardTable = () => {
	const [referredUsers, setReferredUsers] = useState([]);
	const loggedInInfo = useSelector((state) => state?.auth);
	/* console.log(loggedInInfo) */

	useEffect(() => {
		const fetchTokenTransfer = async () => {
			try {
				const res = await api.get('/referred_user', {
					params: { refer_code: loggedInInfo?.referCode }, // Pass address as a query parameter
				});
				/* console.log(res?.data); */
				/* console.log('referd users '); */
				setReferredUsers(res?.data?.referred_users);
				console.log(res?.data?.referred_users)
			} catch (error) {
				console.log('stories error response :: ', error);
			}
		};

		fetchTokenTransfer();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loggedInInfo?.referCode]);
	return (
		<div className="">
			<TableContainer
				component={Paper}
				sx={{ maxHeight: 300, overflow: 'auto' }}
			>
				<Table aria-label="user time table">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Address</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{referredUsers?.length === 0 ? (
							<TableRow>
								<TableCell colSpan={3}>
									<h6 className="text-center text-red-600 bg-white py-3">
										No User Found
									</h6>
								</TableCell>
							</TableRow>
						) : (
							referredUsers.map((user, index) => (
								<TableRow key={user.id} className="bg-white">
									<TableCell className="border border-gray-300 px-1 py-1 md:px-6 md:py-3 text-sm text-gray-900">
										{index + 1}
									</TableCell>
									<TableCell className="border border-gray-300 px-3 py-2 md:px-6 md:py-3 text-sm text-gray-900">
										{formatDate(user.created_at)}
									</TableCell>
									<TableCell className="border border-gray-300 px-3 py-2 md:px-6 md:py-3 text-sm text-gray-900">
										{user.wallet_address}
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default DashboardTable;
