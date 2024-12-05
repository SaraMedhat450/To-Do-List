let inputTask=document.getElementById('inputTask');
let AddButton=document.getElementById('AddButton');
let allTasks=document.getElementById('allTasks');
let noTasks=document.getElementById('noTasks');
let count=document.getElementById('count');

function show(){
     //remove div no tasks
     if(allTasks.childElementCount >0 )
        {
         noTasks.classList.add('none');
        }
        else
        {
         noTasks.classList.remove('none');
        }
 
        //calculate number of tasks
        count.innerText=allTasks.childElementCount;
}

//add task
let addNewTask=()=>{

    //get value
    let data=inputTask.value;

    //get value without space
    let newData=data.trim();

    //validation over value
    if(newData.length == 0 || newData.length<3 )
    {
        window.alert('Plese enter your task first!');
    }
    else if(newData.length <= 3 )
        {
            window.alert('Task should be greater than 3 character');
        }
    else if(newData.length > 50 )
        {
            window.alert('Task should be less than 50 character');
        }
    else{

        //add new task
       allTasks.innerHTML +=`<div class="check alert alert-info"> ${data}
       <button class="delete btn btn-danger btn-sm float-end">Delete</button>
        </div>`;

       //remove value from input
       inputTask.value='';

       //check no tasks
       show();
    }
}

AddButton.addEventListener("click",addNewTask);

//delete task
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delete'))
    {
        e.target.parentElement.remove();

      //check no tasks
       show();
    }
})

//complete task
//toggle بتعكس
document.addEventListener("dblclick",(e)=>
{
     if(e.target.classList.contains('check'))
     {
        e.target.classList.toggle('checked');
     }
})