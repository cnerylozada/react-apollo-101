import { useQuery } from "@apollo/client";
import { IBook } from "../models/models";
import { getAllBooks } from "../services/books";

export const HomePage = () => {
  const { data, loading } = useQuery<{ getAllBooks: IBook[] }>(getAllBooks);
  return (
    <div>
      <div>Books</div>
      {loading && <div>Loading ...</div>}
      {data &&
        data.getAllBooks.map((_) => (
          <div key={_.id}>
            <div>
              {_.id} {_.title}
            </div>
          </div>
        ))}
    </div>
  );
};
