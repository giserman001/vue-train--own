import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
interface IUserState {
  token: string
  name: string
  avatar: string
  introduction: string
  roles: string[]
  email: string
  num: number
}
@Module({ namespaced: true, name: 'User' })
export default class User extends VuexModule implements IUserState {
  // 这里都是state初始化
  public token =  ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  public email = ''
  public num = 0
  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }
  // 第一种写法
  @Action
  public async Login(userInfo: { username: string, password: string}) {
    let { username, password } = userInfo
    password = password + '1'
    username = username.trim()
    // const { data } = await login({ username, password })
    // setToken(data.accessToken)
    // this.SET_TOKEN(data.accessToken)
    this.SET_TOKEN('111111111')
  }
  // 第二种写法
  // @Action({ commit: 'increment' })
  // incr() {
  //   return 5
  // }
  // 相当于 getters
  get axles() {
    return this.num++
  }
}
