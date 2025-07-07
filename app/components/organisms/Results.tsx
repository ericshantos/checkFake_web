import { HEADINNG_LEVEL, LIST_TYPE } from "@constants";
import { Block, Badge, Heading, List } from "@components/atoms";
import { CheckResult } from "@types";

interface Props {
  data: CheckResult;
}

export const Results: React.FC<Props> = ({ data }) => {
  const confidencePercentage = Math.round(data.confidence * 100);
  const isReal = data.veracity === 'real';

  return (
    <Block className="bg-white p-6 rounded-lg shadow-md">
      <Heading 
        level={HEADINNG_LEVEL.H2} 
        className="text-xl font-semibold mb-4"
      >
        Resultado da Análise
      </Heading>
      
      <Block className="mb-6">
        <Block className="flex justify-between mb-1">
          <Badge className="text-sm font-medium text-gray-700">Confiança</Badge>
          <Badge className="text-sm font-medium text-gray-700">{confidencePercentage}%</Badge>
        </Block>
        <Block className="w-full bg-gray-200 rounded-full h-2.5">
          <Block
            className={`h-2.5 rounded-full ${isReal ? 'bg-green-500' : 'bg-red-500'}`}
            style={{ width: `${confidencePercentage}%` }}
          />
        </Block>
      </Block>

      <Block className={`p-4 rounded-md ${isReal ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
        <Block className="flex items-center">
          <Block className={`flex-shrink-0 h-5 w-5 ${isReal ? 'text-green-500' : 'text-red-500'}`}>
            {isReal ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            )}
          </Block>
          <Block className="ml-3">
            <Heading level={HEADINNG_LEVEL.H3} className="text-lg font-medium">
              {isReal ? 'Notícia Provavelmente Verdadeira' : 'Notícia Provavelmente Falsa'}
            </Heading>
            <p className="mt-1 text-sm">
              {isReal 
                ? 'Nossa análise indica que esta notícia é confiável.'
                : 'Cuidado! Esta notícia pode conter informações falsas ou enganosas.'}
            </p>
          </Block>
        </Block>
      </Block>

      <Block className="mt-6 border-t border-gray-200 pt-4">
        <Heading 
          level={HEADINNG_LEVEL.H3} 
          className="text-sm font-medium text-gray-700"
        >
          Detalhes Técnicos
        </Heading>
        <List 
          as={LIST_TYPE.DL} 
          className="mt-2 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2"
        >
          <Block>
            <dt className="text-sm text-gray-500">Limiar de Confiança</dt>
            <dd className="mt-1 text-sm text-gray-900">{data.threshold * 100}%</dd>
          </Block>
          <Block>
            <dt className="text-sm text-gray-500">Data da Análise</dt>
            <dd className="mt-1 text-sm text-gray-900">{new Date(data.extracted_at).toLocaleString()}</dd>
          </Block>
        </List>
      </Block>
    </Block>
  );
};