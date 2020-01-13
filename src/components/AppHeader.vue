<template>
  <div id="header">
    <v-navigation-drawer app fixed dark v-model="drawer" class="grey darken-4">
      <div class="menuTextBox">
        <div class="logo">
          주식회사세움<br />
          ERP SYSTEM
        </div>
        <p><strong>홍길동</strong>님 안녕하세요.</p>
        <v-btn block color="secondary" dark>로그아웃</v-btn>
      </div>
      <v-list>
        <v-list-tile :to="'/'">
          <v-list-tile-action><v-icon>arrow_right</v-icon></v-list-tile-action>
          <v-list-tile-title>현장재고현황</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="'/'">
          <v-list-tile-action><v-icon>arrow_right</v-icon></v-list-tile-action>
          <v-list-tile-title>결제리스트</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="'/customer/search'">
          <v-list-tile-action><v-icon>arrow_right</v-icon></v-list-tile-action>
          <v-list-tile-title>거래처조회</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="'/'">
          <v-list-tile-action><v-icon>arrow_right</v-icon></v-list-tile-action>
          <v-list-tile-title>미수금정보현황</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="'/'">
          <v-list-tile-action><v-icon>arrow_right</v-icon></v-list-tile-action>
          <v-list-tile-title>임대내역서</v-list-tile-title>
        </v-list-tile>
        <v-list-tile :to="'/'">
          <v-list-tile-action><v-icon>arrow_right</v-icon></v-list-tile-action>
          <v-list-tile-title>배차현황</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app dark color="grey darken-3">
      <div class="header">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <div class="headerTitle">
          SAEUM
        </div>
        <div class="homeBtn">
          <v-btn flat icon color="white" :to="'/main'">
            <v-icon>home</v-icon>
          </v-btn>
        </div>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
import * as VToolbar from 'vuetify/es5/components/VToolbar';
import * as VList from 'vuetify/es5/components/VList';
import * as VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer';
export default {
  name: 'AppHeader',
  components: {
    ...VToolbar,
    ...VList,
    ...VNavigationDrawer
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
  }
};
</script>

<style lang="less">
  #header {
    .v-list__tile__action, .v-list__tile__avatar {
      min-width: auto
    }
    .menuTextBox {
      padding: 20px 16px;
      color:#fff;
      border-bottom:1px solid #636363;
      .logo {
        padding-bottom:15px;
        font-size:20px;
      }
      p {
        padding-bottom:10px;
      }
    }
    .header {
      position: relative;
      width:100%;
      .v-btn {
        position:relative;
        z-index:1;
      }
      .headerTitle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        line-height: 50px;
        font-weight: bold;
        font-size: 18px;
        text-align:center;
      }
      .homeBtn {
        position:absolute;
        top:0;
        right:0;
        z-index:1;
      }
    }
    .v-list__tile--active {
      &:before {
         content: '';
         position:absolute;
         top:0;
         left:0;
         width:100%;
         height:100%;
         background: rgba(0,0,0,.22);
       }
    }
    .v-navigation-drawer--mini-variant {
      .v-list__group__header {
        .v-list__tile {
          width: 60px;
        }
      }
    }
  }
</style>
