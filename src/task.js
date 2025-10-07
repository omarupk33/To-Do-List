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
      let storage = []
      
      let task_form = document.createElement('form')
      task_form.id = 'task_form'

      const title = this.create_input('Title')
      const description = this.create_input('Descrption')
      const checkBox = this.create_input('Editable', 'checkbox')

      
      let textArea = document.createElement('textarea')
      textArea.id = 'details'
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


      task_form.appendChild(title)
      task_form.appendChild(description)
      task_form.appendChild(checkBox)

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
         event.target.style.backgroundColor = '#17A7FF'
         event.target.blur()}

         storage.push(event.target)

      
          console.log(storage)
      }
      })



      submit_button.addEventListener('click' ,()=>{
         const pop_off = document.querySelector('.active')
         pop_off.classList.remove('active')
         this.add_task(storage[0], storage[1], storage[2])

      })


      return task_form
      }

      make_an_element(content){    

      let element = document.createElement('p')
      element.textContent = `${content.id.toUpperCase()}: ${content.value}`
      element.className = 'element'
      return element
      }

      add_task(title, simple_description, detailed_description){

            let content_elements = document.createElement('div')
            content_elements.id = 'content_elements'


            let task_list = document.createElement('li')
            task_list.className = 'task_list'

            let ol = document.querySelector('ol')

            content_elements.appendChild(this.make_an_element(title))
            content_elements.appendChild(this.make_an_element(simple_description))
            content_elements.appendChild(this.make_an_element(detailed_description))

            task_list.appendChild(content_elements)

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

