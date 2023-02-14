import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="row noGutter fixed-bottom">
        <div className="col-12">
            <span className="footer py-2 d-flex justify-content-center mt-3">
            <p className="pt-1 me-2">Game developped by <strong>dazedDive</strong> // <strong>dazed_dive@hotmail.fr</strong> // https://github.com/dazedDive</p>
            <AiOutlineGithub className="fs-3 me-2 buttonAnimated"/>
            <AiOutlineLinkedin className="fs-3 buttonAnimated"/>
            </span>
        </div>
        </div>
    );
};

export default Footer;