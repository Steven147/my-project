<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
  </div>
</template>

<script setup>

import { defineProps } from 'vue';

defineProps({
  todos: [],
})

</script>
