import { gql } from '@apollo/client'

 export const ALL_AUTHORS = gql`
  query {
    allAuthors {
     bookCount
    name
    born
    }
  }
`
 

export const All_BOOKS = gql`
  query {
    allBooks {
      title
      author
      published
    }
  }
`
/* export const CREATE_BOOK = gql`
  mutation createBook(
    $title: String!
    $author: String!
    $published: Int!
    $genre: [String!]
  ) {
    addBook(title: $title, author: $author, published: $published, genre: $genre) {
      title
      phone
      id
      published
      genre

    }
  }
` */
