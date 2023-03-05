
const members = ['Lars', 'Jan', 'Peter', 'Bo', 'Frederik'];
members.map(member => member.toUpperCase()).forEach(member => console.log(member));


const names = ["Lars", "Peter", "Jan", "Ian"];
const nameListHtml = createNameList(names);

function createNameList(names) {
  const listItems = names.map(name => `<li>${name}</li>`);
  const listHtml = `<ul>${listItems.join("")}</ul>`;
  return listHtml;
}

console.log(nameListHtml);