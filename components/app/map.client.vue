<script setup lang="ts">
import { CENTER_BARNAUL } from "~/lib/constants";

const colorMode = useColorMode();
const style = computed(() =>
  colorMode.value === "dark"
    ? "/styles/dark.json"
    : "https://tiles.openfreemap.org/styles/liberty",
);
const zoom = 3;
</script>

<template>
  <MglMap
    :map-style="style"
    :center="CENTER_BARNAUL"
    :zoom="zoom"
  >
    <MglNavigationControl />
  </MglMap>
</template>
