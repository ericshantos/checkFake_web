'use client';

import { CheckNews } from "@components/organisms/CheckNews";
import { Header } from "@components/organisms/Header";
import { Footer } from "@components/organisms/Footer";
import { Results } from "@components/organisms/Results";
import { History } from "@components/organisms/History";
import { Info } from "@components/organisms/Info";
import { Credits } from "@components/organisms/Credits";

import { useCheckFlow } from "@hooks";
import { TabButton } from "@components/atoms";

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
            content: "Verificar Notícia"
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex mb-6 border-b">
            {itemApp.map(({ item, content }, index) => (
                <TabButton 
                    key={index}
                    active={activeTab === item} 
                    onClick={() => setActiveTab(item)} 
                >
                    {content}
                </TabButton>
))}

        </div>

        {activeTab === 'check' && (
          <div className="grid md:grid-cols-2 gap-8">
            <CheckNews onResults={handleResults} />
            {results && <Results data={results} />}
          </div>
        )}
        
        {activeTab === 'history' && <History items={history} />}
        {activeTab === 'info' && <Info />}
        {activeTab === 'credits' && <Credits />}
      </main>
      
      <Footer />
    </div>
  );
}