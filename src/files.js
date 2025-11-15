import { task_container } from "./task_container"

export function file_container(file_name){


      task_container()

      let file_container = document.createElement('div')
      file_container.id = file_name
      file_container.style.border = 'solid 2px pink'
      file_container.style.height = '100px'
      file_container.style.width = '200px'

      // Last part

//       if (file_container.classList.contains('open')){
//       let ordered_list = document.getElementById('to_do_container')
//       file_container.appendChild(ordered_list)
// }

      let container= document.getElementById('to_do_container')
      container.appendChild(file_container)
}