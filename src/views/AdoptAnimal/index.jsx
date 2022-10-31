import { PrimaryButton, Card, NavBar } from "@/components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimal, addAdoption } from "@/states/actions";
import { useEffect } from "react";

function AdoptAnimal() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.animalReducer.entries;
  });

  const user = useSelector((state) => {
    return state.authReducer.user;
  });

  useEffect(() => {
    dispatch(fetchAnimal());
  }, []);

  return (
    <div className="bg-gray-600 min-h-screen">
      <NavBar />
      <div className="adopt-template gap-12 p-5">
        {data.map((e) => {
          return (
            <Card key={e._id}>
              <div className="flex flex-col h-full justify-evenly items-center w-full text-white">
                <h1>Name: {e.name}</h1>
                <h1>Age: {e.age}</h1>
                <h1>Breed: {e.breed}</h1>
                <h1>Sex: {e.sex}</h1>
                <PrimaryButton
                  title="Request Adopt"
                  onClick={() => {
                    dispatch(
                      addAdoption({
                        body: { animal: e._id, adopter: user._id },
                      })
                    );
                  }}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default AdoptAnimal;
