import { set } from "lodash"

export class Task{


      create_input(named, type = 'text'){

      let block = document.createElement('div')
      block.className = 'task_block'

      let input = document.createElement('input')
      let label = document.createElement('label')

      input.type = type
      input.className = 'task_input'
      input.id= named.toLowerCase()
      if(input.type === 'text'){input.required = true}
      if(input.type === 'text'){input.maxLength = '100'}

      label.textContent = `${named}: `
      label.className = 'task_label'
      label.for = named

      block.appendChild(label)
      block.appendChild(input)

      return block
      }

      create_form(){
      let storage = ['', '', '']
      
      let task_form = document.createElement('form')
      task_form.id = 'task_form'

      const title = this.create_input('Title')
      const description = this.create_input('Description')

      
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
      close_btn.style.background = 'red'
      close_btn.id  = 'close_btn' 

      close_btn.addEventListener('click', ()=>{
      const pop_off = document.querySelector('.active')
      pop_off.classList.remove('active') 
      })

      task_form.appendChild(close_btn)

      task_form.appendChild(title)
      task_form.appendChild(description)

      task_form.appendChild(textArea_label)
      task_form.appendChild(textArea)   
      
      task_form.appendChild(submit_button)

      


      // Well, the order is messed up
      // It's based on the first input you put in
      task_form.addEventListener('keypress', function(event) {

      if (event.key === 'Enter'){
          event.preventDefault();

      if(event.target.value.trim() === '' && event.target.required === true){
         event.target.style.backgroundColor = 'red'}
      else{

         if(event.target.id !== 'save_btn'){event.target.style.backgroundColor = '#17A7FF'}


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
            element.textContent = `${content.id.charAt(0).toUpperCase()
            + content.id.slice(1)}: ${content.value}`}

      else{ element.textContent = `Details: No Details`}
      
            element.className = 'grid_child'
            return element
      }

      add_task(title, simple_description, detailed_description){

            let content_element = document.createElement('div')
            content_element.id = 'content_element'

            let task_list = document.createElement('li')
            task_list.className = 'task_list'

            let ol = document.querySelector('ol')

            // should add it to the list
            let date = new Date()

            let date_element = document.createElement('p')
            date_element.className = 'grid_child'
            date_element.textContent = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`


            let change_content = document.createElement('button')
            change_content.style.background = 'blue'
            change_content.textContent = 'Change'
            change_content.className = 'button_in_grid'


            content_element.appendChild(this.make_an_element(title))
            content_element.appendChild(date_element)

            content_element.appendChild(this.make_an_element(simple_description))
            content_element.appendChild(this.make_an_element(detailed_description))
            content_element.appendChild(change_content)

            task_list.appendChild(content_element)


            ol.appendChild(task_list)
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

