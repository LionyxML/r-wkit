
var jsPressed = document.getElementById('jspressed');
var jsCode = document.getElementById('jscode');
var jsName = document.getElementById('jsname');
var themeSwitch = document.getElementsByClassName('bot-tema')[0];
var lua = document.getElementById('lua');
var sol = document.getElementById('sol');

var bodyClass = document.body.classList;
var atual = 'modo-claro'
bodyClass.add(atual);


themeSwitch.addEventListener('click', function() {
  if (atual == 'modo-claro') {
    bodyClass.add('modo-escuro');
    bodyClass.remove('modo-claro');
    atual = 'modo-escuro';
  } else {
    bodyClass.remove('modo-escuro');
    bodyClass.add('modo-claro');
    atual = 'modo-claro'
  }
  lua.classList.toggle('escondido');
  sol.classList.toggle('escondido');
});

document.addEventListener("keydown", function(event) {
  jsPressed.innerHTML = event.key;
  jsCode.innerHTML = event.keyCode;
  jsName.innerHTML = event.code;
});



var modal = document.getElementById('modal-info');
var botInfo = document.getElementById('bot-info');
var botClose = document.getElementById('close');

botInfo.onclick = function () {
  modal.style.display = "block";
}

botClose.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var ptLang = document.getElementById('pt-lang');
var enLang = document.getElementById('en-lang');
var enClass = document.getElementsByClassName('en')[0];
var ptClass = document.getElementsByClassName('pt-br')[0];
var labCode = document.getElementById('label-code');
var labName = document.getElementById('label-name');

ptLang.onclick = function () {
  enLang.style.display = "block";
  ptLang.style.display = "none";
  jsPressed.innerHTML = "Pressione qualquer tecla...";
  labCode.innerHTML = "Código JS: ";
  labName.innerHTML = "Chave JS: ";
  enClass.style.display = "none";
  ptClass.style.display = "block";
}

enLang.onclick = function () {
  enLang.style.display = "none";
  ptLang.style.display = "block";
  jsPressed.innerHTML = "Press any key...";
  labCode.innerHTML = "Code: ";
  labName.innerHTML = "Key Code: ";
  enClass.style.display = "block";
  ptClass.style.display = "none";
}
