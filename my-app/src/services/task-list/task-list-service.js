
const getFromStorage = () => {
  return JSON.parse(localStorage.getItem('task-list')) ?? [];
}

const setToStorage = (tasks) => {
  localStorage.setItem('task-list', JSON.stringify(tasks));
}

const asAsync = (func) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      var result = func();
      resolve(result);
    });
  });
}


class TaskListService {
  get() {
    return asAsync(getFromStorage);
  }

  add(title, done) {
    return asAsync((() => {
      const tasks = getFromStorage();
      tasks.push({ id: Date.now(), title, done });
      setToStorage(tasks);
    }));
  }

  update(id, title, done) {
    return asAsync((() => {
      const tasks = getFromStorage();
      tasks.filter(item => item.id === id).forEach(item => {
        item.title = title;
        item.done = done;
      });
      setToStorage(tasks);
    }))
  }

  remove(id) {
    return asAsync((() => {
      const tasks = getFromStorage();
      setToStorage(tasks.filter(item => item.id !== id));
    }))
  }
}

const service = new TaskListService();

export default service;