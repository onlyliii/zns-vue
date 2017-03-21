<template>
    <div>
        <h3>我是新闻页</h3>
        <ul>
            <li v-for="(value, index) in news">{{value}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'news',
        data () {
            return {
                news: ['1111111','222222222','33333333','4444444444']
            }
        }
    }
</script>
<style scope>
    
</style>