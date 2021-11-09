import React, { useEffect, Component } from "react"
import CarsData from "../../public/api/cars.json"
import Slider from "./Slider/index"
// import ArrowRight from "../../public/images/chevron-small.svg"

// const MyComponent = () => <ArrowRight />

type CarsTypes = {
  id: string
  modelName: string
  bodyType: string
  modelType: string
  imageUrl: string
  svg: string
}
const SliderProps = {
  zoomFactor: 10, // How much the image should zoom on hover in percent
  slideMargin: 10, // Margin on each side of slides
  maxVisibleSlides: 4,
  pageTransition: 500, // Transition when flipping pages
}
export const Cars: React.FC = () => {
  const [cars, setCars] = React.useState<CarsTypes[]>([])
  useEffect(() => {
    setCars(CarsData)
  }, [])

  return (
    <div className="layout">
      <Slider {...SliderProps}>{cars.map((car) => CarsComponent(car))}</Slider>
    </div>
  )
}
function CarsComponent(car: CarsTypes): JSX.Element {
  return (
    <div key={car.id}>
      <div>{car.bodyType.toLocaleUpperCase()}</div>
      <div className="car-info">
        <h4>{car.modelName}</h4>
        <span>{car.modelType}</span>
      </div>
      <img className="car-img" src={car.imageUrl} alt="car" />
      <div className="car-link">
        <div>
          Learn{" "}
          <span className="car-link-arrow">
            <img src={car.svg} width="15" height="10" />
          </span>
        </div>
        <div>
          Shop{" "}
          <span className="car-link-arrow">
            {" "}
            <img src={car.svg} width="15" height="10" />
          </span>
        </div>
      </div>
    </div>
  )
}
