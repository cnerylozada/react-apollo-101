import { useQuery } from "@apollo/client";
import { IBook } from "./models/models";
import { getAllBooks } from "./services/books";

function App() {
  const { data, loading } = useQuery<{ getAllBooks: IBook[] }>(getAllBooks);
  return (
    <div>
      {loading && <div>Loading ...</div>}
      <div>
        <div>Books</div>
        {data &&
          data.getAllBooks.map((_, index: number) => (
            <div key={index}>
              <div>
                {_.id} {_.title}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
