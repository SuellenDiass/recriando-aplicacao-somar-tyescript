Instalando dependencias typeScript

1 Com o node.js instalado, abra o terminal do vscode  para criar um novo projeto; 

2 use o comando : npm init 
Este comando irá criar o arquivo package.json, que será útil para as configurações do  projeto e verificar as dependências que será utilizanda.

3 Com o comando:  npm install --save-dev typescript criar uma dependencia de desenvolvimento typescript na aplicação(pasta node-modules)

4 Com o comando:  npm install  lite-server ( uma biblioteca que vai procurar um index.html na raiz, apartir dele realizar testes),  no package.json inserir o comando "start": "lite-server".

5 Criar um arquivo index.html e chamar a função html:5 e a função script

6 Criar um arquivo app.js 
( se tiver erros de eslint verificar o arquivo.eslintrc.js se estiver vazio inserir nele os seguinte comando: module.exports = {  extends: [    'airbnb',    'eslint:recommended',    'plugin:import/errors',    'plugin:react/recommended',    'plugin:jsx-a11y/recommended',    'plugin:prettier/recommended',    'prettier/react',  ],  plugins: [    'react-hooks',  ],  rules: {  },};)

7 No arquivo app.js foi criado uma aplicação simples de exemplo com js de somar

8 Criando a mesma aplicação simples de exemplo com ts(app.ts) de somar, criar um arquivo validacao-basica.js.

9 Observação: tive que comentar o arquivo .js porque deu conflito

10 No arquivo app.ts ultilizar o comando tsc --init para inicializar um tsconfig.json dentro do arquivo de configuração tyscrip.

11 No arquivo app.ts inserir as funções e no package.js gerar um script chamado watch que será responsável pela compilação do typescript ("watch": "tsc --watch") comando no terminal será npm run watch

12 Após compilar, tudo que estava no arquivo app.js foi substituido pelo que estava no arquivo app.ts, 

13 o arquivo de validacao-basica.js manteve os dados.

14 O uso do typescrypt detecta erro durante a compilação que só seriam percebidos em execução.

15 Inserir um título  no projeto e mudei a cor de fundo do html; npm start roda o projeto

