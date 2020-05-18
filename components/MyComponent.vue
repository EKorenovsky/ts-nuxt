<template>
  <v-btn
      class="mr-3"
      elevation="1"
      fab
      small
      @click="onClick"
    >
      <v-icon v-if="value">
        mdi-view-quilt
      </v-icon>

      <v-icon v-else>
        mdi-dots-vertical
      </v-icon>
    </v-btn>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VHover, VListItem } from 'vuetify/lib';
import { mapState, mapMutations } from 'vuex';

@Component
export default class MyComponent extends Vue {
  message: string = 'This is a message';
  value: boolean = false;
  onClick (): void {
    window.alert(this.message);
  }
  
}
</script>


<style>

</style>