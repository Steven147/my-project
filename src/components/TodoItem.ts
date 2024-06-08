import { getFormattedTime } from './TimeUtil'
import {Ref} from 'vue'

export class Item {
  public content: string
  constructor(content: string) {
    this.content = content
  }

  getString(): string {
    return this.content
  }
}

export class Record extends Item {
  public startTime: string;
  public endTime: string;

  constructor(content: string, startTime: string, endTime: string) {
    super(content);
    this.startTime = startTime;
    this.endTime = endTime;
  }

  getString(): string {
    return `${this.startTime}-${this.endTime}: ${super.getString()}`;
  }
}

export class ItemList {
  protected items: Ref<Item[]>;
  public getFullString: boolean;

  constructor(items: Ref<Item[]>, getFullString: boolean) {
    this.items = items;
    this.getFullString = getFullString;

    // Bind this for each method
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.clearTodos = this.clearTodos.bind(this);
  }

  convertToItem(storage: any) {
    this.items.value = storage.map((obj: any) => new Item(obj.content));
  }

  addTodo(todoValue: string) {
    // const startTimeNullable = this.items.slice().reverse().find(
    //   () => true
    // )?.endTime;
    const item = new Item(todoValue)
    // const item: TodoItem = {
    //   value: todoValue,
    //   startTime: startTimeNullable || "",
    //   endTime: getFormattedTime(),
    //   getString: (todo: TodoItem): string => {
    //   if (this.getFullString) return `${todo.startTime}-${todo.endTime} ${todo.value} `
    //   return todo.value
    // }
    // };
    this.items.value.push(item);
  }

  editTodo(todo: Item, index: number) {
    this.items.value[index] = todo;
  }

  deleteTodo(index: number) {
    this.items.value.splice(index, 1);
  }

  clearTodos() {
    this.items.value = []
  }
}


export class RecordList extends ItemList {
  addTodo(todoValue: string) {
    const startTimeNullable = (this.items.value.slice().reverse().find(
      () => true
    ) as Record)?.endTime;
    const item = new Record(
      todoValue,
      startTimeNullable || "",
      getFormattedTime()
    )
    this.items.value.push(item);
  }

  convertToItem(storage: any) {
    this.items = storage.map((obj: any) => new Record(obj.content, obj.startTime, obj.endTime));
    console.log("convertToItem")
  }
}
