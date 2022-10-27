import React, { useState } from 'react'
import './GalleryComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft,faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons' 
import { useSwipeable } from 'react-swipeable'
import CustomImage from '../Tools/CustomImage/CustomImage'

const GalleryComponent = ({galleyImages}) => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [openModal,setOpenModal] = useState(false)

    const handleOpenModal = (index) =>{
        setSlideNumber(index)
        setOpenModal(true)
    }

    const handleCloseModal = ()=>{
        setOpenModal(false)
    }
    const prevSlide = ()=>{
        slideNumber === 0 
        ? setSlideNumber(galleyImages.length-1) 
        : setSlideNumber(slideNumber-1)
    }
    const nextSlide = ()=>{
        slideNumber + 1 === galleyImages.length
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber+1)
    }
    const [stopScroll, setStopScroll] = useState(false);
    const handlers = useSwipeable({
        onSwipeStart: () => setStopScroll(true),
        onSwiped: () => setStopScroll(false)
    });

  return (
    <div>
        {openModal &&
            <div className='sliderWrap'>
                <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}/>
                <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide}/>
                <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide}/>
                <div className='fullscreenImage'>
                    <img src={galleyImages[slideNumber]} alt='' onClick={handleCloseModal} style={{ touchAction: stopScroll ? 'none' : 'auto' }}></img>
                </div>
            </div>
        }
        <div className='app__galleryWrap'>{
            galleyImages && galleyImages.map((slide,index) => {
                return(
                    <div className='single' key={`gallery_slide-${index+1}`}
                    onClick={ ()=> handleOpenModal(index)}>
                        <CustomImage src={slide} alt='slide' height={200} width={200}/>
                    </div>
                )
            })
        }

        </div>
    </div>
  )
}

export default GalleryComponent