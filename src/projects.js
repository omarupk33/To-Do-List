import { add } from "lodash"
import { file_container } from "./files"

export class Project{

   constructor(title, description){
      this.title = title
      this.description = description

   }

      change_btn(list){

         let change_content = document.createElement('button')
         change_content.textContent = 'Change'
         change_content.className = 'button_in_grid'

         let form = document.getElementById('project_form')

         let edit_btn = document.getElementById('save_btn')
         let delete_btn = document.getElementById('close_btn')

         

         change_content.addEventListener("click", ()=>{

         if(!form.classList.contains('active'))
               edit_btn.textContent = 'Edit'
               delete_btn.textContent = 'Delete'

               form.className = 'active'
               list.remove()
         }

         )


         return change_content
      }

      open_file(){

            let open_button = document.createElement('button')
            open_button.id = 'open_button'
            open_button.textContent = 'Open File'

            open_button.addEventListener('click', ()=>{

               project_content.classList = 'hide'

               // let task_container = document.getElementById('task_container')
               // task_container.classList.remove('hide')
         })
         return open_button
      }


// We should change things here 
    add_project(){

            let content_element = document.createElement('div')
            content_element.id = 'content_element'

            let project_list = document.createElement('li')
            project_list.className = 'project_list'

            let ol = document.createElement('ol')

            let date = new Date()

            let date_element = document.createElement('p')
            date_element.className = 'grid_child'
            date_element.textContent = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`


            let change_content = this.change_btn(project_list)

            let open_button = this.open_file()


            content_element.appendChild(this.make_an_element(this.title))
            content_element.appendChild(date_element)

            content_element.appendChild(this.make_an_element(this.description))
            content_element.appendChild(change_content)
            content_element.appendChild(open_button)


            file_container(this.title)

            project_list.appendChild(content_element)


            ol.appendChild(project_list)

            let create_base = document.getElementById('make_base')
            create_base.appendChild(ol)
    }

      make_an_element(content){    
         let element = document.createElement('p')
         if(!content.value === false){
         element.textContent = `${content.value}`
         }

         else{ element.textContent = `None`}
         
               element.className = 'grid_child'
               return element
      }

}