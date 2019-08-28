<template>
    <div>
        Grandson2:{{$attrs}}
    </div>
</template>
<script>
    export default {
        mounted() {
            this.$listeners.son()
        },
        data() {
            return {}
        }
    }
</script>