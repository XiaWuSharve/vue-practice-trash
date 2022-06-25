<template>
    <div v-html="body" :class="css"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import request from '@/api/index';
import { PageNews } from '@/interfaces/page-news';
import { useContentStore } from '@/store';

export default Vue.extend({
    name: 'ContentVue',
    data() {
        return {
            store: useContentStore(),
            body: '',
            css: '',
        };
    },
    computed: {
        page_id: function (): number {
            return this.store.id;
        }
    },
    watch: {
        page_id : async function (id) {
            let res = await request.getNews(id) as PageNews;
            this.body = res.body;
            let css_path = new URL(res.css).pathname;
            this.css = await request.getCss(css_path.split('/').slice(2).join('/')) as string;
        }
    },
});
</script>

<style>
</style>