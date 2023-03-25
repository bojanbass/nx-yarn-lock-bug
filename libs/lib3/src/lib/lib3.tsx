import styles from './lib3.module.css';

/* eslint-disable-next-line */
export interface Lib3Props {}

export function Lib3(props: Lib3Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lib3!</h1>
    </div>
  );
}

export default Lib3;
