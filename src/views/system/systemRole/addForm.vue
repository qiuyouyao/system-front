<template>
  <el-dialog
    :visible.sync="dialog"
    :close-on-click-modal="false"
    :before-close="cancel"
    :title="form.id ? '编辑' : '新增'"
    append-to-body
    top="80px"
    width="500px">
    <el-form ref="form" :model="form" :rules="rules" size="small" label-width="150px">
      <el-form-item label="角色编码：" prop="roleCode" class = "item">
        <el-input v-model="form.roleCode" :disabled="form.id"></el-input>
      </el-form-item>
      <el-form-item label="角色名称：" prop="roleName" class = "item">
        <el-input v-model="form.roleName"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="text" @click="cancel">取消</el-button>
      <el-button :loading="loading" type="primary" @click="doSubmit">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {saveRole, updateRole} from '@/api/role'
export default {
  name: "addForm",

  data() {
    return {
      dialog: false,
      loading: false,
      form : {
        id: null,
        roleCode: '',
        roleName: ''
      }
    }
  },
  methods: {
    doSubmit() {
      this.loading = true
      let saveFlag = this.form.id == null
      if (saveFlag) {
        saveRole(this.form)
        this.$notify({
          title: '修改成功',
          type: 'success',
          duration: 2500
        })
        this.loading = false
        this.resetForm()
        this.$parent.fetchData(1, this.$parent.size)
      } else {
        this.form.roleCode = null
        updateRole(this.form).then((_) => {
          this.$notify({
            title: '修改成功',
            type: 'success',
            duration: 2500
          })
          this.loading = false
          this.resetForm()
          this.$parent.fetchData(1, this.$parent.size)
        })
      }
    },
    resetForm() {
      this.dialog = false
      this.$refs['form'].resetFields()
      this.form = {
        id: null,
        roleCode: '',
        roleName: ''
      }
    },
  }
}
</script>

<style scoped>

</style>
