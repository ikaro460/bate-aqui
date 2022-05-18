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
  Stack,
  Modal,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import StyledTableRow from "../../components/StyledTableRow";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { useParams } from "react-router-dom";
import ModalAddUser from "../../components/ModalAddUser";
import { useOpenModalAddUser } from "../../provider/OpenModalAddUser";

const useStyles = makeStyles((themes) => ({
  profile: {
    position: "absolute",
    top: "0px",
  },
}));

const ContainerBox = styled(Box)(({ theme }) => ({
  minWidth: "max-content",
  minHeight: "100vh",

  textAlign: "left",
  position: "relative",

  padding: "25px 30px",
  backgroundColor: theme.palette.background.primary,
}));

function createData(id, name, data, checkin, checkout, status) {
  return { id, name, data, checkin, checkout, status };
}

const rows = [
  createData(5, "Jorge", "12/02/2022", "11:00", "14:00", "verdin"),
  createData(6, "Yuri", "12/02/2022", "11:05", "14:11", "verdin"),
  createData(7, "Icaro", "12/02/2022", "11:20", "14:00", "atrasado"),
  createData(8, "Alex", "12/02/2022", "11:00", "14:00", "verdin"),
  createData(9, "Igor", "12/02/2022", "11:00", "14:00", "verdin"),
  createData(10, "Lucas", "12/02/2022", "11:00", "14:00", "verdin"),
];

export default function Turma() {
  const classes = useStyles();
  const { id } = useParams();
  const { modalAddUser, toggleModalAddUser } = useOpenModalAddUser();

  return (
    <ContainerBox>
      <Stack
        direction="row"
        alignItems="baseline"
        justifyContent="space-between"
      >
        <Typography color="text.primary" variant="h3">
          Turma 01
        </Typography>
        <Button
          onClick={toggleModalAddUser}
          variant="contained"
          startIcon={<AddSharpIcon />}
        >
          Adicionar *Aluno*
        </Button>
      </Stack>

      <Typography variant="subtitle1" ml="5px" color="text.subtitle" mb="50px">
        Coach
      </Typography>

      <TableContainer component={Paper} sx={{ minWidth: "720px" }}>
        <Table sx={{ overflowX: "scroll", minWidth: "max-content" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "text.primary", textAlign: "center" }}>
                <Typography variant="tableTitle">ID Aluno</Typography>
              </TableCell>
              <TableCell sx={{ color: "text.primary" }}>
                <Typography variant="tableTitle">Nome</Typography>
              </TableCell>
              <TableCell sx={{ color: "text.primary" }}>
                <Typography variant="tableTitle">Data</Typography>
              </TableCell>
              <TableCell sx={{ color: "text.primary" }}>
                <Typography variant="tableTitle">Check-in</Typography>
              </TableCell>
              <TableCell sx={{ color: "text.primary" }}>
                <Typography variant="tableTitle">Check-out</Typography>
              </TableCell>
              <TableCell sx={{ color: "text.primary" }}>
                <Typography variant="tableTitle">Status</Typography>
              </TableCell>
              <TableCell sx={{ color: "text.primary", textAlign: "center" }}>
                <Typography variant="tableTitle">Ações</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow row={row} key={index} index={index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={modalAddUser}
        onClose={toggleModalAddUser}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <ModalAddUser />
      </Modal>
    </ContainerBox>
  );
}
