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
              <h2 class="text-h5 font-weight-bold">Pedido Mesa {{ table }}</h2>
            </template>

            <v-container>
              <p>{{ `Emitido: ${orderStore.lastOrderGet?.issueDate}` }}</p>

              <v-list lines="two" width="700" class="mt-4">
                <v-list-subheader inset>Detalle</v-list-subheader>

                <v-list-item
                  v-for="detail in orderStore.lastOrderGet?.details"
                  :key="detail.id"
                  :title="`${detail.description} (x ${detail.quantity})`"
                >
                  <template v-slot:append>
                    {{ `$${detail.price * 1.21} ` }}
                  </template>
                </v-list-item>

                <v-divider inset></v-divider>

                <v-list-item>
                  <template v-slot:append>
                    {{ `Total: $${orderStore.lastOrderGet?.total}` }}
                  </template>
                </v-list-item>
              </v-list>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  variant="outlined" color="success" class="mt-5"
                  @click="payOrder"
                >
                  Pagar
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import {useOrderStore} from "../stores/orderStore";
  import router from "../router";

  const props = defineProps({
    table: String
  });
  const orderStore = useOrderStore()
  getLastOrder()

  async function getLastOrder() {
    await orderStore.setTable(props.table)
    await orderStore.getLastOrder()
  }

  async function payOrder() {
    const updateOrderDto: { id: string; status: string } = {
      id: orderStore.lastOrderGet?.id,
      status: 'paid',
    }
    await orderStore.updateOrder(updateOrderDto)
    await router.push({name: 'invoicePaid', params: { order: orderStore.lastOrderGet?.number }})
  }
</script>

<style scoped>

</style>
