const active = (element) => {
  console.log(element);

  for (let o = Pessoas.children.length; o > 0; o--) {

    Pessoas.childNodes[o].firstChild.classList.remove('active');

  };
  
  element.classList.add('active');
};

console.log(Pessoas.childNodes);
