import React from 'react';
import '../styles/components/DreamTeamCarousel.module.scss';
import Picture1 from './../images/banner/dream-team1.png';
import Picture2 from './../images/banner/dream-team2.png';
import Picture3 from './../images/banner/dream-team3.png';

const DreamTeamCarousel = () => {
  return (
    <div className={"dream-team-carousel"}>
      <div className={"dream-team-item d-t-item-1"}
           style={{backgroundImage: `url(${Picture1}`}}></div>
      <div className={"dream-team-item d-t-item-2"}
           style={{backgroundImage: `url(${Picture2}`}}></div>
      <div className={"dream-team-item d-t-item-2"}
           style={{backgroundImage: `url(${Picture3}`}}></div>
    </div>
  );
};

export default DreamTeamCarousel;