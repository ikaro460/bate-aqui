import { AppBar, Drawer, Paper, IconButton, Stack, Typography, MenuList, MenuItem, ListItemIcon, ListItemText } from "@mui/material"
import { useSideBar } from "../../provider/SideBar"
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
import PaymentSharpIcon from '@mui/icons-material/PaymentSharp';
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';


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


  return(
    <Drawer
      anchor="left"
      hideBackdrop={true}
      open={sideBar}
    >
      <StyledAppBar elevation={0} >

        <IconButton onClick={toggleSideBar}  >
          <MenuIcon />
        </IconButton>

      </StyledAppBar>

      <StyledPaper>

        <MenuList>

          <MenuItem>

            <ListItemIcon>
              <TagFacesIcon />
            </ListItemIcon>

            <ListItemText>
              <Typography>Perfil</Typography>
            </ListItemText>

          </MenuItem>

          <MenuItem>

            <ListItemIcon>
              <WorkOutlineSharpIcon />
            </ListItemIcon>

            <ListItemText>
              <Typography>Configurações</Typography>
            </ListItemText>

          </MenuItem>

          <MenuItem>

            <ListItemIcon>
              <PaymentSharpIcon />
            </ListItemIcon>

            <ListItemText>
              <Typography>Turmas</Typography>
            </ListItemText>

          </MenuItem>

          <MenuItem>

            <ListItemIcon>
              <CheckCircleOutlineSharpIcon />
            </ListItemIcon>

            <ListItemText>
              <Typography>Presenças</Typography>
            </ListItemText>

          </MenuItem>

          <MenuItem>

            <ListItemIcon>
              <PeopleOutlineSharpIcon />
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