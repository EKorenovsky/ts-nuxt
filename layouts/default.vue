<template>
  <v-app dark>

   <!--
   <dashboard-core-app-bar/>
   <dashboard-core-drawer/>
   -->
   <v-content>
    <nuxt />
    <dashboard-core-footer/>
  </v-content>

  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DashboardCoreFooter from '~/components/layouts/DashboardCoreFooter.vue';
//import DashboardCoreAppBar from '~/components/layouts/DashboardCoreAppBar.vue';

@Component({
  components: {
    //DashboardCoreAppBar,
    DashboardCoreFooter,
  }
})
export default class DefaultLayout extends Vue {}
</script>