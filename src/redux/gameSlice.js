import { createSlice } from "@reduxjs/toolkit";
import { objects } from "../data";

export const gameSlice = createSlice({
  name: "data",
  initialState: {
    objects: objects.sort(() => Math.random() - 0.5),
    completed: [],
    selected1: "",
    selected2: "",
    score: 0,
    isFinish: false,
  },
  reducers: {
    check: (state, action) => {
      const findedItem = state.objects.find(
        (item) => item.id === action.payload.id
      );
      findedItem.visibility = !findedItem.visibility;
      if (findedItem.visibility === false) {
        state.selected1 = "";
      } else {
        if (state.selected1 === "") {
          state.selected1 = findedItem;
        } else {
          state.selected2 = findedItem;
        }
      }
      if (state.selected1.image && state.selected2.image) {
        if (state.selected1.image === state.selected2.image) {
          state.objects.map((item) => {
            if (
              item.id === state.selected1.id ||
              item.id === state.selected2.id
            ) {
              item.visibility = true;
              item.disabled = true;
            }
            return item;
          });
          state.completed.push(state.selected1.id);
          state.selected1 = "";
          state.selected2 = "";
          state.score += 50;
        }
      }
      if (state.completed.length === state.objects.length / 2) {
        state.isFinish = true;
      }
    },
    checkUnmatch: (state) => {
      if (state.selected1.image && state.selected2.image) {
        if (state.selected1.image !== state.selected2.image) {
          state.objects.map((item) => {
            if (
              item.id === state.selected1.id ||
              item.id === state.selected2.id
            ) {
              item.visibility = false;
              item.disabled = false;
            }
            return item;
          });
          state.selected1 = "";
          state.selected2 = "";
          state.score -= 10;
        }
      }
    },
    restart: (state) => {
      const shuffle = [...state.objects].sort(() => Math.random() - 0.5);
      state.objects = shuffle;
      state.objects.map((item) => {
        item.visibility = false;
        item.disabled = false;
        return item;
      });
      state.completed = [];
      state.score = 0;
      state.isFinish = false;
    },
  },
});
export default gameSlice.reducer;
export const { check, checkUnmatch, restart } = gameSlice.actions;
