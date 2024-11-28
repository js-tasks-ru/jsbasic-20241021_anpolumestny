function hideSelf() {
  document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('hide-self-button')) {
      return;
    }
    event.target.hidden = true;
  });
}
