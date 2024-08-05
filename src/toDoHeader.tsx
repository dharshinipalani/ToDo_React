import Menu from './Menu.tsx'
import styles from './toDoHeader.module.css'
function ToDoHeader() {
  return (
    <div className={styles.toDoHeader}>
      <div className={styles.menuContainer}>
        <Menu />
      </div>
      <h3 className={styles.toDoTitle}> To Do </h3>
    </div>
  );
}

export default ToDoHeader