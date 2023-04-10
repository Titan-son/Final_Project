import React from 'react'
import styles from './Community.module.css'
import {TiSocialFacebook,
    TiSocialTwitter,
    TiSocialInstagram,
    TiSocialLinkedin,
    TiSocialYoutube} from 'react-icons/ti';


export default function Community() {
  return (
    
    <div>
            <div className={styles.header_foot}>
                <div className={styles.card}>
                    <div className={styles.image_foot}></div>
                    <div className={styles.info_head}>
                        <h1>
                            Join Our Community
                        </h1>
                        <p>
                            Sign up & get 10% of your first books.
                        </p>
                        <div className={styles.zoneIpunt}>
                            <input placeholder='your email'/>
                            <button><span>subscribe</span></button>
                        </div>
                        <div className={styles.Logo_resaux}>
                            <div className={styles.icon}>
                                <TiSocialFacebook/>
                            </div>
                            <div className={styles.icon}>
                                <TiSocialTwitter/>
                            </div>
                            <div className={styles.icon}>
                                <TiSocialInstagram/>
                            </div>
                            <div className={styles.icon}>
                                <TiSocialLinkedin/>
                            </div>
                            <div className={styles.icon}>
                                <TiSocialYoutube/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
