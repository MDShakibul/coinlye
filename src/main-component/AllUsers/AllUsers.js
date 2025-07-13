
import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import api from '../../util/api';
import { formatDate } from '../../util/interact';
const AllUsers = () => {

        const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchTokenTransfer = async () => {
          try {
            const res = await api.get("/all-users");
            /* console.log(res?.data); */
            console.log('referd users ')
            setAllUsers(res?.data?.users)
          } catch (error) {
            console.log("stories error response :: ", error);
          }
        };

          fetchTokenTransfer();
     
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header />

                <section className="page_header text-center" >
            <div className="container">
                <TableContainer
				component={Paper}
				sx={{ maxHeight: 500, overflow: 'auto' }}
			>
				<Table aria-label="user time table">
					<TableHead>
						<TableRow>
							<TableCell>#</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Address</TableCell>
							<TableCell>Referred By</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{allUsers?.length === 0 ? (
							<TableRow>
								<TableCell colSpan={4}>
									<h6 className="text-center text-red-600 bg-white py-3">
										No User Found
									</h6>
								</TableCell>
							</TableRow>
						) : (
							allUsers.map((user, index) => (
								<TableRow key={user.id} className="bg-white">
									<TableCell className="border border-gray-300 px-1 py-1 md:px-6 md:py-3 text-sm text-gray-900">
										{index + 1}
									</TableCell>
									<TableCell className="border border-gray-300 px-3 py-2 md:px-6 md:py-3 text-sm text-gray-900">
										{formatDate(user.created_at)}
									</TableCell>
									<TableCell className="border border-gray-300 px-3 py-2 md:px-6 md:py-3 text-sm text-gray-900">
										{user?.wallet_address}
									</TableCell>
									
									<TableCell className="border border-gray-300 px-3 py-2 md:px-6 md:py-3 text-sm text-gray-900">
										{user.referred_by ? user.referred_by : '-'}
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
            </div>
            
        </section>
                
                    
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default AllUsers;