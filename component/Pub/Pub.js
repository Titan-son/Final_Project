import styles from './Pub.module.css'
import Image from 'next/image'
import img1 from '../../public/img/saleUp/01.jpg'
import img2 from '../../public/img/saleUp/02.jpg'


export default function Pub(){
    return(
    <div className={styles.Div_pub}>
        <div className={styles.Card}>
            <div className={styles.CardsImage}>
                <Image src={img1}/>
            </div>
            <div className={styles.pub_ecrit}>
                <p>Sale Up To 15%</p>
                <h3>Innovation in Education (Hardcover)</h3>
                <div>
                    <p>Starting at: </p>
                    <span>$65.09</span>
                </div>

            </div>
            <div>

            </div>

        </div>
        <div className={styles.Card}>
            <div className={styles.CardsImage}>
                <Image src={img2}/>
            </div>
            <div className={styles.pub_ecrit}>
                <p>Sale Up To 15%</p>
                <h3>Innovation in Education (Hardcover)</h3>
                <div>
                    <p>Starting at: </p>
                    <span>$65.09</span>
                </div>

            </div>
            <div>

            </div>

        </div>
    </div>
    )
}