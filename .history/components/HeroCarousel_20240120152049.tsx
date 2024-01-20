
import "react-responive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const HeroCarousel = () => {
  return (
    <div>
        <Carousel>
            <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
            </div>
            <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
            </div>
            <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    </div>
  )
}

export default HeroCarousel