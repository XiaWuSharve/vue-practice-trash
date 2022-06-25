<template>
    <v-navigation-drawer width="max-auto">
        <v-list id="nav">
            <v-list-item v-for="item in recommands" :key="item.id" link @click="onGetContent(item.id)">
                <v-list-item-avatar size="100" tile>
                    <v-img :src="item.image"></v-img>
                </v-list-item-avatar>

                <v-list-item-content v-text="item.title"></v-list-item-content>

            </v-list-item>
            <v-list-item>
                <v-btn block @click="onScroll">加载更多</v-btn>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { useContentStore } from '@/store';
import Vue from 'vue';
import request from '@/api/index';
import { ListItem, ListItemDto } from '@/interfaces/story';

export default Vue.extend({
    name: 'RecommandVue',
    data() {
        return {
            isLoading: true,
            curDate: new Date(),
            recommands: [] as ListItem[],
        }
    },
    mounted() {
        this.getRecommand();
    },
    methods: {
        onScroll() {
            console.log('scrolling...');
            if (this.isLoading) return;
            console.log(this.curDate);
            this.curDate.setDate(this.curDate.getDate() - 1);
            console.log(this.curDate);
            this.isLoading = true;
            this.getRecommand();
        },

        async getRecommand() {
            const recommands = await request.getBefore(this.curDate) as ListItemDto;
            for (let { images, ...rest } of recommands.stories) {
                this.recommands.push({ image: images[0], ...rest });
            }
            this.isLoading = false;
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