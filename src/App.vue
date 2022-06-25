<template>

  <v-app id="main">
    <v-card id="test" width="max-width" height="50">
    </v-card>
    <v-navigation-drawer width="150" v-model="showDrawer" app>
      <v-list nav>
        <v-list-item-group v-model="selectedItem" mandatory>
          <v-list-item link v-for="item in items" :key="item.title" @click="linkTo(item.href)">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main id="main" app>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <v-switch v-model="$vuetify.theme.dark">切换明暗模式</v-switch>
      <v-app-bar-nav-icon @click="showDrawer = !showDrawer"></v-app-bar-nav-icon>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    showDrawer: true,
    selectedItem: '',
    items: [
      {
        title: '每日推荐',
        href: 'recommand',
      },
      {
        title: '主题日报',
        href: 'theme',
      }
    ],
  }),

  methods: {
    linkTo(href: string) {
      this.$router.push({ name: href });
    },
  },
});
</script>
