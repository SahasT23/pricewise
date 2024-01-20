import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const heroImage = [
    { imgUrl: '/assets/images/her0-1' }
]

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