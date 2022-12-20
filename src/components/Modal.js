import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../redux/gameSlice";

function Modal() {
  const { score, isFinish } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  return (
    <div
      className={`bg-[rgba(0,0,0,0.7)] w-full h-screen fixed top-0 left-0 flex flex-col gap-y-8 items-center pt-40 transition-all duration-500 ${
        isFinish ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <h1 className="text-3xl font-bold text-white">Your Score: {score}</h1>
      <button
        className="px-12 py-3 font-semibold text-xl bg-green-600 text-white rounded-xl hover:scale-110 transition-all duration-300"
        onClick={() => dispatch(restart())}
      >
        Restart Game
      </button>
    </div>
  );
}

export default Modal;
