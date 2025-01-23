import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from "./TypeFilter.module.scss";
import {shipsTypes} from "../../../utils/ships-types.ts";

type Props = {
  typeFilter: string
  setTypeFilter: Dispatch<SetStateAction<string>>
}

const TypeFilter: FC<Props> = ({setTypeFilter, typeFilter}) => {
  const pickType = (type: string) => {
    if (typeFilter === type) {
      setTypeFilter('')
    } else setTypeFilter(type)
    console.log(typeFilter)
  }

  return (
    <div className={styles.wrap}>
      {
        shipsTypes.map((type) => {
          return (
            <div
              className={styles.type}
              style={{backgroundColor: typeFilter === type.name ? '#151D2B' : undefined}}
              key={type.name}
              onClick={() => pickType(type.name)}
            >
              <img src={type.imageUrl} alt={type.name} />
              {type.name}
            </div>
          )
        })
      }
    </div>
  );
};

export default TypeFilter;