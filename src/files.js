import { task_container } from "./task_container"

export function file_container(file_name){


      task_container()

      let file_container = document.createElement('div')
      file_container.id = file_name
      file_container.style.border = 'solid 2px pink'
      file_container.style.height = '500px'
      file_container.className = 'file'
      file_container.style.width = '1000px'


        // Main list of tasks
        let  to_do_list = document.createElement('ol')
        to_do_list.style.height = '500px' 
        to_do_list.style.width = '1000px'
        to_do_list.style.background = '#10466f'

        if (!file_container.classList.contains('open')){
            file_container.className = 'open'
            to_do_list.className = 'open_list'
        }

        else{
            to_do_list.classList.remove('open_list')
            file_container.classList.remove('close')

        }


        file_container.appendChild(to_do_list)



      let container= document.getElementById('task_container')
      container.appendChild(file_container)
}