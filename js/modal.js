const openButtons = document.querySelectorAll('.modal-open-btn');

openButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal-id');
    openModal(modalId);
  });
});

const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    const modalId = modal.getAttribute('id');
    closeModal(modalId);
  });
});

const openModal = modalId => {
  document.body.style.overflow = 'hidden';

  const modal = document.getElementById(modalId);
  modal.classList.add('is-show');

  const modalContent = modal.querySelector('.modal-content');
  if (modalContent.scrollHeight > modalContent.clientHeight) {
    modalContent.style.overflowY = 'scroll';
  }

  const focusableElements = modalContent.querySelectorAll('button, input, select ,textarea ,a[href], [tabindex]:not([tabindex="-1])');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  const outsideFocusableElements = document.querySelectorAll(
    'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
  );
  outsideFocusableElements.forEach(element => {
    if (!modal.contains(element)) {
      element.setAttribute('tabindex', '-1');
    }
  });

  firstFocusableElement.focus();

  lastFocusableElement.addEventListener('keydown', function(e) {
    if(e.key === 'Tab' && ! e.shiftKey) {
      e.preventDefault();
      firstFocusableElement.focus();
    }
  });

  firstFocusableElement.addEventListener('keydown', function(e) {
    if(e.key === 'Tab' && e.shiftKey) {
      e.preventDefault();
      firstFocusableElement.focus();
    }
  });
}

const closeModal = modalId => {

  document.body.style.overflow = 'auto';

  const modal = document.getElementById(modalId);
  modal.classList.remove('is-show');

  const outsideFocusableElements = document.querySelectorAll(
    'button, input, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
  );
  outsideFocusableElements.forEach(element => {
    if (!modal.contains(element)) {
      element.removeAttribute('tabindex');
    }
  });
}

