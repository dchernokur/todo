import * as types from "@/store/modules/todo/types";

export default {
  [types.MUTATE_SET_RANDOM]: (state, payload) => {
    state.random = payload;
  },
  [types.MUTATE_ADD_TO_LIST]: (state, payload) => {
    state.list.push(payload);
  },
  [types.MUTATE_CLEAR_LIST]: state => {
    state.list = [];
  },
  [types.MUTATE_CLEAR_BY_ID]: (state, id) => {
    state.list = state.list.filter(item => item.id !== id);
  }
};
