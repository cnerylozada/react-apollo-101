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

export const saveAuthor = gql`
  mutation ($author: CreateAuthorInputDto!) {
    saveAuthor(author: $author) {
      id
    }
  }
`;
