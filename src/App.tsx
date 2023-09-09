import { useQuery } from "@apollo/client";
import { IPet } from "./models/models";
import { getAllPets } from "./services/pets";

function App() {
  const { data, loading } = useQuery<{
    pets: IPet[];
  }>(getAllPets);

  return (
    <div>
      {loading && <div>Loading ...</div>}
      <div>
        {data &&
          data.pets.map((_, index: number) => (
            <div key={index}>
              <div>{JSON.stringify(_)}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
