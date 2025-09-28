
// ---internal, external & module css ----
// Click Event
import styles from "./Button.module.css";

function Button() {
  const internalStyles = {
    backgroundColor: "hsl(106, 16%, 53%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "0px 5px",
  };

  return (
    <>
      <button style={internalStyles}>Click me!</button>
      <button className={styles.button}>Click me!</button>
      <button className="button">Click me!</button>
    </>
  );
}

export default Button;
