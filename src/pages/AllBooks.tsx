import { useLazyQuery } from "@apollo/client";
import { getAllBooks } from "../services/books";
import { IBook } from "../models/models";

export const AllBooksPage = () => {
  const [fetchBooks, { data, loading }] = useLazyQuery<{
    getAllBooks: IBook[];
  }>(getAllBooks, {
    onCompleted: () => {
      console.log("success");
    },
  });
  return (
    <div>
      <div>
        <button
          onClick={() => {
            fetchBooks();
          }}
        >
          Get books
        </button>
      </div>
      {loading && <div>Loading ...</div>}
      {data?.getAllBooks.length ? (
        <div>
          {data.getAllBooks.map((_) => (
            <div key={_.id}>
              id: {_.id} title: {_.title} votes: {_.votes}
            </div>
          ))}
        </div>
      ) : (
        <div>No hay libros registrado</div>
      )}
    </div>
  );
};
