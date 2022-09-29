import React, {Children, cloneElement, useEffect, useState} from 'react';
import '../styles/components/DreamTeamCarousel.scss';
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
import ArrowLeft from "./../images/banner/arrowLeft.png"
import ArrowRight from "./../images/banner/arrowRight.png";


const PICTURES_WIDTH = 730

const DreamTeamCarousel = ({ children }) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)


  const handleLeftArrowClick = () => {
    console.log('handleLeftArrowClick');

    setOffset((currentOffset) => {

      const newOffset = currentOffset + PICTURES_WIDTH

      console.log(newOffset)
      return newOffset
    })
  }

  const handleRightArrowClick = () => {
    console.log('handleRightArrowClick');

    setOffset((currentOffset) => {

      const newOffset = currentOffset - PICTURES_WIDTH

      console.log(newOffset)
      return newOffset
    })
  }

  useEffect(() => {
    setPages(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: '100%',
            // minWidth: '100%',
            // maxWidth: '100%',
            minWidth: `${PICTURES_WIDTH}px`,
            maxWidth: `${PICTURES_WIDTH}px`,
          },
        })
      })
    )
  }, [])

  return (
    <div className={"carousel-main-container"}>
      <img src={ArrowLeft} className="arrow arrowLeft" onClick={handleLeftArrowClick}/>

      <div className={"dream-team-window"}>
        <div className={"dream-team-all-pictures"}
        style={{
          transform: `translateX(${offset})`
        }}
        >{pages}</div>
      </div>

      <img src={ArrowRight} className="arrow arrowRight" onClick={handleRightArrowClick}/>
    </div>
  );
};

export default DreamTeamCarousel;