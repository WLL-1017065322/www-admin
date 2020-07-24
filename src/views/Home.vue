<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider v-model="collapsed" collapsible>
      <!-- logo -->
      <div class="logo" style="color:#fff">along</div>
      <a-menu
        theme="dark"
        :default-selected-keys="['1']"
        mode="inline"
        @openChange="onOpenChange"
        :open-keys="openKeys"
      >
        <a-sub-menu v-for="items  in $router.options.routes.slice(1)" :key="items.name">
          <span slot="title">
            <a-icon :type="items.meta.icon" />
            <span>{{items.meta.title}}</span>
          </span>
          <a-menu-item
            v-for=" item in items.children"
            :key="item.name"
            @click="linkTo(item.path)"
          >{{item.meta.title}}</a-menu-item>
        </a-sub-menu>
        <!-- 备份 -->
        <a-menu-item key="Backup" @click="backup">
          <a-icon type="file" />
          <span>备份</span>
        </a-menu-item>
        <!-- 退出 -->
        <a-menu-item key="Logout" @click="logout">
          <a-icon type="logout" />
          <span>退出</span>
        </a-menu-item>

        <!-- --------------------------------------- -->
        <!--  -->
        <!-- 内容管理 -->
        <!-- <a-sub-menu key="content">
          <span slot="title">
            <a-icon type="file-text" />
            <span>内容管理</span>
          </span>
          <a-menu-item key="tools">在线工具</a-menu-item>
          <a-menu-item key="demos">个人作品</a-menu-item>
          <a-menu-item key="components">封装组件</a-menu-item>
          <a-menu-item key="hotevents">热门事件</a-menu-item>
          <a-menu-item key="grasses">百草</a-menu-item>
          <a-menu-item key="chong">百虫</a-menu-item>
        </a-sub-menu>-->
        <!-- 网站管理 -->
        <!-- <a-sub-menu key="webManage">
          <span slot="title">
            <a-icon type="code" />
            <span>网站管理</span>
          </span>
          <a-menu-item key="slideshow">轮播</a-menu-item>
          <a-menu-item key="notice">公告</a-menu-item>
          <a-menu-item key="blogrolls">友情链接</a-menu-item>
          <a-menu-item key="tagClouds">标签</a-menu-item>
          <a-menu-item key="websiteMessage">网站信息</a-menu-item>
          <a-menu-item key="loves">猜你喜欢</a-menu-item>
        </a-sub-menu>-->
        <!-- 用户管理 -->
        <!-- <a-sub-menu key="crm">
          <span slot="title">
            <a-icon type="user" />
            <span>用户管理</span>
          </span>
          <a-menu-item key="personage">个人</a-menu-item>
          <a-menu-item key="otherUsers">其他用户</a-menu-item>
        </a-sub-menu>-->
        <!-- 日志系统 -->
        <!-- <a-sub-menu key="logs">
          <span slot="title">
            <a-icon type="fund" />
            <span>日志系统</span>
          </span>
          <a-menu-item key="log1">日志系统</a-menu-item>
        </a-sub-menu>-->
        <!-- 备份 -->
        <!-- <a-menu-item key="backup">
          <a-icon type="file" />
          <span>一键备份</span>
        </a-menu-item>-->
        <!-- 其他 -->
        <!-- <a-sub-menu key="others">
          <span slot="title">
            <a-icon type="more" />
            <span>其他</span>
          </span>
          <a-menu-item key="other">其他</a-menu-item>
        </a-sub-menu>-->
        <!-- 退出 -->
        <!-- <a-menu-item key="logout">
          <a-icon type="logout" />
          <span>退出</span>
        </a-menu-item>-->
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view></router-view>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false,
      openKeys: [],
      rootSubmenuKeys: []
    }
  },
  methods: {
    route: function () {
      console.log(this.$router)
      console.log(this.$route)
    },
    linkTo (path) {
      console.log('path', path)
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
    backup () {
      console.log('备份')
    },
    logout () {
      console.log('退出')
    },
    rootSubmenuKeysFunc () {
      const routeArr = this.$router.options.routes
      for (let i = 0; i < routeArr.length; i++) {
        this.rootSubmenuKeys.push(routeArr[i].name)
      }
    },
    // 只展开当前父级菜单
    onOpenChange (openKeys) {
      let latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
  },
  computed: {
  },
  created () {
    this.rootSubmenuKeysFunc()
  },
  mounted () {
    this.route()
  }
}
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
