let cardsWhatsapp = document.querySelectorAll('.header__card-whatsapp-item'); //<ul>
//OPÇÃO 1
let cardWhatsapp_1_pai = cardsWhatsapp[3]; //<li>
let cardWhatsapp_1 = cardWhatsapp_1_pai.children[0]; //<a>
cardWhatsapp_1.parentNode.removeChild(cardWhatsapp_1);

let ancorSubstitute_1 = document.createElement('a');
ancorSubstitute_1.setAttribute(
  'href',
  'https://api.whatsapp.com/send?phone=551199999999',
);
ancorSubstitute_1.setAttribute('target', '_blank');

let strong_AncorSubstitute_1 = document.createElement('strong');
strong_AncorSubstitute_1.innerText = 'Seminovos: ';
strong_AncorSubstitute_1.style.color = '#333';

let span_AncorSubstitute_1 = document.createElement('span');
span_AncorSubstitute_1.innerText = '+55 (11) 9999-9999';
span_AncorSubstitute_1.classList.add(
  'header-mobile__whatsapp-number',
  'text-mask-phone',
);

ancorSubstitute_1.append(strong_AncorSubstitute_1, span_AncorSubstitute_1);
cardWhatsapp_1_pai.insertBefore(
  ancorSubstitute_1,
  cardWhatsapp_1_pai.children[0],
);

//OPÇÃO 2
let cardWhatsapp_2_pai = cardsWhatsapp[4]; //<li>
let cardWhatsapp_2 = cardWhatsapp_2_pai.children[0]; //<a>
cardWhatsapp_2.parentNode.removeChild(cardWhatsapp_2);

let ancorSubstitute_2 = document.createElement('a');
ancorSubstitute_2.setAttribute(
  'href',
  'https://api.whatsapp.com/send?phone=5511111111111',
);
ancorSubstitute_2.setAttribute('target', '_blank');

let strong_AncorSubstitute_2 = document.createElement('strong');
strong_AncorSubstitute_2.innerText = 'Serviços: ';
strong_AncorSubstitute_2.style.color = '#333';

let span_AncorSubstitute_2 = document.createElement('span');
span_AncorSubstitute_2.innerText = '+55 (11) 11111-1111';
span_AncorSubstitute_2.classList.add(
  'header-mobile__whatsapp-number',
  'text-mask-phone',
);

ancorSubstitute_2.append(strong_AncorSubstitute_2, span_AncorSubstitute_2);
cardWhatsapp_2_pai.insertBefore(
  ancorSubstitute_2,
  cardWhatsapp_2_pai.children[0],
);

//OPÇÃO 3
let cardWhatsapp_3_pai = cardsWhatsapp[5]; //<li>
let cardWhatsapp_3 = cardWhatsapp_3_pai.children[0]; //<a>
cardWhatsapp_3.parentNode.removeChild(cardWhatsapp_3);

let ancorSubstitute_3 = document.createElement('a');
ancorSubstitute_3.setAttribute(
  'href',
  'https://api.whatsapp.com/send?phone=5511973860742',
);
ancorSubstitute_3.setAttribute('target', '_blank');

let strong_AncorSubstitute_3 = document.createElement('strong');
strong_AncorSubstitute_3.innerText = 'Central de Vendas: ';
strong_AncorSubstitute_3.style.color = '#333';

let span_AncorSubstitute_3 = document.createElement('span');
span_AncorSubstitute_3.innerText = '+55 (11) 97386-0742';
span_AncorSubstitute_3.classList.add(
  'header-mobile__whatsapp-number',
  'text-mask-phone',
);

ancorSubstitute_3.append(strong_AncorSubstitute_3, span_AncorSubstitute_3);
cardWhatsapp_3_pai.insertBefore(
  ancorSubstitute_3,
  cardWhatsapp_3_pai.children[0],
);
