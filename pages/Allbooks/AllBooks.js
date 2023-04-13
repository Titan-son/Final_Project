import React from 'react'
import styles from './AllBooks.module.css'


export async function getStaticProps() {
    const res = await fetch('https://example-data.draftbit.com/books');
    const data = await res.json();

    const allAuthors = [...new Set(data.filter(book => book.authors).map(book => book.authors))];

    if (data.length === 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            data,
            allAuthors
        }
    }
}

export default function AllBooks({data}) {
    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <div className={styles.contain_all}>


            <div className={styles.category_All_Book}>
                <input type="search" />

                <div className={styles.div_category}>
                    <div className={styles.Title}>
                        <h2>Category</h2>
                    </div>
                    <div className={styles.category}>
                        <p>all</p>
                        <p>Classics</p>
                        <p>Fantasy</p>
                        <p>Young Adult</p>
                        <p>Humor</p>
                        <p>Fiction</p>
                        <p>Inspirational</p>
                    </div>

                    <div className={styles.Title}>
                        <h2>Author</h2>
                    </div>
                    <select>
                        <option></option>
                    </select>

                    <div className={styles.Title}>
                        <h2>Price</h2>
                    </div>

                </div>

            </div>

            <div className={styles.card_book}>
                {data.map((book, index) => (
                    <div key={index} className={styles.book_card}>
                        <img src={book.image_url} alt={book.title} className={styles.book_image} />
                        <h3>{book.title}</h3>
                        <p>{book.authors}</p>
                        <p>Rating: {book.rating}/5</p>
                    </div>
                ))}
            </div>

            </div>
            

        </div>
    )
}
