<template>
    <div class="contain">
        <!-- 卡片 -->
        <el-card class="box-card">
             <!-- 1.头部图片 -->
            <img src="../../assets/images/logo_index.png" alt="">
             <!-- 2.表单 -->
             <!-- status-icon:输入框校验结果反馈图标 -->
             <!-- model:表单验证对象 -->
             <!-- rules：表单验证规则 -->
             <!-- ref：获取dom对象 -->
            <el-form  :model="loginForm"  :rules="rules" ref="loginForm" status-icon  >
                <!-- 手机号 -->
                <el-form-item  prop="mobile">
                     <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <!-- 验证码 -->
                 <el-form-item prop="code">
                     <el-input v-model="loginForm.code" placeholder="请输入验证码" class="code"></el-input>
                     <el-button class="vertify">发送验证码</el-button>
                </el-form-item>
                <!-- 隐私条款 -->
                <el-form-item >
                      <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
                </el-form-item>
                <!-- 提交 -->
                <el-form-item >
                       <el-button type="primary" style="width:100%" @click="submitForm('loginForm')">提交</el-button>
                        <!-- @click="submitForm('loginForm')"  里面的loginForm是ref定义的-->
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
  methods: {
    submitForm () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
        //   this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', { mobile: this.mobile, code: this.code })
        //     .then((res) => {
        //       this.$router.push('/')
        //     })
        //     .catch(() => {
        //       this.$message.error('手机号或验证码错误')
        //     })
          this.$router.push('/home')
          this.$message({
            message: '登录成功',
            type: 'success'
          })
        } else {
          console.log('登录失败')
        }
      })
    }
  },
  data () {
    //   声明函数
    var validateMobile = (rule, value, callback) => {
      // rule:rules对象
      // value：要验证的值
      // callback：成功时callback()，失败时callback(new Error())
      if (!(/^1[3456789]\d{9}$/.test(value))) {
        callback(new Error('手机号输入不正确'))
      } else {
        callback()
      }
    }
    var validateCode = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('请输入6位验证码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246180'
      },
      rules: {
        mobile: [
          { validator: validateMobile, trigger: 'blur' }
        ],
        //
        code: [
          { validator: validateCode, trigger: 'blur' }
        //   { len: 6, message: '请输入6位数字', trigger: 'blur' }
        ]
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
