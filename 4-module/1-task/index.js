function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  document.body.append(ul);
  for (let item of friends) {
    let li = document.createElement('li');
    li.innerHTML = `${item.firstName} ${item.lastName}`;
    ul.append(li);
  }
  return ul;
}