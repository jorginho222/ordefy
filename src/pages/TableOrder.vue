<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-btn
        variant="outlined" color="primary"
        class="mb-5"
        @click="() => { router.push({name: 'createOrder'}) }"
      >
        Crear Orden
      </v-btn>
      <v-row>
        <v-col cols="12">
          <v-card
            class="py-4"
            color="surface-variant"
            rounded="lg"
            variant="outlined"
          >
            <template #title>
              <h2 class="text-h5 font-weight-bold">Ultima orden</h2>
            </template>

            <v-container>
              <p>{{ `Numero: ${orderStore.lastOrderGet?.number}` }}</p>
              <p>{{ `Creada: ${orderStore.lastOrderGet?.issueDate}` }}</p>
              <p>{{ `Estado: ${orderStore.lastOrderGet?.status}` }}</p>

              <v-list lines="two" width="700" class="mt-4">
                <v-list-subheader inset>Detalle</v-list-subheader>

                <v-list-item
                  v-for="detail in orderStore.lastOrderGet?.details"
                  :key="detail.id"
                  :title="`${detail.description} (x ${detail.quantity})`"
                >
                  <template v-slot:append>
                    {{ `$${detail.price}` }}
                  </template>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <template v-slot:append>
                    {{ `Total: $${orderStore.lastOrderGet?.total}` }}
                  </template>
                </v-list-item>
              </v-list>
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
getLastOrder()

async function getLastOrder() {
  console.log(orderStore.getLastOrder())
  // await orderStore.getLastOrder()
}

</script>
