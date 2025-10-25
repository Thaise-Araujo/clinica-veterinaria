// 1.1 INTERFACE PARA ANIMAIS - FICHA OBRIGATÓRIA
interface Animal {
    id: number;           //Número único para identificar cada animal
    nome: string;         //Nome do animal - deve ser texto
    especie: string;      //Tipo: "cachorro", "gato", "pássaro", etc
    idade: number;        //Idade em anos - deve ser número
    peso: number;         //Peso em kg - deve ser número  
    vacinado: boolean;    //true = já vacinado, false = não vacinado
    cor: string;          //Cor do animal: "preto", "branco", "marrom"
    raca: string;         //Raça: "vira-lata", "siamês", "poodle" - CORRIGIDO: raça → raca
}

// 1.2 INTERFACE PARA SERVIÇOS - O QUE NOSSO PETSHOP OFERECE
interface Servico {
    id: number;           //Número único para cada serviços
    tipo: string;         //Tipo de serviços: "banho", "tosa", "consulta", etc
    animalId: number;     //ID do animal que vai receber o serviços
    preco: number;        //Preço em reais - deve ser número
    concluido: boolean;   //true = serviços feitos, false = ainda não feitos
    data: string;         //Data do serviço: "20/03/2024"
    funcionario: string;  //Nome do funcionário responsável
}

// ==============================================
// 2. LISTAS - ONDE GUARDAMOS NOSSOS DADOS
// ==============================================

let animais: Animal[] = [];
let servicos: Servico[] = [];

// OPÇÃO C ESCOLHIDA:
let funcionarios: string[] = ["João", "Maria", "Carlos"];

// ==============================================
// 3. FUNÇÕES PRINCIPAIS - O "MOTOR" DO SISTEMA
// ==============================================

// 3.1 FUNÇÃO PARA CALCULAR IDADE DO ANIMAL
function calcularIdade(anoNascimento: number): number {
    const anoAtual: number = new Date().getFullYear();
    return anoAtual - anoNascimento;
}

// 3.2 FUNÇÃO PARA CRIAR UM NOVO ANIMAL 
function criarAnimal(nome: string, especie: string, idade: number, peso: number, cor: string, raca: string): Animal {
    return {
        id: Math.floor(Math.random() * 1000),
        nome: nome,
        especie: especie,
        idade: idade,
        peso: peso,
        vacinado: false,
        cor: cor,
        raca: raca  
    };
}

// 3.3 FUNÇÃO PARA AGENDAR SERVIÇOS
function agendarServico(servico: Servico): string {  
    servicos.push(servico);
    return `✅ Serviço de ${servico.tipo} agendado! Preço: R$ ${servico.preco}`;
}

// FUNÇÃO para calcular preço total de serviços
function calcularPrecoTotal(): number {
    let total: number = 0;
    servicos.forEach(servico => {
        total += servico.preco;
    });
    return total;
}

// FUNÇÃO para buscar animal pelo nome
function buscarAnimalPorNome(nome: string): Animal | undefined {
    return animais.find(animal => animal.nome.toLowerCase() === nome.toLowerCase());
}

// ==============================================
// 4. FUNÇÕES DOS BOTÕES - CONECTAM COM O HTML
// ==============================================

// BOTÃO 1: MOSTRAR TIPOS BÁSICOS DO TYPESCRIPT
function mostrarTipos(): void {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    
    resultado.innerHTML = `
        <div class="animal-card">
            <h3>📝 Tipos do TypeScript</h3>
            <p><strong>string:</strong> para textos → "Rex", "gato"</p>
            <p><strong>number:</strong> para números → 5, 15.5, 2024</p>
            <p><strong>boolean:</strong> para verdadeiro/falso → true, false</p>
            <p><strong>string[]:</strong> para listas de texto → ["banho", "tosa"]</p>
            <small>✨ O TypeScript não deixa misturar tipos!</small>
        </div>
    `;
}

