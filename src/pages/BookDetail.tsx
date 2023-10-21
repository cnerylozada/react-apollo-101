import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { IBook } from "../models/models";
import { getBookById } from "../services/books";

export const BookDetailPage = () => {
  const { bookId } = useParams();
  const { data, loading } = useQuery<
    { getBookById: IBook },
    { bookId: number }
  >(getBookById, {
    variables: {
      bookId: +`${bookId}`,
    },
  });
  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Book detail: {bookId}</div>
      {loading && <div>Loading ...</div>}
      {data && (
        <div>
          id: {data.getBookById.id} title: {data.getBookById.title} votes:{" "}
          {data.getBookById.votes}
        </div>
      )}
    </div>
  );
};
