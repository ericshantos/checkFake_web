# FakeCheck Web

*Um serviço simples e direto para identificar fake news online*

## 📌 Visão Geral

O FakeCheck Web é uma aplicação front-end desenvolvida para consumir a API fakeCheck_API, proporcionando uma interface amigável para verificação de notícias suspeitas. A plataforma analisa URLs de notícias e retorna uma avaliação sobre sua veracidade, classificando como "Verdadeira" ou "Falsa" com um indicador de confiança.

**Link da API**: [fakeCheck_API no GitHub](https://github.com/ericshantos/fakeCheck_API)

## ✨ Funcionalidades Principais

- **Verificação de Notícias**: Insira a URL de uma notícia e receba uma análise instantânea
- **Histórico de Verificações**: Acompanhe todas as análises realizadas durante a sessão
- **Informações Técnicas**: Visualize detalhes sobre o modelo de IA utilizado
- **Sistema de Créditos**: Conheça os desenvolvedores e tecnologias envolvidas
- **Interface Responsiva**: Totalmente adaptável para desktop e dispositivos móveis

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js** (v15) - Framework React para renderização híbrida
- **React** (v19) - Biblioteca principal para construção de UI
- **TypeScript** - Adiciona tipagem estática ao JavaScript
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Axios** - Cliente HTTP para consumo da API

### Ferramentas de Desenvolvimento
- **ESLint** - Padronização de código
- **Prettier** - Formatação automática
- **Git** - Controle de versão

## 🏗️ Arquitetura do Projeto

O projeto segue uma estrutura atômica organizada em:

```
app/
├── components/
│   ├── atoms/          # Componentes básicos (Botões, Textos, etc.)
│   ├── molecules/      # Componentes compostos (Formulários, Cards)
│   ├── organisms/      # Componentes complexos (Seções completas)
│   └── templates/      # Layouts de página
├── constants/          # Constantes e tipos globais
├── hooks/              # Hooks customizados
├── types/              # Tipos TypeScript
└── page.tsx            # Página principal
```

### Principais Componentes

1. **CheckNews**: Formulário de verificação de notícias
2. **Results**: Exibição dos resultados da análise
3. **History**: Listagem do histórico de verificações
4. **Info**: Detalhes técnicos sobre o modelo
5. **Credits**: Informações sobre o projeto e desenvolvedores

## 🔌 Integração com a API

O frontend consome os seguintes endpoints da fakeCheck_API:

- `POST /check`: Envia URL para verificação
- `GET /info`: Obtém informações técnicas do modelo
- `GET /credits`: Recupera dados sobre o projeto

Variáveis de ambiente necessárias:

```env
NEXT_PUBLIC_ENDPOINT_CHECK=https://api.fakecheck.com/check
NEXT_PUBLIC_ENDPOINT_INFO=https://api.fakecheck.com/info
NEXT_PUBLIC_ENDPOINT_CREDITS=https://api.fakecheck.com/credits
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn
- Acesso à API fakeCheck (em execução)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/fakeCheck-web.git
   cd fakeCheck-web
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env.local
   # Edite o .env.local com suas configurações
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📧 Contato

Para mais informações, entre em contato com:

- **Eric Santos** - [GitHub](https://github.com/ericshantos)  
- **Email**: ericshantos13@gmail.com

---

Desenvolvido com ❤️ por Eric Santos