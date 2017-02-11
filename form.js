var tasks = document.getElementById("tasks");
var button = document.getElementById("task-button");


button.addEventListener("click", function () {
    var task = document.getElementById("task").value;
    var taskNode = document.createTextNode(task);

    var toAdd = document.createElement('li');
    toAdd.appendChild(taskNode);
    tasks.appendChild(toAdd);
  }
);
