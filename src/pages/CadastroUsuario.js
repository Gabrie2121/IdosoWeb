import React, { useState } from "react";
import Header from "../components/Header";
import CadastroEndereco from "../components/User/CadastroEndereco";
import CadastroInfoBasica from "../components/User/CadastroInfoBasicas";
import CadastroLogin from "../components/User/CadastroLogin";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function UsuarioCadastro() {
  const [form, setForm] = useState(0);

  let formUser = 1;
  if (form === 0) {
    formUser = <CadastroLogin />;
  } else if (form === 1) {
    formUser = <CadastroInfoBasica />;
  } else {
    formUser = <CadastroEndereco />;
  }

  return (
    <div>
      <Header linkOne="/" linkTwo="/" linkThree="/" linkFour="/" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, p: 1, width: "25ch" } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {formUser}
          <Box
            sx={{ "& > :not(style)": { display: "inline-flex", m: 1, p: 1 } }}
          >
            <Button
              name="One"
              variant="contained"
              sx={{
                borderRadius: 100,
                borderWidth: 1,
                backgroundColor: "#5BB159",
              }}
              onClick={() => setForm(0)}
            >
              1
            </Button>
            <Button
              name="Two"
              variant="contained"
              sx={{
                borderRadius: 100,
                borderWidth: 1,
                backgroundColor: "#5BB159",
              }}
              onClick={() => setForm(1)}
            >
              2
            </Button>
            <Button
              name="Three"
              variant="contained"
              sx={{
                borderRadius: 100,
                borderWidth: 1,
                backgroundColor: "#5BB159",
              }}
              onClick={() => setForm(2)}
            >
              3
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default UsuarioCadastro;
