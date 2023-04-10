import React from 'react'
import styles from './Footer.module.css'
import {AiFillHeart} from "react-icons/ai";
import {IoMdHelpBuoy} from "react-icons/io";
import {IoLogoBuffer} from "react-icons/io";

export default function Footer () {
  return (
    <>
    <footer>
        <div className={styles.contain_foot}> 
            <div className={styles.contain_info}>
                <div className={styles.information_book}>
                    <div className={styles.div_logo}>
                    <IoLogoBuffer/>
                    </div>
                    <div>
                        <span>Book information ?</span>
                        <p>¨Please send us an email at <a href="mailto:Support@gmail.com">Support@gmail.com</a></p>
                    </div>
                </div>
                <div className={styles.help}>
                    <div className={styles.div_logo}>
                        <IoMdHelpBuoy/>
                    </div>
                    <div>
                    <span>Need Help ?</span>
                    <p>Please call us at <a href="tel:+123456789">+123456789</a></p>
                    </div>
                    
                </div>
            
            </div>
            <div className={styles.hr_footer}>
                <hr />
            </div>
            
                <div className={styles.copyright}>
                    <div>Bookshelf</div>
                    <div> &copy; 2023 All rigth reserved. Made with love by <AiFillHeart/> ThemeAtelier</div>
                </div>
        </div>
    </footer>
    </>
  )
}
