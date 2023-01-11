<template>
  <v-app>
    <!-- 앱바 테마를 primary(파란색)로 설정 -->
    <v-app-bar app color="primary" dark>
      <!-- 좌측에 메뉴 아이콘 생성 -->
      <v-app-bar-nav-icon @click.stop="bDrawer = !bDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>멀티 페이지</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- bDrawer True -->
    <v-navigation-drawer absolute temporary v-model="bDrawer">
      <v-toolbar falt height="70px">
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img src="../public/images/sky.jpg">
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="title">전찬혁</v-list-item-title>
              <v-list-item-subtitle>로그인</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-toolbar>


    <v-divider></v-divider>

    <v-list class="pt-3">
      <v-list-item v-for="item in menu_items" :key="item.title" :href="item.link">
        <v-list-item-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title to="">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>





    <!-- 내용영역에 라우터 페이지 렌더링 -->
    <v-main>
      <v-container class="display-1">
        <router-link to="/" class="mr-5">HOME</router-link>
        <router-link to="/main" class="mr-5">MAIN</router-link>
        <router-link to="/sub" class="mr-5">SUB</router-link>
      </v-container>


      <!-- 페이지 장면전환 효과 -->
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-main>


    <!-- Footer 영역 테마를 secondary로 설정 -->
    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">Create By VueJS</div>
    </v-footer>




  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    bDrawer: false,
    menu_items: [{
      title: 'HOME',
      icon: 'mdi-home',
      link: '/'
    },{
      title: 'MAIN',
      icon: 'mdi-folder',
      link: '/main'
    },{
      title: 'USB',
      icon: 'mdi-FolderAccount',
      link: '/sub'
    }]
  }),
};
</script>
