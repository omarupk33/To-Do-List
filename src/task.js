import { set } from "lodash"
import { checked } from "./checked_logic"
import { create_input } from "./create_input"

export class Task{


      create_form(){
      let storage = ['', '', '']
      
      let task_form = document.createElement('form')
      task_form.id = 'task_form'

      const title = create_input('Title')
      const description = create_input('Description')

      
      let textArea = document.createElement('textarea')
      textArea.id = 'details'
      textArea.name = 'details'

      textArea.className = 'task_input'
      textArea.placeholder = 'More details.....'
      textArea.rows = '10'
      textArea.maxLength = '200'
      let textArea_label = document.createElement('label')
      textArea_label.for = 'textArea'
      textArea_label.textContent = 'Details(Optional): ' 


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
      const pop_off = document.querySelector('.active')
      pop_off.classList.remove('active')
      }
      })

      task_form.appendChild(close_btn)

      task_form.appendChild(title)
      task_form.appendChild(description)

      task_form.appendChild(textArea_label)
      task_form.appendChild(textArea)   
      
      task_form.appendChild(submit_button)

      task_form.addEventListener('keypress', function(event) {

      if (event.key === 'Enter'){
          event.preventDefault();

      if(event.target.value.trim() === '' && event.target.required === true){
         event.target.style.backgroundColor = '#ff6417ff'}
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
      const pop_off = document.querySelector('.active')
      pop_off.classList.remove('active')
      this.add_task(storage[0], storage[1], storage[2])
      }
      })

      return task_form
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

      change_btn(list){

           let change_content = document.createElement('button')
            change_content.textContent = 'Change'
            change_content.className = 'button_in_grid'

            let pop_up = document.getElementById('pop_up')

            let edit_btn = document.getElementById('save_btn')
            let delete_btn = document.getElementById('close_btn')


            change_content.addEventListener("click", ()=>{

            if(!pop_up.classList.contains('active'))
                  edit_btn.textContent = 'Edit'
                  delete_btn.textContent = 'Delete'

                  pop_up.className = 'active'
                  list.remove()
            }

            )


            return change_content
      }

      add_task(title, simple_description, detailed_description){

            let content_element = document.createElement('div')
            content_element.id = 'content_element'

            let task_list = document.createElement('li')
            task_list.className = 'task_list'

            let to_do_list = document.getElementById('to_do_container')


            let date = new Date()

            let date_element = document.createElement('p')
            date_element.className = 'grid_child'
            date_element.textContent = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`


            let change_content = this.change_btn(task_list)

            content_element.appendChild(this.make_an_element(title))
            content_element.appendChild(date_element)

            content_element.appendChild(this.make_an_element(simple_description))
            content_element.appendChild(this.make_an_element(detailed_description))
            content_element.appendChild(change_content)

            let check_box = checked(content_element)

            content_element.appendChild(check_box)


            task_list.appendChild(content_element)


            to_do_list.appendChild(task_list)

      }


      pop_up_form(){
            const pop_up_container = document.createElement('div')
            pop_up_container.id = 'pop_up'
            pop_up_container.className = 'active'
            

            let form = this.create_form()

            pop_up_container.appendChild(form)
            return pop_up_container
      }


}