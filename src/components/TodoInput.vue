<template>
  <div>
    <input type="text" v-model="todoInput" @keyup.enter="onAddTodo()" />
    <button @click="onAddTodo()">submit</button>
    <button @click="onClearTodos()">Clear</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["add-todo", "clear-todos"]);

const todoInput = ref("");

function onAddTodo() {
  emit("add-todo", todoInput.value);
  todoInput.value = "";
}

function onClearTodos() {
  emit("clear-todos");
}
</script>
