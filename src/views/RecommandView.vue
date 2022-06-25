<template>
  <v-container>
        <v-row>
            <v-col cols="4">
                <recommand-vue></recommand-vue>
            </v-col>
            <v-col>
                <content-vue></content-vue>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import RecommandVue from '@/components/recommand/Recommand.vue';
import ContentVue from '@/components/Content.vue';

export default Vue.extend({
  components: {
    RecommandVue,
    ContentVue,
  }
});
</script>

<style>

</style>