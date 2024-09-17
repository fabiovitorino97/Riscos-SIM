function atualizarCategoria() {
    const area = document.getElementById("area").value;
    const categoria = document.getElementById("categoria");

    // Limpa as opções de categoria
    categoria.innerHTML = '<option value="">Selecione</option>';

    // Define as opções de acordo com a Área selecionada
    let opcoes = [];
    if (area === "Carne") {
        opcoes = [
            "Produtos com adição de inibidores",
            "Produtos compostos por diferentes categorias de produtos cárneos, acrescidos ou não de outros ingredientes",
            "Produtos em natureza",
            "Produtos não submetidos a tratamento térmico",
            "Produtos processados termicamente – esterilização comercial",
            "Produtos submetidos a hidrólise",
            "Produtos submetidos a tratamento térmico",
            "Produtos submetidos a tratamento térmico - Cocção"
        ];
    } else if (area === "LeiteKg") {
        opcoes = [
            "Caseína", "Caseinato", "Farinha Láctea", "Gordura Anidra de Leite (Butter Oil)", "Lactose", "Leitelho",
            "Manteiga", "Margarina", "Mistura Láctea", "Molho Lácteo", "Permeado", "Petisco de Queijo", "Produto Lácteo Concentrado",
            "Produto Lácteo Cru", "Produto Lácteo Em Pó", "Produto Lácteo Esterilizado", "Produto Lácteo Fermentado",
            "Produto Lácteo Fundido", "Produto Lácteo Parcialmente Desidratado", "Produto Lácteo Pasteurizado", "Produto Lácteo Proteico",
            "Produto Lácteo Uht", "Queijo Maturado", "Queijo Mofado", "Queijo Não Maturado", "Queijo Ralado", "Queijo Ultrafiltrado",
            "Ricota", "Sobremesa Láctea"
        ];
    } else if (area === "LeiteL") {
        opcoes = [
            "Caseína", "Caseinato", "Farinha Láctea", "Gordura Anidra de Leite (Butter Oil)", "Lactose", "Leitelho",
            "Manteiga", "Margarina", "Mistura Láctea", "Molho Lácteo", "Permeado", "Petisco de Queijo", "Produto Lácteo Concentrado",
            "Produto Lácteo Cru", "Produto Lácteo Em Pó", "Produto Lácteo Esterilizado", "Produto Lácteo Fermentado",
            "Produto Lácteo Fundido", "Produto Lácteo Parcialmente Desidratado", "Produto Lácteo Pasteurizado", "Produto Lácteo Proteico",
            "Produto Lácteo Uht", "Queijo Maturado", "Queijo Mofado", "Queijo Não Maturado", "Queijo Ralado", "Queijo Ultrafiltrado",
            "Ricota", "Sobremesa Láctea"
        ];
    } else if (area === "Mel") {
        opcoes = ["Apitoxina", "Cera de Abelhas", "Compostos de Produtos Das Abelhas", "Derivados Da Própolis (Em Massa)", 
        "Derivados Da Própolis (Em Volume)", "Derivados de Pólen Apícola", "Geléia Real", "Geléia Real Liofilizada", "Mel", 
        "Mel de Abelhas Indígenas", "Polen", "Polen Desidratado", "Própolis"];
    } else if (area === "Ovos") {
        opcoes = [
            "Produtos submetidos a tratamento térmico - Cocção", "Produtos submetidos a tratamento térmico - Pasteurização",
            "Produtos em natureza", "Produtos não submetidos a tratamento térmico", "Produtos submetidos a tratamento térmico - Desidratação"
        ];
    } else if (area === "Pescado") {
        opcoes = [
            "Produtos com adição de inibidores", "Produtos compostos por diferentes categorias de produtos de pescado, acrescidos ou não de outros ingredientes",
            "Produtos em natureza", "Produtos não submetidos a tratamento térmico", "Produtos submetidos à hidrólise",
            "Produtos processados termicamente – esterilização comercial", "Produtos submetidos a tratamento térmico", "Produtos submetidos a tratamento térmico - Cocção"
        ];
    }

    // Adiciona as novas opções
    for (let i = 0; i < opcoes.length; i++) {
        const option = document.createElement("option");
        option.value = opcoes[i];
        option.textContent = opcoes[i];
        categoria.appendChild(option);
    }
}

