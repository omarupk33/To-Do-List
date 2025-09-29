export class Task{

      dueDate = 'date'
      priority = 0
      storage = {}

      constructor(title){
      this.title = title
      }

      create_input(named, type = 'text'){
      // Should create an input function that makes input for me 
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
      let task_form = document.createElement('form')
      task_form.id = 'task_form'

      const title = this.create_input('Title')
      const description = this.create_input('Descrption')
      const checkBox = this.create_input('Editable', 'checkbox')


      let textArea = document.createElement('textarea')
      textArea.id = 'textArea'
      textArea.className = 'task_input'
      textArea.placeholder = 'More details.....'
      textArea.style.resize = 'none'
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
      

      task_form.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          event.preventDefault();

      // well, we can do much with this. One of the things I want to do is adding required to some inputs
      if(event.target.value.trim() === ''){
          event.target.style.backgroundColor = 'red'}
      else{
          event.target.style.backgroundColor = 'green'
          event.target.blur()}
      }
      })

      return task_form
      }

      save_form(){
      let submit_button = document.createElement('button')
      submit_button.type = 'submit'
      submit_button.textContent = 'Save'
      submit_button.id = 'save_btn'

      return submit_button
      }
      //  For later
      show_to_user(){
            // Need to do something about everything
            const show_container = document.createElement('div')
            show_container.id = 'form_container'

            const title = document.createElement('h2')
            const description = document.createElement('p')


            formInputs.forEach(element => {
                  if (element.id === 'title'){
                  title.textContent = element.value
                  show_container.appendChild(title)

                  }

                  else if (element.id === 'checkbox'){
                  console.log('checkbox spotted')
                  }

                  else{
                  description.textContent = element.value
                  show_container.appendChild(description)
                  }
            });

            return show_container
      }


      pop_up_form(){
            const pop_up_container = document.createElement('div')
            pop_up_container.id = 'pop_up'

            let form = this.create_form()

            pop_up_container.appendChild(form)
            
            return pop_up_container
      }

      add_task(input){
            const task_list = document.createElement('li')
            task_list.className = 'task_list'
            task_list.textContent = input.value

            return task_list
      }
}