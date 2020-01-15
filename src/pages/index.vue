<template>
  <div class="home">
    这是一个首页
    <h5>
      vuex
      <span style="color: red;">{{count}}</span>
    </h5>
    <button @click="add">增加</button>
    <h5>
      getters
      <span style="color: red;">{{doubleCount}}</span>
    </h5>
  </div>
</template>

<script>
import { testHome } from '@/api/common'
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      count: state => state.test.count
    }),
    ...mapGetters([
      'doubleCount'
    ])
  },
  data() {
    return {
      listData: ['11']
    }
  },
  methods: {
    async getData() {
      // 使用axios例子，实际情况直接删除
      let params = {
        city: '浙江',
        indexFlag: true,
        tags: ['热门好车']
      }
      const res = await testHome(params)
      this.listData = res.list
    },
    ...mapMutations(['add'])
  },
  created() {
    this.getData()
  }
}
</script>
