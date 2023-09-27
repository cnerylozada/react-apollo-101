import { gql } from "@apollo/client";

export const getAllBooks = gql`
  query {
    getAllBooks {
      id
      title
    }
  }
`;
