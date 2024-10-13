import { ClientReviewBox } from "./styles";

interface IReview {
    label: string;
    image: string;
    name: string;
    email: string;
}

function ClientReview() {

    const ReviewObject: IReview[] = [
        {
            label: "Ótima experiência de aprendizado! Os professores são muito atenciosos e os conteúdos são atualizados.",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Ana Silva",
            email: "ana.silva@example.com"
        },
        {
            label: "Adorei o ambiente e a estrutura oferecida pela DreamSchool. Recomendo para todos!",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Carlos Pereira",
            email: "carlos.pereira@example.com"
        },
        {
            label: "Os cursos são bem organizados e os instrutores dominam o assunto. Muito bom!",
            image: "https://randomuser.me/api/portraits/women/25.jpg",
            name: "Mariana Souza",
            email: "mariana.souza@example.com"
        }
    ];


    const ReviewObjectTwo: IReview[] = [
        {
            label: "A DreamSchool me ajudou a alcançar meus objetivos profissionais. Ótimos cursos!",
            image: "https://randomuser.me/api/portraits/men/65.jpg",
            name: "Roberto Lima",
            email: "roberto.lima@example.com"
        },
        {
            label: "Gostei muito do método de ensino, bem didático e fácil de entender. Excelente!",
            image: "https://randomuser.me/api/portraits/women/12.jpg",
            name: "Patrícia Oliveira",
            email: "patricia.oliveira@example.com"
        },
        {
            label: "Cursos de alta qualidade e muito bem estruturados. Com certeza farei mais!",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            name: "Fernando Almeida",
            email: "fernando.almeida@example.com"
        }
    ];


    return (
        <ClientReviewBox>
            <h1>Avaliação de usuários <strong><span style={{ color: '#ee9b00' }}>dreamschool</span> </strong></h1>

            <div className="box-review">
                {
                    ReviewObject.map((Review: IReview) => {
                        return (
                            <div className="review">
                                <h2>{Review.label}</h2>
                                <div className="review-container">
                                    <div className="circle-image">
                                        <img src={Review.image} alt="" />
                                    </div>
                                    <div className="body-container-flex">
                                        <p>{Review.name}</p>
                                        <p>{Review.email}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="box-review">
            {
                    ReviewObjectTwo.map((Review: IReview) => {
                        return (
                            <div className="review">
                                <h2>{Review.label}</h2>
                                <div className="review-container">
                                    <div className="circle-image">
                                        <img src={Review.image} alt="" />
                                    </div>
                                    <div className="body-container-flex">
                                        <p>{Review.name}</p>
                                        <p>{Review.email}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </ClientReviewBox>
    )
}

export default ClientReview;