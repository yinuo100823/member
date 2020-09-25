<template>
  <div class="login-container">

    <el-form ref="form" :model="form" label-width="80px" class="login-form" :rules="rules">
      <h2 class="login-title">vo-会员管理平台</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login, getUserInfo} from '@/api/login'

export default {
  name: "index",
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [{required: true, message: "账号不能为空", trigger: "blur"}],
        password: [{required: true, message: "密码不能为空", trigger: "blur"}]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //验证通过则提交表单
          login(this.form.username, this.form.password).then(resp => {
            const respData = resp.data
            if (respData.flag) {
              // 验证成功，通过token获取用户信息
              getUserInfo(respData.data.token).then(resp => {
                //获取用户信息
                const userData = resp.data
                //如果获取用户信息成功
                if (userData.flag) {
                  // 1.保存token
                  localStorage.setItem("vo-msm-user", JSON.stringify(userData.data))
                  localStorage.setItem("vo-msm-token", userData.token)
                  //前往首页
                  this.$router.push("/")
                } else {
                  this.$message.error(userData.message)
                }

              });
            } else {
              this.$message.error(respData.message)
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style scoped>
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/login.jpg");
}

.login-form {
  width: 360px;
  margin: 180px auto;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 28px;
  border-radius: 20px;
}

.login-title {
  text-align: center;
  color: #303133;
}
</style>