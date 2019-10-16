import actions from "@/store/modules/todo/actions";
import getters from "@/store/modules/todo/getters";
import mutations from "@/store/modules/todo/mutations";

export default {
  state: {
    random: {},
    list: []
  },
  getters,
  actions,
  mutations
};
