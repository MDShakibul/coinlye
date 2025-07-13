import React from 'react';
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Bg from '../../images/shapes/memecoin_bg_shape_1.svg'
import Bg2 from '../../images/shapes/btn_mask_bg.png'
import shape from '../../images/shapes/shape_bored.gif'
import shape2 from '../../images/shapes/shape_circle_zigzag.svg'
import shape3 from '../../images/shapes/shape_chain_1.svg'
import shape4 from '../../images/shapes/shape_chain_2.svg'
import shape5 from '../../images/shapes/shape_cartoon_1.png'
import shape6 from '../../images/shapes/shape_cartoon_2.png'


const Hero2 = () => {

    return (

        <section className="memecoin_hero_section section_decoration text-center" style={{ backgroundImage: `url(${Bg})` }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h1 className="hero_title text-uppercase" data-aos="fade-up" data-aos-duration="800">
                  make Assets by 
                  <span className="shape_image">
                    <img src={shape} alt="Bored Face GIF"/>
                  </span>
                  <mark>Memes!</mark>
                </h1>
                <p className="hero_description" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                  Create valuable assets with memes! Transform humor and creativity into something impactful and lasting.
                </p>
                <ul className="btns_group unordered_list justify-content-center p-0" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                  <li>
                    <Link className="memecoin_btn bg-white" to="/token">
                      <span className="btn_label">Buy Now a Token</span>
                      <span className="btn_bg" style={{ maskImage: `url(${Bg2})` }}></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="memecoin_btn bg-light" to="/token">
                      <span className="btn_label">Dextools Chart</span>
                      <span className="btn_bg" style={{ maskImage: `url(${Bg2})` }}></span>
                    </Link>
                  </li>
                </ul>

                <AnchorLink className="scrollspy_btn scroll_down" href='#id_token_offer'>
                  <i className="fa-solid fa-chevron-down"></i>
                  <i className="fa-solid fa-chevron-down"></i>
                  <i className="fa-solid fa-chevron-down"></i>
                  <img className="spin_image" src={shape2} alt="Zigzag"/>
                </AnchorLink>
              </div>
            </div>
          </div>
          <div className="decoration_item shape_chain_1">
            <img src={shape3} alt="Shape Chain"/>
          </div>
          <div className="decoration_item shape_chain_2">
            <img src={shape4} alt="Shape Chain"/>
          </div>
          <div className="decoration_item shape_cartoon_1">
            <img src={shape5} alt="Shape Cartoon"/>
          </div>
          <div className="decoration_item shape_cartoon_2">
            <img src={shape6} alt="Shape Cartoon"/>
          </div>
        </section>
    )
}

export default Hero2;