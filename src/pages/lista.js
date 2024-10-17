import {Accordion, Container} from 'react-bootstrap';
import Menu from './components/navbar';
import Footer from './components/footer';

export default function lista() {

    var noticias =  [
          {
            id: 1,
            titulo: "Corinthians Rebaixado",
            conteudo: "Em um jogo decisivo, o Corinthians foi rebaixado para a segunda divisão do Campeonato Brasileiro. A torcida lamenta a queda do time após uma temporada cheia de desafios e atuações abaixo do esperado."
          },
          {
            id: 2,
            titulo: "Flamengo Conquista o Título",
            conteudo: "O Flamengo garantiu o título do Campeonato Brasileiro após uma vitória convincente sobre o rival. A equipe celebrou o troféu com sua apaixonada torcida no Maracanã."
          },
          {
            id: 3,
            titulo: "Palmeiras Anuncia Novo Treinador",
            conteudo: "O Palmeiras anunciou a contratação de um novo treinador para a próxima temporada, em busca de renovar a equipe e conquistar novos títulos. A expectativa é alta entre os torcedores."
          }
        ]
      
      
  return (
    <> 

    <Menu />

    <Container>


    <Accordion>
        {noticias.map(noticia =>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{noticia.titulo}</Accordion.Header>
        <Accordion.Body> 
        {noticia.conteudo}
        </Accordion.Body>
      </Accordion.Item>
     )}
      
    </Accordion>

    </Container>
    <Footer />

    </>
  );
}

