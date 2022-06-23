<template>
  <v-app>
    <v-navigation-drawer width="150" app>
      <v-list nav>
        <v-list-item-group v-model="selectedItem" mandatory>
          <v-list-item link v-for="item in items" :key="item.title" @click="linkTo(item.href)">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main app>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <v-switch v-model="$vuetify.theme.dark">切换明暗模式</v-switch>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
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
