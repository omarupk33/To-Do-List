import { task_container } from "./task_container"

export function file_container(file_name){


      task_container()

      let file_container = document.createElement('ol')
      file_container.id = file_name
      file_container.style.border = 'solid 2px #8298C6'
      file_container.style.height = '500px'
      file_container.className = 'file'
      file_container.style.width = '1000px'
      file_container.style.background = '#10466f'

      let container= document.getElementById('task_container')
      container.appendChild(file_container)
}