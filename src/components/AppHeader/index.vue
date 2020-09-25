<template>
  <div class="header">
    <a href="/">
      <img class="logo" src="@/assets/logo.png" alt="" width="25px">
      <span class="company">VO-会员系统管理</span>

    </a>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        欢迎，username<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit" command="rest-password">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-s-fold" command="logout">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {logout} from '@/api/login'

export default {
  name: "index",
  methods: {
    handleCommand(command) {
      switch (command) {
        case 'rest-password':
          this.$message.success("修改密码功能尚未实现")
          break
        case 'logout':
          //退出系统
              logout(localStorage.getItem('vo-msm-token')).then(response=>{
                const resp=response.data
                if(resp.flag){
                  //退出成功，则清除localStorage
                  localStorage.removeItem('vo-msm-user')
                  localStorage.removeItem('vo-msm-token')
                  //返回登陆页面
                  this.$router.push('/login')
                }else{
                  this.$message({
                    type:"danger",
                    message:resp.message,
                    duration:1000 //message停留时间
                  })
                }
              })
      }
    }
  }
}
</script>

<style scoped>
.logo {
  vertical-align: middle;
  padding: 0 10px 0 40px;
}

.company {
  position: absolute;
  color: white;
}

.el-dropdown {
  margin-right: 40px;
  float: right;
  color: white;

}

.el-dropdown-link:hover {
  cursor: pointer;
  color: #409EFF;
}
</style>