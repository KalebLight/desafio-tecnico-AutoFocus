function toggleModal() {
  if (whatsappList.classList.contains('show')) {
    whatsappList.style.opacity = '0';
    whatsappList.style.pointerEvents = 'none';
    whatsappList.classList.remove('show');
  } else {
    whatsappList.style.opacity = '1';
    whatsappList.style.pointerEvents = 'all';
    whatsappList.classList.add('show');
  }
}

let page = document.querySelector('.page__container');

let buttonWhatsApp = document.querySelector('#popup-whats');
buttonWhatsApp.removeAttribute('onclick');
buttonWhatsApp.addEventListener('click', toggleModal);

let whatsappListOriginal = document.querySelector('#wpp-content-0');
let whatsappList = whatsappListOriginal.cloneNode(true);
whatsappList.classList.remove('collapse');

whatsappList.style.position = 'fixed';
whatsappList.style.border = '1px solid gray';
whatsappList.style.minWidth = '250px !important';
whatsappList.style.maxWidth = '60%';
whatsappList.style.zIndex = '10';
whatsappList.style.left = '13%';
whatsappList.style.bottom = '10%';
whatsappList.style.width = '250px';
whatsappList.style.opacity = '0';
whatsappList.style.pointerEvents = 'none';

//add list na page
page.append(whatsappList);

//Seminovos
let seminovosLi = whatsappList.children[0].children[0];
seminovosLi.children[0].removeAttribute('data-phones');
seminovosLi.children[0].setAttribute(
  'onclick',
  "javascript:window.open('https://api.whatsapp.com/send?phone=551199999999');",
);

//Servicos
let servicosLi = whatsappList.children[0].children[1];
servicosLi.children[0].removeAttribute('data-phones');

let servicosSpan = servicosLi.children[0].children[1];
servicosSpan.innerText = '+55 (11) 11111-11111';

servicosLi.children[0].setAttribute(
  'onclick',
  "javascript:window.open('https://api.whatsapp.com/send?phone=55111111111111');",
);

//Centra de Vendas
let centralVendasLi = whatsappList.children[0].children[2];
centralVendasLi.children[0].removeAttribute('data-phones');

let centralVendasSpan = centralVendasLi.children[0].children[1];
centralVendasSpan.innerText = '+55 (11) 88888-8888';

centralVendasLi.children[0].setAttribute(
  'onclick',
  "javascript:window.open('https://api.whatsapp.com/send?phone=5511888888888');",
);
