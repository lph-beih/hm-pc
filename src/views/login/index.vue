<template>
    <div class="contain">
        <!-- 卡片 -->
        <el-card class="box-card">
             <!-- 1.头部图片 -->
            <img src="../../assets/images/logo_index.png" alt="">
             <!-- 2.表单 -->
            <el-form  :model="loginForm" >
                <!-- 手机号 -->
                <el-form-item >
                     <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <!-- 验证码 -->
                 <el-form-item >
                     <el-input v-model="loginForm.code" placeholder="请输入验证码" class="code"></el-input>
                     <el-button class="vertify">发送验证码</el-button>
                </el-form-item>
                <!-- 隐私条款 -->
                <el-form-item >
                      <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <!-- 提交 -->
                <el-form-item >
                       <el-button type="primary" style="width:100%">提交</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style  scoped lang="less">
.contain{
    width: 100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
    background: url('../../assets/images/login_bg.jpg') no-repeat center/cover;
    .box-card{
        width:400px;
        position: absolute;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);
        img{
            display: block;
            margin:0 auto 20px;//不设置display: block;不生效
        }
        .code{
            width:200px;
            margin-right: 30px;
        }
        .vertify{
            height: 100%;
        }
    }
}
</style>
