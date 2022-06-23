<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4">
                <nav-vue @get-content="id = $event"></nav-vue>
            </v-col>
            <v-col>
                <content-vue :page_id="id"></content-vue>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import NavVue from '@/components/theme/Nav.vue';
import ContentVue from '@/components/theme/Content.vue';

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