import React from 'react';
import TimeCountDown from '../../countdown';
import coinBTC from '../../../images/coins/coin_btc.svg';
import coinETH from '../../../images/coins/coin_eth.svg';
import coinEOS from '../../../images/coins/coin_eos.svg';
import coinUSD from '../../../images/coins/coin_usd.svg';
import coinLTC from '../../../images/coins/coin_ltc.svg';
import btnMaskBg from '../../../images/shapes/btn_mask_bg.png';
import counterCircle from '../../../images/shapes/meme_counter_circle_shape.svg';
import shapeCartoon from '../../../images/shapes/shape_cartoon_3.png';
import shapeCartoonHand from '../../../images/shapes/shape_cartoon_hand.png';
import shapeNet from '../../../images/shapes/shape_net.svg';
import { Link } from 'react-router-dom';

const TokenOffer = () => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
}
  return (
    <section id="id_token_offer" className="memecoin_countdown_section section_space section_decoration">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="memecoin_heading_block" data-aos="fade-up" data-aos-duration="800">
              <h2 className="heading_text text-uppercase">
                It’s Time to Buy <mark>Meme</mark> coinlye!
              </h2>
              <p className="heading_description mb-0 pe-lg-5">
                It’s time to buy Meme Coinlye! Don’t miss out on the opportunity to be part of the most exciting and innovative crypto community.
              </p>
            </div>
            <div className="coin_we_accept" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
              <h3 className="heading_text text-uppercase">We Accept</h3>
              <ul className="coins_group unordered_list">
                {[{ src: coinBTC, label: 'BTC' }, { src: coinETH, label: 'ETH' }, { src: coinEOS, label: 'EOS' }, { src: coinUSD, label: 'USD' }, { src: coinLTC, label: 'LTC' }].map((coin, index) => (
                  <li key={index}>
                    <span className="coin_icon">
                      <img src={coin.src} alt={coin.label}/>
                    </span>
                    <span className="coin_label">{coin.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link className="memecoin_btn bg-white" onClick={ClickHandler} to="/token" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              <span className="btn_label">Buy Now a Token</span>
              <span className="btn_bg" style={{ maskImage: `url(${btnMaskBg})` }}></span>
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="memecoin_countdown_wraper text-center">
              <div className="shape_circle">
                <img src={counterCircle} alt="Shape Circle"/>
              </div>
              <div className="shape_cartoon">
                <img src={shapeCartoon} alt="Shape Cartoon"/>
              </div>
              <div className="shape_cartoon_hand">
                <img src={shapeCartoonHand} alt="Shape Cartoon Hand"/>
              </div>
              <div className="countdown_wrapper">
                <h3 className="heading_text text-uppercase">Start buy coinlye now!</h3>
                <TimeCountDown/>
                <ul className="countdown_timer_block unordered_list justify-content-center" data-countdown="2026/3/24"></ul>
              </div>
              <div className="meme_progress">
                <ul className="progress_range_step unordered_list justify-content-between">
                  <li>Soft Cap: $1.75m</li>
                  <li>Bonus</li>
                </ul>
                <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <ul className="progress_value unordered_list justify-content-center">
                  <li>Pre-Sale 1 ETH = 8,000 Token</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decoration_item shape_net_top">
        <img src={shapeNet} alt="Shape Net"/>
      </div>
    </section>
  );
};

export default TokenOffer;
