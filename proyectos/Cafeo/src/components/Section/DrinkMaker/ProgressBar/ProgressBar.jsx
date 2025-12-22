import styles from './ProgressBar.module.css';
const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  return (
    <div className={styles.progress}>
      <div className={styles.progress__bar} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressBar;
