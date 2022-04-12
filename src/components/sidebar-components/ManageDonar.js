
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "phone",
    headerName: "Phone#",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    
  },
  {
    field: "email",
    headerName: "Email",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    
  },
];

const rows = [
  { id: 1, lastName: "ALi", firstName: "Mujtaba", age: 35,phone:'+923046511650',email:'mujiroy01@gmai.com', },
  { id: 2, lastName: "Stark", firstName: "Harvey", age: 42,phone:'+020123',email:'muji@gmai.com' },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45,phone:'+020123',email:'muji@gmai.com' },
  { id: 4, lastName: "Stark", firstName: "s", age: 16,phone:'+020123',email:'muji@gmai.com' },
  { id: 5, lastName: "Targaryen", firstName: "Rossini", age: null,phone:'+020123',email:'muji@gmai.com' },
  { id: 6, lastName: "Frances", firstName: null, age: 150 ,phone:'+020123',email:'muji@gmai.com'},
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44,phone:'+020123',email:'muji@gmai.com' },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 ,phone:'+020123',email:'muji@gmai.com'},
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65,phone:'+020123',email:'muji@gmai.com' },
];

export default function ManageDonar() {
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}