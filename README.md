# Doutor Agenda

Um sistema simples e moderno para gerenciamento de agendas médicas.

## Funcionalidades

- Cadastro de médicos e pacientes
- Agendamento de consultas
- Visualização de horários disponíveis
- Gestão de clínicas e usuários
- Autenticação segura
- Interface responsiva e intuitiva

## Tecnologias Utilizadas

- **Next.js** — Framework React para aplicações web modernas
- **React** — Biblioteca para construção de interfaces de usuário
- **TypeScript** — Tipagem estática para maior segurança e produtividade
- **Drizzle ORM** — ORM para integração com bancos de dados SQL
- **PostgreSQL** — Banco de dados relacional robusto
- **Zod** — Validação de esquemas e dados
- **React Hook Form** — Gerenciamento de formulários em React
- **Radix UI** — Componentes acessíveis e estilizados para React
- **Shadcn/ui** — Componentes de interface modernos e customizáveis
- **Day.js** — Manipulação e formatação de datas
- **Sonner** — Notificações toast para feedback ao usuário
- **ESLint & Prettier** — Padronização e qualidade de código

## Como usar

1. **Clone o repositório**

   ```bash
   git clone https://github.com/matheus-stein-nassr/doutor-agenda.git
   cd doutor-agenda
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**

   - Crie um arquivo `.env.local` com as configurações necessárias, por exemplo:
     ```
     DATABASE_URL=postgres://user:password@localhost:5432/mydb
     ```

4. **Execute as migrações do banco de dados**

   ```bash
   npx drizzle-kit push
   ```

5. **Inicie o projeto**

   ```bash
   npm run dev
   ```

6. **Acesse no navegador**
   - [http://localhost:3000](http://localhost:3000)

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

Feito por Matheus Stein Nassr 💙
