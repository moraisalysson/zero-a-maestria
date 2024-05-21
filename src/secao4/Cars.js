import React from "react";
import styles from "./Cars.module.css";

const CarDetails = ({cars}) => {
    return (
        <>
        <h2 className={styles.card_title}>Cars (section 4)</h2>
        {cars.map( (car, index) =>
            <p className={styles.card_p} key={index}>
                Brand: {car.brand}, 
                Model: {car.model}, 
                Year: {car.year}, 
                kilometers: {car.kilmeters}</p>
        )}
        </>
    )
}

export default CarDetails;