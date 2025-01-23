import React, {useEffect, useState} from 'react';
import styles from "../Ships/Ships.module.scss";
import { useQuery } from '@apollo/client';
import ShipsList from "../ShipsList/ShipsList.tsx";
import {GET_VEHICLES} from "../../utils/queries.ts";
import Filter from "../Filter/Filter.tsx";

type VehicleType = {
  icons: {
    default: string
    __typename: string
  }
  name: string
  title: string
  __typename: string
}

type VehicleNation = {
  color: string
  icons: {
    large: string | null
    medium: string | null
    small: string | null
    __typename: string
  }
  name: string
  title: string
  __typename: string
}

export interface Ship {
  title: string
  description: string
  nation: VehicleNation
  type: VehicleType
  level: number
  icons: {
    large: string | null
    medium: string | null
    __typename: string
  }
  __typename: string
}

interface GetDataResponse {
  vehicles: Ship[];
}

const Ships = () => {
  const { loading, error, data } = useQuery<GetDataResponse>(GET_VEHICLES);
  const [ships, setShips] = useState<Ship[]>([])
  const [filteredShips, setFilteredShips] = useState<Ship[]>([])

  useEffect(() => {
    if (data && data.vehicles) {
      setShips(data.vehicles);
    }
  }, [data])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.wrap}>
      <Filter ships={ships} setFilteredShips={setFilteredShips}/>
      <ShipsList ships={filteredShips} />
    </div>
  );
};

export default Ships;