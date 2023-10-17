import { gql } from "@apollo/client";

export const getAllAuthors = gql`
  query {
    getAllAuthors {
      id
      firstName
      books {
        id
        title
        votes
      }
    }
  }
`;
