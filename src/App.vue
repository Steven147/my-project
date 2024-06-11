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
import { ref, watchEffect } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import PreviewView from './components/PreviewView.vue'
import { Item, Record } from './components/TodoItem'
import { ItemList, RecordList } from './components/TodoItem'

const storageKey1 = 'todos_data_key';
const storageKey2 = 'records_data_key';

const todos = ref<Item[]>(
  JSON.parse(localStorage.getItem(storageKey1) || '[]').map(
    (obj: any) => new Item(obj.content)
  )
);
const todosWrapper = new ItemList(todos, false)

const records = ref<Record[]>(
  JSON.parse(localStorage.getItem(storageKey2) || '[]').map(
    (obj: any) => new Record(obj.content, obj.startTime, obj.endTime)
  )
);
const recordsWrapper = new RecordList(records, true)

watchEffect(() => {
  localStorage.setItem(storageKey1, JSON.stringify(todos.value));
  localStorage.setItem(storageKey2, JSON.stringify(records.value));
  console.log("save storage")
});

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
