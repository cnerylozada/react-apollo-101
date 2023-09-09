import { gql } from "@apollo/client";

export const getAllPets = gql`
  query getAllPets {
    pets {
      id
      name
      type
    }
  }
`;
