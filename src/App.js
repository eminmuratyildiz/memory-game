import { useSelector } from "react-redux";
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
  const { objects, score } = useSelector((state) => state.data);
  return (
    <>
      <div className="flex justify-center items-center w-[300px] tablet:w-[500px] pt-16 mx-auto relative">
        <div className="grid grid-cols-4 tablet:grid-cols-6 gap-3 w-full">
          {objects.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <div className="absolute top-5 right-0 text-xl text-purple-700 font-bold w-2/5 tablet:w-1/5 flex justify-between">
          Score: <span>{score}</span>
        </div>
      </div>
      <Modal />
    </>
  );
}

export default App;
