# Desafio Frontend Calindra

## Descrição do Projeto
Para este projeto, o objetivo era basicamente identificar qual API o site https://store.omelete.com.br utilizava para preencher o autocomplete do seu campo de busca. Com o endpoint em mãos, a próxima etapa seria tratar o retorno da API e montar uma view dos produtos retornados, de acordo com a query passada.

## Como utilizar
Ao acessar o site, alguns produtos são carregados automaticamente para dar um ar de ecommerce completo. O Usuário poderá digitar uma palavra-chave no campo de busca e clicar em Buscar. Fazendo isso, os produtos encontrados serão mostrados na tela após o loading.

## Tecnologias
+ Javascript
    + [React](https://reactjs.org/)
        + [Create-React-App](https://reactjs.org/docs/create-a-new-react-app.html)
+ CSS3
    + [Loading.io](https://loading.io/css/)
+ API
    + [Omelete Autocomplete API](https://store.omelete.com.br/autocomplete)
+ Bibliotecas
    + [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware/issues)
    + [axios](https://github.com/axios/axios)

## Executar o projeto
### Local
Para executar o projeto em modo de desenvolvimento, você deverá ter a última versão estável do [Node.js](https://nodejs.org/en/download/) instalado em sua máquina.

Clone o repositório digitando no seu terminal
```
git clone https://github.com/antoniotex/calindra-teste-frontend-omelete.git
```

Após terminar o download, acesse a pasta e instale as depêndencias
```
cd calindra-teste-frontend-omelete
npm install
```

Quando terminar de instalar as depêndencias, inicie o servidor de desenvolvimento
```
npm start
```
Acesse o endereço abaixo no seu navegador para visualizar
```
http://localhost:3000/
```


