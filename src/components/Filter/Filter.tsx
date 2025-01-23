import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import styles from './Filter.module.scss'
import NationFilter from "./NationFilter/NationFilter.tsx";
import TypeFilter from "./TypeFilter/TypeFilter.tsx";
import LevelFilter from "./LevelFilter/LevelFilter.tsx";
import {Ship} from "../Ships/Ships.tsx";
import Search from "./Search/Search.tsx";

type Props = {
  ships: Ship[] | undefined
  setFilteredShips: Dispatch<SetStateAction<Ship[]>>
}

const Filter: FC<Props> = ({ships, setFilteredShips}) => {
  const [nationFilter, setNationFilter] = useState<string>('')
  const [typeFilter, setTypeFilter] = useState<string>('')
  const [levelFilter, setLevelFilter] = useState<number | null>(null)
  const [titleFilter, setTitleFilter] = useState<string>('')

  useEffect(() => {
    if (!ships) {
      setFilteredShips([])
      return
    }

    const filtered = ships.filter(ship => {
      const matchesNation = nationFilter ? ship.nation.title === nationFilter : true
      const matchesType = typeFilter ? ship.type.title === typeFilter : true
      const matchesLevel = levelFilter !== null ? ship.level === levelFilter : true

      return matchesNation
        && matchesLevel
        && matchesType
        && ship.title.toLowerCase().includes(titleFilter.toLowerCase())
    })

    setFilteredShips(filtered)
  }, [nationFilter, typeFilter, levelFilter, titleFilter, ships, setFilteredShips])

  return (
    <div className={styles.wrap}>
      <div className={styles.heading}>Фильтры</div>
      <Search
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
      />
      <NationFilter
        nationFilter={nationFilter}
        setNationFilter={setNationFilter}
      />
      <TypeFilter
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
      <LevelFilter
        levelFilter={levelFilter}
        setLevelFilter={setLevelFilter}
      />
    </div>
  );
};

export default Filter;