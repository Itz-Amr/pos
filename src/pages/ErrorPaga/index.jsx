import styles from "./index.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.pageContainer}>
      <div>
        <h1 className={styles.glitch} data-glitch="404">
          404
        </h1>
      </div>
      <button className="btn btn-danger z-3">Go To Home Page</button>
    </div>
  );
}
