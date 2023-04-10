    import Carousel from 'react-bootstrap/Carousel';
    import "bootstrap/dist/css/bootstrap.min.css";
    import Image from 'next/image';
    import styles from './caroussel.module.css'


export default function Caroussel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image
          className={styles.image_carousel} 
          src="/img/heroCarrousel/01.png"
          alt="First slide"
          width={300}
          height={500}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Image
          className={styles.image_carousel} 
          src="/img/heroCarrousel/02.png"
          alt="First slide"
          width={300}
          height={500}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
          className={styles.image_carousel} 
          src="/img/heroCarrousel/03.png"
          alt="First slide"
          width={300}
          height={500}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
