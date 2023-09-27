export enum PetType {
  CAT = "cat",
  DOG = "dog",
  BIRD = "bird",
}

export interface IPet {
  id: string;
  name: string;
  type: keyof typeof PetType;
}

export interface IBook {
  id: string;
  title: string;
}
