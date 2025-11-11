export function project_container(){
 

    const project_content = document.createElement('div')
    project_content.id = 'project_content'


    let make_project_button = document.createElement('button')
        make_project_button.id = 'make_project'
        make_project_button.textContent = 'Make a new Project'


     let create_base = document.createElement('div')
        create_base.id = 'make_base'


        project_content.appendChild(make_project_button)
        project_content.appendChild(create_base)

        

    return project_content}