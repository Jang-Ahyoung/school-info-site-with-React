import React,{useMemo} from 'react';
import {COLUMNS} from '../../JSON_File/cloumns';
import {useTable} from 'react-table';
import styles from './table_station.module.css';


export const Table =(props)=>{
    const columns = useMemo(()=>COLUMNS,[]);
    const data = useMemo(()=>props.data,[]);

    //useTable hook -> useMemo 사용
    const tableInstance = useTable({ //칼럽과, 열 2가지 속성
        // columns:COLUMNS->columns,
        // data:BUS_DATA->data
        columns,
        data
    })


    const {getTableProps, getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance;

    return(
            <table {...getTableProps()} className={styles.contanier} > 
                <thead>
                    {
                        headerGroups.map(headerGroups=>(
                            <tr {...headerGroups.getHeaderGroupProps()}>
                                {
                                    headerGroups.headers.map(column=>(
                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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