import {Task} from './task'

export function task_container(){

    const task_container = document.createElement('div') 
    task_container.id = 'task_container'
    task_container.className = 'hide'

    //  go_back_label
    const go_back = document.createElement('label')
        go_back.style.height = '40px' 
        go_back.style.width = '40px'
        go_back.id = 'go_back'
        go_back.for = 'go_back_button'
        go_back.textContent = 'Go Back: '

    // go_back_button
    const go_back_button = document.createElement('input')
        go_back_button.style.height = '40px' 
        go_back_button.style.width = '400px'
        go_back_button.style.marginRight = '100px'
        go_back_button.type = 'button'
        go_back_button.id = 'go_back_button'
        go_back_button.style.background = '#ff6417ff'

        go_back_button.addEventListener('click', ()=>{
                let project_content = document.getElementById('project_content')
                task_container.classList = 'hide'
                project_content.classList.remove('hide')
        })

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
        let  to_do_list = document.createElement('div')
        to_do_list.style.height = '500px' 
        to_do_list.style.width = '1000px'
        to_do_list.id = 'to_do_container'
        to_do_list.style.background = '#10466f'


        const tool_container = document.createElement('div')
        tool_container.id = 'tool_container'

        // appending
        tool_container.appendChild(go_back)
        tool_container.appendChild(go_back_button)
        tool_container.appendChild(make_a_new_task)
        tool_container.appendChild(new_task_btn)
        
        task_container.appendChild(tool_container)
        task_container.appendChild(to_do_list)
        

    // Well, I can take this and add the results of it 

        new_task_btn.addEventListener('click', ()=>{
                let task1 = new Task().pop_up_form()
                task_container.appendChild(task1)
        })

        
        let content = document.getElementById('content')

        content.appendChild(task_container)

        return task_container
    
}