import { SectionMissionsBox } from "./styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React from "react";
import { Button } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, color: "white" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function SectionMissions() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SectionMissionsBox>
      <div className="box-mission orange">
        <div className="box-mission-body">
          <h1>Missão</h1>
          <h2>DreamSchool</h2>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              TabIndicatorProps={{ style: { backgroundColor: "white" } }}
              sx={{
                borderBottom: "2px solid dividier",
                ".MuiTab-root": {
                  color: "white",
                  fontSize: ".9rem",
                  fontWeight: "500",
                  "&.Mui-selected": {
                    color: "white",
                    borderBottom: "2px solid white",
                  },
                  "&:hover": {
                    color: "white",
                    opacity: 1,
                  },
                  "&:focus": {
                    color: "white",
                  },
                },
              }}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{
                  borderBottom: "2px white",
                  color: "white",
                  fontSize: ".9rem",
                  fontWeight: "500",
                }}
                label="Item One"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  borderBottom: "2px white",
                  color: "white",
                  fontSize: ".9rem",
                  fontWeight: "500",
                }}
                label="Item Two"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  borderBottom: "2px white",
                  color: "white",
                  fontSize: ".9rem",
                  fontWeight: "500",
                }}
                label="Item Three"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            rerum harum recusandae illo a alias vitae magni debitis! Id beatae
            mollitia maiores aspernatur autem cum aut pariatur error laboriosam
            ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit rerum harum recusandae illo a alias vitae magni debitis! Id
            beatae mollitia maiores aspernatur autem cum aut pariatur error
            laboriosam ullam!
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            laborum id nihil veritatis est voluptatibus. Doloremque,
            exercitationem placeat, optio similique quasi saepe deserunt quam
            rem quaerat aut, quo fugiat id! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Odio laborum id nihil veritatis est
            voluptatibus. Doloremque, exercitationem placeat, optio similique
            quasi saepe deserunt quam rem quaerat aut, quo fugiat id!
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            laborum id nihil veritatis est voluptatibus. Doloremque,
            exercitationem placeat, optio similique quasi saepe deserunt quam
            rem quaerat aut, quo fugiat id! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellat, dolorem itaque, labore sunt
            praesentium officia doloribus accusamus mollitia ratione ipsa
            laudantium, illum pariatur amet nesciunt voluptas repellendus.
            Quaerat, enim excepturi.
          </CustomTabPanel>
          <Button sx={{ width: '30%', height: '3rem', color: 'black', backgroundColor: 'white', border: 'none', boxShadow: 'none', margin: '2rem 0' }} variant="contained">Mais informações</Button>
        </div>
        <div className="box-mission-image">
          <img
            src="https://img.freepik.com/vetores-gratis/mao-atraido-de-volta-para-o-fundo-da-escola_23-2147849201.jpg?t=st=1728745432~exp=1728749032~hmac=befaea7de47c36e0d98b6c8b2449ed589efbafed2df0d479b82ffe4510aba278&w=826"
            alt=""
          />
        </div>
      </div>
      <div className="box-mission blue">
      <div className="box-mission-body">
          <h1>Missão</h1>
          <h2>DreamSchool</h2>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              TabIndicatorProps={{ style: { backgroundColor: "white" } }}
              sx={{
                borderBottom: "2px solid dividier",
                ".MuiTab-root": {
                  color: "white",
                  fontSize: ".9rem",
                  fontWeight: "500",
                  "&.Mui-selected": {
                    color: "white",
                    borderBottom: "2px solid white",
                  },
                  "&:hover": {
                    color: "white",
                    opacity: 1,
                  },
                  "&:focus": {
                    color: "white",
                  },
                },
              }}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{
                  borderBottom: "2px white",
                  color: "white",
                  fontSize: ".9rem",
                  fontWeight: "500",
                }}
                label="Item One"
                {...a11yProps(0)}
              />
              <Tab
                sx={{
                  borderBottom: "2px white",
                  color: "white",
                  fontSize: ".9rem",
                  fontWeight: "500",
                }}
                label="Item Two"
                {...a11yProps(1)}
              />
              <Tab
                sx={{
                  borderBottom: "2px white",
                  color: "white",
                  fontSize: ".9rem",
                  fontWeight: "500",
                }}
                label="Item Three"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            rerum harum recusandae illo a alias vitae magni debitis! Id beatae
            mollitia maiores aspernatur autem cum aut pariatur error laboriosam
            ullam! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Velit rerum harum recusandae illo a alias vitae magni debitis! Id
            beatae mollitia maiores aspernatur autem cum aut pariatur error
            laboriosam ullam!
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            laborum id nihil veritatis est voluptatibus. Doloremque,
            exercitationem placeat, optio similique quasi saepe deserunt quam
            rem quaerat aut, quo fugiat id! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Odio laborum id nihil veritatis est
            voluptatibus. Doloremque, exercitationem placeat, optio similique
            quasi saepe deserunt quam rem quaerat aut, quo fugiat id!
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            laborum id nihil veritatis est voluptatibus. Doloremque,
            exercitationem placeat, optio similique quasi saepe deserunt quam
            rem quaerat aut, quo fugiat id! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repellat, dolorem itaque, labore sunt
            praesentium officia doloribus accusamus mollitia ratione ipsa
            laudantium, illum pariatur amet nesciunt voluptas repellendus.
            Quaerat, enim excepturi.
          </CustomTabPanel>
          <Button sx={{ width: '30%', height: '3rem', color: 'black', backgroundColor: 'white', border: 'none', boxShadow: 'none', margin: '2rem 0' }} variant="contained">Mais informações</Button>

        </div>
        <div className="box-mission-image">
          <img
            src="https://img.freepik.com/vetores-gratis/feliz-mao-desenhado-estudantes-pular_23-2147912626.jpg?t=st=1728747799~exp=1728751399~hmac=ddd04cc67e05be4e436192c0abb04d0702aa6169dec4e2bbfca010fc832b460a&w=826"
            alt=""
          />
        </div>
      </div>
    </SectionMissionsBox>
  );
}

export default SectionMissions;
