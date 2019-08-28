<template>
    <div>
        son2{{$attrs}}-{{$listeners}}
        <Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2>
    </div>
</template>
<script>
    import Grandson2 from './Grandson2'
    export default {
        mounted() {
            console.log(this.$listeners)
            this.$bus.$on('cc', (val) => {
                console.log('vvvvvvvvvv' + val)
            })
        },
        components: {
            Grandson2
        },
        inheritAttrs: false,
        props: {
            value: {
                type: String
            }
        },
        data() {
            return {

            }
        }
    }
</script>