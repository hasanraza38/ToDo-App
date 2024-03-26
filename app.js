function rendertodo() {
    ol.innerHTML=" "
    for (let i = 0; i < arr.length; i++ ) {
        ol.innerHTML+=`
    
       <li> 
        ${arr[i]}
        <button onclick="deletetodo(${i})"  type="button" class=" todo-button btn btn-outline-danger">Delete</button>
        <button onclick="edittodo(${i})"type="button" class=" todo-button btn btn-outline-success">Edit</button>
        </li> `
    
    }
}


const input=document.querySelector("#todo")
const ol=document.querySelector("ol")


const arr=[]
function addtodo(){
    if(input.value===" "){
        alert("FEILD REQUIRED!");
    }
    else{
        arr.push(input.value);
        rendertodo();       
        input.value=' '

    }
    
    
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




