// Criando variáveis
let codProdutoTina1 = global.get("ENSILAGEM_COD_PROD_TINA1", "storeInFile");
let passoTina1 = global.get("ENSILAGEM_PASSO_TINA1", 'storeInFile');
let SKU;

// Definindo o produto de acordo com o cód.
switch(codProdutoTina1){
    case 1:
        SKU = "BRAHMA";
        break;
    case 2:
        SKU = "SKOL";
        break;
    case 3:
        SKU = "ANTARCTICA";
        break;
    case 4:
        SKU = "SKOL PM"
        break;
    case 5:
        SKU = "BOHEMIA";
        break;
    case 6 : 
        SKU = "MOSTO R"
        break;
    case 7 :
        SKU = "SUB-ZERO";
        break;
    case 8 :
        SKU = "ABIÚDA";
        break;
    case 11:
        SKU = "BRAHMA DUPLO MALTE";
        break;
    default:
        SKU = codProdutoTina1;
}

// Definindo a query p/ o banco de dados 
let query = `INSERT INTO tinasMostura (produto) VALUES ('${SKU}')`;

// Verificando se a mensagem já foi enviada
let mensagemEnviada = flow.get("mensagemEnviada", "memory") || false;

if (passoTina1 == 8 && !mensagemEnviada) {
    // Enviando a mensagem para o banco de dados
    msg.topic = query;
    flow.set("mensagemEnviada", true, "memory");
    return msg;
} if(passoTina1 > 8){
    // Mensagem já enviada ou passoTina1 diferente de 8
    flow.set("mensagemEnviada", false, "memory");
    //return null;
}
