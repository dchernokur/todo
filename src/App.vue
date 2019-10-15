<template>
  <div id="app">
    <div class="vertical-container">
      <div class="columns">
        <div class="column">
          <div class="container">
            <div class="tabs">
              <ul>
                <router-link
                  to="/"
                  v-slot="{ href, route, navigate, isExactActive }"
                >
                  <li :class="[isExactActive && 'is-active']">
                    <a :href="href" @click="navigate">{{ route.name }}</a>
                  </li>
                </router-link>
                <router-link
                  to="/list"
                  v-slot="{ href, route, navigate, isExactActive }"
                >
                  <li :class="[isExactActive && 'is-active']">
                    <a :href="href" @click="navigate">{{ route.name }}</a>
                  </li>
                </router-link>
              </ul>
            </div>
          </div>

          <div class="container">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 24em;
}

.vertical-container {
  flex: none;
  max-width: 50%;
}
</style>
