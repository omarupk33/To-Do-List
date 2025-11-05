import { add } from "lodash"
import { create_input } from "./create_input"
import { Task } from "./task"
export class Project extends Task{
    constructor(){
    super()

    const project_content = document.createElement('div')
    project_content.id = 'project_content'

    let make_project_button = document.createElement('button')
        make_project_button.id = 'make_project'
        make_project_button.textContent = 'Make a new Project'

        make_project_button.addEventListener('click', ()=>{
            let form = this.project_form()
            form.classList = 'active'
        })

     let create_base = document.createElement('div')
        create_base.id = 'make_base'


        project_content.appendChild(make_project_button)
        project_content.appendChild(create_base)

    return project_content
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

               let task_container = document.getElementById('task_container')
               task_container.classList.remove('hide')
         })
         return open_button
      }



    add_project(title, description){
      // For some reason, the project file and the tasks are mixed in one container

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


            content_element.appendChild(this.make_an_element(title))
            content_element.appendChild(date_element)

            content_element.appendChild(this.make_an_element(description))
            content_element.appendChild(change_content)
            content_element.appendChild(open_button)

            project_list.appendChild(content_element)


            ol.appendChild(project_list)

            let create_base = document.getElementById('make_base')
            create_base.appendChild(ol)
    }

    project_form(){

        let create_base = document.getElementById('make_base')

      let storage = ['', '']
      
      let form = document.createElement('form')
      form.id = 'project_form'

      const title = create_input('Title')
      const description = create_input('Description')

      let submit_button = document.createElement('button')
      submit_button.type = 'button'
      submit_button.textContent = 'Save'
      submit_button.id = 'save_btn'


      // Need some work after getting a real storage
      let close_btn = document.createElement('button')
      close_btn.textContent = 'close'
      close_btn.style.background = '#ff6417ff'
      close_btn.type = 'button'
      close_btn.id  = 'close_btn' 

      close_btn.addEventListener('keypress', (event)=>{
      if(event.key === 'Enter'){
      form.classList.remove('active')
      }
      })

      form.appendChild(close_btn)

      form.appendChild(title)
      form.appendChild(description)
      
      form.appendChild(submit_button)

      
      form.addEventListener('keypress', function(event) {

      if (event.key === 'Enter'){
          event.preventDefault();

      if(event.target.value.trim() === '' && event.target.required === true){
         event.target.style.backgroundColor = 'red'}
      else{

         if(event.target.type !== 'button'){
            event.target.style.backgroundColor = '#17A7FF'}


         event.target.blur()}


         if(event.target.id === 'title'){
         
         storage.splice(0, 1, event.target)
         }
         else if (event.target.id === 'save_btn'){
            return ''
         }

         else if (event.target.id === 'description'){
         storage.splice(1, 1, event.target)
         }

         else{
         storage.splice(2, 1, event.target)

      }
      }


      })


      submit_button.addEventListener('keypress' ,(event)=>{

      if (event.key === 'Enter'){

      form.classList.remove('active')
      this.add_project(storage[0], storage[1])
      }
      })

      create_base.appendChild(form)

      return form
    }

}