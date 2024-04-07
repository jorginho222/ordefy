<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            rounded="lg"
            variant="outlined"
          >
            <template #title>
              <h2 class="text-h5 font-weight-bold">La orden #{{  orderStore.lastOrderGet?.number}} ha sido pagada correctamente</h2>
            </template>

            <v-container>
              <p>{{ `Emitida: ${orderStore.lastOrderGet?.issueDate}` }}</p>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import {useOrderStore} from "../stores/orderStore";

const orderStore = useOrderStore()

</script>

<style scoped>

</style>
