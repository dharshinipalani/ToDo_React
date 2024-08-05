import { useState } from "react";
import styles from "./popUpAddTask.module.css";

interface PopUpAddTaskProps {
  onAddTask: (taskText: string) => void;
  onCancel: () => void;
}

function PopUpAddTask({ onAddTask, onCancel }: PopUpAddTaskProps) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (!taskText.trim()) {
      alert("Task text cannot be empty");
      return;
    }
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <h3>Add New Task</h3>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter the task"
        />
        <div className={styles.popupButtonContainer}>
          <button className={styles.popupButton} onClick={handleAddTask}>Add</button>
          <button className={styles.popupButton} onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default PopUpAddTask;
