import { useState } from "react";
import styles from  "../Styles/CreateDogForm.module.css"
const CreateDogForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [minHeight, setMinHeight] = useState("");
  const [maxHeight, setMaxHeight] = useState("");
  const [minWeight, setMinWeight] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [temperaments, setTemperaments] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDog = {
      name,
      image,
      height: {
        min: minHeight,
        max: maxHeight,
      },
      weight: {
        min: minWeight,
        max: maxWeight,
      },
      temperaments,
    };

    try {
      const response = await fetch("/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDog),
      });
      const data = await response.json();
      console.log(data); // do something with the response from the server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="minHeight">Altura:</label>
        <div className={styles["input-container"]}>
          <label className={styles.label} htmlFor="minHeight">min:</label>
          <input
            type="number"
            id="minHeight"
            value={minHeight}
            onChange={(e) => setMinHeight(e.target.value)}
          />
        </div>
        <div className={styles["input-container"]}>
          <label className={styles.label} htmlFor="maxHeight">max:</label>
          <input
            type="number"
            id="maxHeight"
            value={maxHeight}
            onChange={(e) => setMaxHeight(e.target.value)}
          />
        </div>
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="minWeight">Peso:</label>
        <div className={styles["input-container"]}>
          <label className={styles.label} htmlFor="minWeight">min:</label>
          <input
            type="number"
            id="minWeight"
            value={minWeight}
            onChange={(e) => setMinWeight(e.target.value)}
          />
        </div>
        <div className={styles["input-container"]}>
          <label className={styles.label} htmlFor="maxWeight">max:</label>
          <input
            type="number"
            id="maxWeight"
            value={maxWeight}
            onChange={(e) => setMaxWeight(e.target.value)}
          />
        </div>
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="temperaments">Temperaments:</label>
        <select
          id="temperaments"
          multiple
          value={temperaments}
          onChange={(e) =>
            setTemperaments(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {/* Render options for each temperament */}
        </select>
      </div>
      <button type="submit">Create Dog</button>
    </form>
  );
};

export default CreateDogForm;






