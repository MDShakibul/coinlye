import React from 'react';
import Marquee from "react-fast-marquee";

// Import images
import heartShape from '../../../images/shapes/shape_heart_2.svg';
import coinpayGif from '../../../images/shapes/coinpay.gif';

const ElimentsSection = () => {
    const memeText = ['MEMECOIN', 'MEMECOIN', 'MEMECOIN', 'MEMECOIN', 'MEMECOIN', 'MEMECOIN', 'MEMECOIN'];

    return (
        <div className="meme_eliments_section mt-lg-5">
            <div className="container">
                <div className="content_ticker_wrapper">
                    <div className="content_ticker_carousel swiper">
                        <Marquee speed={50} gradient={false}>
                            {memeText.map((text, index) => (
                                <div key={index} className='swiper-slide'>
                                    { text }
                                </div>
                            ))}
                        </Marquee>
                    </div>
                    <div className="shape_heart">
                        <img src={heartShape} alt="Heart Shape" />
                        <img className="coinpay_animate" src={coinpayGif} alt="Coinlye" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElimentsSection;
