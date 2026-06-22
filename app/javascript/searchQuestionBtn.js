document.addEventListener('turbo:load', () => {
  const searchQuestionBtn = document.getElementById('search-question');
  const modal = document.getElementById('modal');
  const modalCloseBtn = document.getElementById('modal-close');

  searchQuestionBtn.addEventListener('click', () => {
    modal.classList.add('active');
  })

  modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  })
})