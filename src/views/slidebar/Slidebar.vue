<template>
  <div class="slideBarItem">
    <!--  -->
    <a-menu-item
      v-if="!items.children"
      :key="items.name"
      @click="linkTo(items.path)"
    >{{items.meta.title}}</a-menu-item>
    <!--  -->
    <a-sub-menu v-else :key="items.name">
      <span slot="title">
        <a-icon type="file-text" />
        <span>{{items.meta.title}}</span>
      </span>
      <a-menu-item
        v-for=" item in items.children"
        :key="item.name"
        @click="linkTo(item.path)"
      >{{item.meta.title}}</a-menu-item>
    </a-sub-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    // route object
    items: {
      type: Object,
      required: true
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
</style>
