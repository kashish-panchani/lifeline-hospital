export default function Footer() {
    return (
        <footer className="bg-blue text-white pb-4 pt-5">
            <div className="container">
                <div className="row g-xl-5 g-md-4 g-3">
                    <div className="col-xl-3 col-md-6 mb-4">
                        <img src="assets/images/footer-logo.png" alt="Logo" className="img-fluid mb-3" />
                        <p className="font_14">
                            Completely promote interdependent systems for the latest updates on
                            medical news.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            <a href="#" className="social_icon">
                                <img src="assets/images/facebookicon.png" alt="" />
                            </a>
                            <a href="#" className="social_icon">
                                <img src="assets/images/instagramicon.png" alt="" />
                            </a>
                            <a href="#" className="social_icon">
                                <img src="assets/images/twittericon.png" alt="" />
                            </a>
                            <a href="#" className="social_icon">
                                <img src="assets/images/youtubeicon.png" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="font_20 mb-4 fw-bold">Important Links</h5>
                        <ul className="list-unstyled font_14">
                            <li className="mb-3">
                                <a href="#" className="text-white text-decoration-none">
                                    News
                                </a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-decoration-none">
                                    Review us
                                </a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-decoration-none">
                                    Patient and visitor guidelines
                                </a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white text-decoration-none">
                                    Visitor Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="font_20 mb-4 fw-bold">Contacts</h5>
                        <div className="d-flex gap-3 align-items-center mb-3 ">
                            <img src="assets/images/header/call.png" alt="" />
                            <p className="font_14 mb-0">
                                (237) 681-812-255
                            </p>
                        </div>
                        <div className="d-flex gap-3 align-items-center mb-3">
                            <img src="assets/images/header/sms.png" alt="" />
                            <p className="font_14 mb-0">
                                info@lifelinehospital.org
                            </p>
                        </div>
                        <div className="d-flex gap-3 align-items-center mb-3">
                            <img src="assets/images/header/location.png" alt="" />
                            <p className="font_14 mb-0">
                                Near Parkhot Hotel, Nani Khodiyar
                                <br />
                                Chokdi, Limbivali Rd, Anand, Gujarat 388001
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-4">
                        <h5 className="font_20 mb-4 fw-bold">Newsletter</h5>
                        <form>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control footer_input"
                                    placeholder="Enter your email address"
                                    aria-label="Email"
                                />
                                <span className="footer_input justify-content-center align-items-center text-white ms-0">
                                    <img src="assets/images/footer_emailicon.png" alt="" />
                                </span>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="text-center border_top pt-4 mt-4">
                    <p className="font_14 mb-0">© 2020 Lifeline All Rights Reserved by PNTEC-LTD</p>
                </div>
            </div>
        </footer>


    )
}