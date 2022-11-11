let cardsWhatsapp = document.querySelectorAll('.header__card-whatsapp-item'); //<ul>

//OPÇÃO 1
let cardWhatsapp_1_pai = cardsWhatsapp[3]; //<li>
let cardWhatsapp_1 = cardWhatsapp_1_pai.children[0]; //<a>
cardWhatsapp_1.removeAttribute('data-phones');
cardWhatsapp_1.setAttribute(
  'onclick',
  "javascript:window.open('https://api.whatsapp.com/send?phone=551199999999');",
);

//OPÇÃO 2
let cardWhatsapp_2_pai = cardsWhatsapp[4]; //<li>
let cardWhatsapp_2 = cardWhatsapp_2_pai.children[0]; //<a>
cardWhatsapp_2.removeAttribute('data-phones');
cardWhatsapp_2.setAttribute(
  'onclick',
  "javascript:window.open('https://api.whatsapp.com/send?phone=5511111111111');",
);

//OPÇÃO 3
let cardWhatsapp_3_pai = cardsWhatsapp[5]; //<li>
let cardWhatsapp_3 = cardWhatsapp_3_pai.children[0]; //<a>
cardWhatsapp_3.removeAttribute('data-phones');
cardWhatsapp_3.setAttribute(
  'onclick',
  "javascript:window.open('https://api.whatsapp.com/send?phone=5511973860742');",
);
