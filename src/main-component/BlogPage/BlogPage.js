
import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Header4 from '../../components/header4/Header4';
import BlogList from '../../components/BlogList';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const BlogPage = (props) => {

    return (
        <Fragment>
            <div className='index_ico page_wrapper'>
                <Header4 />
                <main className="page_content">
                    <PageTitle pageTitle={'Our Blog'} pagesub={'Our Blogs'} />
                    <BlogList />
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default BlogPage;