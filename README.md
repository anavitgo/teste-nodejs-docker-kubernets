# Teste para a aplicação de conhecimentos em Docker e Kubernets

## Estrutura do projeto:

### Dockerfile:

Utilizado para construir uma nova imagem a partir da ```node:12.8.1```, sendo capaz de copiar os arquivos do projeto de uma API REST para dentro do container e trabalhar com o ambiente de ```DEV``` assim que o container está rodando.

### Makefile:

Utilizado para ```buildar``` e dar ```run``` no container assim que a imagem é criada. Facilita pelos comandos serem extensos.

### Package.json

Contém as dependênciasdo projeto em NodeJS. Na parte ```dependencies``` é possível checar mais detalhes.
