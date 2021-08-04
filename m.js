document.addEventListener('DOMContentLoaded',function(){
    const list=document.querySelector('#movie-list ul');
    const forms =document.forms;

//delet movies
document.getElementById("movie-list").addEventListener('click',(e)=>{
    if(e.target.className == 'delete'){
        const li=e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});
  //add movies
  const addForm=document.getElementById("add-movie")
  addForm.addEventListener("submit",function(e){
    e.preventDefault()
    //creating elemnts
    const value = addForm.querySelector('input[type="text"]').value;
    const li =document.createElement("li");
    const movieName=document.createElement('span');
    const deleteBtn=document.createElement("span");
  //add text content
    movieName.textContent = value;
    deleteBtn.textContent='delete';
    
  //add classes
    movieName.classList.add('name');
    deleteBtn.classList.add('delete');
  //append to dom
    li.appendChild(movieName);
    li.appendChild(deleteBtn);
  list.appendChild(li);
  });
  
  
})
