const todoForm = document.querySelector('.todo-form')
const todoInput = document.querySelector('.todo-input')
const todoList = document.querySelector('.todo-list')

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const textTodo = todoInput.value.trim()

   if(textTodo){
    const li = document.createElement('li')
    li.classList.add('todo-item')

    li.textContent = textTodo
    todoList.appendChild(li)

    // DELETE BTN
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-btn')
    deleteBtn.textContent = 'Delete'
    li.appendChild(deleteBtn)

    // DONE BTN
    const doneBtn = document.createElement('button')
    doneBtn.classList.add('done-btn')
    doneBtn.textContent = 'Done'
    li.appendChild(doneBtn)

    todoInput.value = ''
}else{
    alert('kechirasiz siz nimadir yozmadiz')
}
})


document.addEventListener('click', (e)=>{
    if(e.target.classList[0] == 'delete-btn'){
        const item = e.target.parentElement
        item.remove()
    }
    if(e.target.classList[0] == 'done-btn'){
        const salom =  e.target.parentElement
        salom.classList.add('done')
    }
})