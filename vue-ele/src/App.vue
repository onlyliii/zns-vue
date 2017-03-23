<template>
  <div id="app">
  <el-button type="success" @click="getData()">获取数据</el-button>
  <div>{{res}}</div>
  <Date></Date>
  <Radio></Radio>
  <Check></Check>
    {{msg}}
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>

    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>


  </div>
</template>

<script>
import Date from './components/Date.vue'
import Radio from './components/Radio.vue'
import CheckBox from './components/Check.vue'
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      res: '我是数据'
    }
  },
  components: {
    Date: Date,
    Radio: Radio,
    Check: CheckBox
  },
  methods: {
    getData() {
      axios.get('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=%E8%BF%85%E9%9B%B7aa&json=1&p=3&sid=1426_21126_17001_22160&req=2&bs=%E8%BF%85%E9%9B%B7&pbs=%E8%BF%85%E9%9B%B7app&csor=3&pwd=%E8%BF%85%E9%9B%B7a&cb=jQuery110203079330098597126_1490264649026&_=1490264649041')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>
<style scoped>
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
