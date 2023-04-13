import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from './book.module.css'

const BookDetails = () => {
    const router = useRouter();
    const { bookId } = router.query;
    const [bookDetails, setBookDetails] = useState(null);



    useEffect(() => {
        if (bookId) {
            console.log('Fetching book details for bookId:', bookId); // Debug statement
            fetch(`https://example-data.draftbit.com/books/${bookId}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log('Book details fetched:', data); // Debug statement
                    setBookDetails(data);
                });
        }
    }, [bookId]);

    if (!bookDetails) {
        return <div>Loading...</div>;
    }

    const genres = bookDetails.genres && Array.isArray(bookDetails.genres) ? bookDetails.genres.join(', ') : 'N/A';

    // console.log('Rendering book details');


    const handlePrevBook = () => {
        const prevBookId = parseInt(bookId) -1;
        router.push(`/book/${prevBookId}`);
    };

    const handleNextBook = () => {
        const nextBookId = parseInt(bookId) +1;
        router.push(`/book/${nextBookId}`);
    };

    const handleBackToHome = () => {
        router.push('/');
      };

    return (
        <div className={styles.contain_container_book}>
            <div className={styles.contain_info_book}>
                <div>
                    <h1 className={styles.title_book}> {bookDetails.title}</h1>
                    
                </div>

                <div>
                    <img src={bookDetails.image_url} alt={bookDetails.title} />
                </div>
<br />
                <div className={styles.text_book}>
                    <b> {bookDetails.authors}</b>
                    <p> {bookDetails.description} </p>
                    {/* <p> {bookDetails.genres.join(', ')} </p> */}
                </div>
            </div>

<div className={styles.div_book_change}>

<button className={styles.btn_book} onClick={handlePrevBook}>Précedent Livre</button>
<button className={styles.btn_book} onClick={handleNextBook}>Prochain Livre</button>

</div>

<div className={styles.div_back_home}>
<button className={styles.btn_book} onClick={handleBackToHome}>retour au home </button>
</div>

        </div>
    );

};

export default BookDetails;