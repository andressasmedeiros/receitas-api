# 🍽️ Receitas API

API RESTful desenvolvida com **Node.js**, **Express** e **TypeORM**, para cadastro e gerenciamento de receitas culinárias.

---

## 🎯 Objetivo

Permitir operações CRUD em receitas de forma simples, organizando informações como nome, ingredientes e modo de preparo através de uma API.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/) (banco de dados)
- [TypeScript](https://www.typescriptlang.org/)
- [ts-node-dev](https://github.com/wclr/ts-node-dev) (para desenvolvimento)

---

## 📦 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/andressasmedeiros/receitas-api.git

# 2. Acesse o diretório
cd receitas-api

# 3. Instale as dependências
npm install
```

---

## ▶️ Como rodar

```bash
# Executar com ts-node-dev
npm run dev

# A API estará disponível em:
http://localhost:3000
```

---

## 🔄 Scripts disponíveis

```bash
npm run dev      # Inicia o servidor em modo desenvolvimento
npm run build    # Compila TypeScript
npm start        # Executa código compilado
```

---

## 📂 Estrutura do Projeto

```
src/
├── controllers/     # Lógica dos endpoints
├── database/
│   ├── data-source.ts  # Configuração TypeORM
│   └── migrations/     # Migrações do banco
├── entities/        # Entidades do TypeORM (ex: Receita)
├── routes/          # Arquivos de rota
└── index.ts         # Arquivo principal do app
```

---

## 📮 Endpoints principais

| Método | Rota           | Descrição                 |
|--------|----------------|---------------------------|
| GET    | /receitas      | Lista todas as receitas   |
| GET    | /receitas/:id  | Detalha uma receita       |
| POST   | /receitas      | Cria uma nova receita     |
| PUT    | /receitas/:id  | Atualiza uma receita      |
| DELETE | /receitas/:id  | Remove uma receita        |

---

## 🧪 Exemplo de corpo para POST

```json
{
  "nome": "Bolo de cenoura",
  "ingredientes": "cenoura, ovo, açúcar, farinha",
  "modoPreparo": "Misture tudo e asse por 40 minutos"
}
```

---

## 📌 To-do / Melhorias futuras

- ✅ Validação de entrada com `class-validator`
- ✅ Estrutura modular de pastas
- 🔒 Autenticação e autorização
- 📄 Documentação com Swagger
- ☁️ Deploy no Railway, Vercel ou Render

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: minha nova feature'`)
4. Push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

---

## 👩‍💻 Autora

**Andressa S. Medeiros** – [GitHub](https://github.com/andressasmedeiros)