// BOTÃO 2: MOSTRAR EXEMPLOS DE ANIMAIs
function mostrarAnimais(): void {  
    const resultado = document.getElementById('resultado');
    if (!resultado) return;

    // ANIMAIS EXEMPLO COM NOVOS CAMPOS
    const animal1: Animal = {
        id: 1,
        nome: "Paçoca",
        especie: "Gato",
        idade: 1,
        peso: 3.5,
        vacinado: true,
        cor: "Amarelo",
        raca: "Siamês"  
    };

    const animal2: Animal = {
        id: 2,
        nome: "Toby",
        especie: "Cachorro",
        idade: 2,
        peso: 15.0,
        vacinado: false,
        cor: "preto",
        raca: "Labrador"  
    };

    resultado.innerHTML = `
        <div class="animal-card">
            <h3>🐕 ${animal1.nome}</h3>
            <p><strong>Espécie:</strong> ${animal1.especie}</p>
            <p><strong>Idade:</strong> ${animal1.idade} anos</p>
            <p><strong>Peso:</strong> ${animal1.peso} kg</p>
            <p><strong>Cor:</strong> ${animal1.cor}</p>
            <p><strong>Raça:</strong> ${animal1.raca}</p>
            <p><strong>Vacinado:</strong> ${animal1.vacinado ? '✔ Sim' : '✖ Não'}</p>
        </div>
        <div class="animal-card">
            <h3>🐈 ${animal2.nome}</h3>
            <p><strong>Espécie:</strong> ${animal2.especie}</p>
            <p><strong>Idade:</strong> ${animal2.idade} anos</p>
            <p><strong>Peso:</strong> ${animal2.peso} kg</p>
            <p><strong>Cor:</strong> ${animal2.cor}</p>
            <p><strong>Raça:</strong> ${animal2.raca}</p>
            <p><strong>Vacinado:</strong> ${animal2.vacinado ? '✔ Sim' : '✖ Não'}</p>
        </div>
    `;
}

// BOTÃO 3: TESTAR NOSSAS FUNÇÕES 
function testarFuncoes(): void {  
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    
    resultado.innerHTML = `
        <div class="animal-card">
            <h3>⚙️ Testando Nossas Funções</h3>
            <p>Aguarde 1 segundo para ver os resultados...</p>
        </div>
    `;

    setTimeout(() => {
        // TESTANDO função calcularIdade
        const idadeCalculada = calcularIdade(2020);
        
        // TESTANDO função criarAnimal
        const novoAnimal = criarAnimal("Bobby", "cachorro", 2, 8.5, "preto", "labrador");
        
        // TESTANDO função agendarServico
        const servico: Servico = {
            id: 1,
            tipo: 'banho',
            animalId: novoAnimal.id,
            preco: 45.90,
            concluido: false,
            data: "25/03/2024",
            funcionario: "Maria"
        };
        
        const mensagemServico = agendarServico(servico);  

        // MOSTRANDO RESULTADOS NA TELA
        resultado.innerHTML += `
            <div class="animal-card">
                <h4>📅 Cálculo de Idade</h4>
                <p>Animal nascido em 2020 tem <strong>${idadeCalculada} anos</strong> em ${new Date().getFullYear()}</p>
            </div>
            <div class="animal-card">
                <h4>🐕 Animal Criado</h4>
                <p><strong>Nome:</strong> ${novoAnimal.nome}</p>
                <p><strong>Espécie:</strong> ${novoAnimal.especie}</p>
                <p><strong>Idade:</strong> ${novoAnimal.idade} anos</p>
                <p><strong>Cor:</strong> ${novoAnimal.cor}</p>
                <p><strong>Raça:</strong> ${novoAnimal.raca}</p>
            </div>
            <div class="animal-card">
                <h4>📋 Serviço Agendado</h4>
                <p>${mensagemServico}</p>
                <p><strong>Funcionário:</strong> ${servico.funcionario}</p>
            </div>
        `;
    }, 1000);
}

