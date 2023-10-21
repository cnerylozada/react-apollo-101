import { useQuery } from "@apollo/client";
import { IAuthor } from "../models/models";
import { getAllAuthors } from "../services/authors";
import { Link } from "react-router-dom";

export const AllAuthorsPage = () => {
  const { data, loading, error, refetch } = useQuery<{
    getAllAuthors: IAuthor[];
  }>(getAllAuthors);

  return (
    <div>
      <div style={{ fontWeight: "bold" }}>Get all Authors</div>
      <div>
        <button style={{ marginRight: "16px" }}>
          <Link to="./create">Create new one</Link>
        </button>
        <button onClick={() => refetch()}>Refetch new authors!</button>
      </div>
      <hr />

      {error && <div>{error.message}</div>}
      {loading && <div>Loading ...</div>}
      {data &&
        data.getAllAuthors.map((_) => (
          <div key={_.id}>
            <div>
              <button>
                <Link to={`./${_.id}/add-book`}>Add new book</Link>
              </button>
            </div>
            <div>
              id: {_.id} Name: {_.firstName}
            </div>
            {!!_.books.length && (
              <div>
                <div>Books:</div>
                {_.books.map((book) => (
                  <div key={book.id}>
                    <Link to={`/authors/${_.id}/books/${book.id}`}>
                      {book.title}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
