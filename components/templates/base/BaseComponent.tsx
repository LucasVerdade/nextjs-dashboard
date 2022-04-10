import styles from './BaseComponent.module.css';

export interface IComponentBase {}

const BaseComponent: React.FC<IComponentBase> = () => {
  return <div className={styles.container}>Hello world</div>;
};

export default BaseComponent;
