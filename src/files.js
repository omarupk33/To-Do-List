import { task_container } from "./task_container"

export function file_container(file_name){


      task_container()


      // Should make something to open only the specific file
      // Should push the task cards into the files

      let file_container = document.createElement('div')
      file_container.id = file_name
      file_container.style.border = 'solid 2px pink'
      file_container.style.height = '100px'
      file_container.style.width = '200px'

      

      // file_container.appendChild()

      let container= document.getElementById('to_do_container')
      container.appendChild(file_container)
}