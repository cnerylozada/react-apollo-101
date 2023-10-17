import { useQuery } from "@apollo/client";
import { IAuthor } from "../models/models";
import { getAllAuthors } from "../services/authors";
import { Link } from "react-router-dom";

export const AllAuthorsPage = () => {
  const { data, loading, error } = useQuery<{ getAllAuthors: IAuthor[] }>(
    getAllAuthors
  );
  return (
    <div>
      <div>Get all Authors</div>
      {error && <div>{error.message}</div>}
      {loading && <div>Loading ...</div>}
      {data &&
        data.getAllAuthors.map((_) => (
          <div key={_.id}>
            <div>
              id: {_.id} Name: {_.firstName}
            </div>
            <div>
              <span>Books:</span>
              {_.books.map((book) => (
                <Link key={book.id} to={`/authors/${_.id}/books/${book.id}`}>
                  {book.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
