import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import GetData from './Data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullName', headerName: 'Full name', width: 200 },
  {
    field: 'departmentID',
    headerName: 'Department ID',
    type: 'number',
    width: 150,
  },
];

const rows = GetData();

export default function DataGridDemo() {
  return (
    <div style={{ height: 680, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}