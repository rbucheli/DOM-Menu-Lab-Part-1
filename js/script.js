// Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

for (let i = 0; i < menuLinks.length; i++) {
  let anchor = document.createElement('a');
  anchor.setAttribute('href', menuLinks[i].href);
  anchor.textContent = menuLinks[i].text;
  const topMenuEl = document.getElementById('top-menu');
  topMenuEl.append(anchor)
  // if(menuLinks[i = 'about'])

}

// menuLinks.forEach(element => console.log(element));
// Function must include output  


const mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Am I adding a new class, or am I trying to select a pre-existing one?

mainEl.classList.add('flex-ctr');

const topMenuEl = document.querySelector('nav');
console.log(topMenuEl);

topMenuEl.style = "height:100%;background-color:var(--top-menu-bg)"

// topMenuEl.style.height = 'var(100%)';

// topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList.add('flex-around');


// const link = document.querySelector('a');
// console.log('a');