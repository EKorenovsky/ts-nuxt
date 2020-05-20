import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'Main',
  stateFactory: true,
  namespaced: true,
})
export default class MainModule extends VuexModule {
    barColor: string = 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)';
    barImage: string = '/img/sidebar-1.jpg';
    drawer: string | null = null;

    @Mutation
    SET_BAR_IMAGE (barImage: string) {
        this.barImage = barImage;
    }
    
    @Mutation
    SET_DRAWER (drawer: string | null) {
        this.drawer = drawer;
    }
}