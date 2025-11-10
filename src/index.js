import _ from 'lodash';
import './style.css';
import { Project } from './projects.js';
import { task_container } from './task_container.js';


// content
const content = document.querySelector('.content')
      content.id = 'content'

function user_interface(){


// footer
const footer = document.querySelector("footer")
const lisence = document.createElement('h1')
lisence.id = 'lisence' 
lisence.textContent = 'The Odin Project'

// appendning
footer.appendChild(lisence)




// Project 
let project_content = new Project()

content.appendChild(project_content)


task_container()

}

user_interface()