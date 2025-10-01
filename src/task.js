export class Task{

      dueDate = 'date'
      priority = 0

      constructor(title){
      this.title = title
      }

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
      if (event.key === 'Enter') {
          event.preventDefault();

      if(event.target.value.trim() === '' && event.target.required === true){
         event.target.style.backgroundColor = 'red'}
      else{
         event.target.style.backgroundColor = '#17A7FF'
         event.target.blur()}
         storage[`${event.target.id}`] = `${event.target.value}`
          
          console.log(storage)
      }
      })



      // Make sure to modifiy the code in regards of this change
      return {task_form, storage}
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
         const pop_off_collection = document.querySelectorAll('div.active') 
         if (pop_off_collection.classList.contains('active'))
         pop_off.classList.remove('active')
      }
      )

      return submit_button
      }
      //  For later
      show_to_user(){
            // Need to do something about everything

            let storage = this.create_form().storage

            const show_container = document.createElement('div')
            show_container.id = 'form_container'

            const title = document.createElement('h2')
            const simple_description = document.createElement('p')
            const detailed_description = document.createElement('p')

            if (storage){
                  title.textContent = storage.title
                  simple_description = storage.description
                  detailed_description = storage.textArea
            }

            show_container.appendChild(title)
            show_container.appendChild(simple_description)
            show_container.appendChild(detailed_description)
            
            return show_container
      }


      pop_up_form(){
            const pop_up_container = document.createElement('div')
            pop_up_container.id = 'pop_up'

            let form = this.create_form().task_form

            pop_up_container.appendChild(form)
            
            return pop_up_container
      }

      add_task(){

            const task_list = document.createElement('li')
            task_list.className = 'task_list'

            let show_container = this.show_to_user()

            task_list.appendChild(show_container)

            return task_list
      }
}