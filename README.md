# Simple GraphQl Tutorial for Padawans (with tests!)

Currently, I'm working with GraphQl to much. So, I would like to pass my knowlodges about that to other people.
Graphql is a minimalist and wonderfull query language.

# GraphQl Tutorial para Padawans (com testes!)
Ultimamente, tenho trabalhado bastante com GraphQl. Com isso, eu gostaria de transmitir um pouco do meu conhecimento para outras pessoas.
Graphql é uma linguagem de consulta ("query language") simples e maravilhosa.

May the force be with you.

# Install dependecies
```
npm install
```
# Run
```
npm run dev
```
# Run Test
```
npm test
```

## Entendendo o Básico de GraphQl
Começaremos a entender primeiro o schema do Graphql. Ele é dividido em querys e mutates (Podemos interpretá-los no sentido literal). Com isso, faremos uma função simples que consulta os Humanos que tem no filme.
Na pasta ```schema/schemas.graphql``` teremos toda a tipagem, querys e mutates do Graphql. Eu gosto, como boa prática, ter um arquivo principal chamado ```schemas.graphql``` que chama todos os subarquivos.
### 1 Criando o primeiro Schema
Para toda consulta, criaremos dentro do tipo Query.
```
type Query {
  getHumans: [human]
}
```
"getHumans" é nossa função que irá retornar um array de objetos "human". Com isso, vamos criar o type "human". O nome da função precisa ser igual ao nome que irá aparecer no Javascript. Mais à frente vou mostrar.
```
type human {
  id: String,
  name: String,
  friends: [human],
  appearsIn: [String],
  homePlanet: String,
  height: Float,
  mass: Int,
  starships: [ships]
}
```
O GraphQl ele entende uma recursão. Então, eu posso ficar infinitamente chamando "human" na chave friends.
O id ele pode ser tanto do tipo Int, String quanto do tipo ID. Vai do seu projeto essa definição.
Agora vamos criar o tipo ships.
```
type ships {
  id: String,
  name: String,
  length: Float
}
```

### 2 Integrando ao Javascript
No ```app.js``` começaremos integrando nossas funções da seguinte forma:
```
const resolvers = {
  getHumans: queries.getHumans
}
```
Onde, queries.getHumans é uma função que estou importando de ```queries/queries.js```. O "getHumans" é o cara que anteriormente citei no tópico 1.


My socials networks:
```
@buzzlightila
```
