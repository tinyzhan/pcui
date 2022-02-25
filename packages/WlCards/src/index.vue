<template>
    <div class="list">
        <!-- 文章和文件卡片 -->
        <template v-if="[1, 3].includes(myData.cardType)">
            <ArticleCard />
        </template>
        <template v-if="myData.cardType === 2">
            <ArticleCard />
        </template>
        <template v-if="myData.cardType === 4">
            <ArticleCard />
        </template>
        <template v-if="myData.cardType === 6">
            <ArticleCard />
        </template>
        <template v-if="myData.cardType === 7">
            <ArticleCard />
        </template>
        <template v-if="myData.cardType === 8">
            <ArticleCard />
        </template>
        <template>
            <VideoCard />
        </template>
        <template>
            <AudioCard />
        </template>
    </div>
</template>

<script>
import { filterData } from "../common.js";
import ArticleCard from "./ArticleCard";
import AudioCard from "./AudioCard";
import VideoCard from "./VideoCard";

export default {
    name: "WlCards",
    props: ["data"],
    components: {
        ArticleCard,
        AudioCard,
        VideoCard
    },
    computed: {
        myData() {
            return filterData(this.data);
        }
    },
    created() {
        console.log(this.data, this.myData)
    }
}
</script>