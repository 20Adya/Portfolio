import React from "react";

import styles from "./Coursework.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Coursework = () => {
  return (
    <section className={styles.container} id="coursework">
      <h2 className={styles.title}>Coursework</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
       
      </div>
    </section>
  );
};