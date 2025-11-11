import { create_input } from "./create_input"
import { Project } from "./projects"


export function project_container(){


    const project_content = document.createElement('div')
    project_content.id = 'project_content'


    let make_project_button = document.createElement('button')
        make_project_button.id = 'make_project'
        make_project_button.textContent = 'Make a new Project'

        make_project_button.addEventListener('click', ()=>{
            let form = project_form()
            form.classList = 'active'
        })

     let create_base = document.createElement('div')
        create_base.id = 'make_base'


        project_content.appendChild(make_project_button)
        project_content.appendChild(create_base)

    return project_content




    function project_form(){

        let create_base = document.getElementById('make_base')

      let storage = ['', '']
      
      let form = document.createElement('form')
      form.id = 'project_form'

      const title = create_input('Title')
      const description = create_input('Description')

      let submit_button = document.createElement('button')
      submit_button.type = 'button'
      submit_button.textContent = 'Save'
      submit_button.id = 'save_btn'


      let close_btn = document.createElement('button')
      close_btn.textContent = 'close'
      close_btn.style.background = '#ff6417ff'
      close_btn.type = 'button'
      close_btn.id  = 'close_btn' 

      close_btn.addEventListener('keypress', (event)=>{
      if(event.key === 'Enter'){
      form.classList.remove('active')
      }
      })

      form.appendChild(close_btn)

      form.appendChild(title)
      form.appendChild(description)
      
      form.appendChild(submit_button)

      
      form.addEventListener('keypress', function(event) {

      if (event.key === 'Enter'){
          event.preventDefault();

      if(event.target.value.trim() === '' && event.target.required === true){
         event.target.style.backgroundColor = 'red'}
      else{

         if(event.target.type !== 'button'){
            event.target.style.backgroundColor = '#17A7FF'}


         event.target.blur()}


         if(event.target.id === 'title'){
         
         storage.splice(0, 1, event.target)
         }
         else if (event.target.id === 'save_btn'){
            return ''
         }

         else if (event.target.id === 'description'){
         storage.splice(1, 1, event.target)
         }

         else{
         storage.splice(2, 1, event.target)

      }
      }


      })


      submit_button.addEventListener('keypress' ,(event)=>{

      if (event.key === 'Enter'){

      form.classList.remove('active')
      new Project(storage[0], storage[1])
      }
      })

      create_base.appendChild(form)

      return form
    }


    
}