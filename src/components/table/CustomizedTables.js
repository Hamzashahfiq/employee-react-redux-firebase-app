import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditOffIcon from '@mui/icons-material/EditOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PreviewIcon from '@mui/icons-material/Preview';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { useSelector, useDispatch } from 'react-redux';
import { FatchData } from '../../store/action/EmployeeAction'
import LinearLoader from '../linearLoader/LinearLoader';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// for tool tip
const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));



export default function CustomizedTables({ tableLoading, setTableLoading, submitedUuid,deleteHandler, updateHandler, viewHandler }) {
  const employeeData = useSelector((store) => store.EmployeeReducer.employeeData)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FatchData(setTableLoading))
  },[submitedUuid])

  const rows = employeeData

  if (tableLoading) {
    return <LinearLoader />
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ backgroundColor: "#3f51b5" }}>Sr#</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#3f51b5" }}>First Name</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#3f51b5" }}>Last Name</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#3f51b5" }}>Email</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#3f51b5" }}>Phone_No</StyledTableCell>
            <StyledTableCell style={{ backgroundColor: "#3f51b5" }}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.uuid}>
              <StyledTableCell component="th" scope="row" style={{ padding: '5px 16px' }}>
                {index + 1}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row" style={{ padding: '5px 16px' }}>
                {row.First_Name}
              </StyledTableCell>
              <StyledTableCell style={{ padding: '5px 16px' }}>{row.Last_Name}</StyledTableCell >
              <StyledTableCell style={{ padding: '5px 16px' }}>{row.Email}</StyledTableCell>
              <StyledTableCell style={{ padding: '5px 16px' }}>{row.Phone_No}</StyledTableCell>
              <StyledTableCell style={{ padding: '5px 16px' }}>
                <Stack direction="row" spacing={1}>
                  <BootstrapTooltip title="Update">
                    <IconButton onClick={() => updateHandler(row)} aria-label="Edit" color="primary">
                      <EditOffIcon style={{ color: "#004d40" }} />
                    </IconButton>
                  </BootstrapTooltip>
                  <BootstrapTooltip title="Delete">
                    <IconButton onClick={() => deleteHandler(row)} color="secondary" aria-label="Delete">
                      <DeleteForeverIcon style={{ color: "red" }} />
                    </IconButton>
                  </BootstrapTooltip>
                  <BootstrapTooltip title="View">
                    <IconButton onClick={() => viewHandler(row)} color="primary" aria-label="View">
                      <PreviewIcon style={{ color: "orange" }} />
                    </IconButton>
                  </BootstrapTooltip>
                </Stack>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table >
    </TableContainer >
  );
}
