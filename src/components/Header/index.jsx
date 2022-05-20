import { AppBar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { useSideBar } from "../../provider/SideBar";
import { useHistory } from "react-router-dom";
import { useHour } from "../../provider/Hour";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    height: "56px",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "static",

    backgroundColor: theme.palette.primary.dark,
}));

export default function Header() {
    const { toggleSideBar } = useSideBar();

    const history = useHistory();

    const { hour } = useHour();

    const logout = () => {
        localStorage.clear();
        history.push("/");
    };

    return (
        <StyledAppBar elevation={0}>
            <IconButton onClick={toggleSideBar}>
                <MenuIcon sx={{ color: "text.secondary" }} />
            </IconButton>

            <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => history.push(`/home/${localStorage.getItem("userId")}`)}
            >
                BateAqui
            </Typography>

            <Typography>{hour}</Typography>

            <Button sx={{ color: "text.secondary" }} onClick={logout}>
                Sair
            </Button>
        </StyledAppBar>
    );
}
