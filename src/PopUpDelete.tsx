import styles from "./PopUpDelete.module.css";

interface PopUpDeleteProps {
  onConfirm: () => void;
  onCancel: () => void;
}

function PopUpDelete({ onConfirm, onCancel }: PopUpDeleteProps) {
  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <p>Do you want to delete this task?</p>
        <div className={styles.popupButtonContainer}>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default PopUpDelete;
