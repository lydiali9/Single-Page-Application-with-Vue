<template>
    <div>
        <app-header></app-header>
        <section class="main-section section">
            <div class="container content">
                <div class="columns">
                    <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
                        <div class="card">
                            <div class="card=content">
                                <h3>{{ post.title }}</h3>
                                {{ post.content }}
                            </div>
                            <footer class="card-footer">
                                <a class="card-footer-item" :href="post.link" target="_blank">Read More</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>
<script>
    import AppHeader from './AppHeader.vue'
    import AppFooter from './AppFooter.vue'

    export default {
        components: {
            'app-header': AppHeader,
            'app-footer': AppFooter
        },
        data() {
            return {
                posts: [
                    { id : 1, title: '中国设计师：能超越“猎鹰重型”的火箭只待立项', content: "【环球时报记者赵觉珵】美国太空探索公司(Space X)成功发射“猎鹰重型”运载火箭的消息，一日之间占刷爆了“朋友圈”。北京时间7日凌晨4点45分，在两次临时推迟后，“猎鹰重型”火箭成功发射，两枚助推器也成功回收。" },
                    { id : 2, title: '中国设计师：能超越“猎鹰重型”的火箭只待立项', content: "【环球时报记者赵觉珵】美国太空探索公司(Space X)成功发射“猎鹰重型”运载火箭的消息，一日之间占刷爆了“朋友圈”。北京时间7日凌晨4点45分，在两次临时推迟后，“猎鹰重型”火箭成功发射，两枚助推器也成功回收。" },
                    { id : 3, title: '中国设计师：能超越“猎鹰重型”的火箭只待立项', content: "【环球时报记者赵觉珵】美国太空探索公司(Space X)成功发射“猎鹰重型”运载火箭的消息，一日之间占刷爆了“朋友圈”。北京时间7日凌晨4点45分，在两次临时推迟后，“猎鹰重型”火箭成功发射，两枚助推器也成功回收。" },
                    { id : 4, title: '中国设计师：能超越“猎鹰重型”的火箭只待立项', content: "【环球时报记者赵觉珵】美国太空探索公司(Space X)成功发射“猎鹰重型”运载火箭的消息，一日之间占刷爆了“朋友圈”。北京时间7日凌晨4点45分，在两次临时推迟后，“猎鹰重型”火箭成功发射，两枚助推器也成功回收。" },
                    { id : 5, title: '中国设计师：能超越“猎鹰重型”的火箭只待立项', content: "【环球时报记者赵觉珵】美国太空探索公司(Space X)成功发射“猎鹰重型”运载火箭的消息，一日之间占刷爆了“朋友圈”。北京时间7日凌晨4点45分，在两次临时推迟后，“猎鹰重型”火箭成功发射，两枚助推器也成功回收。" },
                    { id : 6, title: '中国设计师：能超越“猎鹰重型”的火箭只待立项', content: "【环球时报记者赵觉珵】美国太空探索公司(Space X)成功发射“猎鹰重型”运载火箭的消息，一日之间占刷爆了“朋友圈”。北京时间7日凌晨4点45分，在两次临时推迟后，“猎鹰重型”火箭成功发射，两枚助推器也成功回收。" },
                    { id : 7, title: '中国设计师：能超越“猎鹰重型”的火箭只待立项', content: "【环球时报记者赵觉珵】美国太空探索公司(Space X)成功发射“猎鹰重型”运载火箭的消息，一日之间占刷爆了“朋友圈”。北京时间7日凌晨4点45分，在两次临时推迟后，“猎鹰重型”火箭成功发射，两枚助推器也成功回收。" },
                    { id : 8, title: '中国设计师：能超越“猎鹰重型”的火箭只待立项', content: "【环球时报记者赵觉珵】美国太空探索公司(Space X)成功发射“猎鹰重型”运载火箭的消息，一日之间占刷爆了“朋友圈”。北京时间7日凌晨4点45分，在两次临时推迟后，“猎鹰重型”火箭成功发射，两枚助推器也成功回收。" },
                    { id : 9, title: '中国设计师：能超越“猎鹰重型”的火箭只待立项', content: "【环球时报记者赵觉珵】美国太空探索公司(Space X)成功发射“猎鹰重型”运载火箭的消息，一日之间占刷爆了“朋友圈”。北京时间7日凌晨4点45分，在两次临时推迟后，“猎鹰重型”火箭成功发射，两枚助推器也成功回收。" },

                ]
            }
        }
    }
</script>
<style lang="scss">
    $primary: #287ab1;
    @import '~bulma';

    .columns {
        flex-wrap: wrap;
    }
</style>
