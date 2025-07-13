import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import blogs from '../../api/blogs'
import BlogSidebar from '../BlogSidebar';
import icon1 from '../../images/shapes/shape_left.svg'
import icon2 from '../../images/shapes/shape_right.svg'

const BlogList = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog_section section_space pt-0">
            <div className="container">
                <div className="blog_carousel_block swiper">

                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            speed={1800}
                            parallax={true}
                            ref={swiperRef}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {blogs.slice(0, 2).map((blog, Bitem) => (
                                <SwiperSlide key={Bitem} style={{ backgroundImage: `url(${blog.screens})` }}>
                                    <div className="post_info" key={Bitem}>
                                        <div className="badge">{blog.thumb}</div>
                                        <h3 className="blog_post_title">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                                {blog.title}
                                            </Link>
                                        </h3>
                                        <p className="blog_post_description mb-0">
                                            {blog.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="bc-pagination"></div>
                    <button className="bc-button-prev" type="button" ref={prevRef} style={{ backgroundImage: `url(${icon1})` }}>
                        <i className="fa-solid fa-angles-left"></i>
                    </button>
                    <button className="bc-button-next" type="button" ref={nextRef} style={{ backgroundImage: `url(${icon2})` }}>
                        <i className="fa-solid fa-angles-right"></i>
                    </button>
                </div>
                <div className="row justify-content-lg-between">
                    <div className="col-lg-8">
                        {blogs.slice(0, 6).map((blog, Bitem) => (
                            <div className="blog_post_left_image" key={Bitem}>
                                <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="post_image">
                                    <img src={blog.screens} alt="Post" />
                                </Link>
                                <div className="post_info">
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="blog_post_category">{blog.thumb}</Link>
                                    <h3 className="blog_post_title">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>
                                            {blog.title}
                                        </Link>
                                    </h3>
                                    <p className="blog_post_description">
                                        {blog.description}
                                    </p>
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="btn">
                                        <span className="btn_label">Read More</span>
                                        <span className="btn_icon"><i className="fa-solid fa-arrow-up-right"></i></span>
                                    </Link>
                                </div>
                            </div>
                        ))}

                        <ul className="pagination_nav pt-3 unordered_list justify-content-center">
                            <li><Link onClick={ClickHandler} to="/blog"><i className="fa-solid fa-angles-left"></i></Link></li>
                            <li className="active"><Link onClick={ClickHandler} to="/blog">1</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">2</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">3</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">...</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog">9</Link></li>
                            <li><Link onClick={ClickHandler} to="/blog"><i className="fa-solid fa-angles-right"></i></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </section>

    )

}

export default BlogList;
