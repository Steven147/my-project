<template>
  <div class="container">
    <div class="left-column">
      <TodoInput @add-todo="todosWrapper.addTodo" @clear-todos="todosWrapper.clearTodos" />
      <TodoList @delete-todo="todosWrapper.deleteTodo" @edit-todo="todosWrapper.editTodo" :todos="todos" />
      <TodoInput @add-todo="recordsWrapper.addTodo" @clear-todos="recordsWrapper.clearTodos" />
      <TodoList @delete-todo="recordsWrapper.deleteTodo" @edit-todo="recordsWrapper.editTodo" :todos="records" />
    </div>
    <div class="right-column">
      <PreviewView :todos="todos" :records="records" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import PreviewView from './components/PreviewView.vue'
import { Item } from './components/TodoItem'
import { ItemList, RecordList } from './components/TodoItem'

const todos = ref<Item[]>([])
const todosWrapper = new ItemList(todos.value, false)

const records = ref<Item[]>([])
const recordsWrapper = new RecordList(records.value, true)

</script>

<style scoped>
.container {
  display: flex;
}

.left-column {
  flex: 1;
}

.right-column {
  flex: 1;
}
</style>
