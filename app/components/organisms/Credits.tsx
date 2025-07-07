import { Block, Heading, Badge } from "@components/atoms";
import { CreditsItem } from "@components/molecules";
import { HEADINNG_LEVEL } from "@constants";
import { useFetch } from "@hooks";

interface CreditsProps {
  name: string;
  description: string;
  author: string;
  contact: string;
  license: string;
  technologies: string[];
}

interface CreditsItem  {
    title: string;
    content: string;
}

export const Credits = () => {
    const { data, loading, error } = useFetch<CreditsProps>(
        process.env.NEXT_PUBLIC_ENDPOINT_CREDITS as string
    );

    const credits: CreditsItem[] = [
        { 
            title: data?.name || 'FakeCheck', 
            content: data?.description || 'API de verificação de notícias falsas' 
        }, { 
            title: 'Autor',
            content: data?.author || 'Eric Santos' 
        }, {
            title: 'Contato',
            content: data?.contact || process.env.NEXT_PUBLIC_CONTACT as string
        }, {
            title: 'Licença',
            content: data?.license || 'MIT'
        }
    ]

    if (loading) return <div className="text-center py-8">Carregando...</div>;
    if (error) return <div className="text-center py-8 text-red-600">{error}</div>;

    return (
        <Block className="bg-white p-6 rounded-lg shadow-md">
            <Heading 
                level={HEADINNG_LEVEL.H2} 
                className="text-xl font-semibold mb-4"
            >
                Créditos do projeto
            </Heading>

            <Block className="space-y-4">
                {credits.map(({ title, content }, index) => (
                    <CreditsItem key={index} title={title}>
                        {content}
                    </CreditsItem>
                ))}

                {data?.technologies && (
                    <CreditsItem 
                        title="Tecnologias" 
                        className="mt-2 flex flex-wrap gap-2"
                    >
                        {data.technologies.map((tech, index) => (
                            <Badge key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {tech}
                            </Badge>
                        ))}
                    </CreditsItem>
                    )}
            </Block>
        </Block>
    )
}