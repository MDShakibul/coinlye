import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Bg from '../../../images/shapes/memecoin_bg_shape_2.svg'
import Bg2 from '../../../images/shapes/shape_net_2.svg'

// Import images
import iconMentoring from "../../../images/services/icon_mentoring.gif";
import iconMobileBanking from "../../../images/services/icon_mobile_banking.gif";
import iconRecommendation from "../../../images/services/icon_recommendation.gif";
import partnerLogo1 from "../../../images/partners/partner_logo_8.svg";
import partnerLogo2 from "../../../images/partners/partner_logo_9.svg";
import partnerLogo3 from "../../../images/partners/partner_logo_10.svg";
import partnerLogo4 from "../../../images/partners/partner_logo_11.svg";
import partnerLogo5 from "../../../images/partners/partner_logo_12.svg";

const ChooseSection = () => {
    const [buttonText, setButtonText] = useState("Copy");

    const services = [
        {
            icon: iconMentoring,
            alt: "Mentoring",
            title: "Community-Driven",
            description: "Focused on community-driven growth and innovation!",
        },
        {
            icon: iconMobileBanking,
            alt: "Mobile Banking",
            title: "Easy Transactions",
            description: "Simplifying experience with easy and seamless transactions!",
        },
        {
            icon: iconRecommendation,
            alt: "Recommendation",
            title: "Global Acceptance",
            description: "Embracing global acceptance and limitless opportunities!",
        },
    ];

    const partners = [partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5, partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4, partnerLogo5];

    // Handle Copy Button Click
    const handleCopyClick = () => {
        const codeText = document.querySelector(".code mark").textContent;
        const textarea = document.createElement("textarea");
        document.body.appendChild(textarea);
        textarea.value = codeText;
        textarea.select();

        try {
            document.execCommand("copy");
            setButtonText("Copied!");

            // Reset text after 2 seconds
            setTimeout(() => {
                setButtonText("Copy");
            }, 2000);
        } catch (err) {
            console.error("Copy failed", err);
        }

        document.body.removeChild(textarea);
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,

        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <section
            id="id_memecoin_service_section"
            className={`memecoin_service_section section_space z-2 position-relative`}
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="container">
                <div className="memecoin_heading_block text-center">
                    <h2 className="heading_text text-uppercase mb-0">
                        Why Choose <mark>Coinlye</mark>
                    </h2>
                </div>

                <div className="row m-0 text-center">
                    {services.map((service, index) => (
                        <div className="col-lg-4 p-0" key={index} data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                            <div className="memecoin_iconbox_block">
                                <div className="iconbox_icon">
                                    <img src={service.icon} alt={service.alt} />
                                </div>
                                <div className="iconbox_info">
                                    <h3 className="iconbox_title text-uppercase">{service.title}</h3>
                                    <p className="mb-0">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="memecoin_partners_logo text-center"
                    style={{ backgroundImage: `url(${Bg2})` }}
                    data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <div className="memecoin_heading_block">
                        <h3 className="heading_text text-uppercase mb-0 text-light">Get Coin Now ON</h3>
                    </div>

                    <Slider {...settings}>
                        {partners.map((logo, index) => (
                            <div className="ico_partner_logo" key={index}>
                                <a className="logo_wrap" href="#!">
                                    <img src={logo} alt="Partner Logo" />
                                </a>
                            </div>
                        ))}
                    </Slider>

                    <div className="token_copy_board">
                        <span className="icon">
                            <i className="fa-solid fa-link"></i>
                        </span>
                        <span className="code">
                            Token Contract Address: <mark>Oxe3c127466908c2ccdc43521c8315b87fd369d605</mark>
                        </span>
                        <button className="copy_btn" type="button" onClick={handleCopyClick}>
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChooseSection;
