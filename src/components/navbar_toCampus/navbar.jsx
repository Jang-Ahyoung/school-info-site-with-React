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

    // const scrollTO=(top,right)=>{
    //     const point = document.getElementById("pointer");
    //     console.log(point);
    //     window.scrollTo({ top: `${top}`, behavior: 'smooth' });
    //     point.style.right = `${right}%`;
    // }


    const scrollToWeek=()=>{
        const point = document.getElementById("pointer");
        console.log(point);
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

                <Table2 data={data} />

                <Table2 data={data_vac} />

                <Table2 data={data_vac_only} />

        </>
    );
}


export default NavbarC;