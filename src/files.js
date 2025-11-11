import { Task } from "./task"
import { task_container } from "./task_container"

export function file_container(file_name){
      
      let new_task = new Task()


      // Should remove everything related to task Container from project 
      task_container()

      let file_container = document.createElement('div')
      file_container.id = file_name
      file_container.classList ='hide'
      file_container.style.border = 'solid 2px pink'

      // file_container.appendChild(new_task)

      // let task_container= document.getElementById('task_container')
      // task_con.appendChild(file_container)
      
}