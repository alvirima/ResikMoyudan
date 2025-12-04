import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import Hannah from "../../Assets/Hannah.JPG";
import Fatma from "../../Assets/Fatma.JPG";
import Rima from "../../Assets/Rima.JPG";
import Addin from "../../Assets/Addin.JPG";
import Alfi from "../../Assets/Alfi.JPG";
import Fasa from "../../Assets/Fasa.JPG";
import Oji from "../../Assets/Oji.JPG";
import Alex from "../../Assets/Alex.JPG";
import Ida from "../../Assets/Ida.JPG";
import Della from "../../Assets/Della.JPG";
import Rofi from "../../Assets/Rofi.JPG";
import Vinka from "../../Assets/Vinka.JPG";

const profiles = [
  {
    id: 1,
    name: "Fatimah Khoirun Nisa",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Fatma,
  },
  {
    id: 2,
    name: "Dinar Alvi Karima",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Rima,
  },
  {
    id: 3,
    name: "Azzahra Nur Addin Afeeanti",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Addin,
  },
  {
    id: 4,
    name: "Alfi Humaidi",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Alfi,
  },
  {
    id: 5,
    name: "Muhammad Andian Fasha",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Fasa,
  },
  {
    id: 6,
    name: "Ahmad Fauji",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Oji,
  },
  {
    id: 7,
    name: "Alex Tajudin Pane",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Alex,
  },
  {
    id: 8,
    name: "Ida Laelatul Kasanah",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Ida,
  },
  {
    id: 9,
    name: "Della Dana Ayu Lestari",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Della,
  },
  {
    id: 10,
    name: "Rofi Rusetyo",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Rofi,
  },
  {
    id: 11,
    name: "Vinka Diaz Rivea",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Vinka,
  },
  {
    id: 12,
    name: "Hannah Khairunnisa F.",
    major: "Informatika",
    uni: "UIN Sunan Kalijaga",
    image: Hannah,
  },
];

export default function ProfileSlider() {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.sliderWrapper}>
        {/* Custom CSS untuk Swiper */}
        <style>
          {`
             .mySwiper {
              width: 100%;
            }

            .swiper-slide {
              opacity: 1;
              transition: opacity 0.3s;
            }

            .swiper-slide-active {
              opacity: 1;
            }

            .swiper-pagination-bullet-active {
              background-color: #1b4d3e !important;
            }

            .swiper-button-next,
            .swiper-button-prev {
              color: #1b4d3e;
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
              font-size: 24px;
              font-weight: bold;
            }
          `}
        </style>

        <Swiper
          effect={"coverflow"}
          // grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={100}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          style={{ paddingBottom: "60px" }}
        >
          {profiles.map((profile) => (
            <SwiperSlide key={profile.id} style={styles.slideCard}>
              <div style={styles.cardContent}>
                <div style={styles.imageContainer}>
                  <img
                    src={profile.image}
                    alt={profile.name}
                    style={styles.image}
                  />
                </div>

                <h3 style={styles.name}>{profile.name}</h3>
                <p style={styles.major}>{profile.major}</p>
                <p style={styles.uni}>{profile.uni}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
  },
  sliderWrapper: {
    width: "100%",
    maxWidth: "1000px",
    padding: "0 20px",
  },
  slideCard: {
    width: "300px",
    height: "500px",
  },
  cardContent: {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    border: "1px solid #eaeaea",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "300px",
    marginBottom: "15px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  name: {
    fontSize: "21px",
    fontWeight: "700",
    color: "#1F4529",
    margin: "10px 0 5px 0",
  },
  major: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#4F7355",
    margin: "0",
  },
  uni: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#4F7355",
    marginTop: "4px",
  },
};
