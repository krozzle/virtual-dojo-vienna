import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function Statuten() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div>
      <Document file='statuten_2016.pdf' onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
        <button onClick={previousPage}>&larr;</button>
        <button onClick={nextPage}>&rarr;</button>
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
export default Statuten;
