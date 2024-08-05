import { useState } from "react";
import Delete from "./Delete.tsx";
import Status from "./Status.tsx";
import PopUpDelete from "./PopUpDelete.tsx";
import styles from "./task.module.css";

interface TaskProps{
  task: string;
  onDelete: (task: string) => void;
}
function Task({task, onDelete} : TaskProps) {
  const [status, setStatus] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleStatusToggle = () => {
    setStatus(!status);
  };

  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    setShowPopup(false);
    onDelete(task);
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.taskContainer}>
      <div className={styles.statusContainer} onClick={handleStatusToggle}>
        <Status status={status} />
      </div>
      <p className={status ? styles.taskTextStrikethrough : styles.taskText}>
        {task}
      </p>
      <div className={styles.deleteContainer} onClick={handleDeleteClick}>
        <Delete />
      </div>
      {showPopup && (
        <PopUpDelete
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </div>
  );
}

export default Task;
