export interface GoogleBook {

  // GoogleBook models after Volume in Google Books API. In the API,
  // Volume represents the data that Google Books hosts about a book or magazine.
  // See: https://developers.google.com/books/docs/v1/reference/volumes

  // The following is only a subset; the API offers much more information.

  id: string;

  volumeInfo: {
    title: string;
    authors: Array<string>;
  };
}
