function toggleText() {
  let button = document.getElementsByClassName('toggle-text-button')[0];
  let text = document.getElementById('text');
  function action() {
    if (text.hidden === false) {
      text.hidden = true;
    } else {
      text.hidden = false;
    }
  }

  button.addEventListener('click', action);
}

