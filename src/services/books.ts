import { gql } from "@apollo/client";

export const getAllBooks = gql`
  query {
    getAllBooks {
      id
      title
    }
  }
`;

export const getBookById = gql`
  query ($bookId: ID!) {
    getBookById(id: $bookId) {
      id
      title
      votes
    }
  }
`;
