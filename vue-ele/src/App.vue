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
      axios.get('https://api.github.com/users/onlyliii')
      .then(function (response) {
        this.res = response;
      }.bind(this))
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
