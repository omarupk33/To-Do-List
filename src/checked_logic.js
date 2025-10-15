export function checked(content_element){
    
    let check_input = document.createElement('input')
    check_input.id = 'check_input'
    check_input.type = 'checkbox'

    const siblings = Array.from(content_element.children).filter(child => child !== check_input);
    siblings.forEach(sibling => {
    console.log(sibling.textContent);
    })

    check_input.addEventListener("click", ()=>{
        if (check_input.checked)
        {
        content_element.style.background = 'grey'
        content_element.style.textDecoration = 'line-through'

    }
        else{
        content_element.style.background = 'none'
        content_element.style.textDecoration = 'none'
        }
    })

     
    return check_input
}