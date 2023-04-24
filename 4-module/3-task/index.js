function highlight(table) {
  for (let tr of table.children[1].rows) {
    let age = +tr.cells[1].textContent;
    if (age < 18) {
      tr.style.textDecoration = 'line-through';
    }

    let gender = tr.cells[2].textContent;
    if (gender === 'm') {
      tr.classList.add('male');
    } else if (gender === 'f') {
      tr.classList.add('female');
    }

    let elem = tr.cells[3];
    if (elem.getAttribute('data-available') === 'true') {
      tr.classList.add('available');
    } else if (elem.getAttribute('data-available') === 'false') {
      tr.classList.add('unavailable');
    } else {
      tr.hidden = true;
    }
  }
}

