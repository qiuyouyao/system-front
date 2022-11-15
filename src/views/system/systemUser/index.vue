<template>
  <div class="app-container">
    <el-form ref="form" :model="form" :inline="true" style="margin-top: 10px" size="mini">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="fetchData(1, size)">搜索</el-button>
        <el-button plain icon="el-icon-search" @click="resetSearchForm">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="tool-container">
      <el-button type="primary" size="mini" class="tool-btn" icon="el-icon-plus" @click="add">新增</el-button>
    </div>
    <el-table
      v-loading="loading"
      :data="records"
      border
      style="width: 100%; margin-top: 10px">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="updateTime"
        label="最后更新时间">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template v-slot="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row)"></el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" @click="deleteUser(scope.row)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
<!--    <add-form ref="addForm"/>-->
  </div>
</template>

<script>
import {pageUsers, deleteUser} from '@/api/user'

export default {
  name: "list",

  data() {
    return {
      loading: false,
      records: [],
      total: 0,
      page: 1,
      size: 10,
      searchParams: {},
      form: {
        roleCode: '',
        roleName: ''
      }
    }
  },
  created() {
    this.fetchData(this.page, this.size)
  },
  methods: {
    fetchData(page, size) {
      this.loading = true
      this.searchParams = this.form
      pageUsers({
        page,
        size,
        ...this.searchParams
      }).then(res => {
        this.loading = false
        this.records = res.data.records
        this.total = res.data.total
      })
    },
    handleSizeChange(size) {
      this.fetchData(1, size)
    },
    handleCurrentChange(page) {
      this.fetchData(page, this.size)
    },
    resetSearchForm() {
      this.form = {}
      this.fetchData(1, this.size)
    },
    deleteUser(role) {
      deleteUser(role.id).then((_) => {
        this.fetchData(1, this.size)
      })
    },
    edit(role) {
      this.$refs.addForm.dialog = true
      this.$refs.addForm.form = JSON.parse(JSON.stringify(role))
    },
  }
}
</script>

<style scoped>

</style>
