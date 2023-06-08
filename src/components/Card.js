import { useDispatch, useSelector } from "react-redux";
import { check, checkUnmatch } from "../redux/gameSlice";
import { useEffect, useState } from "react";

function Card({ item }) {
  const dispatch = useDispatch();
  const { selected1, selected2 } = useSelector((state) => state.data);
  const [timerId, setTimerId] = useState(null);
  useEffect(() => {
    return () => {
      clearTimeout(timerId);
    };
  }, [timerId]);
  return (
    <div
      onClick={() => {
        dispatch(check(item));
        const id = setTimeout(() => {
          dispatch(checkUnmatch());
        }, 1500);
        setTimerId(id);
      }}
      className={`relative w-[60px] h-[60px] tablet:w-[75px] tablet:h-[100px] cursor-pointer select-none ${
        item.disabled
          ? "pointer-events-none"
          : selected1 !== "" && selected2 !== ""
          ? "pointer-events-none"
          : ""
      }  transition-all`}
    >
      <div
        className={`${
          item.visibility ? "rotate-Y" : ""
        } absolute w-full h-full bg-[#f4f5f7] rounded-[10px] text-[#b9bfcc] backface-hidden leading-[60px] tablet:leading-[100px] text-center text-[50px] transition-all duration-300`}
      >
        ?
      </div>
      <div
        className={`absolute ${
          item.visibility ? "" : "rotate-Y-n"
        } backface-hidden w-full rounded-[10px] h-full text-[#b9bfcc] leading-[60px] tablet:leading-[100px] text-center text-[50px] transition-all duration-300`}
      >
        <img
          className="absolute top-[50%] translate-y-[-50%]"
          src={item.image}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
