<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <h3 class="subtitle">You should</h3>

        <div class="field">
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Textarea"
              rows="8"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="column">
        <h3 class="subtitle">Activity details:</h3>

        <div class="field">
          <label class="label">Type</label>
          <div class="control">
            <div class="select is-fullwidth">
              <select>
                <option>Select dropdown</option>
                <option>With options</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Participants</label>
          <div class="control">
            <input class="input" type="text" placeholder="Text input" />
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
              <button class="button is-primary is-fullwidth">
                Save for later
              </button>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <div class="control">
              <button class="button is-link is-fullwidth">
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
export default {
  name: "home"
};
</script>

<style>
.range-input {
  width: 40%;
}
</style>
