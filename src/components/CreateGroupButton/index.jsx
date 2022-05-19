import { Box, IconButton } from "@mui/material";
import { StyledCard } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import { useOpenModalCreateGroup } from "../../provider/OpenModalCreateGroup";

export default function CreateGroupButton() {
    const { toggleModalCreateGroup } = useOpenModalCreateGroup();

    return (
        <StyledCard>
            <Box
                sx={{
                    borderRadius: "50px",
                    height: "56px",
                    width: "56px",
                    backgroundColor: "primary.main",
                    "&:hover": { backgroundColor: "primary.dark" },
                }}
            >
                <IconButton
                    variant="contained"
                    onClick={toggleModalCreateGroup}
                    sx={{ width: "56px", height: "56px" }}
                >
                    <AddIcon sx={{ color: "text.secondary" }} size="large" />
                </IconButton>
            </Box>
        </StyledCard>
    );
}
