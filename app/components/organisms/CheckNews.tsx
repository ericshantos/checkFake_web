import { Badge, Block, Heading } from "@components/atoms";
import { LabeledInput } from "@components/molecules";
import { HEADINNG_LEVEL } from "@constants";
import { useFakeCheck } from "@hooks";

interface Props {
    onResults: (result: any) => void;
}

export const CheckNews: React.FC<Props> = ({ onResults }) => {
  const {
    url,
    setUrl,
    loading,
    error,
    handleSubmit
  } = useFakeCheck(onResults);

  return (
    <Block className="bg-white p-6 rounded-lg shadow-md">
      <Heading 
      level={HEADINNG_LEVEL.H2}
        className="text-xl font-semibold mb-4"
      >
        Verificar Notícia
      </Heading>
      <form onSubmit={handleSubmit}>
        <LabeledInput
          id="url"
          label="URL da Notícia"
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://exemplo.com/noticia"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? (
            <Badge className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Verificando...
            </Badge>
          ) : 'Verificar'}
        </button>
        {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      </form>
    </Block>
  );
};