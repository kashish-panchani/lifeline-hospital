import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const slideData = [
    {
        imgSrc: "assets/images/iso.png",
        title: "ISO",
        text: "The ISO standards provide a guarantee of quality across boundaries and geographies. Amrita Hospital in Kochi is accredited with ISO 9001:2015 standards...",
    },
    {
        imgSrc: "assets/images/india.png",
        title: "National Assessment & Accreditation Council",
        text: "The NAAC Conducts assessment and Accreditation of Higher Educational...",
    },
    {
        imgSrc: "assets/images/cetificate.png",
        title: "National Accreditation Board of Testing",
        text: "The National Accreditation Board of Testing and Calibration Laboratories (NABL) is a board that operates under...",
    },
    {
        imgSrc: "assets/images/india.png",
        title: "National Assessment & Accreditation Council",
        text: "The NAAC Conducts assessment and Accreditation of Higher Educational...",
    },
];

export default function DynamicSwiper() {
    return (
        <section className="section_space bg_light">
            <div className="container">
                <div className="row align-items-center mb-xl-4 mb-1">
                    <div className="col-md-7">
                        <div className="mb-xl-4 mb-3">
                            <span className="text-uppercase font_12 bg-gray text_blue fw-bold">Reasons to trust</span>
                        </div>
                        <h2 className="sub_heading text_blue mb-xl-5 mb-3">Accreditations & Certifications</h2>
                    </div>
                    <div className="col-md-5">
                        <div className="d-md-flex d-none gap-2 justify-content-end align-items-center">
                            <div className="btn_about_prev swiper-button-about-prev">
                                <img src="assets/images/prev.png" alt="Previous" />
                            </div>
                            <div className="btn_about_next swiper-button-about-next">
                                <img src="assets/images/next.png" alt="Next" />
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    loop={true}
                    slidesPerView={3}
                    navigation={{
                        nextEl: '.swiper-button-about-next',
                        prevEl: '.swiper-button-about-prev',
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {slideData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="card-bg swiper_card">
                                <img src={slide.imgSrc} alt={slide.title} className="mb-3" />
                                <h5 className="font_20 text_blue mb-3">{slide.title}</h5>
                                <p className="font_14 ">{slide.text}</p>
                                <hr className="hr_border" />
                                <div className="d-flex align-items-center gap-2">
                                    <a href="" className="text_skyblue font_14 text-decoration-none">
                                        Read More
                                    </a>
                                    <img src="assets/images/arrow-right.png" alt="Arrow" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className="d-flex d-md-none gap-2 justify-content-center mt-5 align-items-center">
                    <div className="btn_about_prev swiper-button-about-prev">
                        <img src="assets/images/prev.png" alt="Previous" />
                    </div>
                    <div className="btn_about_next swiper-button-about-next">
                        <img src="assets/images/next.png" alt="Next" />
                    </div>
                </div>
            </div>
        </section>
    );
}
