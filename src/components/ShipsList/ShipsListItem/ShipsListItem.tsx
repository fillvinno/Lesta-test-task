import React from 'react';
import styles from "../ShipsListItem/ShipsListItem.module.scss";
import {Ship} from "../../Ships/Ships.tsx";

type Props = {
  ship: Ship
}

const ShipsListItem = ({ship}: Props) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>{ship.title}</div>
      <img src={ship.icons.medium!} alt={ship.title} className={styles.icon}/>
      {/*<button className={styles.moreBtn}>*/}
      {/*  Подробнее*/}
      {/*</button>*/}
      <div className={styles.characteristics}>
        <div className={styles.type}>
          {ship.type.title}
          <img src={ship.type.icons.default} alt={ship.type.title}/>
        </div>
        <div className={styles.level}>Уровень: {ship.level}</div>
        <div
          className={styles.nation}
          style={{color: `${ship.nation.color}`}}
        >
          Нация: {ship.nation.title}
          <img src={ship.nation.icons.large!} alt={ship.nation.title} />
        </div>
      </div>
      <div className={styles.description}>
        {ship.description}
      </div>
    </div>
  );
};

export default ShipsListItem;