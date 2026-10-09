const TASKS = [
  { id: 1, title: "Learn Git", isDone: false },
  { id: 3, title: "Review Code", isDone: true }
];

function getNextId() {
  if (TASKS.length === 0) {
    return 1;
  }

  const ids = TASKS.map((task) => task.id);
  return Math.max(...ids) + 1;
}

function addTask(title) {
  const newTask = {
    id: getNextId(),
    title: title,
    isDone: false
  };

  TASKS.push(newTask);
  return true;
}

function updateTask(id, newTitle) {
  for (let i = 0; i < TASKS.length; i++) {
    if (TASKS[i].id === id) {
      TASKS[i].title = newTitle;
      return TASKS[i];
    }
  }

  return null;
}

function deleteTask(id) {
  for (let i = 0; i < TASKS.length; i++) {
    if (TASKS[i].id === id) {
      TASKS.splice(i, 1);
      return true;
    }
  }

  return false;
}

function toggleTaskStatus(id) {
  for (let i = 0; i < TASKS.length; i++) {
    if (TASKS[i].id === id) {
      TASKS[i].isDone = !TASKS[i].isDone;
      return true;
    }
  }

  return false;
}

console.log(TASKS);

addTask("Practice Pull Request");
console.log(TASKS);

updateTask(1, "Learn Git and GitHub");
console.log(TASKS);

toggleTaskStatus(1);
console.log(TASKS);

deleteTask(3);
console.log(TASKS);
