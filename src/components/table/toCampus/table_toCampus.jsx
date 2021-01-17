import React,{useMemo} from 'react';
import {COLUMNS} from '../../JSON_File/cloumns2';
import {useTable} from 'react-table';
import styles from './table_toCampus.module.css';

//rafc
export const Table2 =(props)=>{
    const columns = useMemo(()=>COLUMNS,[]);
    const data = useMemo(()=>props.data,[]);
    const tableInstance1 = useTable({ 
        columns,
        data
    })
    const {getTableProps, getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance1;


    return(
        <table {...getTableProps()} className={styles.contanier} > 
            <thead>
                {
                    headerGroups.map(headerGroups=>(
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {
                                headerGroups.headers.map(column=>(
                                    <th id='height' {...column.getHeaderProps()}>{column.render('Header')}</th>
                                ))
                            }
                        </tr>
                    ))
              }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return <tr {...row.getRowProps}>
                            {
                                row.cells.map(cell=>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }
                        </tr>
                    })
                }
            </tbody>
        </table>

    )





}