import React from "react";
import HeroAboutUs from "../Components/HeroAboutUs/HeroAboutUs";
import KKNFullTeam from "../Components/kknFullTeam/kknFullTeam";
import AnggotaKKN from "../Components/AnggotaKKN/AnggotaKKN";
import Title from "../Components/Title/Title";

const AboutUs = () => {
  return (
    <div>
      <div>
        <Title title2="Resik Moyudan" />
        <HeroAboutUs />
      </div>
      <div>
        <Title title2="KKN Tematik UIN Sunan Kalijaga" />
        <KKNFullTeam />
      </div>
      <AnggotaKKN />
    </div>
  );
};

export default AboutUs;
