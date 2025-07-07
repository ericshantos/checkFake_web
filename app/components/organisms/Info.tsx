import { Block, Heading } from "@components/atoms";
import { InfoBlock } from "@components/molecules";
import { HEADINNG_LEVEL } from "@constants";
import { useFetch } from "@hooks";
import { InfoItem } from "@types";

interface InfoProps {
  api_version: string;
  model_version: string;
  framework: string[];
  model_architecture: string;
}

export const Info = () => {
    const { data, loading, error } = useFetch<InfoProps>(
        process.env.NEXT_PUBLIC_ENDPOINT_INFO as string
    );

    const info: InfoItem[] = [
    {
        title: "Versões",
        items: [
        { caption: "Versão da API", description: data?.api_version || 'N/A' },
        { caption: "Versão do Modelo", description: data?.model_version || 'N/A' }
        ]
    },
    {
        title: "Tecnologias",
        items: [
        { caption: "Frameworks", description: data?.framework?.join(', ') || 'N/A' },
        { caption: "Arquitetura", description: data?.model_architecture || 'N/A' }
        ]
    }
    ];

    if (loading) return <div className="text-center py-8">Carregando...</div>;
    if (error) return <div className="text-center py-8 text-red-600">{error}</div>;

    return (
        <Block className="bg-white p-6 rounded-lg shadow-md">
            <Heading level={HEADINNG_LEVEL.H2}>Informações do modelo</Heading>

            <Block className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {info.map(({ title, items }, index) => (
                    <InfoBlock key={index} title={title} items={items} />
                ))}
            </Block>
        </Block>
    )
}