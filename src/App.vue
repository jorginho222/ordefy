<template>
  <v-app>
    <nav>
      <v-toolbar>
        <RouterLink class="ml-3 mr-5" to="/" active-class="active">Home</RouterLink>
        <RouterLink
          :to="{name: 'tableOrder', params: { table: 1 } }"
          @click="goToTable(1)"
        >
          Mesa 1
        </RouterLink>
        <RouterLink
          :to="{ name: 'tableOrder', params: { table: 2 } }"
          @click="goToTable(2)"
        >
          Mesa 2
        </RouterLink>
      </v-toolbar>
    </nav>
    <v-main>
      <RouterView/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import {useOrderStore} from "./stores/orderStore";

const orderStore = useOrderStore()

async function goToTable(table: number) {
  orderStore.setTable(table)
  await orderStore.getLastOrder()
}
</script>
