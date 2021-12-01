import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-basic mt-5">
            <footer fixed="bottom">
                <div className="social">
                    <a href="https://www.facebook.com/chayabithy.kusum" target="blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://github.com/Tamanna14-cpu" target="blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/tamanna-akter/" target="blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://stackoverflow.com/users/17488789/tamanna-akter" target="blank"><i class="fab fa-stack-overflow"></i></a>

                </div>
                <ul className="list-inline">
                    <li className="list-inline-item">Home</li>
                    <li className="list-inline-item">projects</li>
                    <li className="list-inline-item">About</li>
                    <li className="list-inline-item">Blogs</li>
                    <li className="list-inline-item">Contact Me</li>
                </ul>
                <p className="copyright">Tamanna Bithy &copy; 2021</p>
            </footer>
        </div>
    );
};

export default Footer;