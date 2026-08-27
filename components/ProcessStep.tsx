import styles from './ProcessStep.module.css';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
}

export default function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <div className={styles.processStep}>
      <div className={styles.stepNumber}>
        <span>{step}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
