SCRIPT.JS

function calcularTotal() {
    var notas = [];
    for (var i = 1; i <= 10; i++) {
        var nota = parseFloat(document.getElementById('nota' + i).value) || 0;
        notas.push(nota);
    }
    var total = notas.reduce((a, b) => a + b, 0);
    document.getElementById('total').value = total;
}

function salvarDados() {
    var nome = document.getElementById('nome').value;
    var total = parseFloat(document.getElementById('total').value) || 0;

    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }

    var ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    var encontrado = false;

    for (var i = 0; i < ranking.length; i++) {
        if (ranking[i].nome === nome) {
            ranking[i].pontos += total;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        ranking.push({ nome: nome, pontos: total });
    }

    localStorage.setItem('ranking', JSON.stringify(ranking));
    alert("Dados salvos com sucesso!");
}

function calcularTotalFestival() {
    const notas = [
        parseFloat(document.getElementById('afinacao').value) || 0,
        parseFloat(document.getElementById('interacao').value) || 0,
        parseFloat(document.getElementById('concepcao').value) || 0,
        parseFloat(document.getElementById('harmonia').value) || 0
    ];
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    document.getElementById('total').value = total;
}

function salvarDadosFestival() {
    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const total = parseFloat(document.getElementById('total').value) || 0;

    if (!nome || !categoria) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var rankingFestival = JSON.parse(localStorage.getItem('rankingFestival')) || [];
    rankingFestival.push({ nome: nome, categoria: categoria, total: total });

    localStorage.setItem('rankingFestival', JSON.stringify(rankingFestival));
    alert("Dados salvos com sucesso!");
}

function calcularTotalComposicao() {
    const notas = [
        parseFloat(document.getElementById('letra').value) || 0,
        parseFloat(document.getElementById('melodia').value) || 0,
        parseFloat(document.getElementById('afinacaoComposicao').value) || 0,
        parseFloat(document.getElementById('concepcaoComposicao').value) || 0
    ];
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    document.getElementById('totalComposicao').value = total;
}

function salvarDadosComposicao() {
    const nome = document.getElementById('nomeComposicao').value;
    const categoria = document.getElementById('categoriaComposicao').value;
    const total = parseFloat(document.getElementById('totalComposicao').value) || 0;

    if (!nome || !categoria) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var rankingFestival = JSON.parse(localStorage.getItem('rankingFestival')) || [];
    rankingFestival.push({ nome: nome, categoria: categoria, total: total });

    localStorage.setItem('rankingFestival', JSON.stringify(rankingFestival));
    alert("Dados salvos com sucesso!");
}function calcularTotal() {
    var notas = [];
    for (var i = 1; i <= 10; i++) {
        var nota = parseFloat(document.getElementById('nota' + i).value) || 0;
        notas.push(nota);
    }
    var total = notas.reduce((a, b) => a + b, 0);
    document.getElementById('total').value = total;
}

function salvarDados() {
    var nome = document.getElementById('nome').value;
    var total = parseFloat(document.getElementById('total').value) || 0;

    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }

    var ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    var encontrado = false;

    for (var i = 0; i < ranking.length; i++) {
        if (ranking[i].nome === nome) {
            ranking[i].pontos += total;
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        ranking.push({ nome: nome, pontos: total });
    }

    localStorage.setItem('ranking', JSON.stringify(ranking));
    alert("Dados salvos com sucesso!");
}

function calcularTotalFestival() {
    const notas = [
        parseFloat(document.getElementById('afinacao').value) || 0,
        parseFloat(document.getElementById('interacao').value) || 0,
        parseFloat(document.getElementById('concepcao').value) || 0,
        parseFloat(document.getElementById('harmonia').value) || 0
    ];
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    document.getElementById('total').value = total;
}

function salvarDadosFestival() {
    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const total = parseFloat(document.getElementById('total').value) || 0;

    if (!nome || !categoria) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var rankingFestival = JSON.parse(localStorage.getItem('rankingFestival')) || [];
    rankingFestival.push({ nome: nome, categoria: categoria, total: total });

    localStorage.setItem('rankingFestival', JSON.stringify(rankingFestival));
    alert("Dados salvos com sucesso!");
}

function calcularTotalComposicao() {
    const notas = [
        parseFloat(document.getElementById('letra').value) || 0,
        parseFloat(document.getElementById('melodia').value) || 0,
        parseFloat(document.getElementById('afinacaoComposicao').value) || 0,
        parseFloat(document.getElementById('concepcaoComposicao').value) || 0
    ];
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    document.getElementById('totalComposicao').value = total;
}

function salvarDadosComposicao() {
    const nome = document.getElementById('nomeComposicao').value;
    const categoria = document.getElementById('categoriaComposicao').value;
    const total = parseFloat(document.getElementById('totalComposicao').value) || 0;

    if (!nome || !categoria) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var rankingFestival = JSON.parse(localStorage.getItem('rankingFestival')) || [];
    rankingFestival.push({ nome: nome, categoria: categoria, total: total });

    localStorage.setItem('rankingFestival', JSON.stringify(rankingFestival));
    alert("Dados salvos com sucesso!");
}
