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
              <h2 class="text-h5 font-weight-bold">Nueva orden</h2>
            </template>

            <v-container
              class=""
            >
              <v-row class="justify-center">
                <v-col cols="6">
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
                  />
                  <v-spacer />
                </v-col>
              </v-row>

              <v-card-actions>

                <v-row class="justify-center">
                  <v-btn
                    variant="outlined"
                    color="primary"
                    text="Agregar"
                    @click="() => {
                      details.push(detail)
                      console.log(details)
                    }"
                  ></v-btn>
                </v-row>
              </v-card-actions>

              <v-data-table
                :items="details"
                :headers="detailHeaders"
              />
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">

import {ref} from "vue";

const detail = ref({
  description: "",
  quantity: 1,
  price: 0
})
const details = []
const detailHeaders = [
  {text: "Descripción", value: "description"},
  {text: "Precio", value: "description"},
  {text: "Cantidad", value: "description"},
]
</script>
