import { styled } from "@mui/material/styles";
import { MaterialReactTable } from "material-react-table";

export const StyledTable = styled(MaterialReactTable)`
    background-color: red !important;
  & .MuiTableCell-root {
    color: white;
    background-color: green;
    height: 30;
    padding: 0;
  }

  & .MuiTableHead-root {
    position: fixed;
  }

  & .MuiTableRow-root:nth-child(odd) {
    background-color: green;
  }

  & .MuiTable-root {
    border-radius: 20px;
    background: gray;
    overflow: hidden;
  }
`