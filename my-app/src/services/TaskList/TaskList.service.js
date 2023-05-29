
class TaskListService {
  getAll() {
    return localStorage.getItem('task.list');
  }
}

export default new TaskListService();