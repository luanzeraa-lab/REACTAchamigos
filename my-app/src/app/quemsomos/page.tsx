
    "use client";
 
import Image from "next/image";
import { Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";
 
const QuemSomos = () => {
  return (
    <>
 
      <Container fluid className="bg-[#ffeccf]">
        <Nav2/>
 
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 my-4">
            <div className="flex flex-col items-center font-medium">
              <Image
                className="border-1 border-gray-300 shadow-sm rounded"
                id="fotoalunos1"
                src="/images/daniel.png"
                alt="Daniel José Bernardes Filho"
                width={150}
                height={100}
              />
              <p className="mt-2 text-center">Daniel José Bernardes Filho</p>
            </div>
            <div className="flex flex-col items-center font-medium">
              <Image
                className="border-1 border-gray-300 shadow-sm rounded"
                id="fotoalunos2"
                src="/images/luan.png"
                alt="Luan Silva de Picoli"
                width={150}
                height={100}
              />
              <p className="mt-2 text-center">Luan Silva de Picoli</p>
            </div>
          </div>
 
          <div className="flex flex-wrap justify-center gap-8 my-4">
            <div className="flex flex-col items-center font-medium">
              <Image
                className="border-1 border-gray-300 shadow-sm rounded"
                id="fotoalunos3"
                src="/images/lucas.png"
                alt="Lucas Pires de Almeida"
                width={150}
                height={100}
              />
              <p className="mt-2 text-center">Lucas Pires de Almeida</p>
            </div>
            <div className="flex flex-col items-center font-medium">
              <Image
                className="border-1 rounded shadow-sm border-gray-300"
                id="fotoalunos4"
                src="/images/gussi.png"
                alt="Miguel dos Santos Gussi"
                width={150}
                height={100}
              />
              <p className="mt-2 text-center">Miguel dos Santos Gussi</p>
            </div>
          </div>
 
          <div className="flex justify-center my-4">
            <div className="flex flex-col items-center font-medium">
              <Image
                className="border-1 border-gray-300 shadow-sm rounded"
                id="fotoalunos5"
                src="/images/pa.png"
                alt="Pedro Arthur de Oliveira"
                width={150}
                height={100}
              />
              <p className="mt-2 text-center">Pedro Arthur de Oliveira</p>
            </div>
          </div>
        </div>
 
        <div
          id="informacoes"
          className="border border-black rounded bg-white px-5 py-10] "
        >
          <div id="paragrafo_info">
            <h2>Principais objetivos do site</h2>
            <p>
              Conectar pessoas e instituições com o mesmo objetivo: conectar um
              animal de estimação a uma família.
            </p>
            <p>
              Exibir perfis de animais de estimação com descrição, fotos,
              detalhes e muito mais.
            </p>
            <p>
              Informar sobre cuidados, processos de adoção, eventos e benefícios
              da adoção responsável.
            </p>
            <p>
              O site visa resolver a dificuldade que pessoas têm em encontrar
              animais para adoção e a falta de visibilidade que abrigos
              enfrentam para promover seus animais, reduzindo assim o número de
              pets abandonados e ajudando a encontrar lares adequados.
            </p>
            <p>
              A ideia surgiu ao perceber que muitos animais em abrigos não são
              vistos por potenciais adotantes. Relatos de dificuldades em adotar
              e conversas com voluntários mostraram a necessidade de uma
              plataforma online que conectasse pessoas a esses animais,
              facilitando a adoção e promovendo a responsabilidade.
            </p>
          </div>
        </div>

        <Footer/>
      </Container>
 
    
    </>
  );
};
 
export default QuemSomos;
 