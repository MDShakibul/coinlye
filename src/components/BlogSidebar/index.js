import React from 'react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'
import icon from '../../icons/icon_search.svg';

const BlogSidebar = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <aside className="sidebar pt-5 pt-lg-0 ps-lg-5">
            <div className="sidebar_search_block">
                <h3 className="sidebar_title">Search</h3>
                <form className="search_input" onSubmit={SubmitHandler}>
                    <input className="form-control" type="search" name="earch Anything..." placeholder="" />
                    <button type="submit" className="search_icon">
                        <img src={icon} alt="Icon Search" />
                    </button>
                </form>
            </div>

            <div className="recent_post_block">
                <h3 className="sidebar_title">Related Posts</h3>
                <ul className="recent_post_list unordered_list_block">
                    {blogs.slice(0, 3).map((blog, Bitem) => (
                        <li className="recent_post_item" key={Bitem}>
                            <h3 className="blog_post_title"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                            <span className="blog_post_admin"><i className="fa-regular fa-circle-user"></i> By Michael david</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar_category_list">
                <h3 className="sidebar_title">Categories</h3>
                <ul className="category_list_block unordered_list_block">
                    <li>
                        <Link onClick={ClickHandler} to="/blog">
                            <span className="icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                            <span className="label">Cybersecurity</span>
                            <span className="value">(05)</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} to="/blog">
                            <span className="icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                            <span className="label">Blockchain Trends</span>
                            <span className="value">(02)</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} to="/blog">
                            <span className="icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                            <span className="label">Digital Transformation</span>
                            <span className="value">(02)</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} to="/blog">
                            <span className="icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                            <span className="label">Exchange Listings</span>
                            <span className="value">(04)</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} to="/blog">
                            <span className="icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                            <span className="label">Security Alerts</span>
                            <span className="value">(03)</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={ClickHandler} to="/blog">
                            <span className="icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                            <span className="label">Investor Highlights</span>
                            <span className="value">(07)</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="sidebar_tags">
                <h3 className="sidebar_title">Popular Tags</h3>
                <ul className="tags_block unordered_list">
                    <li><Link onClick={ClickHandler} to="/blog">Blockchain</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog">Investments</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog">Web</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog">Currency</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog">Crypto Trading</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog">ICO</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog">ICO Blockchain</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog">Crypto Advisor</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog">Exchange</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog">ICO Tokens</Link></li>
                </ul>
            </div>
        </aside>
    )

}

export default BlogSidebar;
