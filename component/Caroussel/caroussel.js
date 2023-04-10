import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';
import styles from './caroussel.module.css'


export default function Caroussel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000000} >
        <div className={styles.contain_carousel}>

          <div className={styles.carrousel_text}>
            <div>
              <p className={styles.mini_titre}>let's Make the best investment</p>
              <h1>There is no friend as Loyal as a book</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <button className={styles.carrousel_bouton}> <span>Shop Now</span></button>
            </div>
          </div>
          <div className={styles.carrousel_img}>
            <Image
              className={styles.image_carousel}
              src="/img/heroCarrousel/01.png"
              alt="First slide"
              width={400}
              height={500}
            />
          </div>

        </div>

      </Carousel.Item>
      <Carousel.Item interval={1000000}>
      <div className={styles.contain_carousel}>

<div className={styles.carrousel_text}>
  <div>
    <p className={styles.mini_titre}>let's Make the best investment</p>
    <h1>There is no friend as Loyal as a book</h1>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    <button className={styles.carrousel_bouton}> <span>Shop Now</span></button>
  </div>
</div>
<div className={styles.carrousel_img}>
  <Image
    className={styles.image_carousel2}
    src="/img/heroCarrousel/02.png"
    alt="Second slide"
    width={350}
    height={500}
  />
</div>

</div>

      </Carousel.Item>
      <Carousel.Item>
      <div className={styles.contain_carousel}>

<div className={styles.carrousel_text}>
  <div>
    <p className={styles.mini_titre}>let's Make the best investment</p>
    <h1>There is no friend as Loyal as a book</h1>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    <button className={styles.carrousel_bouton}> <span>Shop Now</span></button>
  </div>
</div>
<div className={styles.carrousel_img}>
  <Image
    className={styles.image_carousel}
    src="/img/heroCarrousel/03.png"
    alt="Thirt slide"
    width={400}
    height={500}
  />
</div>

</div>

      </Carousel.Item>

      <Carousel.Item>
      <div className={styles.contain_carousel}>

<div className={styles.carrousel_text}>
  <div>
    <p className={styles.mini_titre}>let's Make the best investment</p>
    <h1>There is no friend as Loyal as a book</h1>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    <button className={styles.carrousel_bouton}> <span>Shop Now</span></button>
  </div>
</div>
<div className={styles.carrousel_img}>
  <Image
    className={styles.image_carousel}
    src="/img/heroCarrousel/04.png"
    alt="Thirt slide"
    width={350}
    height={500}
  />
</div>

</div>

      </Carousel.Item>
    </Carousel>
  );
}
