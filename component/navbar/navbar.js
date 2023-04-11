import styles from './navbar.module.css'
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";



export default function Navbar() {

    const CloseButton = ({ onClick }) => (
        <div className= {styles.close_button} onClick={onClick}>
            <RxCross2/>
            <div className={styles.close_line + styles.close_line_1} />
            <div className={styles.close_line + styles.close_line_2} />
        </div>
    );

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [isOpenFavoris, setIsOpenFavoris] = useState(false);

    const toggleFavoris = () => {
        setIsOpenFavoris(!isOpenFavoris);
    };

    return (
        <div className={styles.nav}>
            <div className={styles.Title}>
                <div className={styles.burger_icon} onClick={toggleMenu}>
                    <div />
                    <div />
                    <div />
                </div>
                <div className={isOpen ? styles.menu + ' ' + styles.open : styles.menu}>
                    <div className={styles.zone_titre}>
                        <h2>BOOKSHELF.</h2>
                        <CloseButton onClick={toggleMenu} />
                    </div>

                    <a className={styles.menu_item} onClick={toggleMenu}>Bookshelf Minimal</a>
                    <a className={styles.menu_item} onClick={toggleMenu}>Bookshelf Modern</a>
                    <a className={styles.menu_item} onClick={toggleMenu}>Bookshelf Classic</a>
                    <a className={styles.menu_item} onClick={toggleMenu}>All Books</a>
                </div>
                <h2>BOOKSHELF.</h2>
            </div>
            
            <div className={styles.header_search}>
                <form className={styles.search_form}>
                    <span className={styles.header_search_icon}>
                    <HiOutlineMagnifyingGlass/>
                    </span>
                    <input className={styles.input_search} type="text" placeholder="Search your book here"></input>
                </form>

            </div>

            <div className={styles.number_phone}>
                <span>
                    <FiPhoneCall className={styles.logo}/>
                </span>
                <a href="tel:+33711223344"> 07 11 22 33 44</a>
                <span onClick={toggleFavoris}>
                    <AiFillHeart  className={styles.logo2}/>
                </span>
                <div className={isOpenFavoris ? styles.favoris + ' ' + styles.open : styles.favoris}>
                    <div className={styles.zone_titre}>
                        <h2>FAVORIS</h2>
                        <CloseButton onClick={toggleFavoris} />
                    </div>

                </div>
                
            </div>
        </div>
    )
}