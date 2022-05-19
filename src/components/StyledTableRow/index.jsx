import { Typography, TableRow, TableCell } from "@mui/material";

export default function StyledTableRow({ row, index }) {
    const { name, surname, data, checkin, checkout, students, works, problems } = row;

    return (
        <TableRow
            sx={[
                index % 2 === 0 && {
                    backgroundColor: "tableRowContrast",
                },
            ]}
        >
            <TableCell component="th" scope="row" sx={{ color: "text.primary", maxWidth: 180 }}>
                <Typography variant="tableSubTitle">{name + " " + surname}</Typography>
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
            <TableCell component="th" scope="row" sx={{ color: "text.primary", maxWidth: 180 }}>
                <Typography variant="tableSubTitle">{students}</Typography>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ color: "text.primary", maxWidth: 180 }}>
                <Typography variant="tableSubTitle">{works}</Typography>
            </TableCell>
            <TableCell component="th" scope="row" sx={{ color: "text.primary", maxWidth: 180 }}>
                <Typography variant="tableSubTitle">{problems}</Typography>
            </TableCell>
        </TableRow>
    );
}
