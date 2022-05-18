import {
    Box,
    Button,
    Card,
    CardMedia,
    TableContainer,
    Typography,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    ButtonGroup,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export default function StyledTableRow({ row, index }) {
    const { id, name, data, checkin, checkout, students, works, problems } = row;

    return (
        <TableRow
            sx={[
                index % 2 === 0 && {
                    backgroundColor: "tableRowContrast",
                },
            ]}
        >
            <TableCell
                component="th"
                scope="row"
                sx={{ color: "text.primary", textAlign: "center" }}
            >
                <Typography variant="tableSubTitle">{id}</Typography>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ color: "text.primary" }}>
                <Typography variant="tableSubTitle">{name}</Typography>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ color: "text.primary" }}>
                <Typography variant="tableSubTitle">{data}</Typography>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ color: "text.primary" }}>
                <Typography variant="tableSubTitle">{checkin}</Typography>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ color: "text.primary" }}>
                <Typography variant="tableSubTitle">{checkout}</Typography>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ color: "text.primary", maxWidth: 100 }}>
                <Typography variant="tableSubTitle">{students}</Typography>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ color: "text.primary", maxWidth: 100 }}>
                <Typography variant="tableSubTitle">{works}</Typography>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ color: "text.primary", maxWidth: 100 }}>
                <Typography variant="tableSubTitle">{problems}</Typography>
            </TableCell>
            {/* <TableCell
        component="th"
        scope="row"
        sx={{color: "text.primary", textAlign: "center", width: "140px"}}
      >
        <ButtonGroup>
          <IconButton>
            <EditIcon sx={{color: "primary.light"}} />
          </IconButton>
          <IconButton>
            <DeleteOutlinedIcon sx={{color: "secondary.main"}} />
          </IconButton>
        </ButtonGroup>
      </TableCell> */}
        </TableRow>
    );
}
