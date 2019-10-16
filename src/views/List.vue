<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Activity</th>
          <th>Participants</th>
          <th>Budget</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.activity }}</td>
          <td>{{ item.participants }}</td>
          <td>{{ parsePrice(item.price) }}</td>
          <td>
            <label class="checkbox">
              <input type="checkbox" @click="clearById(item.id)" />
            </label>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="container">
      <button class="button is-danger is-fullwidth" @click="clearAll">
        Clear all
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as types from "@/store/modules/todo/types";

export default {
  name: "list",
  computed: {
    ...mapState({
      list: state => state.todo.list
    })
  },
  methods: {
    clearById(id) {
      this.$store.commit(types.MUTATE_CLEAR_BY_ID, id);
    },
    clearAll() {
      this.$store.commit(types.MUTATE_CLEAR_LIST);
    },
    parsePrice(price) {
      return Number(price) <= types.PRICE_THRESHOLD ? "cheap" : "expensive";
    }
  }
};
</script>
