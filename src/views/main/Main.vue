<template>
  <div class="mainCon">
    <div class="topBtn">
      <v-btn block @click="IDBOpen">indexedDB Open</v-btn>
      <v-btn block @click="IDBClose">indexedDB Close</v-btn>
    </div>
    <v-text-field
      v-model="indexedDbInp"
      label="Messge"
      append-icon="add"
      @click:append="setIDB"
      required
    ></v-text-field>
    <div class="todoList">
      <ul>
        <li v-for="(k, idx) in DbList" :key="idx">
          {{ k.text }}
          <v-btn class="mx-2" tile x-small icon>
            <v-icon dark @click="deleteIDB(k)">mdi-minus</v-icon>
          </v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      IDBName: 'DBName',
      indexedDbInp: '',
      DbList: []
    }
  },
  methods: {
    IDBOpen () {
      if (this.$db) {
        this.$db.version(1).stores({ [this.IDBName]: '_id' });
        this.$db.open().then(this.refreshView);
      }
    },
    IDBClose () {
      this.$db.close();
      this.DbList = [];
      this.indexedDbInp = '';
    },
    refreshView () {
      return this.$db[this.IDBName].toArray().then((rs) => {
        this.DbList = rs;
      });
    },
    setIDB () {
      this.$db[this.IDBName].put({
        _id: String(Date.now()),
        text: this.indexedDbInp
      }).then((rs) => {
        this.$db[this.IDBName].get(rs, (data) => {
          this.DbList.push(data);
          this.indexedDbInp = '';
        });
      }).catch((error) => {
        alert('ERROR::: ' + error.message);
      });
    },
    deleteIDB (item) {
      this.$db[this.IDBName].where('_id').equals(item['_id']).delete().then(this.refreshView);
    }
  }
};
</script>
<style lang="sass">
.mainCon
  .topBtn
    .v-btn
      margin-bottom: 5px
  .todoList
    ul
      padding-left: 0
      li
        position: relative
        padding: 15px 0 5px 0
        border-bottom: 1px solid rgba(0, 0, 0, 0.2)
        .v-btn
          position: absolute
          top: 15px
          right: 0
</style>
