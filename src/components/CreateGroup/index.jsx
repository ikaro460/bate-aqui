import { Box, Button, IconButton, Stack, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ColorCard, StyledCard } from "./styles";
import AddIcon from '@mui/icons-material/Add';
import { useOpenModalCreateGroup } from "../../provider/OpenModalCreateGroup"


export default function CreateGroup() {

  const { toggleModalCreateGroup} = useOpenModalCreateGroup()

  return(
    <StyledCard>

      <Box sx={{borderRadius: "50px", height: "56px", width: "56px", backgroundColor: "primary.main", "&:hover": {backgroundColor: "primary.dark"} }} >
        <IconButton variant="contained" onClick={toggleModalCreateGroup} sx={{height: "56px"}} >
          <AddIcon size="large" />
        </IconButton>
      </Box>

    </StyledCard>
  )

}