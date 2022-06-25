<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4">
                <nav-vue></nav-vue>
            </v-col>
            <v-col>
                <content-vue></content-vue>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import NavVue from '@/components/Nav.vue';
import ContentVue from '@/components/Content.vue';

export default Vue.extend({
    components: {
        NavVue,
        ContentVue,
    },
    data() {
        return {
            id: 0,
        }
    },
});
</script>

<style>
</style>