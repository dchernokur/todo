<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h3 class="subtitle">You should</h3>

        <div class="field">
          <div class="control">
            {{ current.activity || "No activity matched :(" }}
          </div>
        </div>
      </div>

      <div class="column">
        <h3 class="subtitle">Activity details:</h3>

        <div class="field">
          <label class="label">Type</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select v-model="type">
                <option disabled value="">Please select type</option>
                <option
                  v-for="option in typeOptions"
                  v-bind:value="option"
                  :key="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Participants</label>
          <div class="control">
            <input
              class="input"
              type="number"
              placeholder="Participants"
              v-model="participants"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Budget</label>
          <div class="control">
            <label class="radio">
              Cheap
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                name="budget"
                class="range-input"
                v-model="price"
              />
              Expensive
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="field">
            <div class="control">
              <button
                class="button is-primary is-fullwidth"
                @click="addToList"
                :disabled="!current.key"
              >
                Save for later
              </button>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <div class="control">
              <button class="button is-link is-fullwidth" @click="fetchRandom">
                Hit me with a new one!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as types from "@/store/modules/todo/types";

export default {
  name: "home",
  data() {
    return {
      participants: 1,
      price: 0,
      type: "",
      typeOptions: [
        "education",
        "recreational",
        "social",
        "diy",
        "charity",
        "cooking",
        "relaxation",
        "music",
        "busywork"
      ]
    };
  },
  computed: {
    ...mapState({
      current: state => state.todo.random,
      list: state => state.todo.list
    }),
    currentItemComputed() {
      return {
        id: this.current.key,
        activity: this.current.activity,
        ...this.paramsComputed
      };
    },
    paramsComputed() {
      return {
        participants: this.participants,
        price: this.price,
        type: this.type
      };
    }
  },
  created() {
    this.fetchRandom();
  },
  methods: {
    fetchRandom() {
      this.$store.dispatch(types.ACTION_FETCH_RANDOM, this.paramsComputed);
    },
    addToList() {
      if (!this.current.key) {
        console.error("No matched item to add");
        return;
      }

      let duplicate = this.list.find(item => item.id === this.current.key);
      if (!duplicate) {
        this.$store.commit(types.MUTATE_ADD_TO_LIST, this.currentItemComputed);
      }
    }
  }
};
</script>

<style>
.range-input {
  width: 40%;
}
</style>
