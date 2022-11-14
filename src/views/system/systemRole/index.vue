<template>
  <div class="app-container">
    角色列表
    <el-table
      v-loading="loading"
      :data="records"
      border
      style="width: 100%; margin-top: 10px">
      <el-table-column
        prop="id"
        label="角色id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="roleCode"
        label="角色编码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="roleName"
        label="角色名称">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="最后更新时间">
      </el-table-column>
      <el-table-column
        prop=""
        label="操作">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {pageRoles} from '@/api/role'

export default {
  name: "index",
  data() {
    return {
      loading: false,
      records: [],
      total: 0,
      page: 1,
      size: 3,
      searchParams: {}
    }
  },
  created() {
    console.log('created...')
    this.fetchData(this.page, this.size)
  },
  methods: {
    fetchData(page, size) {
      this.loading = true
      pageRoles({
        page,
        size
      }).then(res => {
        this.loading = false
        this.records = res.data.records
        this.total = res.data.total
      })
    }
  }
}
</script>

<style scoped>

</style>
