let agenda = [];

function cadastrar() {
  let nome = prompt("Qual é o nome da pessoa?");
  let dia = parseInt(prompt("Dia do aniversário:"));
  let mes = parseInt(prompt("Mês do aniversário:"));

  if (isNaN(dia) || isNaN(mes)) {
    document.getElementById("output").innerHTML = "Ops! O dia e o mês devem ser números.";
    return;
  }

  if (agenda.length < 15) {
    agenda.push({ nome, dia, mes });
    document.getElementById("output").innerHTML = "Pessoa cadastrada!";
  } else {
    document.getElementById("output").innerHTML = "A agenda está cheia!";
  }
  mostrarAgenda();
}

function excluir() {
  let nome = prompt("Qual é o nome da pessoa para excluir?");
  let index = agenda.findIndex(pessoa => pessoa.nome === nome);
  if (index !== -1) {
    agenda.splice(index, 1);
    document.getElementById("output").innerHTML = "Pessoa excluída!";
  } else {
    document.getElementById("output").innerHTML = "Pessoa não encontrada.";
  }
  mostrarAgenda();
}

function alterar() {
  let nome = prompt("Qual é o nome da pessoa?");
  let pessoa = agenda.find(p => p.nome === nome);
  if (pessoa) {
    let opcao = prompt("O que você quer alterar? (1) Dia ou (2) Mês?");
    if (opcao === "1") {
      pessoa.dia = parseInt(prompt("Novo dia:"));
      document.getElementById("output").innerHTML = "Informação alterada!";
    } else if (opcao === "2") {
      pessoa.mes = parseInt(prompt("Novo mês:"));
      document.getElementById("output").innerHTML = "Informação alterada!";
    } else {
      document.getElementById("output").innerHTML = "Opção inválida!";
    }
  } else {
    document.getElementById("output").innerHTML = "Pessoa não encontrada.";
  }
  mostrarAgenda();
}

function consultarData() {
  let dia = parseInt(prompt("Digite o dia:"));
  let mes = parseInt(prompt("Digite o mês:"));
  let aniversariantes = agenda.filter(pessoa => pessoa.dia === dia && pessoa.mes === mes);
  if (aniversariantes.length > 0) {
    document.getElementById("output").innerHTML = "Aniversariantes encontrados:";
    let lista = "<ul>";
    aniversariantes.forEach(pessoa => lista += "<li>" + pessoa.nome + "</li>");
    lista += "</ul>";
    document.getElementById("output").innerHTML += lista;
  } else {
    document.getElementById("output").innerHTML = "Nenhum aniversariante encontrado.";
  }
}

function consultarMes() {
  let mes = parseInt(prompt("Digite o mês:"));
  let aniversariantes = agenda.filter(pessoa => pessoa.mes === mes);
  if (aniversariantes.length > 0) {
    document.getElementById("output").innerHTML = "Aniversariantes encontrados:";
    let lista = "<ul>";
    aniversariantes.forEach(pessoa => lista += "<li>" + pessoa.nome + "</li>");
    lista += "</ul>";
    document.getElementById("output").innerHTML += lista;
  } else {
    document.getElementById("output").innerHTML = "Nenhum aniversariante encontrado.";
  }
}

function consultarLetra() {
  let letra = prompt("Digite a primeira letra do nome:");
  letra = letra.toUpperCase();
  let aniversariantes = agenda.filter(pessoa => pessoa.nome.toUpperCase().startsWith(letra));
  if (aniversariantes.length > 0) {
    document.getElementById("output").innerHTML = "Aniversariantes encontrados:";
    let lista = "<ul>";
    aniversariantes.forEach(pessoa => lista += "<li>" + pessoa.nome + "</li>");
    lista += "</ul>";
    document.getElementById("output").innerHTML += lista;
  } else {
    document.getElementById("output").innerHTML = "Nenhum aniversariante encontrado.";
  }
}

function mostrarNomeOrdenado() {
  agenda.sort((a, b) => a.nome.localeCompare(b.nome));
  document.getElementById("output").innerHTML = "Agenda ordenada pelo nome:";
  let lista = "<ul>";
  agenda.forEach(pessoa => lista += "<li>" + pessoa.nome + " - " + pessoa.dia + "/" + pessoa.mes + "</li>");
  lista += "</ul>";
  document.getElementById("output").innerHTML += lista;
}

function mostrarMesOrdenado() {
  agenda.sort((a, b) => {
    if (a.mes === b.mes) {
      return a.dia - b.dia;
    } else {
      return a.mes - b.mes;
    }
  });
  document.getElementById("output").innerHTML = "Agenda ordenada pelo mês:";
  let lista = "<ul>";
  agenda.forEach(pessoa => lista += "<li>" + pessoa.nome + " - " + pessoa.dia + "/" + pessoa.mes + "</li>");
  lista += "</ul>";
  document.getElementById("output").innerHTML += lista;
}

function sair() {
  let confirmar = confirm("Você realmente quer sair? Isso vai limpar sua agenda.");
  if (confirmar) {
    agenda = [];
    document.getElementById("output").innerHTML = "Saindo...";
    mostrarAgenda();
  }
}

function handleInput() {
  let opcao = document.getElementById("inputBox").value;
  switch (opcao) {
    case "1":
      cadastrar();
      break;
    case "2":
      excluir();
      break;
    case "3":
      alterar();
      break;
    case "4":
      consultarData();
      break;
    case "5":
      consultarMes();
      break;
    case "6":
      consultarLetra();
      break;
    case "7":
      mostrarNomeOrdenado();
      break;
    case "8":
      mostrarMesOrdenado();
      break;
    case "9":
      sair();
      break;
    default:
      document.getElementById("output").innerHTML = "Opção inválida!";
  }
}

function mostrarAgenda() {
  let lista = "<ul>";
  agenda.forEach(pessoa => lista += "<li>" + pessoa.nome + " - " + pessoa.dia + "/" + pessoa.mes + "</li>");
  lista += "</ul>";
  document.getElementById("agenda-list").innerHTML = lista;
}
