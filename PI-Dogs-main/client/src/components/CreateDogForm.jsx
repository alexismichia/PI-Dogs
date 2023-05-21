import { useState } from "react";
import { createNewDog, getTemperaments } from "../redux/actions/actions";
import styles from "../Styles/CreateDogForm.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const CreateDogForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [lifeSpan, setLifeSpan] = useState("");
  const [selectedTemperaments, setSelectedTemperaments] = useState([]);
  const temperaments = useSelector((state) => state.temperaments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleTemperamentChange = (e) => {
    const selectedOptions = Array.from(e.target.options)
      .filter((option) => option.selected)
      .map((option) => option.value);

    setSelectedTemperaments(selectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newDog = {
      name,
      image,
      height,
      weight,
      life_span: lifeSpan,
      temperaments: selectedTemperaments,
    };
    console.log("Datos del nuevo perro:", newDog);
    try {
      dispatch(createNewDog(newDog));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="image">
          Image URL:
        </label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="height">
          Height:
        </label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="weight">
          Weight:
        </label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="lifeSpan">
          Life Span:
        </label>
        <input
          type="text"
          id="lifeSpan"
          value={lifeSpan}
          onChange={(e) => setLifeSpan(e.target.value)}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="temperaments">
          Temperaments:
        </label>
        <select
          id="temperament"
          multiple // Permite seleccionar varios temperamentos
          value={selectedTemperaments}
          onChange={handleTemperamentChange}
          className={styles.select} 
        >
          {temperaments.map((temperament) => (
            <option className={styles.temperamenbarra} key={temperament.id} value={temperament.name}>
              {temperament.name}
            </option>
          ))}
        </select>
        <Link to="/home" className={styles.backButton}>
        Back to Home
      </Link>
      </div>
      <button type="submit" className={styles.Createbutton}>Create Dog</button>
      
    </form>
    
  );
};

export default CreateDogForm;







