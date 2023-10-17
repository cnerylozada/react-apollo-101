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
  id: number;
  title: string;
  votes?: number;
}
export interface IAuthor {
  id: number,
  firstName: string;
  books: IBook[]
}


