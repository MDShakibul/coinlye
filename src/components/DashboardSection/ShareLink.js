import React, { useState } from "react";

import { useSelector } from "react-redux";

const ShareLink = (props) => {
    const [buttonText, setButtonText] = useState("Copy");
    const loggedInInfo = useSelector((state) => state?.auth);


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


    return (
        <section
            id="id_memecoin_service_section"
            className={` ${props.tokenClass}`}
        >
                        <h2 className="heading_text text-uppercase mb-0 text-white">Share Link</h2>

                    <div className="token_copy_board">
                        <span className="icon">
                            <i className="fa-solid fa-link text-white"></i>
                        </span>
                        <span className="code">
                             <mark>{`${window.location.origin}/?referCode=${loggedInInfo?.referCode}`}</mark>
                        </span>
                        <button className="share_link copy_btn share_link_btn_pc" type="button" onClick={handleCopyClick} style={{}}>
                            {buttonText}
                        </button>
                    </div>
                    <button className="share_link copy_btn share_link_btn_mob" type="button" onClick={handleCopyClick} style={{}}>
                            {buttonText}
                        </button>
        </section>
    );
};

export default ShareLink;
