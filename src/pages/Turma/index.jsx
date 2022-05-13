import { Box, Button, Card, CardMedia, TableContainer, Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody, Stack } from "@mui/material"
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles"
import StyledTableRow from "../../components/StyledTableRow";
import AddSharpIcon from '@mui/icons-material/AddSharp';


const useStyles = makeStyles( (themes) => ({

  profile: {
    position: "absolute",
    top: "0px",
  }

}))

const ContainerBox = styled(Box)(({theme}) => ({
  minWidth: "max-content", 
  minHeight: "100vh - 56px",

  textAlign: "left",
  position: "relative",

  margin: "25px 30px",
}))


function createData(id, name, data, checkin, checkout, status) {
  return {id, name, data, checkin, checkout, status};
}

const rows = [
  createData(5, "Jorge", "12/02/2022", "11:00", "14:00", "verdin"),
  createData(6, "Yuri", "12/02/2022", "11:05", "14:11", "verdin"),
  createData(7, "Icaro", "12/02/2022", "11:20", "14:00", "atrasado"),
  createData(8, "Alex", "12/02/2022", "11:00", "14:00", "verdin"),
  createData(9, "Igor", "12/02/2022", "11:00", "14:00", "verdin"),
  createData(10, "Lucas", "12/02/2022", "11:00", "14:00", "verdin")
]

export default function Turma() {

  const classes = useStyles()

  return(
    <ContainerBox>

      <Stack direction="row" alignItems="baseline" justifyContent="space-between" >
        <Typography variant="h3" >Turma 01</Typography>
        <Button variant="contained" startIcon={<AddSharpIcon />} >Adicionar *Aluno*</Button>
      </Stack>
        
      <Typography variant="subtitle1" ml="5px" color="#4B4B4B" mb="50px" >Coach</Typography>

      <TableContainer 
        component={Paper} 
        sx={{minWidth: "720px"}}
      >
        <Table sx={{overflowX: "scroll", minWidth: "max-content"}} >
          <TableHead >
            <TableRow >
              <TableCell sx={{color: "text.secondary", textAlign: "center"}} >
                <Typography variant="tableTitle" >ID Aluno</Typography>
              </TableCell>
              <TableCell sx={{color: "text.secondary"}} >
                <Typography variant="tableTitle" >Nome</Typography>
              </TableCell>
              <TableCell sx={{color: "text.secondary"}} >
                <Typography variant="tableTitle" >Data</Typography>
              </TableCell>
              <TableCell sx={{color: "text.secondary"}} >
                <Typography variant="tableTitle" >Check-in</Typography>
              </TableCell>
              <TableCell sx={{color: "text.secondary"}} >
                <Typography variant="tableTitle" >Check-out</Typography>
              </TableCell>
              <TableCell sx={{color: "text.secondary"}} >
                <Typography variant="tableTitle" >Status</Typography>
              </TableCell>
              <TableCell sx={{color: "text.secondary", textAlign: "center"}} >
                <Typography variant="tableTitle" >Ações</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => 
              <StyledTableRow row={row} key={index} index={index} />

            )}
          </TableBody>
        </Table>
      </TableContainer>

    </ContainerBox>
  )

}