import React from 'react';
import '../navbar_toStation/station.css';
import styles from '../navbar_toStation/navbar.module.css';
import TO_CAMPUS_BUS_DATA from '../JSON_File/week_StationToCampus';
import TO_CAMPUS_BUS_DATA_VAC from '../JSON_File/vac_StationToCampus';
import TO_CAMPUS_BUS_DATA_VAC_ONLY from '../JSON_File/vacCampusOnly_StationToCampus';
import { Table2 } from '../table/toCampus/table_toCampus';


const NavbarC = (props) => {
    const data = TO_CAMPUS_BUS_DATA;
    const data_vac = TO_CAMPUS_BUS_DATA_VAC;
    const data_vac_only = TO_CAMPUS_BUS_DATA_VAC_ONLY;

    const scrollTO=(top,right)=>{
        const point = document.getElementById("pointer");
        console.log(point);
        window.scrollTo({ top: `${top}`, behavior: 'smooth' });
        point.style.right = `${right}%`;
    }
    
    return(
        <>
            <header className={styles.container}>
                <span id='pointer'className="pointBar"></span>
                <span className={styles.nav_menu} onClick={() => {scrollTO(0,75)}}>학교 개강<br/>(평일)</span>
                <span className={styles.nav_menu} onClick={() => {scrollTO(1465,50)}}>주말,공휴일  +<br/>대학 방학</span>
                <span className={styles.nav_menu} onClick={() => {scrollTO(2183,25)}}>대학만 방학<br/>(중고등 개학)</span>
                <span className={styles.nav_menu}>Taxi</span>
            </header>

                <Table2 data={data} />

                <Table2 data={data_vac} />

                <Table2 data={data_vac_only} />

        </>
    );
}


export default NavbarC;