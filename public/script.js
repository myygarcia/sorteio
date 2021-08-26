
//Mobile nav
const mParent = document.querySelectorAll(".mobile-nav");
const mNav = document.querySelector(".mobile-nav");
const toggleNav = document.getElementById("toggle-nav");

for (let i = 0; i < mParent.length; i++) {
  mParent[i].addEventListener("click", function () {
    let ddStatus = mParent[i].childNodes[2].style.display;

    if (ddStatus === "block") {
      mParent[i].childNodes[2].style.display = "none";
    } else {
      closeAll(mParent);
      mParent[i].childNodes[2].style.display = "block";
    }
  })
}

toggleNav.addEventListener("click", function () {
  mNav.classList.toggle("open");
  toggleNav.classList.toggle("open");
})

// SORTEIO DE NUMEROS

function ComoSortearNumeros() {
  var como_sortear_num = document.getElementById("como_sortear_numeros")

  if(como_sortear_num.style.display === "none") {
    document.getElementById("como_sortear_numeros").style = "display: block;"

  }
  else {

    document.getElementById("como_sortear_numeros").style = "display: none;"
  }
  
}

function limparNumero() {
  $("#qtd_numeros").val("")
  $("#min").val("")
  $("#max").val("")
}

function sorteioNumeros(){
const list = [];
const qtd = $("#qtd_numeros").val();
const min = $("#min").val();
const max = $("#max").val();

while (list.length < qtd){


let sort = Math.floor(Math.random()*Math.floor(max))

while(sort<min){

  sort = Math.floor(Math.random()*Math.floor(max));
}
list.push(sort)

}

var text = "Resultado: <br>"

$("#resultado_numeros").html(text + list);
}

  

// SORTEIO DE NOMES

function ComoSortearNomes() {
  var como_sortear_nome = document.getElementById("como_sortear_nomes")

  if(como_sortear_nome.style.display === "none") {
    document.getElementById("como_sortear_nomes").style = "display: block;"

  }
  else {

    document.getElementById("como_sortear_nomes").style = "display: none;"
  }
  
}

function limparNome() {
  $("#qtd_nomes").val("")
  $("#nomes").val("")
}

function sorteioNomes(){
	const list = [];
	const qtd = $("#qtd_nomes").val();
  const nom = $("#nomes").val();
  
  const sep = nom.split(/[\n,]+/);
  

  while (list.length < qtd){
  
  
  let sort = Math.floor(Math.random()*sep.length)

   list.push(sep[sort])
  }

  console.log(list)
var text = "Resultado: <br>"


  $("#resultado_nomes").html(text + list);
}


// AMIGO SECRETO

function ComoSortearAmigoSecreto() {
  var como_sortear_as = document.getElementById("como_sortear_amigo_secreto")

  if(como_sortear_as.style.display === "none") {
    document.getElementById("como_sortear_amigo_secreto").style = "display: block;"

  }
  else {

    document.getElementById("como_sortear_amigo_secreto").style = "display: none;"
  }
  
}

function pairs(names)
{
  const _pairs = [];

  // Copia o array para que as alterações dentro da função não sejam
  // refletidas no array original fora da função (evita efeito colateral)
  const _names = [...names];
  
  // Sorteia aleatoriamente as posições dos nomes
  _names.sort(() => Math.random() - 0.5);


  // Associa cada nome com seu sucessor e o último com o primeiro
  for (let i = 0; i < _names.length; i++) {
    _pairs.push([_names[i], _names[(i != _names.length - 1) ? i+1 : 0]]);
  }
  console.log(_pairs)
  
  return _pairs;
}

function limparAs() {
  $("#amigos").val("")
}

function sorteioAmigoSecreto(){

  const migo = $("#amigos").val();
  
  const sep = migo.split(/[\n,]+/);
  
  var text = "Resultado: <br>" 
  
  var retorno = pairs(sep)

  retorno.forEach((par) => {
    text = text + par[0] + " <span><b>sorteou</b></span>  " + par[1] + "<br>"
  })
  
  $("#resultado_amigos").html(text);
}
