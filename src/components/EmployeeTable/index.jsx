import DoneIcon from '@mui/icons-material/Done';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { useCallback, useState } from 'react';
import AcceptPopup from '../Form/AcceptPopup';
import { useEffect } from 'react';

export default function EmployeeTable() {
  const fetchData = async () => {
    const response = await fetch('YOUR API URL HERE');
    const data = await response.json();
    console.log(data);
    const parsedData = data.map(({ employee, lastWorkingDate }) => {
      return {
        id: employee.id,
        employeeName: employee.name,
        role: employee.role,
        grade: employee.grade,
        office: employee.office,
        country: 'india',
        lastWorkingDate: new Date(lastWorkingDate),
      };
    });
    setRows(parsedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [rows, setRows] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [employeeSelected, setEmployeeSelected] = useState(null);

  const columns = [
    { field: 'id', headerName: 'Id', width: 40 },
    { field: 'employeeName', headerName: 'Name', width: 180 },
    { field: 'role', headerName: 'Role', width: 140 },
    { field: 'grade', headerName: 'Grade', width: 120 },
    { field: 'office', headerName: 'Office', width: 120 },
    { field: 'country', headerName: 'Country', width: 120 },
    {
      field: 'lastWorkingDate',
      headerName: 'Last Working Date',
      type: 'date',
      width: 140,
      editable: true,
    },
    {
      field: 'select',
      type: 'actions',
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          key={params.id}
          icon={<DoneIcon />}
          label="Done"
          onClick={userAccepted(params.id)}
        />,
      ],
    },
  ];

  const userAccepted = useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        setPopupOpen(true);
        const index = rows.findIndex((row) => row.id == id);
        setEmployeeSelected(rows[index]);
      });
    },
    [],
  );

  return (
    <div className="mx-auto mt-10" style={{ height: 300, width: '70%' }}>
      <DataGrid rows={rows} columns={columns} />
      {isPopupOpen && employeeSelected && (
        <AcceptPopup
          open={isPopupOpen}
          setOpen={setPopupOpen}
          employeeSelected={employeeSelected}
        />
      )}
    </div>
  );
}
