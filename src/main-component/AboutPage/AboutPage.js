
import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Header4 from '../../components/header4/Header4';
import About from '../../components/about/about';
import SolutionSection from '../../components/SolutionSection/SolutionSection';
import FeaturesSection from '../../components/FeaturesSection/FeaturesSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const AboutPage = (props) => {

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header4 />
                <main className="page_content">
                    <PageTitle pageTitle={'About Us'} pagesub={'About'} />
                    <About abClass={'pt-0'}/>
                    <SolutionSection />
                    <FeaturesSection />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default AboutPage;