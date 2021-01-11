import React from 'react';
import styles from '../navbar_toStation/navbar.module.css';
import TO_CAMPUS_BUS_DATA from '../JSON_File/week_StationToCampus';
import TO_CAMPUS_BUS_DATA_VAC from '../JSON_File/vac_StationToCampus';
import TO_CAMPUS_BUS_DATA_VAC_ONLY from '../JSON_File/vacCampusOnly_StationToCampus';
import { Table2 } from '../table/toCampus/table_toCampus';


const NavbarC = (props) => {
    const data = TO_CAMPUS_BUS_DATA;
    const data_vac = TO_CAMPUS_BUS_DATA_VAC;
    const data_vac_only = TO_CAMPUS_BUS_DATA_VAC_ONLY;
    
    // const week = document.getElementById("data");
    const vacC = document.getElementById("data_vac");
    const vacOnlyC = document.getElementById("data_vac_only");

    const scrollToWeek=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const scrollToVac=()=>{
        window.scrollTo({ top: 1440, behavior: 'smooth' });
    };
    const scrollToVacOnly=()=>{
        window.scrollTo({ top: 2134, behavior: 'smooth' });
        // vacOnlyC.scrollIntoView({behavior:'smooth'});
    };
    
    return(
        <>
            <header className={styles.container}>
                <span className={styles.nav_menu} onClick={scrollToWeek}>학교 개강<br/>(평일)</span>
                <span className={styles.nav_menu} onClick={scrollToVac}>주말,공휴일  +<br/>대학 방학</span>
                <span className={styles.nav_menu} onClick={scrollToVacOnly}>대학만 방학<br/>(중고등 개학)</span>
                <span className={styles.nav_menu}>Taxi</span>
            </header>
            <div id="data">
                <Table2 data={data} />
            </div>

            <div id="data_vac">
                <Table2 data={data_vac} />
            </div>

            <div id="data_vac_only">
                <Table2 data={data_vac_only} />
            </div>
        </>
    );


}


export default NavbarC;