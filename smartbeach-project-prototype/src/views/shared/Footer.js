import React from 'react';
import logobeach from "../../assets/images/logobeach.png";

function Footer() {
    return (
        <footer className="footer live-footer py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="card border-0">
                            <div className="card-body">
                                <h2 className="card-title">Contact</h2>
                                <div className="contact">
                                    <span><i class="bi bi-telephone"></i> 123-456-7890</span>
                                    <span><i class="bi bi-envelope"></i> info@example.com</span>
                                </div>
                                <div className="socials mt-3">
                                    <span><i class="bi bi-facebook"></i></span>
                                    <span><i class="bi bi-twitter-x"></i></span>
                                    <span><i class="bi bi-instagram"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="card border-0">
                            <div className="card-body">
                                <h2 className="card-title">Quick Links</h2>
                                <ul className="list">
                                    <li><a href="/landing">Home</a></li>
                                    <li><a href="/forecast">Forecast</a></li>
                                    <li><a href="/live">About Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom mt-5">
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <img src={logobeach} alt="Your Logo" style={{ width: '100px' }} />
            </div>
        </div>
    </div>
</div>

        </footer>
    );
}

export default Footer;
