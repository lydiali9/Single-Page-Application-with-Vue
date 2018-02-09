<template>
    <nav class="nav has-shadow">
        <div class="container">
            <router-link to="/category/front-end" exact>
                <img src="//www.baidu.com/s?wd=今日新鲜事&tn=SE_Pclogo_6ysd4c7a&sa=ire_dl_gh_logo&rsv_dl=igh_logo_pc" alt="Vue">
            </router-link>
            <router-link class="nav-item is-tab" to="/category/front-end">Front-end</router-link>
            <router-link class="nav-item is-tab" :to="{ name: 'category', params: { id: 'mobile' } }">Mobile</router-link>
            <router-link class="nav-item is-tab" to="/login">
                <span v-if="isAuthenticated">Logout</span>
                <span v-else>Login</span>
            </router-link>
        </div>
    </nav>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['isAuthenticated'])
        }
    }
</script>
