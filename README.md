# Site Corporativo Next.js

Um site corporativo moderno e responsivo construído com Next.js 15, TypeScript e SASS. Este projeto apresenta uma estrutura modular com componentes reutilizáveis e integração com CosmicJS CMS, ideal para empresas que desejam uma presença digital profissional e dinâmica.

## 🚀 Tecnologias Utilizadas

- **Next.js 15.4.6** - Framework React com App Router
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Tipagem estática para JavaScript
- **SASS** - Pré-processador CSS para estilos avançados
- **React Icons** - Biblioteca de ícones para React

## 📁 Estrutura do Projeto

```
landingpage-nextjs/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── components/
│   │   ├── container/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.scss
│   │   ├── header/
│   │   │   ├── index.tsx
│   │   │   └── styles.module.scss
│   │   └── home/
│   │       ├── about/
│   │       │   ├── index.tsx
│   │       │   └── styles.module.scss
│   │       ├── banner/
│   │       │   ├── index.tsx
│   │       │   └── styles.module.scss
│   │       ├── contact/
│   │       │   ├── index.tsx
│   │       │   └── styles.module.scss
│   │       ├── projects/
│   │       │   ├── index.tsx
│   │       │   └── styles.module.scss
│   │       └── services/
│   │           ├── index.tsx
│   │           └── styles.module.scss
│   └── utils/
│       └── home.type.ts
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Funcionalidades Implementadas

### Componentes Principais

1. **Header** - Navegação principal com logo e menu
2. **Banner** - Seção hero com título, subtítulo e call-to-action
3. **About** - Seção sobre a empresa com missão, visão e valores
4. **Services** - Lista de serviços oferecidos
5. **Projects** - Portfólio de projetos realizados
6. **Contact** - Informações de contato da empresa
7. **Container** - Componente wrapper para layout responsivo

### Configurações Especiais

- **Next.js Image Optimization** - Configurado para carregar imagens do CosmicJS CDN
- **TypeScript** - Tipagem completa para todos os componentes
- **SASS Modules** - Estilos modulares com escopo local
- **Responsive Design** - Layout adaptável para diferentes dispositivos

## 🛠️ Como Executar

### Pré-requisitos

- Node.js 18+
- npm, yarn, pnpm ou bun

### Instalação

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITORIO]
cd landingpage-nextjs
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter para verificar código

## 🔧 Configurações

### Next.js Config (next.config.ts)

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.cosmicjs.com",
      },
    ],
  },
};
```

Esta configuração permite que o Next.js carregue imagens otimizadas do CosmicJS CDN.

### TypeScript

O projeto utiliza TypeScript com configurações estritas para garantir qualidade de código e melhor experiência de desenvolvimento.

## 🎨 Estilos

- **SASS Modules** - Cada componente possui seu próprio arquivo de estilos
- **Design Responsivo** - Adaptável para desktop, tablet e mobile
- **Componentes Modulares** - Estilos isolados por componente

## 📊 Tipos TypeScript

O arquivo `src/utils/home.type.ts` define as interfaces principais:

- `HomeProps` - Interface principal para dados da página
- `ServiceTypeProps` - Interface para tipos de serviços
- `ProjectProps` - Interface para projetos do portfólio

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através dos canais disponíveis no projeto.

---

Desenvolvido com ❤️ usando Next.js e TypeScript
