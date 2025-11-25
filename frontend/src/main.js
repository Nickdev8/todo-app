import './style.css'

class Todo {
  constructor(data, root) {
    this.data = data
    this.root = root
    this.render()
  }

  render() {
    const item = document.createElement('li')
    item.className = 'todo'
    item.textContent = `${this.data.text} (${this.data.status})`
    this.root.appendChild(item)
  }
}

class TodoList {
  constructor(listElement) {
    this.listElement = listElement
    this.apiUrl = 'http://localhost:8080/api/todos.php'
    this.load()
  }

  clear() {
    this.listElement.innerHTML = ''
  }

  render(todos) {
    this.clear()
    todos.forEach((todo) => new Todo(todo, this.listElement))
  }

  async load() {
    try {
      const response = await fetch(this.apiUrl)
      const data = await response.json()
      this.render(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error(error)
    }
  }
}

const app = document.querySelector('#app')

app.innerHTML = `
  <main>
    <h1>Todo's</h1>
    <ul id="todo-list"></ul>
  </main>
`

const listElement = document.querySelector('#todo-list')
new TodoList(listElement)
