let formDiv = document.querySelector('.form-conversion__body'); //formulario

//TextField
let fieldsetTexts = formDiv.children[0];

let divInput = document.createElement('div');
divInput.classList.add('form-group');

let inputText = document.createElement('input');
inputText.classList.add('form-control');
inputText.setAttribute('name', 'message');
inputText.setAttribute('placeholder', 'Mensagem');
inputText.setAttribute('type', 'text');
inputText.setAttribute('data-bouncer-target', '#invalid-message');
inputText.setAttribute('required', '');

let divInputError = document.createElement('div');
divInputError.setAttribute('id', 'invalid-message');
divInputError.setAttribute('class', 'invalid-feedback');

divInput.append(inputText);
divInput.append(divInputError);
fieldsetTexts.append(divInput);

//Select

//fieldset
let fieldsetModelo = document.createElement('fieldset');

//legend
let legendModelo = document.createElement('legend');
legendModelo.setAttribute('class', 'conversion-form__control-label');
legendModelo.innerText = 'Modelo';

let divPai = document.createElement('div');
divPai.classList.add('form-check-inline', 'form-check');
fieldsetModelo.append(legendModelo, divPai);

// SUV
let divSuvFilho = document.createElement('div');
divSuvFilho.classList.add(
  'custom-check',
  'custom-check--light',
  'custom-check--radio',
);

let inputSuv = document.createElement('input');
inputSuv.setAttribute('type', 'radio');
inputSuv.classList.add('checkable');
inputSuv.setAttribute('value', 'sim');
inputSuv.setAttribute('name', 'suv');

let divSuvNeto = document.createElement('div');
divSuvNeto.setAttribute('class', 'custom-check__check');

let labelSuv = document.createElement('label');
labelSuv.innerText = 'Sedan';

divSuvFilho.append(inputSuv, divSuvNeto, labelSuv);

//Sedan
let divSedanFilho = document.createElement('div');
divSedanFilho.classList.add(
  'custom-check',
  'custom-check--light',
  'custom-check--radio',
);

let inputSedan = document.createElement('input');
inputSedan.setAttribute('type', 'radio');
inputSedan.classList.add('checkable');
inputSedan.setAttribute('value', 'sim');
inputSedan.setAttribute('name', 'suv');

let divSedanNeto = document.createElement('div');
divSedanNeto.setAttribute('class', 'custom-check__check');

let labelSedan = document.createElement('label');
labelSedan.innerText = 'SUV';

divSedanFilho.append(inputSedan, divSedanNeto, labelSedan);

//Hatch
let divHatchFilho = document.createElement('div');
divHatchFilho.classList.add(
  'custom-check',
  'custom-check--light',
  'custom-check--radio',
);

let inputHatch = document.createElement('input');
inputHatch.setAttribute('type', 'radio');
inputHatch.classList.add('checkable');
inputHatch.setAttribute('value', 'sim');
inputHatch.setAttribute('name', 'suv');

let divHatchNeto = document.createElement('div');
divHatchNeto.setAttribute('class', 'custom-check__check');

let labelHatch = document.createElement('label');
labelHatch.innerText = 'Hatch';

divHatchFilho.append(inputHatch, divHatchNeto, labelHatch);

//Pickup
let divPickupFilho = document.createElement('div');
divPickupFilho.classList.add(
  'custom-check',
  'custom-check--light',
  'custom-check--radio',
);

let inputPickup = document.createElement('input');
inputPickup.setAttribute('type', 'radio');
inputPickup.classList.add('checkable');
inputPickup.setAttribute('value', 'sim');
inputPickup.setAttribute('name', 'suv');

let divPickupNeto = document.createElement('div');
divPickupNeto.setAttribute('class', 'custom-check__check');

let labelPickup = document.createElement('label');
labelPickup.innerText = 'Pickup';

divPickupFilho.append(inputPickup, divPickupNeto, labelPickup);

formDiv.insertBefore(fieldsetModelo, formDiv.children[1]);
divPai.append(divSuvFilho, divSedanFilho, divHatchFilho, divPickupFilho);
