import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usrname: '',
    usrphone: '',
    usremail: ''
  },
  mutations: {
    changeUsrInfo(state, usrInfo) {
      state.usrname = usrInfo.usrname || state.usrname;
      state.usrphone = usrInfo.usrphone || state.usrphone;
      state.usremail = usrInfo.usremail || state.usremail;
    }
  },
  actions: {
  },
  modules: {
  }
})
