'use client';

import { CheckNews } from "@components/organisms/CheckNews";
import { Header } from "@components/organisms/Header";
import { Footer } from "@components/organisms/Footer";
import { Results } from "@components/organisms/Results";
import { History } from "@components/organisms/History";
import { Info } from "@components/organisms/Info";
import { Credits } from "@components/organisms/Credits";

import { useCheckFlow } from "@hooks";
import { TabButton, Block } from "@components/atoms";

type TabKey = "check" | "history" | "info" | "credits";

export const App = () => {
    const {
    activeTab,
    setActiveTab,
    results,
    history,
    handleResults
    } = useCheckFlow();

    const itemApp: {item: TabKey, content: string}[] = [
        {
            item: "check",
            content: "Verificar"
        }, {
            item: "history",
            content: "Histórico"
        }, {
            item: "info",
            content: "Informações"
        }, {
            item: "credits",
            content: "Créditos"
        }
    ];

  return (
    <Block className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-4 flex-1">
        <Block className="flex mb-6 border-b overflow-x-auto">
          {itemApp.map(({ item, content }, index) => (
            <TabButton 
              key={index}
              active={activeTab === item} 
              onClick={() => setActiveTab(item)}
              className="whitespace-nowrap px-3 py-2 text-sm"
            >
              {content}
            </TabButton>
          ))}
        </Block>

        {activeTab === 'check' && (
          <Block className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            <CheckNews onResults={handleResults} />
            {results && <Results data={results} />}
          </Block>
        )}
        
        {activeTab === 'history' && (
          <Block className="overflow-x-auto">
            <History items={history} />
          </Block>
        )}
        
        {activeTab === 'info' && <Info />}
        {activeTab === 'credits' && <Credits />}
      </main>
      
      <Footer />
    </Block>
  )
};
