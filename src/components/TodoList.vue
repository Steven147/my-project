<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span>{{ todo.getString() }}</span>
        <button @click="deleteItem(index)">Delete</button>
        <button @click="editItem(index)">Edit</button>
      </li>
    </ul>
    <div v-if="activeTodoIndex !== undefined && activeTodo !== undefined" class="drawer">
      <form @submit.prevent="submitEdit">
        <label>
          Value:
          <input v-model="activeTodo.content" @keyup.enter="submitEdit">
        </label>
        <label v-if="activeTodo instanceof Record">
          Start Time:
          <input v-model="activeTodo.startTime">
        </label>
        <label v-if="activeTodo instanceof Record">
          End Time:
          <input v-model="activeTodo.endTime" @keyup.enter="submitEdit">
        </label>
        <button @click="submitEdit()">submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { defineProps, PropType, ref } from 'vue';
import { Item, Record } from './TodoItem'

import { defineEmits } from "vue";

const emit = defineEmits(["delete-todo", "edit-todo"]);
var activeTodoIndex = ref<number>()
var activeTodo = ref<Item>()

const props = defineProps({
  todos: Object as PropType<Item[]>,
})

function deleteItem(index: number) {
  emit("delete-todo", index);
}

function editItem(index: number) {
  // emit("edit-todo", index);
  activeTodoIndex.value = index;
  activeTodo.value = props.todos ? props.todos[index] : undefined;
  emit("edit-todo", activeTodo.value, index);
}

function submitEdit(): void {
  // validation and save logic...
  activeTodoIndex.value = undefined; // close the drawer
  activeTodo.value = undefined
}
</script>
