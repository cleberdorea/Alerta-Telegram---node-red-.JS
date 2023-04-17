Node-RED - Fluxo de Monitoramento de Produção de Cerveja
Este é um fluxo de Node-RED para monitoramento de produção de cerveja em uma tina específica. Ele foi projetado para coletar informações sobre o código do produto, o passo do processo de produção e inserir os dados em um banco de dados.

Funcionalidades
Coleta o código do produto e o passo do processo de uma variável global do Node-RED
Define o nome do produto de acordo com o código do produto
Cria uma query SQL para inserção dos dados em um banco de dados
Verifica se a mensagem já foi enviada para o banco de dados
Controla o fluxo de acordo com o valor do passo do processo
Fluxo do Código
O fluxo consiste em um nó de função (Function node) chamado "tinaMostura1", que realiza as seguintes etapas:

Lê os valores das variáveis globais "ENSILAGEM_COD_PROD_TINA1" e "ENSILAGEM_PASSO_TINA1" do Node-RED
Com base no código do produto, define o nome do produto (SKU) correspondente
Cria uma query SQL para inserção dos dados na tabela "tinasMostura" do banco de dados
Verifica se a mensagem já foi enviada para o banco de dados, utilizando uma variável de memória chamada "mensagemEnviada"
Se o passo do processo for igual a 8 e a mensagem não tiver sido enviada, a mensagem é enviada para o banco de dados e a variável "mensagemEnviada" é definida como true
Se o passo do processo for maior que 8, a variável "mensagemEnviada" é resetada para false
Uso
Importe o fluxo para o seu projeto Node-RED
Certifique-se de ter as variáveis globais "ENSILAGEM_COD_PROD_TINA1" e "ENSILAGEM_PASSO_TINA1" configuradas corretamente
Verifique a configuração da query SQL para inserção dos dados no banco de dados, e atualize-a de acordo com a sua estrutura de banco de dados
Certifique-se de ter os nós necessários instalados no seu ambiente Node-RED para executar o fluxo corretamente (por exemplo, o nó "node-red-node-mysql" para conexão com banco de dados MySQL)
Inicie o fluxo e acompanhe o monitoramento de produção de cerveja na tina especificada
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para fazer melhorias, correções ou adicionar novas funcionalidades a este fluxo.

Licença
Este código é distribuído sob a licença MIT.
