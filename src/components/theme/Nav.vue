<template>
    <v-navigation-drawer width="max-auto">
        <v-list>
            <v-list-group>
                <template v-slot:activator>
                    <v-list-item-title>故事</v-list-item-title>
                </template>

                <v-list-item v-for="item in stories" :key="item.id" link @click="onGetContent(item.id)">
                    <v-list-item-avatar size="100" tile>
                        <v-img :src="item.image"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content v-text="item.title"></v-list-item-content>
                </v-list-item>
            </v-list-group>

            <v-list-group>
                <template v-slot:activator>
                    <v-list-item-title>故事TOP</v-list-item-title>
                </template>

                <v-list-item v-for="item in topStories" :key="item.id" link @click="onGetContent(item.id)">
                    <v-list-item-avatar size="100" tile>
                        <v-img :src="item.image"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content v-text="item.title"></v-list-item-content>
                </v-list-item>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Story } from './interfaces/story';
import axios from 'axios';
import Vue from 'vue';

export default Vue.extend({
    name: 'NavVue',
    data() {
        return {
            stories: [] as Story[],
            topStories: [] as Story[],
        }
    },
    mounted() {
        this.getThemes();
    },
    methods: {
        getThemes() {
            axios.get('/api/4/news/latest')
                .then(res => {
                    let data = res.data;
                    this.stories = data.stories;
                    for (var i = 0; i < data.stories.length; i++) {
                        this.stories[i].image = data.stories[i].images[0];
                    }
                    this.topStories = data.top_stories;
                })
                .catch(error => {
                    console.log(`发生错误，${error}`);
                });
        },
        onGetContent (id: number) {
            this.$emit('get-content', id);
        }
    }
});
</script>

<style>
</style>