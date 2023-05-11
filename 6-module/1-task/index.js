/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
    this.tHead = document.createElement('thead');
    this.elem.append(this.tHead);
    this.tHead.insertAdjacentHTML('beforeEnd', '<tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>');

    for (let item of this.rows) {
      this.elem.insertAdjacentHTML('beforeEnd', `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><button class = 'button'>X</button></td></tr>`);
    }

    this.elem.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        event.target.closest('tr').remove();
      }
    })


  }

}