// Função para validar o formulário antes de enviar
function validarFormulario() {
    const area = document.getElementById("area").value;
    const volume = document.getElementById("volume").value;
    const categoria = document.getElementById("categoria").value;

    if (area === "" || volume === "" || categoria === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return false;
    }

    return true; // Permite o envio se todos os campos estiverem preenchidos
}

// Função para calcular RV (Risco Volume)
function calcularRV(area, volume) {
    if (area === "Carne") {
        if (volume <= 15000000) return 1;
        if (volume <= 44000000) return 2;
        return 3;
    } else if (area === "LeiteKg") {
        if (volume <= 4000000) return 1;
        if (volume <= 13000000) return 2;
        return 3;
    } else if (area === "LeiteL") {
        if (volume <= 4000000) return 1;
        if (volume <= 9000000) return 2;
        return 3;
    } else if (area === "Mel") {
        if (volume <= 41000) return 1;
        return 2;
    } else if (area === "Ovos") {
        return 1;
    } else if (area === "Pescado") {
        if (volume <= 401000) return 1;
        return 2;
    }
    return 0;
}

// Função para calcular RP (Risco Produto)
function calcularRP(area, categoria) {
    const tabelaRP = {
        "Carne": {
            "Produtos com adição de inibidores": 2,
            "Produtos compostos por diferentes categorias de produtos cárneos, acrescidos ou não de outros ingredientes": 3,
            "Produtos em natureza": 2,
            "Produtos não submetidos a tratamento térmico": 2,
            "Produtos processados termicamente – esterilização comercial": 1,
            "Produtos submetidos a hidrólise": 1,
            "Produtos submetidos a tratamento térmico": 2,
            "Produtos submetidos a tratamento térmico - Cocção": 3
        },
        "LeiteKg": {
            "Caseína": 1, "Caseinato": 1, "Farinha Láctea": 2, "Gordura Anidra de Leite (Butter Oil)": 1,
            "Lactose": 1, "Leitelho": 2, "Manteiga": 2, "Margarina": 1, "Mistura Láctea": 1, "Molho Lácteo": 3,
            "Permeado": 1, "Petisco de Queijo": 3, "Produto Lácteo Concentrado": 2, "Produto Lácteo Cru": 2,
            "Produto Lácteo Em Pó": 2, "Produto Lácteo Esterilizado": 2, "Produto Lácteo Fermentado": 2,
            "Produto Lácteo Fundido": 3, "Produto Lácteo Parcialmente Desidratado": 2, "Produto Lácteo Pasteurizado": 3,
            "Produto Lácteo Proteico": 2, "Produto Lácteo Uht": 2, "Queijo Maturado": 2, "Queijo Mofado": 2,
            "Queijo Não Maturado": 3, "Queijo Ralado": 2, "Queijo Ultrafiltrado": 3, "Ricota": 3, "Sobremesa Láctea": 2
        },
        "LeiteL": {
            "Caseína": 1, "Caseinato": 1, "Farinha Láctea": 2, "Gordura Anidra de Leite (Butter Oil)": 1,
            "Lactose": 1, "Leitelho": 2, "Manteiga": 2, "Margarina": 1, "Mistura Láctea": 1, "Molho Lácteo": 3,
            "Permeado": 1, "Petisco de Queijo": 3, "Produto Lácteo Concentrado": 2, "Produto Lácteo Cru": 2,
            "Produto Lácteo Em Pó": 2, "Produto Lácteo Esterilizado": 2, "Produto Lácteo Fermentado": 2,
            "Produto Lácteo Fundido": 3, "Produto Lácteo Parcialmente Desidratado": 2, "Produto Lácteo Pasteurizado": 3,
            "Produto Lácteo Proteico": 2, "Produto Lácteo Uht": 2, "Queijo Maturado": 2, "Queijo Mofado": 2,
            "Queijo Não Maturado": 3, "Queijo Ralado": 2, "Queijo Ultrafiltrado": 3, "Ricota": 3, "Sobremesa Láctea": 2
        },
        "Mel": {
            "Apitoxina": 1, "Cera de Abelhas": 1, "Compostos de Produtos Das Abelhas": 1, "Derivados Da Própolis (Em Massa)": 1,
            "Derivados Da Própolis (Em Volume)": 1, "Derivados de Pólen Apícola": 1, "Geléia Real": 2, "Geléia Real Liofilizada": 2,
            "Mel": 1, "Mel de Abelhas Indígenas": 1, "Polen": 2, "Polen Desidratado": 2, "Própolis": 1
        },
        "Ovos": {
            "Produtos submetidos a tratamento térmico - Cocção": 1, "Produtos submetidos a tratamento térmico - Pasteurização": 2,
            "Produtos em natureza": 1, "Produtos não submetidos a tratamento térmico": 2, "Produtos submetidos a tratamento térmico - Desidratação": 2
        },
        "Pescado": {
            "Produtos com adição de inibidores": 2, "Produtos compostos por diferentes categorias de produtos de pescado, acrescidos ou não de outros ingredientes": 4,
            "Produtos em natureza": 4, "Produtos não submetidos a tratamento térmico": 4, "Produtos submetidos à hidrólise": 1,
            "Produtos processados termicamente – esterilização comercial": 1, "Produtos submetidos a tratamento térmico": 2,
            "Produtos submetidos a tratamento térmico - Cocção": 3
        }
    };

    return tabelaRP[area][categoria];
}

