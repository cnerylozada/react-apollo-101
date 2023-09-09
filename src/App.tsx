import { useQuery } from "@apollo/client";
import { IPet, PetType } from "./models/models";
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
              <div>
                {_.id} {_.name}
              </div>
              <div>{PetType[_.type]}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
