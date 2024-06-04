<template>
  <div class="container">
    <div class="left-column">
      <TodoInput @add-todo="addTodo" @clear-todos="clearTodos" />
      <TodoList :todos="todos" />
      <TodoInput @add-todo="addRecord" @clear-todos="clearRecords" />
      <TodoList :todos="records" />
    </div>
    <div class="right-column">
      <PreviewView :todos="todos" :records="records" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import PreviewView from './components/PreviewView.vue'

// 创建响应式数据 todos, records
const todos = ref([])
const records = ref([])

function addTodo(todo) {
  todos.value.push(todo)
}

function clearTodos() {
  todos.value = []
}

function addRecord(record) {
  records.value.push(record)
}

function clearRecords() {
  records.value = []
}

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
