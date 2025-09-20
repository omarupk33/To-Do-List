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

// default task
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
      const description = this.create_input('Details')
      const checkBox = this.create_input('Editable', 'checkbox')
      
      task_form.appendChild(title)
      task_form.appendChild(description)
      task_form.appendChild(checkBox)

      return task_form
      }

      pop_up_form(){
      //      Here is where we can pop up a form by covering it in a div layer
            const pop_up_container = document.createElement('div')
            pop_up_container.id = 'pop_up'

            let form = this.create_form()

            pop_up_container.appendChild(form)  
            
            return pop_up_container
      }

      add_task(){
            const task_list = document.createElement('li')
            task_list.className = 'task_list'

            // task_form.textContent = this.title
            
            // task_list.appendChild(task_form)

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