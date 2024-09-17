<template>
    <div class="min-h-screen">
        <h1 class="text-2xl"> This is Test page</h1>

        <Card />

        <h1>Bjp  = {{ BJP }}</h1>
        <h1>Congress  = {{Count}}</h1>
        <h1>Cloth Stock   = {{clothStok}}</h1>

    
        <button @click="updateBJP()">Bjp</button>
        <button>Congress</button>

    </div>
</template>
<script>
import { mapState } from 'vuex';
import Card from './Card.vue';


export default {
    name: 'Test',
    components:{
Card
    },

    computed:{
        ...mapState(['BJP','Count','clothStok'])
    },
    methods:{
        updateBJP(){
            this.$store.dispatch('updateBJP')
        }
    }
}

</script>