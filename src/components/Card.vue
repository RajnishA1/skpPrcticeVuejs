<template>
    <div>
        <h1>Bjp  = {{BJP}}</h1>
        <h1>Congress  = 10</h1>
        <h1>Rjd  = 10</h1>


    </div>
</template>
<script>
import { mapState } from 'vuex';


export default {
    name: 'Marriage card',

    methods: {

    },
    computed:{
        ...mapState(['BJP'])
    }
}

</script>