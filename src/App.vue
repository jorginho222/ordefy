<template>
  <v-app>
    <nav>
      <v-toolbar>
        <RouterLink class="ml-3 mr-5" to="/" active-class="active">Home</RouterLink>
        <RouterLink to="/table-order" @click="setTable(1)">Mesa 1</RouterLink>
        <RouterLink to="/table-order" @click="setTable(2)">Mesa 2</RouterLink>
      </v-toolbar>
    </nav>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import {useOrderStore} from "./stores/orderStore";

  function setTable(table: number) {
    const orderStore = useOrderStore()
    orderStore.setTable(table)
  }

</script>
