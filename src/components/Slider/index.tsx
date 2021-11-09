import React, { useState, useEffect, useRef } from "react"
// Components
import SliderItem from "./SliderItem"
// Styles
import { StyledSliderWrapper, StyledSlider } from "./SliderStyles"
// Types
type SliderProps = {
  children?: any
  zoomFactor: number
  slideMargin: number
  maxVisibleSlides: number
  pageTransition: number
}

const numberOfSlides = (maxVisibleSlides: number, windowWidth: number) => {
  if (windowWidth > 1200) return maxVisibleSlides
  if (windowWidth > 992) return 4
  if (windowWidth > 768) return 3
  return 1
}

const Slider: React.FC<SliderProps> = ({ children, zoomFactor, slideMargin, maxVisibleSlides, pageTransition }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [transformValue, setTransformValue] = useState(`-${zoomFactor / 2}%`)
  const [scrollSize, setScrollSize] = useState(0)

  const sliderRef = React.useRef() as React.MutableRefObject<HTMLInputElement>

  const visibleSlides = numberOfSlides(maxVisibleSlides, scrollSize)
  // Pages start at 0, therefore -1 at the end here
  const totalPages: number = Math.ceil(children.length / visibleSlides) - 1

  useEffect(() => {
    //@ts-ignore
    const resizeObserver = new ResizeObserver((entries) => {
      setScrollSize(entries[0].contentRect.width)
    })
    const { current } = sliderRef
    resizeObserver.observe(current)
  }, [sliderRef])

  // Position slider on resize
  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      if (currentPage > totalPages) setCurrentPage(totalPages)
      sliderRef.current.style.transform = `translate3D(-${currentPage * scrollSize}px, 0, 0)`
    }
  }, [sliderRef, currentPage, scrollSize, totalPages])

  // Have to disable hover effect on slides when flipping page
  // Otherwise it will look ugly when mouse hovers over the slides
  const disableHoverEffect = () => {
    if (sliderRef.current) sliderRef.current.style.pointerEvents = "none"
    setTimeout(() => {
      if (sliderRef.current) sliderRef.current.style.pointerEvents = "all"
    }, pageTransition)
  }

  const handleSlideMove = (forward: boolean) => {
    disableHoverEffect()
    setCurrentPage(currentPage + (forward ? 1 : -1))

    if (sliderRef.current) sliderRef.current.style.transform = `translate3D(-${(currentPage + (forward ? 1 : -1)) * scrollSize}px, 0, 0)`
  }

  const handleDotMove = (move: number) => {
    disableHoverEffect()
    setCurrentPage(move)
    if (sliderRef.current) sliderRef.current.style.transform = `translate3D(-${move * scrollSize}px, 0, 0)`
  }

  const handleMouseOver = (id: number) => {
    if (id % visibleSlides === 1) setTransformValue("0%") // left
    if (id % visibleSlides === 0) setTransformValue(`-${zoomFactor}%`) // right
  }

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`)
  }

  const assignSlideClass = (index: number, visibleSlides: number) => {
    const classes = ["right", "left"]
    return classes[index % visibleSlides] || ""
  }

  return (
    <StyledSliderWrapper zoomFactor={zoomFactor} visibleSlides={visibleSlides}>
      <StyledSlider visibleSlides={visibleSlides} transformValue={transformValue} zoomFactor={zoomFactor} slideMargin={slideMargin} pageTransition={pageTransition} ref={sliderRef}>
        {children.map((child: any, i: any) => (
          <SliderItem key={i} slideMargin={slideMargin} visibleSlides={visibleSlides} zoomFactor={zoomFactor} slideClass={assignSlideClass(i + 1, visibleSlides)} id={i + 1} callback={handleMouseOver} callbackOut={handleMouseOut}>
            {child}
          </SliderItem>
        ))}
      </StyledSlider>
      {scrollSize > 728 && (
        <div className="button-main">
          <div className="button-wrapper back" onClick={() => handleSlideMove(false)}>
            <button disabled={currentPage < 0} className="button back">
              &#8249;
            </button>
          </div>

          <div className="button-wrapper forward" onClick={() => handleSlideMove(true)}>
            <button disabled={currentPage === totalPages} className="button forward">
              &#8250;
            </button>
          </div>
        </div>
      )}
      {scrollSize < 728 && (
        <div className="dots-main">
          {children.map((child: any, i: any) => (
            <div onClick={() => handleDotMove(i)} key={i} className="dot" style={{ backgroundColor: currentPage === i ? "black" : "lightgray" }}></div>
          ))}{" "}
        </div>
      )}
    </StyledSliderWrapper>
  )
}

export default Slider
