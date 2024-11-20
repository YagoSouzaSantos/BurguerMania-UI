# Burguer Mania

Este é um projeto Angular desenvolvido para Restic36 como parte da avaliação da Unidade 09 da trilha de Fullstack.

## Pré-requisitos

Verifique se você possui os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (Recomendada a versão v20.11.1 ou superior)
- [Angular CLI](https://angular.io/cli) (se ainda não tiver, você pode instalá-lo globalmente com o comando `npm install -g @angular/cli`)

O projeto foi desenvolvido na versão do Angular 18.2.4

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/YagoSouzaSantos/BurguerMania-UI.git
   cd BurguerMania-UI
   ```

2. **Instale o Angular CLI caso não tenha**:

   Execute o seguinte comando:

   ```bash
   npm install -g @angular/cli
   ```
   
2. **Instale as dependências**:

   Execute o seguinte comando para instalar todas as dependências necessárias do projeto:

   ```bash
   npm install
   ```

3. **Instale o Angular Material**:

   Para instalar o Angular Material, execute o comando:

   ```bash
   ng add @angular/material
   ```

   Caso o material altere o arquivo styles.scss descarte as alterações pois isso pode impedir a execução do projeto

4. **Instale o JSON Server**:

   Se você ainda não instalou o JSON Server, você pode instalá-lo globalmente com o comando:

   ```bash
   npm install -g json-server
   ```

## Executando o Projeto

Para iniciar o servidor de desenvolvimento e executar o projeto, use o comando:

```bash
ng serve
```

O aplicativo estará disponível em [http://localhost:4200](http://localhost:4200).

## Executando o JSON Server

Para iniciar o JSON Server e simular a API, use o seguinte comando:

```bash
json-server --watch public/db.json
```

Isso fará com que o JSON Server escute as alterações no arquivo `db.json` e disponibilize os dados em [http://localhost:3000](http://localhost:3000).
No projeto, o banco de dados está na em public/db.json

## Tecnologias utilizadas
- Angular versão 18.2.13
- Angular Material
- Json Server

## Melhorias futuras
- Desenvolver o projeto BurguerMania-API para integrar com o projeto atual, fornecendo os endpoints reais para o funcionamento completo do site.
- Aplicação de validações e outras tipos de tratativas para os formulários e comunicação do site.
