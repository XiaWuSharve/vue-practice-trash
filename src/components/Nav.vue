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
import Vue from 'vue';
import { ListItemDto, ListItem } from '@/interfaces/story';
import { useContentStore } from '@/store';
import request from '@/api/index';

export default Vue.extend({
    name: 'NavVue',
    data() {
        return {
            stories: [] as ListItem[],
            topStories: [] as ListItem[],
        }
    },
    mounted() {
        this.getThemes();
    },
    methods: {
        async getThemes() {
            const {stories, top_stories} = await request.getLatest() as ListItemDto;
            console.log(top_stories);
            for(const {images, ...rest} of stories) {
                this.stories.push({image: images[0], ...rest});
            }
            for(const {image, ...rest} of top_stories) {
                this.topStories.push({image: image, ...rest});
            }
        },
        onGetContent(id: number) {
            let store = useContentStore();
            store.id = id;
        }
    }
});
</script>

<style>
</style>