import { useDispatch, useSelector } from "react-redux";
import { check, checkUnmatch } from "../redux/gameSlice";

function Card({ item }) {
  const dispatch = useDispatch();
  const { selected1, selected2 } = useSelector((state) => state.data);
  return (
    <div
      onClick={() => {
        dispatch(check(item));
        setTimeout(() => {
          dispatch(checkUnmatch());
        }, 1500);
      }}
      className={`relative  w-[75px] h-[100px] cursor-pointer select-none ${
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
        } absolute w-full h-full bg-[#f4f5f7] rounded-[10px] text-[#b9bfcc] backface-hidden leading-[100px] text-center text-[50px] transition-all duration-300`}
      >
        ?
      </div>
      <div
        className={`absolute ${
          item.visibility ? "" : "rotate-Y-n"
        } backface-hidden w-full rounded-[10px] h-full text-[#b9bfcc] leading-[100px] text-center text-[50px] transition-all duration-300`}
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
