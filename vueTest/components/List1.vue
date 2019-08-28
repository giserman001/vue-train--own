<template>
  <div>
      <template v-for="(item, index) in data">
          <slot name="a" :item="item" :index="index"></slot>
      </template>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style>

</style>