// BOTÃO 4: MOSTRAR ERROS QUE TYPESCRIPT EVITA
function mostrarErros(): void {  
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    
    resultado.innerHTML = `
        <div class="erro-card">
            <h3>🚨 Erros que o TypeScript Previne</h3>
            <p>Estes códigos <strong>NÃO COMPILAM</strong> no TypeScript:</p>
        </div>
        <div class="erro-card">
            <h4>❌ ERRO 1: Tipo Incorreto</h4>
            <p><code>let idade: number = "5";</code></p>
            <small>🚫 Não pode colocar texto em variável de número</small>
            <small>💡 <strong>Problema do Petshop:</strong> "5 anos" vira "51" na soma</small>
        </div>
        <div class="erro-card">
            <h4>❌ ERRO 2: Ficha Incompleta</h4>
            <p><code>let animal: Animal = { nome: "Rex" };</code></p>
            <small>🚫 Tem que preencher TODAS as informações do animal</small>
            <small>💡 <strong>Problema do Petshop:</strong> Fichas de animais incompletas</small>
        </div>
        <div class="animal-card">
            <h4>✅ Vantagem do TypeScript</h4>
            <p>Estes erros são descobertos <strong>ANTES</strong> de executar o código!</p>
            <p>No JavaScript normal, o CLIENTE é que descobriria esses erros! 😱</p>
        </div>
    `;
}

// BOTÃO 5: CADASTRAR NOVO ANIMAL 
function cadastrarAnimal(): void {
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    
    resultado.innerHTML = `
        <div class="animal-card">
            <h3>➕ Cadastrando Novo Animal...</h3>
            <p>Aguarde 2 segundos enquanto nós cadastramos...</p>
        </div>
    `;

    setTimeout(() => {
        // CRIANDO um animal automaticamente com novos campos
        const novoAnimal = criarAnimal("Luna", "gato", 1, 3.2, "cinza", "persa");
        animais.push(novoAnimal);

        resultado.innerHTML = `
            <div class="animal-card">
                <h3>✅ Animal Cadastrado com Sucesso!</h3>
                <p><strong>Nome:</strong> ${novoAnimal.nome}</p>
                <p><strong>Espécie:</strong> ${novoAnimal.especie}</p>
                <p><strong>Idade:</strong> ${novoAnimal.idade} ano</p>
                <p><strong>Peso:</strong> ${novoAnimal.peso} kg</p>
                <p><strong>Cor:</strong> ${novoAnimal.cor}</p>
                <p><strong>Raça:</strong> ${novoAnimal.raca}</p>
                <p><strong>ID:</strong> ${novoAnimal.id}</p>
                <p><strong>Vacinado:</strong> ${novoAnimal.vacinado ? '✅ Sim' : '❌ Não'}</p>
                <small>✨ Total de animais cadastrados: ${animais.length}</small>
            </div>
        `;
    }, 2000);
}

// FUNÇÃO EXTRA PARA BOTÃO: MOSTRAR SERVIÇOS
function mostrarServicos(): void {  
    const resultado = document.getElementById('resultado');
    if (!resultado) return;
    
    let html = '<div class="animal-card"><h3>📋 Serviços Agendados</h3>';
    
    if (servicos.length === 0) {
        html += '<p>Nenhum serviço agendado ainda.</p>';
    } else {
        servicos.forEach(servico => {
            html += `
                <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 5px;">
                    <p><strong>Tipo:</strong> ${servico.tipo}</p>
                    <p><strong>Preço:</strong> R$ ${servico.preco}</p>
                    <p><strong>Data:</strong> ${servico.data}</p>
                    <p><strong>Funcionário:</strong> ${servico.funcionario}</p>
                    <p><strong>Status:</strong> ${servico.concluido ? '✅ Concluído' : '⏳ Pendente'}</p>
                </div>
            `;
        });
    }
    
    html += `</div>`;
    resultado.innerHTML = html;
}

// ==============================================
// 5. MENSAGEM INICIAL
// ==============================================
console.log("🚀 Sistema PetShop carregado com sucesso!");
console.log("🐾 Desenvolvido com TypeScript para evitar erros!");