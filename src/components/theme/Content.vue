<template>
    <div v-html="content"></div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
    name: 'ContentVue',
    props: {
        page_id: Number,
    },
    data() {
        return {
            content: '',
        }
    },
    watch: {
        page_id: function(id) {
            axios.get(`/api/4/news/${id}`)
            .then(res => {
                this.content = res.data.body;
                console.log(this.content);
            })
            .catch(err => {
                console.log(`主题内容获取失败，${err}`);
            })
        }
    },
});
</script>

<style>
</style>