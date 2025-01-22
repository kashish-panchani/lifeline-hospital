
export default function Header() {
    return (
        <>
            <div className="top-header bg-blue text-white py-3">
                <div className="container">
                    <div className="row font_14">
                        <div className="col-md-9 col-6 left-section d-flex align-items-center gap-xl-5 gap-4">
                            <div className="d-flex gap-2 align-items-center">
                                <img src="assets/images/header/call.png" alt="" />
                                <span className="font-12 d-md-block d-none"> Appointment: +91 9904744631</span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <img src="assets/images/header/sms.png" alt="" />
                                <span className="font-12 d-md-block d-none"> Email: lifehospitalneuro.org</span>
                            </div>
                            <div className="d-flex gap-2 align-items-center">
                                <img src="assets/images/header/clock.png" alt="" />
                                <span className="font-12 d-md-block d-none"> OPD Time: 10:00 AM - 02:00 PM | 05:00 PM - 06:00 PM </span>
                            </div>
                        </div>
                        <div className="col-md-3 col-6 right-section d-flex justify-content-end align-items-center gap-4">
                            <a href="#"><img src="assets/images/whatsapp.png" alt="" /></a>
                            <a href="#"><img src="assets/images/facebookicon.png" alt="" /></a>
                            <a href="#"><img src="assets/images/instagramicon.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="assets/images/header/logo.svg" alt="Logo" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 text-lg-center gap-3 font_16 fw_semibold">
                            <li className="nav-item">
                                <a className="nav-link active text_skyblue" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Doctors</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-lg-flex d-none align-items-center gap-3">
                        <img src="assets/images/header/search-zoom-in.png" alt="Search" className="img-fluid" />
                        <button className="btn blue_btn" type="submit">Appointments</button>
                    </div>
                </div>
            </nav>
        </>

    );
}