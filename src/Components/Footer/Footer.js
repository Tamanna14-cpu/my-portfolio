import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-basic mt-5">
            <footer fixed="bottom">
                <div className="social">
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-snapchat-ghost"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>

                </div>
                <ul className="list-inline">
                    <li className="list-inline-item">Home</li>
                    <li className="list-inline-item">Services</li>
                    <li className="list-inline-item">About</li>
                    <li className="list-inline-item">Terms</li>
                    <li className="list-inline-item">Privacy Policy</li>
                </ul>
                <p className="copyright">Tamanna Bithy &copy; 2021</p>
            </footer>
        </div>
    );
};

export default Footer;