import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Ross Salge",
        image: "assets/images/ross.png",
        review:
            `"I received outstanding care during my treatment. The doctors and staff were incredibly supportive, and the personalized attention I received made all the difference in my recovery. I truly felt like I was in the best hands."`,
        stars: 5,
    },
    {
        name: "Omkar Patel",
        image: "assets/images/omkar.png",
        review:
            `"I received outstanding care during my treatment. The doctors and staff were incredibly supportive, and the personalized attention I received made all the difference in my recovery. I truly felt like I was in the best hands."`,
        stars: 5,
    },
    {
        name: "Hannah Collins",
        image: "assets/images/hannah.png",
        review:
            `"I received outstanding care during my treatment. The doctors and staff were incredibly supportive, and the personalized attention I received made all the difference in my recovery. I truly felt like I was in the best hands."`,
        stars: 5,
    },
    {
        name: "Jessica Santosh",
        image: "assets/images/jassica.png",
        review:
            `"I received outstanding care during my treatment. The doctors and staff were incredibly supportive, and the personalized attention I received made all the difference in my recovery. I truly felt like I was in the best hands."`,
        stars: 5,
    },
    {
        name: "Omkar Patel",
        image: "assets/images/omkar.png",
        review:
            `"I received outstanding care during my treatment. The doctors and staff were incredibly supportive, and the personalized attention I received made all the difference in my recovery. I truly felt like I was in the best hands."`,
        stars: 5,
    },
];

export default function OurPartners() {
    return (
        <section className="section_space">
            <div className="container">
                <div className="mb-3 d-flex justify-content-center">
                    <span className="text-uppercase font_12 bg-gray text_blue fw-bold">Our patients</span>
                </div>
                <h2 className="sub_heading text-center text_blue mb-xl-5 mb-3">Our Patients Say Happily About Us !</h2>
                <Swiper
                    modules={[Navigation, Pagination,Autoplay]}
                    spaceBetween={18}
                    slidesPerView={4}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        769: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial-card bg_light Facilities_card mb-5 position-relative">
                                <div className="testimonial-image position-relative">
                                    <img
                                        src={testimonial.image}
                                        className="img-fluid w-100"
                                        alt="testimonial"
                                        style={{ borderRadius: "10px" }}
                                    />
                                    <div className="gradient-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center patients position-absolute bottom-0 w-100 p-3">
                                    <img src="assets/images/play.png" alt="play" className="play-icon ms-2" />
                                    <div className="text-end me-2">
                                        <h5 className="font_16 mb-0 text-white">{testimonial.name}</h5>
                                        <img src="assets/images/stars.png" alt="stars" />
                                    </div>
                                </div>
                                <p className="font_14 fw-normal mt-3">{testimonial.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
