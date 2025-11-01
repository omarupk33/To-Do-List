import _ from 'lodash';
import './style.css';
import {Task} from './task.js'
import { Project } from './projects.js';


// content
const content = document.querySelector('.content')

const project_container = document.createElement('div')
      project_container.id = 'project_container'

content.appendChild(project_container)

const task_container = document.createElement('form') 
task_container.id = 'task_container'



//  Search Bar
const search_bar = document.createElement('label')
      search_bar.style.height = '40px' 
      search_bar.style.width = '40px'
      search_bar.id = 'search_bar'
      search_bar.for = 'submit_search_bar'
      search_bar.textContent = 'Search: '

// search bar btn
const submit_search_bar = document.createElement('input')
      submit_search_bar.style.height = '40px' 
      submit_search_bar.style.width = '400px'
      submit_search_bar.style.marginRight = '100px'
      submit_search_bar.type = 'text'
      submit_search_bar.id = 'submit_search_bar'
      submit_search_bar.style.background = '#17A7FF'


// A new task label
const make_a_new_task = document.createElement('label')
      make_a_new_task.style.height = '40px' 
      make_a_new_task.style.width = '40px'
      make_a_new_task.id = 'new_task'
      make_a_new_task.for = 'new_task_btn'
      make_a_new_task.textContent = 'New Task: '

// Its button
const new_task_btn = document.createElement('input')
      new_task_btn.style.height = '40px' 
      new_task_btn.style.width = '40px'
      new_task_btn.type = 'button'
      new_task_btn.id = 'new_task_btn'
      new_task_btn.style.background = 'black'
      new_task_btn.style.border = 'white solid 2px'

// Main list of tasks
let  to_do_list = document.createElement('ol')
     to_do_list.style.height = '500px' 
     to_do_list.style.width = '1000px'
     to_do_list.id = 'to_do_container'
     to_do_list.style.background = '#10466f'


// appending
     task_container.appendChild(search_bar)
     task_container.appendChild(submit_search_bar)
     task_container.appendChild(make_a_new_task)
     task_container.appendChild(new_task_btn)
     task_container.appendChild(to_do_list)


// footer
const footer = document.querySelector("footer")
const lisence = document.createElement('h1')
lisence.id = 'lisence' 
lisence.textContent = 'The Odin Project'

// appendning
footer.appendChild(lisence)



// Project 
let project_content = new Project()

new_task_btn.addEventListener('click', ()=>{
      let task1 = new Task().pop_up_form()
      project_content.appendChild(task1)

})


content.appendChild(project_content)

content.appendChild(task_container)