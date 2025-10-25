import { set } from "lodash"
import { checked } from "./checked_logic"
import { create_form } from "./create_form"
export class Task{


      make_an_element(content){  
            
      let element = document.createElement('p')
      if(!content.value === false){
      element.textContent = `${content.value}`
      }

      else{ element.textContent = `None`}
      
            element.className = 'grid_child'
            return element
      }

      change_btn(list){

           let change_content = document.createElement('button')
            change_content.textContent = 'Change'
            change_content.className = 'button_in_grid'

            let pop_up = document.getElementById('pop_up')

            let edit_btn = document.getElementById('save_btn')
            let delete_btn = document.getElementById('close_btn')

            

            change_content.addEventListener("click", ()=>{

            if(!pop_up.classList.contains('active'))
                  edit_btn.textContent = 'Edit'
                  delete_btn.textContent = 'Delete'

                  pop_up.className = 'active'
                  list.remove()
            }

            )


            return change_content
      }


      pop_up_form(){
            const pop_up_container = document.createElement('div')
            pop_up_container.id = 'pop_up'
            pop_up_container.className = 'active'
            

            let form = create_form('Title', 'Description')

            pop_up_container.appendChild(form)
            
            return pop_up_container
      }

}

 