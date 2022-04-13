<template>
  <it-dropdown
    :class="$isMobile() ? 'navBar mobile' : 'navBar'"
    :clickable="true"
  >
    <it-icon name="menu" color="#333" size="30" />
    <template v-slot:menu>
      <it-dropdown-item v-for="r in $router.options.routes" :key="r.path">
        <router-link :to="r.path" class="navBarItem">
          /{{ r.name }}
        </router-link>
      </it-dropdown-item>
    </template>
  </it-dropdown>
</template>
<style lang="scss" scoped>
.navBar {
  cursor: pointer;
  position: relative;
  text-align: left;
  padding: 1rem;
  top: 0;
  left: 0;
  width: 100%;
  // box-shadow: 1px 1px 2px 1px pink;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .navBarItem {
    display: block;
    text-decoration: none;
  }
  .it-dropdown-item {
    background: #fff;
    a {
      transition: 0.2s all;
      opacity: 0.7;
    }
    a:hover {
      transform: scale(1.2);
      transform: rotateX(10deg);
      transform: rotateZ(5deg);
      transform: matrix3d(1, 0, 0, 0, 0.1, 1, 2, 0, 0, 0, 1, 0, 2, 2, 0, 1.1);
      // padding: 0 0 0 7px;
      opacity: 1;
    }
  }
  &.hidden {
    display: none;
  }
  &.mobile {
    background: #fff;
    // box-shadow: 2px 2px 10px 1px pink;
    position: fixed;
    width: 100%;
  }
  // TODO: responsive design w/ media queries
}
</style>
<script lang="ts" setup></script>
