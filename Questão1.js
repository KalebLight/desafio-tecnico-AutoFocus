function dropdownToggle(event) {
  veiculosItem.classList.toggle('show');
  div_veiculos_lista.classList.toggle('show');
}

let listUl = document.querySelector('.nav--accordion-mobile');
// Atribuindo cada um dos itens do menu para uma variável
let homeItem = listUl.children[0];
let novosItem = listUl.children[1];
let semiNovosItem = listUl.children[2];
let ofertasUnicasItem = listUl.children[3];
let posVendaItem = listUl.children[4];
let vendasDiretasItem = listUl.children[5];
let consorciosItem = listUl.children[6];
let contatoItem = listUl.children[7];

// Trocando classes dos itens que irão para dentro do dropdown Veículos
novosItem.children[0].removeAttribute('class');
novosItem.children[0].setAttribute('class', 'card-collapse-deep__title');
semiNovosItem.children[0].removeAttribute('class');
semiNovosItem.children[0].setAttribute('class', 'card-collapse-deep__title');

listUl.innerHTML = ''; // Apagando todos os elementos do menu

// Criando novos elementos HTML
let veiculosItem = document.createElement('li');
veiculosItem.classList.add('nav-item');
veiculosItem.classList.add('nav-simple__item');
veiculosItem.addEventListener('click', dropdownToggle);

let a_veiculos = document.createElement('a');
a_veiculos.textContent = 'Veículos';
a_veiculos.classList.add('nav-link');
a_veiculos.classList.add('nav-simple__link');
a_veiculos.href = '/autoforce-ford#';
veiculosItem.prepend(a_veiculos);

let i_icon = document.createElement('i');
i_icon.classList.add('icon');
i_icon.classList.add('icon-dropdown');
i_icon.classList.add('icon-arrow-d');
a_veiculos.append(i_icon);

let div_veiculos_lista = document.createElement('div');
div_veiculos_lista.classList.add('nav-simple-sub');
div_veiculos_lista.classList.add('card-collapse-deep');
div_veiculos_lista.classList.add('dropdown-menu');

let ul_veiculos_lista = document.createElement('ul');
ul_veiculos_lista.classList.add('list');
ul_veiculos_lista.classList.add('list--border-bottom');

// Adicionando elementos criados em seus respectivos lugares
ul_veiculos_lista.append(novosItem);
ul_veiculos_lista.append(semiNovosItem);
div_veiculos_lista.append(ul_veiculos_lista);
veiculosItem.append(div_veiculos_lista);

// Adicionando os itens do Menu na nova ordem requerida
listUl.append(
  homeItem,
  veiculosItem,
  consorciosItem,
  posVendaItem,
  ofertasUnicasItem,
  vendasDiretasItem,
  contatoItem,
);
