import * as types from "@/store/modules/todo/types";

export default {
  [types.GETTER_TODO_LIST]: state => state.list,
  [types.GETTER_RANDOM]: state => state.random
};
