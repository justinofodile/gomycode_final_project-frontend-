import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FaLocationDot } from "react-icons/fa6";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photes = [
    {
      src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/hotelier-images/a6/f5/a12e763cb9963aefdd43f9bec67b47015b7efb4c4c8dda1e3124fbbb3e65.jpeg",
    },
    {
      src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/hotelier-images/a2/42/e1e7fe3dd05dc3f11e46d6c92fc046ffa8a43bd7e551f760160c418ca9f4.jpeg",
    },
    {
      src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/hotelier-images/10/d9/62bd7b8d144f74bbaa4aa914325f6cce58adc50a3499bf5afb3107eb14f4.jpeg",
    },
    {
      src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/hotelier-images/9e/23/dec06835a81ce217f885e5e00f90b12ebcf2d80c8f0c9ffdf1580cee09e2.jpeg",
    },
    {
      src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/hotelier-images/52/f0/0443def284ca6c7d6e95ac073535977441a872a72278f3c1a0a99c0a1d22.jpeg",
    },
    {
      src: "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/hotelier-images/0d/35/6c124948f1ea64b2deb195ba6f4bec3ddc13e25b010ca4a38a5cf7d37986.jpeg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "l") {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSliderNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <IoMdCloseCircle className="close" onClick={() => setOpen(false)} />
            <FaArrowAltCircleLeft
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photes[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FaArrowAltCircleRight
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FaLocationDot />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photes.map((photo, i) => (
              <div className="hotelImgWrapper" key={photo.src}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis dolorum qui, amet ea necessitatibus quidem asperiores
                molestiae adipisci quis fugit dicta? Perferendis consequuntur
                nulla velit vel odit minima earum at. Nostrum pariatur vel cum
                nihil nemo eaque, distinctio nulla sed minus hic ullam fugiat
                quasi a repellendus. Suscipit esse voluptate sunt soluta eveniet
                inventore corporis. Voluptatibus porro quod alias aliquam.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
