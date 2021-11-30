import Vuex from 'vuex'
import { auth } from './auth.module'
import { manuais } from './manuais.module'
import { manuaisInternos } from './manuaisInternos.module'

export default new Vuex.Store({
  modules: {
    manuais,
    auth,
    manuaisInternos
  }
})
