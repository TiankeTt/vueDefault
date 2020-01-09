<template>
  <div class="home">
    这是一个首页
  </div>
</template>

<script>
  import { testHome } from '@/api/common'
  export default {
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
      }
    },
    created() {
      this.getData()
    }
  }
</script>
