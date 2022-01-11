import { createStore } from "redux";
import { reducer } from "./reducer";

const init = [];

export const store = createStore(reducer, init);
