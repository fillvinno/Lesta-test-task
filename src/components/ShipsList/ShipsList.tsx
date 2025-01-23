import React, {FC} from 'react';
import styles from './ShipsList.module.scss'
import {Ship} from "../Ships/Ships.tsx";
import ShipsListItem from "./ShipsListItem/ShipsListItem.tsx";

interface ShipsListProps {
  ships: Ship[] | undefined
}

const ShipsList: FC<ShipsListProps> = ({ships}) => {
  if (!ships || ships.length === 0) {
    return <div>No ships available</div>; // Обработка случая, когда ships undefined или пустой
  }

  return (
    <div className={styles.wrap}>
      {
        ships && ships.map((ship: Ship, index) => {
          return (
            <ShipsListItem key={index} ship={ship}/>
          )
        })
      }
    </div>
  );
};

export default ShipsList;