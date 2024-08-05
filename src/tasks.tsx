import { useState } from 'react';
import Task from './task.tsx';
import styles from './tasks.module.css'
import { IoMdAdd } from "react-icons/io";
import PopUpAddTask from './PopUpAddTask.tsx';
function Tasks() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [showAddTask, setAddTaskPopup] = useState(false);

  const handleAddTaskPopupToggle = () => {
    setAddTaskPopup(!showAddTask);
  };

  const handleAddTask = (taskText: string) => {
    setTasks([...tasks, taskText]);
    setAddTaskPopup(false);
  };
  
  const handleDeleteTask = (taskToDelete: string) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };
  
  return (
    <div className={styles.tasksContainer}>
      {tasks.length === 0 ? ( <p> No Task Found.</p>) : 
      (tasks.map((task) => <Task onDelete={handleDeleteTask} task={task} />))}
      {
        showAddTask && (
          <PopUpAddTask
            onAddTask={handleAddTask}
            onCancel={handleAddTaskPopupToggle}
          />
        )
      }
      <button className={styles.addButton} onClick={handleAddTaskPopupToggle}> <IoMdAdd size='20'/> New Item</button>
    </div>
  );
}

export default Tasks;
