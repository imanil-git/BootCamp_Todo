import {React,useState} from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
const  TodoApp = ()=> {
    const [todos, setTodos] = useState([{
        id:1,
        task:"Buy groceries",
        completed:false,
        isEditing:false
      },
      {
        id:2,
        task:"Buy Food and Fruit",
        completed:true,
        isEditing:false
      },
      ])
      
    let  nextId=3;
      const  addTodo = (todo)=>{
        // console.log("From APP",todo)
        let mytodo = {
          id : nextId,
          task:todo,
          completed:false,
          isEditing:false
        }
        nextId++
        
        setTodos([mytodo, ...todos])
        // console.log(todos)
        }
    
     
    
      function toggleTodo(id){
        // setTodos(todos.map((todo)=>todo.id === id ? {...todo,completed : !todo.completed} : todo))
    
      }
    
      function deleteTodo(id){
        // console.log(id)
        setTodos([...todos.filter(todo=>todo.id != id)])
      }
    
      // just to make edit form appear
      function editTodo(id){
        // setTodos(todos.map((todo)=>todo.id === id ? {...todo,isEditing : true} : todo))
    
      }

      return (
        <div className="container mx-auto px-10 py-10">
          
          <div className="mx-auto bg-slate-800 max-w-5xl rounded-xl p-2">
          <h1 className='text-center text-3xl text-white'>TodoApp</h1>
          <TodoForm addTodo ={addTodo} deleteTodo = {deleteTodo} />
            {
                todos.map(

                    (todo)=>{

                        return (<Todo todo={todo} deleteTodo = {deleteTodo}/>)

                    }
                )
            }
           
    
          </div>
        
        </div>
      )
}

export default TodoApp