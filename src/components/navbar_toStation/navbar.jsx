import React from 'react';
import styles from './navbar.module.css';
import './station.css';
import TO_STATION_BUS_DATA from '../JSON_File/week_CampusToStation.json';
import TO_STATION_BUS_DATA_VAC from '../JSON_File/vac_CampusToStation.json';
import TO_STATION_BUS_DATA_VAC_ONLY from '../JSON_File/vacCampusOnly_CampusToStation.json';
import { Table } from '../table/toStation/table_tostation';
import Taxi from '../TAXI/taxi';

const Navbar = (props) => {
    const height = 69; 
    const dataS = TO_STATION_BUS_DATA;
    const data_vacS = TO_STATION_BUS_DATA_VAC;
    const data_vac_onlyS = TO_STATION_BUS_DATA_VAC_ONLY;
    const scrollTO=(right,id)=>{
        const ID = document.getElementById(`${id}`);
        ID.scrollIntoView(true);
        window.scrollTo({ top: window.scrollY - height, behavior: 'smooth' });
        const point = document.getElementById("pointer");
        point.style.right = `${right}%`;
    }
    const scrollTOTaxi=(right)=>{
        window.scrollTo({top:document.body.scrollHeight,behavior: 'smooth'});
        const point = document.getElementById("pointer");
        point.style.right = `${right}%`;
    }

    return(
        <>
            <header id='first' className={styles.container} >
                <span id='pointer'className="pointBar"></span>
                <span className={styles.nav_menu} onClick={() => {scrollTO(75,'dataS')}}>학교 개강<br/>(평일)</span>
                <span className={styles.nav_menu} onClick={() => {scrollTO(50,'data_vacS')}}>주말,공휴일  +<br/>대학 방학</span>
                <span className={styles.nav_menu} onClick={() => {scrollTO(25,'data_vac_onlyS')}}>대학만 방학<br/>(중고등 개학)</span>
                <span className={styles.nav_menu} onClick={() => {scrollTOTaxi(0)}}>Taxi</span>
            </header>

            <span id='dataS'>
                <Table data={dataS} />
            </span>
            <span id='data_vacS'>
                <Table data={data_vacS} />
            </span>
            <span id='data_vac_onlyS'>
                <Table data={data_vac_onlyS} />
            </span>
            <Taxi/>


                

                

                

        </>
    );


}


export default Navbar;