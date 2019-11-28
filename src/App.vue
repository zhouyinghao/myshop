<template>
  <div id="app">
    <router-view/>
    <ul>
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <router-link to="/category">分类</router-link>
      </li>
      <li>
        <router-link to="/cart">购物车</router-link>
      </li>
      <li>
        <router-link to="/profile">我的</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">

</style>
