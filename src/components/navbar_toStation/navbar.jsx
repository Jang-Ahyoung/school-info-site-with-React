import React from 'react';
import styles from './navbar.module.css';
import './station.css';
import TO_STATION_BUS_DATA from '../JSON_File/week_CampusToStation.json';
import TO_STATION_BUS_DATA_VAC from '../JSON_File/vac_CampusToStation.json';
import TO_STATION_BUS_DATA_VAC_ONLY from '../JSON_File/vacCampusOnly_CampusToStation.json';
import { Table } from '../table/toStation/table_tostation';


const Navbar = (props) => {
    const dataS = TO_STATION_BUS_DATA;
    const data_vacS = TO_STATION_BUS_DATA_VAC;
    const data_vac_onlyS = TO_STATION_BUS_DATA_VAC_ONLY;

    const scrollToWeek=()=>{
        const point = document.getElementById("pointer");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        point.style.right = `75%`;
        
    };
    const scrollToVac=()=>{
        const point = document.getElementById("pointer");
        window.scrollTo({ top: 1465, behavior: 'smooth' });
        point.style.right = `50%`;
    };
    const scrollToVacOnly=()=>{
        const point = document.getElementById("pointer");
        window.scrollTo({ top: 2183, behavior: 'smooth' });
        point.style.right = `25%`;
    };
    
    return(
        <>
            <header className={styles.container}>
                <span id='pointer'className="pointBar"></span>
                <span className={styles.nav_menu} onClick={scrollToWeek}>학교 개강<br/>(평일)</span>
                <span className={styles.nav_menu} onClick={scrollToVac}>주말,공휴일  +<br/>대학 방학</span>
                <span className={styles.nav_menu} onClick={scrollToVacOnly}>대학만 방학<br/>(중고등 개학)</span>
                <span className={styles.nav_menu}>Taxi</span>
            </header>

                <Table data={dataS} />

                <Table data={data_vacS} />

                <Table data={data_vac_onlyS} />

        </>
    );


}


export default Navbar;