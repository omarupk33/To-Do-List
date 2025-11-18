import { task_container } from "./task_container"

export function file_container(file_name){


      task_container()

      let file_container = document.createElement('div')
      file_container.id = file_name
      file_container.style.border = 'solid 2px pink'
      file_container.style.height = '100%'
      file_container.style.width = '100%'

      let list_con = document.createElement('ol')
      list_con.style.display = 'none'
      list_con.id = 'list_of_task'


      if (file_container.classList.contains('open')) {
        list_con.classList.add('on_show')
      }

    else{
        list_con.classList.remove('on_show')
    }


      let container= document.getElementById('to_do_container')
      container.appendChild(file_container)
}