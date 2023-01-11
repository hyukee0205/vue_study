<template>
  <div id="app">
    <h2>라우터 사용하기</h2>
      <router-link to="/">HOME</router-link>
      <router-link to="/main">메인 페이지</router-link>
      <router-link to="/sub">서브 페이지</router-link>
      <hr>
      <router-view></router-view>
  </div>
</template>

<style>
.router-link-exact-active{
      text-decoration:none;
      font-weight:bold;
      color:tomato
    }
</style>
