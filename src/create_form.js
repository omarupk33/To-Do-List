// We should put this in its own file
import {create_input} from './create_input'
export function create_form(Title, Description = null){



      // add_task(title, simple_description, detailed_description){

      //       let content_element = document.createElement('div')
      //       content_element.id = 'content_element'

      //       let task_list = document.createElement('li')
      //       task_list.className = 'task_list'

      //       let ol = document.querySelector('ol')

      //       // should add it to the list
      //       let date = new Date()

      //       let date_element = document.createElement('p')
      //       date_element.className = 'grid_child'
      //       date_element.textContent = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`


      //       let change_content = this.change_btn(task_list)

      //       content_element.appendChild(this.make_an_element(title))
      //       content_element.appendChild(date_element)

      //       content_element.appendChild(this.make_an_element(simple_description))
      //       content_element.appendChild(this.make_an_element(detailed_description))
      //       content_element.appendChild(change_content)

      //       let check_box = checked(content_element)

      //       content_element.appendChild(check_box)


      //       task_list.appendChild(content_element)


      //       ol.appendChild(task_list)
      // }



      let storage = ['', '', '']
      
      let task_form = document.createElement('form')
      task_form.id = 'task_form'

      const title = create_input(Title)
      const description = create_input(Description)

      
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
      const pop_off = document.querySelector('.active')
      pop_off.classList.remove('active')
      this.add_task(storage[0], storage[1], storage[2])
      }
      })

      return task_form
      }