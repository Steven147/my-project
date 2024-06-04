<template>
  <div>
    <input type="text" v-model="todoInput" @keyup.enter="onAddTodo" />
    <button @click="onClearTodos">Clear</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["response"]);

const todoInput = ref("");

function onAddTodo() {
  emit("add-todo", todoInput.value);
  todoInput.value = "";
}

function onClearTodos() {
  emit("clear-todos");
}
</script>
