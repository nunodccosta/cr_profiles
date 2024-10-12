<template>
  <div>
    <p>
      data:
      {{ data }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/player");
</script>

<style lang=""></style>
