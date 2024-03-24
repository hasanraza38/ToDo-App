


function rendertodo() {
    ol.innerHTML=" "
    for (let i = 0; i < arr.length; i++ ) {

        ol.innerHTML+=`<li> 
        ${arr[i]}
        <button onclick="deletetodo(${i})">Delete</button>
        <button onclick="edittodo(${i})">Edit</button>
        </li>
        `
    }
}


const input=document.querySelector("#todo")
const ol=document.querySelector("ol")


const arr=[]
function addtodo(){
    arr.push(input.value)
    rendertodo()
    input.value=" "
}

function edittodo(index){
    const UpdatedValue =  prompt("Enter Updated Value")
    arr.splice(index,1,UpdatedValue)
    rendertodo()

}

function deletetodo(index){
    arr.splice(index,1)
    rendertodo()

}

