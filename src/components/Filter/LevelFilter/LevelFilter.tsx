import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './LevelFilter.module.scss'

type Props = {
  levelFilter: number | null
  setLevelFilter: Dispatch<SetStateAction<number | null>>
}

const levels = [1,2,3,4,5,6,7,8,9,10,11]

const LevelFilter: FC<Props> = ({ setLevelFilter, levelFilter }) => {
  const pickLevel = (level: number) => {
    if (level === levelFilter) {
      setLevelFilter(null)
    } else {
      setLevelFilter(level)
    }
    console.log(levelFilter)
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.text}>Уровень:</div>
      {
        levels.map(
          level => {
            return (
              <div
                className={styles.level}
                style={{backgroundColor: levelFilter === level ? '#151D2B' : undefined}}
                key={level}
                onClick={() => pickLevel(level)}
              >
                {level}
              </div>
            )
          }
        )
      }
    </div>
  );
};

export default LevelFilter;