import { Block, Badge, List, Heading } from "@components/atoms";
import { HEADINNG_LEVEL } from "@constants";

interface Item {
  url: string;
  veracity: 'real' | 'fake';
  confidence: number;
}

interface Props {
  items: Item[];
}

export const History: React.FC<Props> = ({ items }) => {
  return (
    <Block className="bg-white p-6 rounded-lg shadow-md">
      <Heading 
        level={HEADINNG_LEVEL.H2}
        className="text-xl font-semibold mb-4"
      >
        Histórico de Verificações
    </Heading>

      {items.length === 0 ? (
        <p className="text-gray-500">Nenhuma verificação realizada ainda.</p>
      ) : (
        <List className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <li key={index} className="py-4">
              <Block className="flex items-center justify-between">
                <Block className="flex items-center">
                  <Badge className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.veracity === 'real' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {item.veracity === 'real' ? 'Verdadeira' : 'Falsa'}
                  </Badge>
                  <Badge className="ml-2 text-sm text-gray-500 truncate max-w-xs">
                    {item.url}
                  </Badge>
                </Block>
                <Block className="ml-2 flex-shrink-0 flex">
                  <Badge className={`text-sm ${item.veracity === 'real' ? 'text-green-600' : 'text-red-600'}`}>
                    {Math.round(item.confidence * 100)}%
                  </Badge>
                </Block>
              </Block>
            </li>
          ))}
        </List>
      )}
    </Block>
  );
};
