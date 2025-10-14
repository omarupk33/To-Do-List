export function checked(content_element){
    
    let check_input = document.createElement('input')
    check_input.id = 'check_input'
    check_input.type = 'checkbox'


    check_input.addEventListener("click", ()=>{
        if (check_input.checked)
        {
        content_element.style.background = 'black'
        content_element.style.textDecoration = 'line-through'

    }
        else{
        content_element.style.background = 'none'
        content_element.style.textDecoration = 'none'
        }
    })

     
    return check_input
}