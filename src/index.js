document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const form = document.querySelector('form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    populateToDoList(e.target.new_task_description.value);

    form.reset();
  });

function populateToDoList(todoValue){

  const li = document.createElement("li");
  li.textContent = `${todoValue} `;
  document.querySelector('#tasks').appendChild(li); 


  const btn = document.createElement("button");
  btn.textContent = "X";
  li.appendChild(btn);
  btn.addEventListener('click', deleteTasks);

}

function deleteTasks(e){
  e.target.parentNode.remove();
}