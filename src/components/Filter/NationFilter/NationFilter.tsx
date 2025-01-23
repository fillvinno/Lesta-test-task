import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './NationFilter.module.scss'
import {CountryFlag, countryFlags} from "../../../utils/country-flags.ts";

type Props = {
  nationFilter: string
  setNationFilter: Dispatch<SetStateAction<string>>
}

const NationFilter: FC<Props> = ({ setNationFilter, nationFilter }) => {
  const pickNation = (nation: string) => {
    if (nationFilter === nation) {
      setNationFilter('')
    } else setNationFilter(nation)
  }

  return (
    <div className={styles.wrap}>
      {
        countryFlags.map((countryFlag: CountryFlag) => (
          <img
            src={countryFlag.flagUrl}
            alt={countryFlag.name}
            key={countryFlag.name}
            style={{scale: nationFilter === countryFlag.name ? "1.3" : undefined}}
            onClick={() => pickNation(countryFlag.name)}
          ></img>
        ))
      }
    </div>
  );
};

export default NationFilter;