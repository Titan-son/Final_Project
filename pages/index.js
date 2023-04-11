import Head from 'next/head';
import Image from 'next/image';
import { AiFillStar } from "react-icons/ai";
import styles from '@/styles/Home.module.css';
import Navbar from '@/component/navbar/navbar';
import Caroussel from '@/component/Caroussel/caroussel';
import Footer from '@/component/Footer/Footer';
import Community from '@/component/Community/Community';
import { Button, Card } from 'react-bootstrap';
import { useState } from 'react';

export async function getStaticProps() {
  const allJsonData = await fetch('https://example-data.draftbit.com/books')
    .then(r => r.json());
  return {
    props: {
      allJsonData,
    },
  };
}

export default function Home({ allJsonData }) {
  const [visibleCards, setVisibleCards] = useState(8);
  const [additionalCards, setAdditionalCards] = useState(0);

  const loadMoreBooks = () => {
    if (additionalCards < 8) {
      setVisibleCards(visibleCards + 4);
      setAdditionalCards(additionalCards + 4);
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Caroussel />
      <div className={styles.bibliotheque}>
        <div className={styles.container_card}>
          {allJsonData
            .sort((a, b) => b.rating - a.rating)
            .slice(0, visibleCards)
            .map((book, index) => (
              <Card key={index} style={{ width: '18rem', marginBottom: '1rem' }}>
                {book.image_url && <Card.Img variant="top" src={book.image_url} className={styles.img_card} />}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text className={styles.author}>{book.authors}</Card.Text>
                  <Card.Text className={styles.rating}>Rating: {book.rating}/5 <AiFillStar className={styles.etoile}/></Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
      <div className={styles.div_btn_card}>
        <Button
          variant="primary"
          onClick={loadMoreBooks}
          disabled={visibleCards >= allJsonData.length || additionalCards >= 8}
        >
          Load more books
        </Button>
      </div>

      <Community />
      <Footer />
    </>
  );
}



