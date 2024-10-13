import { Button } from "@mui/material";
import { PresentationBoxWrapper } from "./styles";

function Presentation() {
    return(
        <PresentationBoxWrapper>
            <div className="box">
                <div className="box-body">
                    <h1>Criando um futuro melhor</h1>
                    <h2>Descubra um mundo inteiro de possibilidades e novos aprendizados</h2>
                    <p>Dreamschool é uma plataforma de aprendizado online onde os alunos desenvolvem habilidades especiais, com os melhores e mais qualificados professores. </p>
                    <Button sx={{ width: '30%', height: '3rem', backgroundColor: '#ee9b00', margin: '2rem 0', boxShadow: 'none' }} variant="contained">Mais informações</Button>
                </div>
            </div>
            <div className="box">
                <img src="https://img.freepik.com/fotos-gratis/crianca-com-pintar-escova-e-livros-em-estudio_23-2147851805.jpg?t=st=1728740753~exp=1728744353~hmac=09b1d5cf44db0c77a2e4f4254d1b2dbf5f9098212e9913fa844c9db99523b355&w=826" alt="" />
            </div>
        </PresentationBoxWrapper>
    )
} 

export default Presentation;