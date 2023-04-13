import React from 'react'
import styles from './AllBooks.module.css'
import { useState } from 'react';
import { useRouter } from 'next/router';


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

export default function AllBooks({ data, allAuthors }) {
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedAuthor, setSelectedAuthor] = useState('');

    const genres = ['all', 'Classics', 'Fantasy', 'Young Adult', 'Romance', 'Fiction',];

    const filteredBooksByGenre =
        selectedGenre === 'all'
            ? data
            : data.filter((book) => {
                if (!book.genres) return false; // Si la propriété 'genres' n'existe pas, retournez 'false'
                const bookGenres = book.genres.split(','); // Divisez la chaîne de caractères en un tableau de genres
                return bookGenres.includes(selectedGenre.trim()); // Vérifiez si le genre sélectionné est présent dans le tableau de genres du livre
            });

    const filteredBooksBySearch = filteredBooksByGenre.filter((book) => {
        if (!book.title) return false; // Si la propriété 'title' n'existe pas, retournez 'false'
        return book.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const filteredBooks = selectedAuthor
        ? filteredBooksBySearch.filter((book) => book.authors === selectedAuthor)
        : filteredBooksBySearch;

        const router = useRouter();

        const handleCardClick = (bookId) => {
            router.push(`/book/${bookId}`);
          };

    return (
        <div>
            <div className={styles.contain_all}>


                <div className={styles.category_All_Book}>
                    <input className={styles.input_search}
                        type="search"
                        placeholder="Search by title"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} />

                    <div className={styles.div_category}>
                        <div className={styles.Title}>
                            <h2>Category</h2>
                        </div>
                        <div className={styles.category}>
                            {genres.map((genre, index) => (
                                <p key={index} onClick={() => setSelectedGenre(genre)}>
                                    {genre}
                                </p>
                            ))}
                        </div>

                        <div className={styles.Title}>
                            <h2>Author</h2>
                        </div>
                        <select value={selectedAuthor} onChange={(e) => setSelectedAuthor(e.target.value)}>
                            <option value="">Select an author</option>
                            {allAuthors.map((author, index) => (
                                <option key={index} value={author}>
                                    {author}
                                </option>
                            ))}
                        </select>


                    </div>

                </div>

                <div className={styles.card_book}>
                    {filteredBooks.map((book, index) => (
                        <div key={index + book.id} className={styles.book_card}>
                            <img src={book.image_url} alt={book.title} className={styles.book_image} data-book-id={book.id} onClick={() => handleCardClick(book.id)} />
                            <h3>{book.title}</h3>
                            <p>{book.authors}</p>
                            <p>Rating: {book.rating}</p>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}
