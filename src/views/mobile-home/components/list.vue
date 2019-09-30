<template>
  <div class="list-item">
    <h2 class="list-title">{{item.title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>