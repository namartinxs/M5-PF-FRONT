🌍 Front-end Solidária de Doações
Plataforma web que conecta doadores a campanhas sociais de ONGs, projetos comunitários e organizações solidárias, proporcionando uma experiência de doação intuitiva e segura.

📂 Estrutura do Projeto
plaintext
Copiar
api-solidaria-frontend/
├── README.md               # Este arquivo
├── public/                 # Arquivos estáticos
│   ├── images/             # Imagens da plataforma
│   └── favicon.ico         # Ícone da aplicação
├── src/
│   ├── components/         # Componentes React reutilizáveis
│   │   ├── Carousel.jsx    # Componente de carrossel de campanhas
│   │   ├── Header.jsx      # Cabeçalho da aplicação
│   │   └── Footer.jsx      # Rodapé da aplicação
│   ├── pages/
│   │   ├── index.js        # Página principal (landing page)
│   │   ├── campanhas.js    # Página de lista de campanhas
│   │   └── sobre.js        # Página "Sobre" do projeto
│   ├── styles/
│   │   ├── globals.css     # Estilos globais
│   │   └── Home.module.css # Estilos específicos para a página principal
│   ├── App.js              # Componente raiz
│   └── index.js            # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts do projeto
└── next.config.js          # Configurações do Next.js
✨ Funcionalidades
Carrossel Interativo: Exibição dinâmica de campanhas com navegação suave.

Filtros Inteligentes: Filtros para facilitar a busca e o acompanhamento de campanhas.

Design Responsivo: Layout adaptável para dispositivos móveis e desktop.

🛠️ Tecnologias Utilizadas
Next.js: Framework React para desenvolvimento de aplicações web modernas.

Tailwind CSS: Framework CSS utilitário para design rápido e responsivo.

React Slick: Componente de carrossel para a apresentação das campanhas.

Axios: Biblioteca para consumo de APIs e integração com dados dinâmicos.

🚀 Como Executar o Projeto Localmente
Clone o repositório:

bash
Copiar
git clone https://github.com/seu-usuario/api-solidaria-frontend.git
Navegue até o diretório do projeto:

bash
Copiar
cd api-solidaria-frontend
Instale as dependências:

bash
Copiar
npm install
Execute o servidor de desenvolvimento:

bash
Copiar
npm run dev
Acesse o projeto em http://localhost:3000.

🌐 Deploy
A plataforma já está disponível para uso em produção:

https://api-solidaria.vercel.app