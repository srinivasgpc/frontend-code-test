import styled from "styled-components"
import { StyledSliderItem } from "./SliderItemStyles"

type SliderWrapperProps = {
  zoomFactor: number
  visibleSlides: number
}

type SliderProps = {
  visibleSlides: number
  transformValue: string
  zoomFactor: number
  slideMargin: number
  pageTransition: number
  ref: any
}

export const StyledSliderWrapper = styled.div<SliderWrapperProps>`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 80%;
  flex-direction: column;
  padding: ${(props) => (props.zoomFactor / props.visibleSlides) * 0.7 + "%"} 0;

  .button-wrapper {
    position: relative;
    width: 55px;
    height: 100%;
    top: 50px;
    padding: ${(props) => props.zoomFactor / 7 + "%"} 0;
    box-sizing: border-box;
  }

  .button {
    display: block;
    background: white;
    border: 2px solid black;
    top: 0;
    width: 100%;
    height: 100%;
    color: #000;
    font-size: 2rem;
    font-weight: 500;
    padding: 8px;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;

    :hover {
      opacity: 0.5;
    }
  }

  .back {
    left: 0;

    border-radius: 50%;
  }

  .forward {
    right: 0;
    border-radius: 50%;
  }
  .button-main {
    display: flex;
    position: relative;
    justify-content: flex-end;
    gap: 10px;
    right: 50px;
    top: 50px;
  }
  .dots-main {
    display: flex;
    position: relative;
    gap: 10px;
    justify-content: center;
  }
  .dot {
    cursor: pointer;
    padding: 3px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }
`

export const StyledSlider = styled.div<SliderProps>`
  display: flex;
  padding: 0 55px;
  transition: transform ${(props) => props.pageTransition}ms ease;

  :hover ${StyledSliderItem} {
    transform: translateX(${(props) => props.transformValue});
  }
`
