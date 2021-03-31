
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
