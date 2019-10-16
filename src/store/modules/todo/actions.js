import * as types from "@/store/modules/todo/types";
import axios from "@/modules/axios";

export default {
  [types.ACTION_FETCH_RANDOM]: async ({ commit }) => {
    let result;
    try {
      result = await axios.get("/");
      commit(types.MUTATE_SET_RANDOM, result);
    } catch (e) {
      console.error(e);
    }
  }
};
