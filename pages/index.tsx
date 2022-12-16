import Head from "next/head";
import { useState } from "react";
import { Dropdown } from "../src/components/Dropdown";
import { SuggestionsList } from "../src/components/SuggestionsList";
import { useSuggestions } from "../src/hooks/useSuggestions";
import { useThemes } from "../src/hooks/useThemes";

export default function Home() {
  const [themeID, setThemeID] = useState<number>();
  const { themes, loading: isThemeLoading } = useThemes();
  const { suggestions, loading: isSuggestionsLoading } = useSuggestions({
    themeID,
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Competidaily Generator - InstructGPT</title>
      </Head>
      <section className="items-center bg-black text-center font-primary text-white">
        <main className="flex h-screen max-h-full flex-1 flex-col bg-gradient-to-br from-primary/100 to-primary/5">
          <h1 className="h-72 w-full pt-44 text-6xl font-bold">
            Competidaily Generator InstructGPT
          </h1>
          <h4 className="w-full pb-24 text-xl font-normal">
            Nunca mais pense em uma competidaily
          </h4>
          <div>
            {!isThemeLoading && (
              <Dropdown
                data={themes}
                onChange={(e) => setThemeID(Number(e.target.value))}
              />
            )}
          </div>
          {!isSuggestionsLoading && (
            <SuggestionsList suggestions={suggestions} themes={themes} />
          )}
          <section className="flex flex-row justify-around pt-44">
            <div className="max-w-[420px]">
              <h2 className="pb-16 text-4xl font-bold">
                O que é uma competidaily?
              </h2>
              <p>
                Uma competidaily é um evento de descontração que ocorre em
                reuniões diarias dentro de um time, a ideia é gerar uma
                competidaily aleatória, para que o time possa se divertir e
                conhecer melhor seus colegas de trabalho.
              </p>
            </div>
            <div className="max-w-[420px]">
              <h2 className="pb-16 text-4xl font-bold">
                O que é o InstructGPT?
              </h2>
              <p>
                O InstructGPT é um modelo de linguagem natural treinado com base
                no modelo GPT-3 da OpenAI, ele foi treinado para gerar
                instruções de tarefas aleatórias. Porém com um aprendizado
                reforçado com feedback humano para resultados mais corretos.
              </p>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}
