import { gql } from "@apollo/client";

export const getAllPets = gql`
  query {
    pets {
      id
      name
      type
    }
  }
`;
