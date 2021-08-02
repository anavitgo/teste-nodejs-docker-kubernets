#FROM -> especifica a imagem básica para a criação de uma nova a partir deste Dockerfile
FROM node:12.18.1
#RUN -> roda os comandos especificados e no caso estou criando uma pasta chamada /app na raíz 
RUN mkdir /app
#COPY -> copia os arquivos para dentro de um diretório específico do container
COPY . /app/
#WORKDIR -> indica qual diretório dentro do container que os comandos especificados pelo RUN irão rodar
WORKDIR /app
#assim que meu container for criado, ele baixa as dependências do projeto NodeJs
RUN npm install
#ENTRYPOINT -> assim que o container subir, o comando especificado irá ser executado
ENTRYPOINT [ "npx", "nodemon", "src/server.js" ]