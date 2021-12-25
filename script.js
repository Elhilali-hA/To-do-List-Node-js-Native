let project = []
        
        
function get(){
    const idproject = document.getElementById('idproject')
    const nameproject = document.getElementById('nameproject')
    const descproject = document.getElementById('descproject')
    const dateproject = document.getElementById('dateproject')

    let id  = idproject.value
    let name = nameproject.value
    let desc = descproject.value
    let date = dateproject.value

    project.push(id)
    project.push(name)
    project.push(desc)
    project.push(date)
}
get()
console.log(project);

// exports.getarray = function () {
//     get();
//   };