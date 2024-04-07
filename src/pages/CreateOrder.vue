<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-btn
        variant="outlined" color="primary"
        class="mb-5"
        @click="() => { router.push({ name: 'tableOrder', params: { table: orderStore.table }}) }"
      >
        Volver
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
              <h2 class="text-h5 font-weight-bold">Nueva orden - Mesa {{ orderStore.table }}</h2>
            </template>

            <v-container
              class=""
            >
              <v-data-table
                class="mt-5"
                :items="order.details"
                :headers="detailHeaders"
                density="compact"
              >
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title>Pedido</v-toolbar-title>
                    <v-divider
                      class="mx-4"
                      inset
                      vertical
                    />
                    <v-dialog
                      v-model="showForm"
                      max-width="500px"
                    >
                      <template v-slot:activator="{ props }">
                        <v-btn
                          variant="outlined" color="primary" dark
                          class="mb-2 mt-1"
                          v-bind="props"
                        >
                          Agregar
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-text>
                          <v-container>
                            <v-row class="justify-center">
                              <v-col cols="12">
                                <v-text-field
                                  v-model="detail.description"
                                  label="Descripción"
                                />
                                <v-text-field
                                  v-model.number="detail.quantity"
                                  type="number" min="1"
                                  label="Cantidad"
                                />
                                <v-text-field
                                  v-model.number="detail.price"
                                  label="Precio"
                                  type="number" min="0"
                                >
                                  <template v-slot:prepend-inner>
                                    <v-icon class="mt-5">mdi-currency-usd</v-icon>
                                  </template>
                                </v-text-field>
                                <v-spacer/>
                              </v-col>
                            </v-row>

                            <v-card-actions>

                              <v-row class="justify-center">
                                <v-btn
                                  variant="outlined"
                                  color="primary"
                                  text="Agregar"
                                  @click="saveDetail"
                                ></v-btn>
                              </v-row>
                            </v-card-actions>

                          </v-container>
                        </v-card-text>
                      </v-card>
                    </v-dialog>
                  </v-toolbar>
                </template>
                <template #tfoot>
                  <div class="mt-4 mb-2 ml-3 text-h6">
                    {{ `Total: $${order.details.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}` }}
                  </div>
                </template>
                <template #bottom></template>
              </v-data-table>

              <v-card-actions>
                <v-row class="justify-center mt-6">
                  <v-btn
                    color="success"
                    variant="outlined"
                    @click="saveOrder"
                  >
                    Guardar
                  </v-btn>
                </v-row>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import {ref, Ref, UnwrapRef} from "vue";
import {OrderDto} from "../interfaces/dtos/OrderDto";
import {OrderDefault} from "../defaults/OrderDefault";
import {OrderDetailDto} from "../interfaces/dtos/OrderDetailDto";
import {OrderDetailDefault} from "../defaults/OrderDetailDefault";
import {useOrderStore} from "../stores/orderStore";
import router from "../router";

const orderStore = useOrderStore()
const showForm: Ref<UnwrapRef<boolean>> = ref(false)

let order: Ref<UnwrapRef<OrderDto>> = ref(OrderDefault(orderStore.table))
let detail: Ref<UnwrapRef<OrderDetailDto>> = ref(OrderDetailDefault())
const detailHeaders: Array<{ title: string, value: string }> = [
  {title: "Descripción", value: "description"},
  {title: "Cantidad", value: "quantity"},
  {title: "Precio", value: "price"},
]

async function saveDetail() {
  order.value.details.push(detail.value)
  detail.value = OrderDetailDefault()
  showForm.value = false
}

async function saveOrder() {
  await orderStore.addOrder(order.value)

  await router.push({name: 'tableOrder', params: { table: orderStore.table }})
}
</script>

<style scoped>

</style>
