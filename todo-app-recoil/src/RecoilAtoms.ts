import { atom } from "recoil";
import { Todo } from "./App";

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
});

export const languageState = atom<string>({
  key: "languageState",
  default: "en",
});
