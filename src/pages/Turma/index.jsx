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
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ModalAddUser from "../../components/ModalAddUser";
import { useOpenModalAddUser } from "../../provider/OpenModalAddUser";
import { useUsers } from "../../provider/Users";

import "./styles.css";

const useStyles = makeStyles((themes) => ({
    profile: {
        position: "absolute",
        top: "0px",
    },
}));

const ContainerBox = styled(Box)(({ theme }) => ({
    // minWidth: "max-content",
    minHeight: "100vh",

    textAlign: "left",
    // position: "relative",

    padding: "25px 30px",
    backgroundColor: theme.palette.background.primary,
}));

function createData(id, name, surname, data, checkin, checkout, students, works, problems) {
    return { id, name, surname, data, checkin, checkout, students, works, problems };
}

export default function Turma() {
    const classes = useStyles();
    const { id } = useParams();
    const { modalAddUser, toggleModalAddUser } = useOpenModalAddUser();
    const { users, getUsers } = useUsers();
    const token = localStorage.getItem("accessToken");

    if (!users.length) {
        getUsers(token);
    }

    const [groupCoachs, setGroupCoachs] = useState([]);
    const [groupInfo, setGroupInfo] = useState([]);
    const [groupCreatorName, setGroupCreatorName] = useState("");
    const [infoCheckinAdmin, setInfoCheckinAdmin] = useState([]);
    const [infoCheckinCoach, setInfoCheckinCoach] = useState([]);

    const idUserLogged = localStorage.getItem("userId");

    const { groupsId } = useParams();

    useEffect(() => {
        api.get(`groups/${groupsId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => setGroupInfo(res.data))
            .catch((err) => {
                console.log(err);
            });

        api.get(`/coach?groupsId=${groupsId}`)
            .then((res) => setGroupCoachs(res.data))
            .catch((err) => {
                console.log(err);
            });

        api.get(`/checkin?groupsId=${groupsId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => setInfoCheckinAdmin(res.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const coachIdFind = groupCoachs.find((coach) => coach.userId == idUserLogged)?.id;

        api.get(`/checkin?coachId=${coachIdFind}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => setInfoCheckinCoach(res.data))
            .catch((err) => {
                console.log(err);
            });
    }, [groupCoachs]);

    useEffect(() => {
        groupInfo.userId &&
            api
                .get(`/users/${groupInfo.userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => setGroupCreatorName(res.data.name + " " + res.data.surname))
                .catch((err) => {
                    console.log(err);
                });
    }, [groupInfo]);

    const rowsCheckin = [];

    if (groupInfo.userId == idUserLogged) {
        infoCheckinAdmin.forEach((checkin) => {
            if (checkin.type === "checkin") {
                rowsCheckin.push(
                    createData(
                        checkin.userId,
                        checkin.name,
                        checkin.surname,
                        checkin.date,
                        checkin.hour,
                        "",
                        "",
                        "",
                        ""
                    )
                );
            } else
                rowsCheckin.push(
                    createData(
                        checkin.userId,
                        checkin.name,
                        checkin.surname,
                        checkin.date,
                        "",
                        checkin.hour,
                        checkin.students,
                        checkin.works,
                        checkin.problems
                    )
                );
        });
    } else {
        infoCheckinCoach.forEach((checkin) => {
            if (checkin.type === "checkin") {
                rowsCheckin.push(
                    createData(
                        checkin.userId,
                        checkin.name,
                        checkin.surname,
                        checkin.date,
                        checkin.hour,
                        "",
                        "",
                        "",
                        ""
                    )
                );
            } else
                rowsCheckin.push(
                    createData(
                        checkin.userId,
                        checkin.name,
                        checkin.surname,
                        checkin.date,
                        "",
                        checkin.hour,
                        checkin.students,
                        checkin.works,
                        checkin.problems
                    )
                );
        });
    }

    return (
        <ContainerBox>
            <Stack
                direction={{ md: "row", xs: "column" }}
                alignItems="baseline"
                justifyContent="space-between"
            >
                <Stack direction="column">
                    <Typography color="text.primary" variant="h3">
                        {groupInfo.name}
                    </Typography>

                    {groupCreatorName && (
                        <Typography
                            variant="subtitle1"
                            ml="5px"
                            color="text.subtitle"
                            mb={{ md: "50px", xs: "10px" }}
                        >
                            Facilitador: {groupCreatorName}
                        </Typography>
                    )}
                </Stack>

                <Stack
                    direction="column"
                    spacing={1}
                    alignItems="end"
                    width={{ md: "30%", xs: "100%" }}
                    mb={{ md: "0", xs: "15px" }}
                >
                    <Link to="/login" sx={{ my: 10 }}>
                        <Button variant="contained">Voltar</Button>
                    </Link>

                    {groupInfo.userId == idUserLogged && (
                        <Button variant="contained" startIcon={<AddSharpIcon />}>
                            Adicionar coach
                        </Button>
                    )}
                </Stack>
            </Stack>
            <Stack direction="row" alignItems="baseline" justifyContent="space-between"></Stack>
            <Typography color="text.subtitle">Horário checkin: {groupInfo.checkin}</Typography>
            <Typography color="text.subtitle" mb="10px">
                Horário checkout: {groupInfo.checkout}
            </Typography>

            <TableContainer
                component={Paper}
                sx={{ width: "100%", overflowX: "auto", overflowY: "auto", maxHeight: "600px" }}
            >
                <Table
                    sx={{
                        overflowX: "scroll",
                        minWidth: "max-content",
                        overflowY: "auto",
                        minHeight: "100px",
                    }}
                >
                    <TableHead>
                        <TableRow>
                            {/* <TableCell sx={{ color: "text.primary", textAlign: "center" }}>
                                <Typography variant="tableTitle">ID Aluno</Typography>
                            </TableCell> */}
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
                                <Typography variant="tableTitle">Alunos Atendidos</Typography>
                            </TableCell>
                            <TableCell sx={{ color: "text.primary" }}>
                                <Typography variant="tableTitle">Atividades Realizadas</Typography>
                            </TableCell>
                            <TableCell sx={{ color: "text.primary" }}>
                                <Typography variant="tableTitle">Pendências</Typography>
                            </TableCell>
                            {/* <TableCell sx={{ color: "text.primary", textAlign: "center" }}>
                                <Typography variant="tableTitle">Ações</Typography>
                            </TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsCheckin.reverse().map((row, index) => (
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
                <ModalAddUser users={users} token={token} />
            </Modal>
        </ContainerBox>
    );
}
