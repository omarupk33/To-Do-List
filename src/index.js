import _ from 'lodash'
import './style.css'
import { Project } from './projects.js'
import { project_container } from './project_container'


// content
const content = document.querySelector('.content')
      content.id = 'content'

function user_interface(){


// footer
const footer = document.querySelector("footer")
const lisence = document.createElement('h1')
lisence.id = 'lisence' 
lisence.textContent = 'The Odin Project'

// appending
footer.appendChild(lisence)


content.appendChild(project_container())


new Project()
}

user_interface()