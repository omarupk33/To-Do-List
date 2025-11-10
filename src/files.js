export function file_container(file_name, element_container){
      
      let file_container = document.createElement('div')
      file_container.id = file_name
      file_container.classList('hide')

      file_container.appendChild(element_container)
      
}