  <template>
  <div class="container">
    <img
      class="preview-image"
      src="../assets/zhenxiban.png"
      alt="preview-view"
    />
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index">{{ todo.getString() }}</li>
    </ul>
    <ul class="record-list">
      <li v-for="(record, index) in records" :key="index">{{ record.getString() }}</li>
    </ul>
  </div>
</template>

<script script lang="ts" setup>

import { defineProps, PropType } from 'vue';
import { Item } from './TodoItem'

defineProps({
  todos: Object as PropType<Item[]>,
  records: Object as PropType<Item[]>
})

</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: auto;
}

.preview-image {
  width: 100%; /* 图片宽度与父元素对齐 */
  height: auto; /* 高度自动，保持图片比例 */
}

ul {
  display: block;
  list-style-type: none;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  unicode-bidi: isolate;
}

.todo-list {
  position: absolute;
  width: 33%; /* 距离两边各 10%，所以宽度只有 80% */
  height: 36%;
  top: 10%; /* 距离顶部有 10% */
  left: 12%; /* 距离左边有 10% */
  font-size: 1vw; /* 设置字体大小为视口宽度的 2% */
}

.record-list {
    position: absolute;
    width: 25%;
    height: 35.5%;
    top: 60%;
    left: 57.5%;
    font-size: 0.75vw;
}
</style>
