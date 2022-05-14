import { AppBar, Drawer, Paper, IconButton, Stack, Typography, MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import { useSideBar } from "../../provider/SideBar"
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
import PaymentSharpIcon from '@mui/icons-material/PaymentSharp';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import { Link, useHistory } from "react-router-dom";


const StyledPaper = styled(Paper)(({theme}) => ({
  minWidth: "200px",
  height: "100%",

  borderRadius: "0px",
  backgroundColor: theme.palette.primary.main
}))

const StyledAppBar = styled(AppBar)(({theme}) => ({
  height: "56px",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  position: "static",

  backgroundColor: theme.palette.primary.dark,
}))

export default function SideBar() {

  const { sideBar, toggleSideBar } = useSideBar()

  const history = useHistory()

  return(
    <Drawer
      anchor="left"
      // hideBackdrop={true}
      open={sideBar}
    >
      <StyledAppBar elevation={0} >

        <IconButton onClick={toggleSideBar}  >
          <MenuIcon sx={{color: "#fff"}} />
        </IconButton>

      </StyledAppBar>

      <StyledPaper>

        <MenuList>

          <MenuItem>

            <ListItemIcon>
              <TagFacesIcon sx={{color: "#fff"}} />
            </ListItemIcon>

            <ListItemText onClick={() => history.push("/perfil")} >
              <Typography>Perfil</Typography>
            </ListItemText>

          </MenuItem>

          <MenuItem>

            <ListItemIcon>
              <WorkOutlineSharpIcon sx={{color: "#fff"}} />
            </ListItemIcon>

            <ListItemText>
              <Typography>Configurações</Typography>
            </ListItemText>

          </MenuItem>

          <MenuItem>

            <ListItemIcon>
              <PaymentSharpIcon sx={{color: "#fff"}} />
            </ListItemIcon>

            <ListItemText>
              <Typography>Turmas</Typography>
            </ListItemText>

          </MenuItem>

          <MenuItem>

            <ListItemIcon>
              <CheckCircleOutlineSharpIcon sx={{color: "#fff"}} />
            </ListItemIcon>

            <ListItemText>
              <Typography>Presenças</Typography>
            </ListItemText>

          </MenuItem>

          <MenuItem>

            <ListItemIcon>
              <PeopleOutlineSharpIcon sx={{color: "#fff"}} />
            </ListItemIcon>

            <ListItemText>
              <Typography>Notificações</Typography>
            </ListItemText>

          </MenuItem>          

        </MenuList>

      </StyledPaper>
    </Drawer>
  )

}