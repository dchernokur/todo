import * as types from "@/store/modules/todo/types";

export default {
  [types.MUTATE_SET_RANDOM]: (state, payload) => {
    state.random = payload;
  }
};
