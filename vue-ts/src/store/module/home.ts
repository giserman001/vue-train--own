import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
export interface Ilist {
  name: string
  value: number
}
interface Ihome {
  list: Ilist[]
  isLogin: boolean
}
interface Idata {
  name: string
  value: number
}
@Module({ namespaced: true, name: 'Home' })
export default class Home extends VuexModule implements Ihome {
  // 这里都是state初始化
  public list =  []
  public isLogin = false
  @Mutation
  private SET_LOGIN(isLogin: any) {
    this.isLogin = isLogin.isLogin
  }
  @Mutation
  private SET_LIST(list: never[]) {
    console.log(list, 'aaaaa')
    this.list = list
  }
  // 第一种写法
  @Action({ commit: 'SET_LIST'})
  public async getList(data: never[]) {
    // const { name, value } = data
    // 请求后台数据
    // const res = await getList({ name, value })
    return data
  }
  // 第二种写法
  @Action({ commit: 'SET_LOGIN' })
  public async loginAction() {
    return true
  }
}
