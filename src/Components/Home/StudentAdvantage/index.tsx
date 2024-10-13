import { StudentAdvantageBox } from "./styles";
import { ReactElement } from 'react';
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';

interface IAdvantage {
    icon: ReactElement;
    title: string;
    label: string;
}

function StudentAdvantage() {

    const AdvantagesObject: IAdvantage[] = [
        {
            icon: <BadgeIcon sx={{ width: '1.7rem', height:'1.7rem', color: '#ee9b00' }} />,
            title: "Segurança",
            label: "A plataforma é segura e testada por profissionais"
        },
        {
            icon: <PeopleIcon sx={{ width: '1.7rem', height:'1.7rem', color: '#ee9b00' }}/>,
            title: "Networking",
            label: "Os alunos conhecem os melhores profissionais do ramo"
        },
        {
            icon: <InfoIcon sx={{ width: '1.7rem', height:'1.7rem', color: '#ee9b00' }}/>,
            title: "Segurança",
            label: "A plataforma é segura e testada por profissionais"
        },
        {
            icon: <ArticleIcon sx={{ width: '1.7rem', height:'1.7rem', color: '#ee9b00' }} />,
            title: "Curriculo",
            label: "A plataforma oferece diversos cursos aos alunos"
        }
    ] 


    return (
        <StudentAdvantageBox>
            <h1>Vantagens de estudar na <strong><span style={{ color: '#ee9b00' }}>dreamschool</span> </strong></h1>

            <div className="box-icons-advantage">
                {
                    AdvantagesObject.map((Advantages: IAdvantage) => {
                        return (
                            <div className="box-advantage">
                                <div className="circle-icon">
                                    {Advantages.icon}
                                </div>
                                <h1>{Advantages.title}</h1>
                                <p>{Advantages.label}</p>
                            </div>
                        )
                    })
                }
            </div>
        </StudentAdvantageBox>
    )
}

export default StudentAdvantage;