import { Task } from "./task"
import { create_input } from "./create_input"
export class Project{
    constructor(){

    const project_container = document.createElement('div')
    project_container.id = 'project_container'

     let make_project_button = document.createElement('button')
        make_project_button.id = 'make_project'
        make_project_button.textContent = 'Make a new Project'

        make_project_button.addEventListener('click', ()=>{
        // create_base.appendChild()

        })

     let create_base = document.createElement('div')
        create_base.id = 'make_base'


        project_container.appendChild(make_project_button)
        project_container.appendChild(create_base)

    return project_container
    }

    add_project(base){
        let project = document.createElement('div')
        project.id = 'project'
        project.style.background = 'red'
        project.style.height = '100px'
        base.appendChild(project)
    }

    project_form(){

        let create_base = document.getElementById('make_base')
        this.add_project(create_base)
    }

    
    

}