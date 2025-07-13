import React from 'react';
import CountUp from 'react-countup';
import signBoardBg from '../../../images/shapes/shape_sign_board_2.webp';
import frogImage from '../../../images/shapes/shape_cartoon_12.webp';
import treeWoodImage from '../../../images/shapes/shape_cartoon_9.webp';
import shadowImage from '../../../images/shapes/shape_circle_9.svg';
import grassImage from '../../../images/shapes/shape_grash_1.webp';

const treeShapes = [1, 2, 3, 4];

const TokenomicsSection = () => {
  return (
    <section id="id_pepecoin_tokenomics_section" className="pepecoin_tokenomics_section section_space section_decoration bg-white overflow-hidden">
      <div className="container">
        <div className="pepecoin_heading_block text-center mt-lg-5" data-aos="fade-up" data-aos-duration="800">
          <h2 className="heading_text text-uppercase mb-0">Tokenomics</h2>
        </div>

        <div className="pepecoin_token_supply" style={{ backgroundImage: `url(${signBoardBg})` }}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h3 className="heading_text">Token Supply:</h3>
              <div className="token_supply_value">
                <span className="odometer text-primary" data-count="420690000000000"><CountUp end={420690000000000} enableScrollSpy scrollSpyOnce/></span>
              </div>
              <p className="mb-0">
                No Taxes, No Bullshit. It’s that simple. LP tokens are burnt, and contract ownership is renounced.
              </p>
            </div>
            <div className="col-lg-5">
              <div className="image_block">
                <img src={frogImage} alt="Frog" />
              </div>
            </div>
          </div>

          {treeShapes.map((shape, index) => (
            <div key={index} className={`shape_tree_wood_${shape}`}>
              <img src={treeWoodImage} alt="Tree Wood" />
            </div>
          ))}
        </div>
      </div>
      <div className="decoration_item shape_shadow">
        <img src={shadowImage} alt="Shadow" />
      </div>
      <div className="decoration_item shape_grash">
        <img src={grassImage} alt="Grass" />
      </div>
    </section>
  );
};

export default TokenomicsSection;