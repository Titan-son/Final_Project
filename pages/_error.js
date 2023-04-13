import React from 'react';
import styles from '../styles/Error.module.css'

function Error({ statusCode }) {
  return (
    <div className={styles.errorContainer}>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on the server`
          : 'An error occurred on the client'}
      </h1>
      {statusCode === 404 && (
        <div className={styles.error404}>
          <h2>Page not found</h2>
          <p>The requested page could not be found.</p>
        </div>
      )}
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;