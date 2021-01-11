import React from 'react';
import styles from './navbar.module.css';
import TO_STATION_BUS_DATA from '../JSON_File/week_CampusToStation.json';
import TO_STATION_BUS_DATA_VAC from '../JSON_File/vac_CampusToStation.json';
import TO_STATION_BUS_DATA_VAC_ONLY from '../JSON_File/vacCampusOnly_CampusToStation.json';
import { Table } from '../table/toStation/table_tostation';


const Navbar = (props) => {
    const dataS = TO_STATION_BUS_DATA;
    const data_vacS = TO_STATION_BUS_DATA_VAC;
    const data_vac_onlyS = TO_STATION_BUS_DATA_VAC_ONLY;
    
    // const week = document.getElementById("dataS");
    const vac = document.getElementById("data_vacS");
    console.log(vac);
    const vacOnly = document.getElementById("data_vac_onlyS");

    const scrollToWeek=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' }) 
        // window.scrollTo(0,0).scrollIntoView({behavior:'smooth',block:'start'});
        // week.scrollIntoView({behavior:'smooth',block:'start'});
    };
    const scrollToVac=()=>{
        window.scrollTo({ top: 1440, behavior: 'smooth' }); 
        // vac.scrollIntoView({behavior:'smooth'});
    };
    const scrollToVacOnly=()=>{
        window.scrollTo({ top: 2134, behavior: 'smooth' });
        // vacOnly.scrollIntoView({behavior:'smooth'});
    };
    
    return(
        <>
            <header className={styles.container}>
                <span className={styles.nav_menu} onClick={scrollToWeek}>학교 개강<br/>(평일)</span>
                <span className={styles.nav_menu} onClick={scrollToVac}>주말,공휴일  +<br/>대학 방학</span>
                <span className={styles.nav_menu} onClick={scrollToVacOnly}>대학만 방학<br/>(중고등 개학)</span>
                <span className={styles.nav_menu}>Taxi</span>
            </header>
            <div id="dataS">
                <Table data={dataS} />
            </div>

            <div id="data_vacS">
                <Table data={data_vacS} />
            </div>

            <div id="data_vac_onlyS">
                <Table data={data_vac_onlyS} />
            </div>

        </>
    );


}


export default Navbar;