// Função para calcular RD (Risco Distribuição)
function calcularRD() {
    // Verifica o estado das checkboxes
    const violacao = document.getElementById("violacao").checked;
    const reclamacao = document.getElementById("reclamacao").checked;
    const acoes = document.getElementById("acoes").checked;
    const risco = document.getElementById("risco").checked;

    let rd;

    // Aplicando a lógica IF/Else conforme os requisitos
    if (risco) {
        rd = 4;  // Regra 5: Se a 4a está true, RD é 4 independentemente das outras
    } else if (acoes && (violacao || reclamacao)) {
        rd = 3;  // Regra 4: Se a 1a e 3a, ou 2a e 3a, ou 1a, 2a e 3a estão true, RD é 3
    } else if (acoes) {
        rd = 2;  // Regra 2: Se apenas a 3a está true, RD é 2
    } else if (violacao || reclamacao || (violacao && reclamacao)) {
        rd = 2;  // Regra 3: Se a 1a e 2a estão true, ou 1a ou 2a estão true, RD é 2
    } else {
        rd = 1;  // Regra 1: Se todas estão false, RD é 1
    }

    // Atualiza o valor de RD no campo de resultado
    return rd;
}

// Função para calcular R (Risco Total)
function calcularR(RV, RP, RD) {
    return Math.round(RV + RP + 2*RD) / 4;
}

// Função principal para calcular os riscos
function calcularRisco() {
    if (!validarFormulario()) return false; // Verifica se todos os campos foram preenchidos

    const area = document.getElementById("area").value;
    const volume = document.getElementById("volume").value;
    const categoria = document.getElementById("categoria").value;

    const RV = calcularRV(area, volume);
    const RP = calcularRP(area, categoria);
    const RD = calcularRD();
    const R = calcularR(RV, RP, RD);

    // Exibe os resultados
    document.getElementById("resultadoRV").textContent = `RV: ${RV}`;
    document.getElementById("resultadoRP").textContent = `RP: ${RP}`;
    document.getElementById("resultadoRD").textContent = `RD: ${RD}`;
    document.getElementById("resultadoR").textContent = `R: ${R.toFixed(0)}`;

    // Define a frequência mínima de fiscalização
    let frequencia = '';
    if (R <= 1) {
        frequencia = 'Frequência mínima: 12 meses';
    } else if (R <= 2) {
        frequencia = 'Frequência mínima: 6 meses';
    } else if (R <= 3) {
        frequencia = 'Frequência mínima: 2 meses';
    } else{
        frequencia = 'Frequência mínima: 15 dias';
    }
    document.getElementById("frequencia").textContent = frequencia;

    return false; // Impede o envio do formulário e recarregamento da página
}

function limparDados() {
    // Limpa os campos de entrada do formulário
    document.getElementById("area").value = "";
    document.getElementById("volume").value = "";
    document.getElementById("categoria").value = "";

    // Limpa as checkboxes
    document.getElementById("violacao").checked = false;
    document.getElementById("reclamacao").checked = false;
    document.getElementById("acoes").checked = false;
    document.getElementById("risco").checked = false;
    
    // Limpa os campos dos resultados
    document.getElementById("resultadoRV").textContent = "RV:";
    document.getElementById("resultadoRP").textContent = "RP:";
    document.getElementById("resultadoRD").textContent = "RD:";
    document.getElementById("resultadoR").textContent = "R:";
    document.getElementById("frequencia").textContent = "Frequência mínima:";
}