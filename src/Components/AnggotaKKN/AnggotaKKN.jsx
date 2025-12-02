import React, { useState } from "react";
import "./AnggotaKKN.css";
import Next from "../../assets/Next.svg";
import Preview from "../../assets/Preview.svg";
// import buArifah from "../../Assets/buArifah.png";
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

const data = [
  {
    img: Hannah,
    nama: "Hannah Khairunnisa F.",
    jurusan: "Informatika",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Fatma,
    nama: "Fatimah Khoirun Nisa",
    jurusan: "Informatika",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Rima,
    nama: "Dinar Alvi Karima",
    jurusan: "Informatika",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Addin,
    nama: "Azzahra Nur Addin A.",
    jurusan: "Informatika",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Alfi,
    nama: "Alfi Humaidi",
    jurusan: "Teknik Industri",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Fasa,
    nama: "Muhammad Andian Fasha",
    jurusan: "Teknik Industri",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Oji,
    nama: "Ahmad Fauji",
    jurusan: "Kimia",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Alex,
    nama: "Alex Tajudin Pane",
    jurusan: "Teknik Industri",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Ida,
    nama: "Ida Laelatul Kasanah",
    jurusan: "Kimia",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Della,
    nama: "Della Dana Ayu Lestari",
    jurusan: "Teknik Industri",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Rofi,
    nama: "Rofi Rusetyo",
    jurusan: "Teknik Industri",
    kampus: "UIN Sunan Kalijaga",
  },
  {
    img: Vinka,
    nama: "Vinka Diaz Rivea",
    jurusan: "Pendidikan Biologi",
    kampus: "UIN Sunan Kalijaga",
  },
];

const AnggotaKKN = () => {
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 350;
  const VISIBLE_CARD = 3;

  const next = () => {
    if (index < data.length - 3) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="anggota">
      {/* <img src={buArifah} alt="" className="dosen"/> */}
      {/* <h1>Anggota KKN UIN Sunan Kalijaga</h1> */}
      <button className="nav left" onClick={prev}>
        ❮
      </button>
      <div className="anggota-carousel">
        <div
          className="anggota-track"
          style={{ transform: `translateX(-${index * 340}px)` }}
        >
          {data.map((item, i) => (
            <div className="anggota-card" key={i}>
              <img src={item.img} alt={item.nama} />
              <h3>{item.nama}</h3>
              <h4 className="jurusan">{item.jurusan}</h4>
              <p className="kampus">{item.kampus}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="nav right" onClick={next}>
        ❯
      </button>
    </div>
  );
};

export default AnggotaKKN;
