// ************ Модальное окно ****************** //
const modalController = ({modal, btnOpen, btnClose}) => {
  const buttonElems = document.querySelectorAll(btnOpen)
  const modalElem = document.querySelector(modal)

  modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opasity: 0;
    transition: opasity 300ms ease-in-out;
  `;

  const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest(btnClose)) {
      
      modalElem.style.opacity = 0;

      setTimeout(() => {
        modalElem.style.visibility = 'hidden';
      }, 300)
    }
  };

  const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
  };

  buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
  })

  modalElem.addEventListener('click', closeModal);
};

modalController({
  modal: '.modal1',
  btnOpen: '.section__button1',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal2',
  btnOpen: '.section__button2',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal3',
  btnOpen: '.section__button3',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal4',
  btnOpen: '.section__button4',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal5',
  btnOpen: '.section__button5',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal6',
  btnOpen: '.section__button6',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal7',
  btnOpen: '.section__button7',
  btnClose: '.modal__close'
});

modalController({
  modal: '.modal8',
  btnOpen: '.section__button8',
  btnClose: '.modal__close'
});

// **************************************************** //
