export function checked(content_element){
    
    let check_input = document.createElement('input')
    check_input.id = 'check_input'
    check_input.type = 'checkbox'

        const siblings = Array.from(content_element.children).filter(child => child !== check_input);


    check_input.addEventListener("click", ()=>{
        if(check_input.checked)
        {
        content_element.style.background = 'grey'
        content_element.style.textDecoration = 'line-through'

        siblings.forEach(sibling => {
        sibling.style.background = 'grey'
    })
    }
        else{
        content_element.style.background = 'antiquewhite'
        content_element.style.textDecoration = 'none'
        siblings.forEach(sibling => {
        sibling.style.background = 'blue'
        sibling.style.color = 'white'
    })
        }
    })

     
    return check_input
}