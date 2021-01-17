import React from 'react';
import '../navbar_toStation/station.css';
import styles from '../navbar_toStation/navbar.module.css';
import TO_CAMPUS_BUS_DATA from '../JSON_File/week_StationToCampus';
import TO_CAMPUS_BUS_DATA_VAC from '../JSON_File/vac_StationToCampus';
import TO_CAMPUS_BUS_DATA_VAC_ONLY from '../JSON_File/vacCampusOnly_StationToCampus';
import { Table2 } from '../table/toCampus/table_toCampus';
import Taxi from '../TAXI/taxi';
import Header from '../header/header';

const NavbarC = (props) => {
    const height = 69; 
    const data = TO_CAMPUS_BUS_DATA;
    const data_vac = TO_CAMPUS_BUS_DATA_VAC;
    const data_vac_only = TO_CAMPUS_BUS_DATA_VAC_ONLY;

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
        <Header/>
            <header id='first' className={styles.container} >
                <span id='pointer'className="pointBar"></span>
                <span className={styles.nav_menu} onClick={() => {scrollTO(75,'data')}}>학교 개강<br/>(평일)</span>
                <span className={styles.nav_menu} onClick={() => {scrollTO(50,'data_vac')}}>주말,공휴일  +<br/>대학 방학</span>
                <span className={styles.nav_menu} onClick={() => {scrollTO(25,'data_vac_only')}}>대학만 방학<br/>(중고등 개학)</span>
                <span className={styles.nav_menu} onClick={() => {scrollTOTaxi(0)}}>Taxi</span>
            </header>

            <span id='data'>
                <Table2 data={data}/>
            </span>
            <span id='data_vac'>
                <Table2 data={data_vac}/>
            </span>
            <span id='data_vac_only'>
                <Table2 data={data_vac_only}/>
            </span>
            <Taxi/>
            
        </>
    );
}


export default NavbarC;