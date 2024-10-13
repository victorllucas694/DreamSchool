import { Button } from "@mui/material";
import { SectionServicesBoxWrapper } from "./styles";

function SectionServices() {
  return (
    <SectionServicesBoxWrapper>
      <div className="box-layer">
        <div className="box-image">
          <img
            src="https://img.freepik.com/fotos-gratis/vista-frontal-amigos-mais-cinco_23-2148342044.jpg?t=st=1728743025~exp=1728746625~hmac=84442accebb306df12084c52a298adc261d5be0f530c20932201bec6c2dcf8b7&w=826"
            alt=""
          />
        </div>
        <div className="box-body">
          <h1>Nossos serviços</h1>
          <h2>Colaboradores certificados no mercado de trabalho</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            atque vitae dolore a quod quasi repellat eligendi omnis eum maiores
            nemo facere deserunt reprehenderit, facilis aperiam debitis tempore
            exercitationem culpa.
          </p>
          <Button
            sx={{
              width: "30%",
              height: "3rem",
              backgroundColor: "#ee9b00",
              margin: "2rem 0",
              boxShadow: "none",
            }}
            variant="contained"
          >
            Mais informações
          </Button>
        </div>
      </div>
      <div className="box-layer">
        <div className="box-body">
          <h1>Nossos alunos</h1>
          <h2>Alunos com aprendizado de excelencia e qualidade</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            atque vitae dolore a quod quasi repellat eligendi omnis eum maiores
            nemo facere deserunt reprehenderit, facilis aperiam debitis tempore
            exercitationem culpa.
          </p>
          <Button
            sx={{
              width: "30%",
              height: "3rem",
              backgroundColor: "#ee9b00",
              margin: "2rem 0",
              boxShadow: "none",
            }}
            variant="contained"
          >
            Mais informações
          </Button>
        </div>
        <div className="box-image">
          <img
            src="https://img.freepik.com/fotos-gratis/criancas-de-copia-espaco-segurando-livros-acima-da-cabeca_23-2148445744.jpg?t=st=1728743949~exp=1728747549~hmac=6b1ebb0fdb95b6cf93dcbcce161d9ad52a15b517dc033080908e0e2b7a70839f&w=826"
            alt=""
          />
        </div>
      </div>
    </SectionServicesBoxWrapper>
  );
}

export default SectionServices;
