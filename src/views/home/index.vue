<template>
  <el-container class="home-container">
    <el-aside :width="isCollapse?'60px':'200px'">
      <!-- logo -->
      <div class="logo" :class="{logo_callspe:isCollapse}"></div>
      <!-- 侧边导航栏 -->
       <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :collapse-transition='false'
      >
      <el-menu-item index="1">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
       <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">内容管理</span>
      </el-menu-item>
       <el-menu-item index="3">
        <i class="el-icon-picture"></i>
        <span slot="title">素材管理</span>
      </el-menu-item>
       <el-menu-item index="4">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">发布文章</span>
      </el-menu-item>
       <el-menu-item index="5">
        <i class="el-icon-s-comment"></i>
        <span slot="title">评论管理</span>
      </el-menu-item>
       <el-menu-item index="6">
        <i class="el-icon-present"></i>
        <span slot="title">粉丝管理</span>
      </el-menu-item>
       <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span>
          <!-- 1.侧边导航栏折叠 -->
          <!-- 1.1绑定折叠事件 -->
          <i class="el-icon-s-fold" @click="taggleButton"></i>
        </span>
        <span>江苏传智播客科技教育有限公司</span>
        <el-dropdown>
          <img src="../../assets/images/avatar.jpg" alt />
          <span class="el-dropdown-link username">
            用户名字
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      // 1.1默认不折叠
      isCollapse: false
    }
  },
  methods: {
    // logo，导航宽度，折叠均变化
    // 2.2控制导航是否折叠
    taggleButton () {
      console.log('1')
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style  scoped lang="less">
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .el-aside {
    background-color: #002033;
    .logo{
      width: 100%;
      height: 60px;
     background:#002244 url('../../assets/images/logo_admin.png') no-repeat center/140px auto;
    }
    .logo_callspe{
        //  background:#002244 url('../../assets/images/logo_admin_01.png') no-repeat center/40px auto;
      background-image: url('../../assets/images/logo_admin_01.png');
      background-size: 40px auto;
    }
    .el-menu{
      border-right: none;
    }
  }
  .el-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    height: 60px;
    .el-icon-s-fold {
      margin-right: 10px;
    }
    .el-dropdown {
      float: right;
      img {
        width: 30px;
        height: 30px;
        // display: inline-block;
        vertical-align: middle;
      }
      .username {
        // font-weight: bold;
        color: #333;
        vertical-align: middle;
      }
    }
  }
  .el-main{
    background:url('../../assets/images/welcome.jpg') no-repeat center/contain;
  }
}
</style>
