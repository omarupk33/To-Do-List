export class Project{
    constructor(){

    const project_container = document.createElement('div')
    project_container.id = 'project_container'

    let create_project = document.createElement('button')
        create_project.id = 'make_project'
        create_project.textContent = 'Make a new Project'

    let create_base = document.createElement('div')
        create_base.id = 'make_base'


        project_container.appendChild(create_project)
        project_container.appendChild(create_base)

    return project_container
    }

}