import { Box, Button, FormControl, FormLabel, IconButton, Menu, MenuItem, Modal, Stack, TextField, Typography } from "@mui/material"
import { useOpenModalCheckout } from "../../provider/OpenModalCheckout";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";


const StyledBox = styled(Box)(({ theme }) => ({
  minWidth: "300px",
  maxWidth: "360px",
  width: "100%",
  padding: "35px",
  position: "relative",

  backgroundColor: theme.palette.background.primary,

  [theme.breakpoints.down("sm")]: {
      width: "260px",
  },
}));


export default function ModalCheckout({ name }) {

  const { modalCheckout, toggleModalCheckout, group } = useOpenModalCheckout()

  const [ infos, setInfos ] = useState("")

  // {group && console.log(group)}

  useEffect( () => {
    setInfos({
      groupsId: group.groupsId,
      userId: group.userId,
      id: group.id
    })
  },[])

  // console.log(infos)

  const schema = yup.object().shape({
    students: yup.string().required("Campo obrigatorio"),
    works: yup.string().required("Campo obrigatorio"),
    problems: yup.string().required("Campo obrigatorio")
  });
  
  const { register, handleSubmit,formState: { errors }, } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData) => {
    console.log(formData);

    // {
    //   "userId": 3, // -> usuário que está fazendo checkin
    //   "groupsId": 1, // -> qual grupo pertence
    //   "coachId": 1, // -> id de coach cadastrado no grupo
    //   "type": "checkout",
    //   "date": "16/05/2022",
    //   "hour": "15:00",
    //   "students": "Roberto",
    //   "works": "Grading",
    //   "problems": "Roberto continua com dificuldades"
    // }

    formData.userId = infos.userId  // usuario q ta fazendo checkin
    formData.groupsId = infos.groupsId // -> qual grupo pertence
    formData.coachId = infos.id
    formData.name = name
  

    api.post("/checkin", formData, {headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },})
      .then((res) => {
        console.log(res);
        toggleModalCheckout();
      })
      .catch((err) => {
        console.log(err);
    });
  };

  return(
    <Modal
      open={modalCheckout}
      onClose={toggleModalCheckout}
      sx={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}
    >

      <StyledBox onSubmit={handleSubmit(onSubmit)} component="form" >
        
        <IconButton
          onClick={toggleModalCheckout}
          sx={{ position: "absolute", top: 0, right: 0 }}
        >
          <CloseIcon sx={{ color: "text.primary" }} />
        </IconButton>

        <Typography variant="h4" mb="35px" color="text.primary">
          Check-out
        </Typography>

        <Stack spacing={2} alignItems="center">

          <TextField rows={2} multiline fullWidth label="Quais devs vocês atenderam?" {...register("students")} />

          <TextField rows={2} multiline fullWidth label="Quais foram as atividades realizadas?" {...register("works")} />

          <TextField fullWidth label="Existe alguma eventual pendência que precisa ser reportada?" {...register("problems")} />

          <Button type="submit" variant="contained">
            Enviar
          </Button>

        </Stack>

      </StyledBox>

    </Modal>
  )

}