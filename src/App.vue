<template>
  <div id="app">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
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
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </div>
  </div>
</template>
