<template>
  <div class="viewBox" v-gz-gnb-info="{title: title}">
    {{ title }}
    <div style="padding: 15px"  v-if="!isLogin">
      <v-form v-model="valid">
        <v-text-field
                v-model="id"
                :rules="idRules"
                label="id"
                required
        ></v-text-field>
        <v-text-field
                v-model="pwd"
                :rules="pwdRules"
                label="password"
                :type="'password'"
                required
        ></v-text-field>
        <v-btn @click="login()">Log in</v-btn>
      </v-form>
    </div>
    <div style="padding: 15px" v-else>
      <p>Already Logged</p>
      <v-btn @click="logout()">Log out</v-btn>
    </div>
  </div>
</template>

<script>
import * as VForm from 'vuetify/es5/components/VForm';
import * as VTextField from 'vuetify/es5/components/VTextField';

export default {
  name: 'NeedLogin',
  components: {
    ...VForm,
    ...VTextField
  },
  data () {
    return {
      title: 'NeedLogin',
      isLogin: this.$cookie.get(process.env.GD_SESSION_KEY),
      valid: false,
      id: process.env.GD_SESSION_KEY,
      idRules: [
        v => !!v || 'ID is required',
        v => v.length >= 5 || 'ID must be more than 5 characters.'
      ],
      pwd: '3A5431EF0A0340159AD565ED60806B1F6F3E2073C673ACB1027F537409A12E71684843350717C308FD033E599C65DAB7870672D332F5150C62FFFEB73824091A5351DCEA7D45AB906FDE787D4B884972E87E2D8E1332A066FCB908FD73772B79750FBE4C192EEA37861F56C410C7F1A513F03998C09D96DE8A51C273CE2C024875510C75478984CDE177D36B0235E6AF430C5B4DB4659E3D5B331E276A7F189CFCDF64',
      pwdRules: [
        v => !!v || 'Password is required',
        v => /^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(v) || 'Password must contain at least: 8 letters, 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc).',
      ]
    };
  },
  methods: {
    login () {
      if (this.valid) {
        this.$cookie.set(process.env.GD_SESSION_KEY, this.pwd);
        this.$router.replace(this.$route.query.redirect || 'home');
      }
    },
    logout () {
      this.$cookie.delete(process.env.GD_SESSION_KEY);
      this.$router.push('home');
    }
  }
};
</script>
