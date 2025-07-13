
import React, { Fragment } from 'react';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import DashboardTable from '../../components/DashboardSection/DashboardTable';
import Header from '../../components/header/Header';
import ShareLink from '../../components/DashboardSection/ShareLink';
const DashboardPage = () => {

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header />

                <section className="page_header text-center" >
            <div className="container">
                <div className="row justify-content-lg-between">
                    <div className="col-lg-12">
                        <ShareLink tokenClass={'token-sec pt-0'}/>
                    </div>
                    <div className="col-lg-12 d-lg-flex flex-lg-column">
                        <DashboardTable/>
                    </div>
                </div>
            </div>
            
        </section>
                
                    
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default DashboardPage;