export class Task{

      dueDate = 'date'
      priority = 0

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
      let storage = {}

      let {title_element, simple_description, detailed_description} = this.show_to_user()
      
      let task_form = document.createElement('form')
      task_form.id = 'task_form'

      const title = this.create_input('Title')
      const description = this.create_input('Descrption')
      const checkBox = this.create_input('Editable', 'checkbox')

      
      let textArea = document.createElement('textarea')
      textArea.id = 'textArea'
      textArea.className = 'task_input'
      textArea.placeholder = 'More details.....'
      textArea.rows = '10'
      textArea.maxLength = '200'
      let textArea_label = document.createElement('label')
      textArea_label.for = 'textArea'
      textArea_label.textContent = 'Details(Optional): ' 

      let submit = this.save_form()

      
      task_form.appendChild(title)
      task_form.appendChild(description)
      task_form.appendChild(checkBox)

      task_form.appendChild(textArea_label)
      task_form.appendChild(textArea)     
      task_form.appendChild(submit)


      // Enter interactions for inputs
      task_form.addEventListener('keypress', function(event) {
      if (event.key === 'Enter'){
          event.preventDefault();

      if(event.target.value.trim() === '' && event.target.required === true){
         event.target.style.backgroundColor = 'red'}
      else{
         event.target.style.backgroundColor = '#17A7FF'
         event.target.blur()}

         storage[event.target.id] = event.target.value

      
          console.log(storage)
      }
      })

      title_element.textContent = storage.title
      simple_description.textContent = storage.description
      simple_description.textContent = storage.textArea

      this.add_task()
      // Make sure to modifiy the code in regards of this change
      return task_form
      }

      //  For later 
      show_to_user(){    

            let title_element = document.createElement('h2')
            let simple_description = document.createElement('p')
            let detailed_description = document.createElement('p')
            
            return {title_element, simple_description, detailed_description}
      }

      add_task(title_element, simple_description, detailed_description){

            let content_elements = document.createElement('div')
            content_elements.id = 'content_elements'

            let task_list = document.createElement('li')
            task_list.className = 'task_list'

            let ul = document.querySelector('ul')

            content_elements.appendChild(title_element)
            content_elements.appendChild(simple_description)
            content_elements.appendChild(detailed_description)

            task_list.appendChild(content_elements)

            ul.appendChild(task_list)
      }


      pop_up_form(){
            const pop_up_container = document.createElement('div')
            pop_up_container.id = 'pop_up'
            pop_up_container.className = 'active'
            

            let form = this.create_form()

            pop_up_container.appendChild(form)
            
            return pop_up_container
      }

      save_form(){
      let submit_button = document.createElement('button')
      // Maybe we don't need to change to submit later on
      submit_button.type = 'button'
      submit_button.textContent = 'Save'
      submit_button.id = 'save_btn'

      // Save is only removing the first pop up form
      // I want it to remove all pop up forms
      submit_button.addEventListener('click' ,()=>{
         const pop_off = document.querySelector('.active')
         pop_off.classList.remove('active')

      // The last thing to care about here
            // this.add_task()
      })

      return submit_button
      }


}