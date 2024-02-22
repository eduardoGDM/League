"use client";

export default function PatchNotes() {
  const Champ = [
    {
      name: "Ahri",
      src: "ahri 1",
      att: "Tempo de Recarga do E reduzido.",
      anotacao:
        " Ahri ficou mais fraquinha na 14.1, então vamos dar uma mãozinha pra nossa querida raposa. Com menos acesso à Aceleração de Habilidade, o Tempo de Recarga do E pode ser mais baixo, dando para a Campeã tanto mais oportunidades ofensivas quanto uma ferramenta de fuga mais confiável contra seus piores inimigos, como Fizz ou Akali.",
      skill1: "ahri 2",
      skill1Titulo: "E – Encanto",
      skill1Descricao: "Tempo de Recarga: 14s ⇒ 12s",
    },
    {
      name: "Blitzcrank",
      src: "blitz",
      att: "Armadura base reduzida. Dano do E reduzido.",
      anotacao:
        "Blitzcrank se tornou um dos nossos suportes mais letais e, no geral, uma das figuras com melhor desempenho depois da 14.1. Dessa vez, reduziremos tanto o dano quanto a durabilidade do nosso robô, abrindo mais espaço para puni-lo por ser agressivo demais, além de exigir um pouco mais de dano para aproveitar bem os puxões.",
      skill1: "blitzskill",
      skill1Titulo: "E – Punho do Poder",
      skill1Descricao:
        "Dano: 200% do DdA total (+25% de PdH) ⇒ 180% do DdA total (+25% de PdH)",
    },
    {
      name: "Darius",
      src: "darius",
      att: "Custo de Mana do Q reduzido, cura com base na Vida perdida aumentada. Penetração de Armadura do passivo do E aumentada.",
      anotacao:
        " Com o Quebrapassos ficando mais fraco, Darius anda precisando de uma forcinha para causar medo nos oponentes. Trouxemos fortalecimentos para o dano (exceto ultimate) e para o escalamento de Vida, já que são dois dos pontos menos frustrantes do Campeão. O fortalecimento no custo de Mana servirá para aliviar a pressão do recurso na rota, principalmente em combates onde é necessário realizar trocas com o Q frequentemente. Assim, ele não conseguirá usar tanto o E (que tem o custo de Mana mais alto), já que queremos que ele pague um alto custo pela habilidade, mas não achamos que os usos do Q precisem ser limitados por isso.",
      skill1: "dariusQ",
      skill1Titulo: "Q – Dizimar",
      skill1Descricao:
        "Custo de Mana: 30/35/40/45/50 de Mana ⇒ 25/30/35/40/45 de Mana",
    },
  ];
  return (
    <div className="text-white pl-[5%] pt-[2%] bg-[#0a1016]">
      <h1 className=" font-bold">NOTAS DA ATUALIZAÇÃO 14.2</h1>

      <span>
        "As coisas estão esquentando na 14.2! Digam "oi" para o Smolder, galera!
      </span>
      <h2 className="font-bold text-3xl text-[#fad564] pt-[2%]">Campeões</h2>
      <div className="pt-[2%]">
        {Champ.map((champ, index) => (
          <div className="flex flex-col  rounded-tr-lg border border-y-gray-600 w-5/6 p-[3%]">
            <div className="flex">
              <img
                className="px-2 py-2  text-white"
                src={`/${champ.src}.png`}
              />
              <div className="flex flex-col pl-[1%]">
                <span className="font-bold text-3xl ">{champ.name}</span>
                <span>{champ.att}</span>
              </div>
            </div>
            <span className="pl-[3%]">"{champ.anotacao}"</span>
            <div className="flex pl-[3%]">
              <img
                className="px-2 py-2  text-white"
                src={`/${champ.skill1}.png`}
              />
              <span className="text text-2xl pt-[2%] pl-[1%]">
                {champ.skill1Titulo}
              </span>
            </div>
            <div>
              <li>{champ.skill1Descricao}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
