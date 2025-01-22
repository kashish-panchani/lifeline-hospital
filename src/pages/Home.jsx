import React from "react";
import Header from "../component/Header";

import DynamicSwiper from "../component/DynamicSwiper";
import OurPartners from "../component/OurPartners";
import Footer from "../component/Footer";

export default function Home() {
    const facilitiesData = [
        { id: 1, name: 'Occupational Therapy', description: 'Hospital Facilities', img: "assets/images/Rectangle 84.png" },
        { id: 2, name: 'ICU', description: 'Hospital Facilities', img: "assets/images/Rectangle 85.png" },
        { id: 3, name: 'Special Room', description: 'Hospital Facilities', img: "assets/images/Rectangle 86.png" },
        { id: 4, name: 'OPD', description: 'Hospital Facilities', img: "assets/images/Rectangle 87.png" },
    ];
    const cardData = [
        {
            id: 1,
            title: "Neurology",
            icon: "assets/images/Mask group.png",
            description:
                "Our neurology services provide expert care for a wide range of conditions, including migraines, epilepsy, stroke, multiple sclerosis, and movement disorders like Parkinson’s disease.",
        },
        {
            id: 2,
            title: "Neuro Surgery",
            icon: "assets/images/Mask group (1).png",
            description:
                "Our neurosurgery services specialize in advanced surgical care for conditions affecting the brain, spine, and nervous system.",
        },
        {
            id: 3,
            title: "Neuro ICU",
            icon: "assets/images/Mask group (2).png",
            description:
                "Our Neuro ICU provides specialized, round-the-clock care for critically ill patients with severe neurological and neurosurgical conditions.",
        },

        {
            id: 4,
            title: "Neuro Rehabilitation",
            icon: "assets/images/Mask group (3).png",
            description:
                "Our Neuro Rehabilitation services focus on helping patients recover and regain independence after neurological injuries or conditions such as stroke, traumatic brain injury, or spinal cord disorders.",
        },
        {
            id: 5,
            title: "Trauma Care",
            icon: "assets/images/Mask group (4).png",
            description:
                "Our Trauma Care services provide rapid, lifesaving treatment for critical injuries, including head, spine, and neurological trauma.",
        },
        {
            id: 6,
            title: "Orthopedic",
            icon: "assets/images/Mask group (5).png",
            description:
                "Our Orthopaedic services offer expert care for a wide range of bone, joint, and muscle conditions, including fractures, arthritis, and sports injuries.",
        },
        {
            id: 7,
            title: "Pain Management",
            icon: "assets/images/Mask group (6).png",
            description:
                "Our Pain Management services provide comprehensive care for chronic and acute pain conditions, using advanced techniques such as nerve blocks, injections, and minimally invasive procedures.",
        },
        {
            id: 8,
            title: "Physiotherapy",
            icon: "assets/images/Mask group (7).png",
            description:
                "Our Physiotherapy services are designed to restore mobility, strength, and function through personalized exercise programs and therapeutic techniques.",
        },
        {
            id: 9,
            title: "Pathology",
            icon: "assets/images/Mask group (8).png",
            description:
                "Our Pathology services provide accurate and timely diagnostic testing to support effective medical care.",
        },
    ];

    return (
        <>
            <Header />
            <section className="hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="mb-md-4 mb-3">
                                <span className="text-uppercase font_12 bg-gray text_blue fw-bold">caring for life</span>
                            </div>
                            <h1 className="main_heading text-capitalize text_blue">
                                your <span className="text_skyblue">trusted partner</span> in complete neurological health care!
                            </h1>
                            <button className="btn blue_btn mt-3">Read More</button>
                        </div>

                    </div>

                    <div className="row mt-xl-5 g-2">
                        <div className="col-md-4">
                            <div className="appointment-box d-flex justify-content-between align-items-center bg-blue">
                                <p className="font_16 mb-0">Online Appointment</p>
                                <img src="assets/images/hero/calendar.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="appointment-box d-flex justify-content-between align-items-center bg-skyblue">
                                <p className="font_16 mb-0">Online Consultation</p>
                                <img src="assets/images/hero/user-tag.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="appointment-box d-flex justify-content-between align-items-center bg-blue">
                                <p className="font_16 mb-0">Online Payment</p>
                                <img src="assets/images/hero/monitor-mobbile.png" alt="" className="img-fluid" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg_light section_space mt-lg-3 mt-md-4">
                <div className="container">
                    <div className="row g-xl-5 g-4 align-items-center">
                        <div className="col-lg-6">
                            <img src="assets/images/Group 203.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-xl-4 mb-3">
                                <span className="text-uppercase font_12 bg-gray text_blue fw-bold">caring for life</span>
                            </div>
                            <h2 className="sub_heading text_blue mb-xl-4 mb-3">A Great Place to Receive Neurological Care</h2>
                            <p className="font_14">At Life Line Hospital, we take pride in being a premier destination for neurological care. Our team of experienced neurologists, neurosurgeons, and specialized staff are dedicated to providing comprehensive care for a wide range of neurological conditions. Equipped with state-of-the-art technology and innovative treatment methods, we strive to deliver accurate diagnoses and effective, personalizeovative treatment methods, we strive to deliver accurate diagnoses and effective, personalized treatment plans.</p>
                            <p className="font_14">We prioritize compassion, ensuring every patient feels heard and supported throughout their journey to better health. From the moment you walk through our doors, you'll experience a welcoming environment designed to promote healing and comfort. Trust us to be your partner in achieving optimal neurological health.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg py-lg-0 py-md-5 py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="text-box">
                                <div className="mb-xl-4 mb-3">
                                    <span className="text-uppercase font_12 bg-gray text_blue fw-bold">A Great Place to Receive Neurological Care</span>
                                </div>
                                <h2 className="sub_heading text_blue">
                                    Meet Your <span className="text_skyblue">Neurological</span> Health
                                    Partner
                                </h2>
                                <p className="font_14">
                                    Life Line Hospital in Anand is one of the leading businesses in the
                                    Neurosurgeons. Also known for Hospitals, Orthopedic Doctors,
                                    Neurologists, Neurosurgeons, Orthopedic Hospitals, ...
                                </p>
                                <div className="d-flex">
                                    <button className="btn blue_btn mt-3">Read More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-center">
                            <div className="text-white">
                                <div className="position-relative top-50 translate-middle z-1">
                                    <img
                                        src="assets/images/doctor.png"
                                        alt="Doctor"
                                        className="img-fluid doctor_img"
                                    />
                                </div>
                                <div
                                    className="text-center counters"
                                >
                                    <div className="mb-xl-5 mb-md-4 m-3">
                                        <h3 className="font_48 fw-bold mb-0">35000+</h3>
                                        <p className="mb-3 font_16">Happy Patients</p>
                                    </div>
                                    <div className="mb-xl-5 mb-md-4 m-3">
                                        <h3 className="font_48 fw-bold mb-0">10,000+</h3>
                                        <p className="mb-3 font_16">Saved Lives</p>
                                    </div>
                                    <div className="mb-xl-5 mb-md-4 m-3">
                                        <h3 className="font_48 fw-bold mb-0">15+</h3>
                                        <p className="font_16">Years of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section_space bg_light">
                <div className="container">
                    <div className="mb-xl-4 mb-3 d-flex justify-content-center">
                        <span className="text-uppercase font_12 bg-gray text_blue fw-bold">Care you can believe in</span>
                    </div>
                    <h2 className="sub_heading text-center text_blue mb-xl-5 mb-md-4 m-3">We Provide Various Directions</h2>
                    <div className="row g-3">
                        {cardData.map((card) => (
                            <div key={card.id} className="col-lg-4 col-md-6">
                                <div className="card-bg">
                                    <div className="">
                                        <div className="d-flex align-items-center gap-4 mb-3">
                                            <div className="icon_bg">
                                                <img src={card.icon} alt={card.title} className="mr-3" />
                                            </div>
                                            <h4 className="font_20">{card.title}</h4>
                                        </div>
                                        <p className="font_14 truncated-text">{card.description}</p>
                                        <hr className="hr_border" />
                                        <div className="d-flex align-items-center gap-2">
                                            <a href="#" className="text_skyblue font_14 text-decoration-none">
                                                Read More
                                            </a>
                                            <img src="assets/images/arrow-right.png" alt="" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="section_space">
                <div className="container">
                    <div className="mb-xl-4 mb-3 d-flex justify-content-center">
                        <span className="text-uppercase font_12 bg-gray text_blue fw-bold">Facilities we have</span>
                    </div>
                    <h2 className="sub_heading text-center text_blue mb-xl-5 mb-md-4 m-3">What Facilities We Provide</h2>
                    <div className="row g-3">
                        {facilitiesData.map((facility) => (
                            <div className="col-lg-3 col-md-6" key={facility.id}>
                                <div className="bg_light Facilities_card">
                                    <div className="mb-3">
                                        <img src={facility.img} alt="" className="img-fluid" />
                                    </div>
                                    <p className="font_14 text_blue mb-2">{facility.description}</p>
                                    <h5 className="font_20">{facility.name}</h5>
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn blue_btn mt-4 ">Read More</button>
                    </div>
                </div>
            </section>
            <DynamicSwiper />

            <OurPartners />

        <section className="section_space bg_light">
  <div className="container">
    <div className="contact_box">
      <div className="row gx-5 align-items-center">
        <div className="col-lg-5  p-lg-0">
          <img
            src="assets/images/contact.png"
            alt="Contact"
            className="img-fluid w-100 rounded contact-img"
          />
        </div>

        <div className="col-lg-7">
          <div className="appointment_box">
            <div className="mb-xl-4 mb-3">
              <span className="text-uppercase font_12 bg-gray text_blue fw-bold">
                Appointment
              </span>
            </div>
            <h2 className="sub_heading text_blue mb-xl-4 mb-3">
              Make an Online Appointment <br className="d-lg-block d-none" />
              Booking
            </h2>
            <div className="row g-4">
              <div className="col-md-6 mt-3">
                <input
                  type="text"
                  className="form-control bg-transparent input_border"
                  placeholder="Your Name*"
                />
              </div>
              <div className="col-md-6 mt-3">
                <input
                  type="email"
                  className="form-control bg-transparent input_border"
                  placeholder="Your Email*"
                />
              </div>
              <div className="col-md-6 mt-3">
                <input
                  type="text"
                  className="form-control bg-transparent input_border"
                  placeholder="Subject*"
                />
              </div>
              <div className="col-md-6 mt-3">
                <input
                  type="number"
                  className="form-control bg-transparent input_border"
                  placeholder="Phone"
                />
              </div>
              <div className="col-12 mt-3">
                <textarea
                  className="form-control bg-transparent input_border w-100"
                  placeholder="Type Your Message"
                ></textarea>
              </div>
            </div>
            <button className="btn blue_btn mt-xl-5 mt-4">Send Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


            <section className="section_space bg_light">
                <div className="container">
                    <div className="mb-xl-4 mb-3 d-flex justify-content-center">
                        <span className="text-uppercase font_12 bg-gray text_blue fw-bold">Our News</span>
                    </div>
                    <h2 className="sub_heading text-center text_blue mb-xl-5 mb-md-4 m-3">See Our Latest News & Events</h2>
                    <div className="row g-3 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="new_card">
                                <img src="assets/images/news1.png" alt="" className="img-fluid mb-3" />
                                <p className="font_14 text_grey mb-2">November 10, 2024</p>
                                <h5 className="font_20 text_blue mb-3">Heart Failure Treatment: High
                                    Blood Pressure</h5>
                                <p className="font_14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in...</p>
                                <div className="d-flex align-items-center gap-2">
                                    <a href="#" className="text_skyblue font_14 text-decoration-none">
                                        Read More
                                    </a>
                                    <img src="assets/images/arrow-right.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="new_card">
                                <img src="assets/images/new2.png" alt="" className="img-fluid mb-3" />
                                <p className="font_14 text_grey mb-2">November 10, 2024</p>
                                <h5 className="font_20 text_blue mb-3">Heart Failure Treatment: High
                                    Blood Pressure</h5>
                                <p className="font_14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in...</p>
                                <div className="d-flex align-items-center gap-2">
                                    <a href="#" className="text_skyblue font_14 text-decoration-none">
                                        Read More
                                    </a>
                                    <img src="assets/images/arrow-right.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="new_card">
                                <img src="assets/images/news3.png" alt="" className="img-fluid mb-3" />
                                <p className="font_14 text_grey mb-2">November 10, 2024</p>
                                <h5 className="font_20 text_blue mb-3">Heart Failure Treatment: High
                                    Blood Pressure</h5>
                                <p className="font_14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor augue. Velit nascetur proin massa in...</p>
                                <div className="d-flex align-items-center gap-2">
                                    <a href="#" className="text_skyblue font_14 text-decoration-none">
                                        Read More
                                    </a>
                                    <img src="assets/images/arrow-right.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}    