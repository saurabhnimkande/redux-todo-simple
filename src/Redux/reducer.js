import { ADD_TODO, DELETE_TODO, EDIT_TODO, TOOGLE_TODO } from "./actionTypes";
export const reducer = (store, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return [
        ...store,
        { id: payload.id, title: payload.title, status: payload.status },
      ];
    case DELETE_TODO:
      return store.filter((e) => e.id !== payload.id);
    case TOOGLE_TODO:
      let arr = [...store];
      arr.forEach((e) => {
        if (e.id === payload.id) {
          e.status = !e.status;
        }
      });
      return arr;
    case EDIT_TODO:
      let arr1 = [...store];
      arr1.forEach((e) => {
        if (e.id === payload.currid.current) {
          e.title = payload.value;
        }
      });
      return arr1;
    default:
      return store;
  }
};
