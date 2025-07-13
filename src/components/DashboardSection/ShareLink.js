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
            <div className="container">
                        <h2 className="heading_text text-uppercase mb-0 text-white">Share Link</h2>

                    <div className="token_copy_board">
                        <span className="icon">
                            <i className="fa-solid fa-link text-white"></i>
                        </span>
                        <span className="code">
                            {/* Link: <mark>https://carriu.online/?referCode=865379</mark> */}
                            Link: <mark>{`${window.location.origin}/?referCode=${loggedInInfo?.referCode}`}</mark>
                        </span>
                        <button className="share_link copy_btn" type="button" onClick={handleCopyClick} style={{}}>
                            {buttonText}
                        </button>
                    </div>
                </div>
        </section>
    );
};

export default ShareLink;
