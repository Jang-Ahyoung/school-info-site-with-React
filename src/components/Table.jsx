import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import './Table.css';
// import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

 
 
class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable  data={this.props.data}>
          <TableHeaderColumn isKey className="th"  dataField='bus_number'
                             headerAlign="center"  dataAlign='center' 
                            >
            버스노선
          </TableHeaderColumn>
        
          <TableHeaderColumn className="th" dataField='campus' 
                             headerAlign="center"  dataAlign='center'
                             >
            부산대
          </TableHeaderColumn>
          <TableHeaderColumn className="th" dataField='station' 
                             headerAlign="center"  dataAlign='center'
                            >
            밀양역
          </TableHeaderColumn>
          <TableHeaderColumn className="th" dataField='youngNamRoo'
                             dataAlign='center'  headerAlign="center">
            영남루
          </TableHeaderColumn>
          <TableHeaderColumn className="th" dataField='Tunnel' 
                             dataAlign='center'
                             headerAlign="center">
            터널<br/>통과여부<br/>(신도로)
          </TableHeaderColumn>
        
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;