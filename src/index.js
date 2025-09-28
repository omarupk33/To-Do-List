import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// element.classList.add('hello');


//  // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);


//   return element;
// }

// document.body.appendChild(component());


// Header
const header = document.querySelector('.header')


const profile_block = document.createElement('div')
      profile_block.className = 'profile_block'   
      profile_block.style.height = '20px'
      profile_block.style.wdith = '20px'
      profile_block.textContent = 'Default Text'
      profile_block.style.backgroundColor = 'green'



const edting_options = document.createElement('div')
      edting_options.className = 'editing_options'
      edting_options.textContent = 'Default Text'
      edting_options.style.height = '20px'
      edting_options.style.wdith = '20px'
      edting_options.style.backgroundColor = 'yellow'



const logo_block = document.createElement('div')
      logo_block.className = 'logo_block'
      logo_block.textContent = 'Default Text'
      logo_block.style.height = '20px'
      logo_block.style.wdith = '20px'
      logo_block.style.backgroundColor = 'purple'

// appendning

header.appendChild(profile_block)
header.appendChild(edting_options)
header.appendChild(logo_block)



// content
const content = document.querySelector('.content')

const main_form = document.createElement('form') 
main_form.className = 'main_form'


//  Search Bar
const search_bar = document.createElement('label')
      search_bar.style.height = '40px' 
      search_bar.style.width = '40px'
      search_bar.id = 'search_bar'
      search_bar.for = 'submit_search_bar'
      search_bar.textContent = 'Search: '
      search_bar.style.background = 'green'

// search bar btn
const submit_search_bar = document.createElement('input')
      submit_search_bar.style.height = '40px' 
      submit_search_bar.style.width = '400px'
      submit_search_bar.style.marginRight = '100px'
      submit_search_bar.type = 'text'
      submit_search_bar.id = 'submit_search_bar'
      submit_search_bar.style.background = 'blue'


// A new task label
const make_a_new_task = document.createElement('label')
      make_a_new_task.style.height = '40px' 
      make_a_new_task.style.width = '40px'
      make_a_new_task.id = 'new_task'
      make_a_new_task.for = 'new_task_btn'
      make_a_new_task.textContent = 'New Task: '
      make_a_new_task.style.background = 'azure'
// Its button
const new_task_btn = document.createElement('input')
      new_task_btn.style.height = '40px' 
      new_task_btn.style.width = '40px'
      new_task_btn.type = 'button'
      new_task_btn.id = 'new_task_btn'
      new_task_btn.style.background = 'azure'


// Main list of tasks
let to_do_list = document.createElement('ul')
      to_do_list.style.height = '500px' 
      to_do_list.style.width = '1000px'
      to_do_list.id = 'to_do_container'
      to_do_list.style.background = 'gray'

// default task | I should move to a new js file them import here
class Task{

      dueDate = 'date'
      priority = 0

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

      const formInputs = document.querySelectorAll('input, textarea')

      submit_button.addEventListener('click', ()=>{
           
      })

      return submit_button
      }
      //  For later
      show_to_user(){
            // Need to do something about everything
            const show_container = document.createElement('div')
            show_container.id = 'form_container'

            const name = document.createElement('h2')
            const nametextContent = title 
            const simple_description = document.createElement('p')
            const detailed_description = document.createElement('p')

            show_container.appendChild(name)
            show_container.appendChild(nametextContent)
            show_container.appendChild(simple_description)
            show_container.appendChild(detailed_description)

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
// to_do_list.appendChild(task1)
// appendning
main_form.appendChild(search_bar)
main_form.appendChild(submit_search_bar)
main_form.appendChild(make_a_new_task)
main_form.appendChild(new_task_btn)

content.appendChild(main_form)
content.appendChild(to_do_list)

// footer
const footer = document.querySelector("footer")
const lisence = document.createElement('h1')
lisence.id = 'lisence' 
lisence.textContent = 'The Odin Project'

// appendning
footer.appendChild(lisence)

// Functionality 



// something is wrong and that's annoying!
new_task_btn.addEventListener('click', ()=>{
      let task1 = new Task('hello', 'how are you?').pop_up_form()
      task1.className = 'active'
      to_do_list.appendChild(task1)
})


