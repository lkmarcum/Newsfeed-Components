// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

// class Article {
//   constructor(domElement) {
//     // assign this.domElement to the passed in domElement
//     this.domElement;
//     // create a reference to the ".expandButton" class.
//     this.expandButton;
//     // Using your expandButton reference, update the text on your expandButton to say "expand"

//     // Set a click handler on the expandButton reference, calling the expandArticle method.

//   }

//   expandArticle() {
//     // Using our reference to the domElement, toggle a class to expand or hide the article.

//   }
// }

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

// let articles;

const articleData = [
  {
    title: `Lambda School Students: "We're the best!"`,
    date: "Nov 5th, 2017",
    content: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
    moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff. Darth grievous darth gonk darth hutt. Darth baba skywalker
    watto fett jango maul han. Mon ewok sidious sidious lando kenobi grievous gamorrean solo. Yoda wedge utapau darth calamari.
    Hutt calamari darth jabba. Darth dooku amidala organa moff. Boba darth binks solo hutt skywalker dantooine skywalker. Qui-gonn
    jar twi'lek jinn leia jango skywalker mon.`
  },
  {
    title: `Javascript and You, ES6`,
    date: "Nov 7th, 2017",
    content: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
    Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
    snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
    yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
    knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
    Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks.`
  },
  {
    title: `React vs Angular vs Vue`,
    date: "Nov 7th, 2017",
    content: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
    elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
    consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
    sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
    ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
    elit.`
  },
  {
    title: `Professional Software Development in 2018`,
    date: "Nov 7th, 2017",
    content: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
    hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
    Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor?`
  }
];

const articles = document.querySelector(".articles");

articleData.forEach(data => {
  articles.appendChild(createArticle(data.title, data.date, data.content));
});

function createArticle(title, date, content) {
  // define elements
  const article = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const articleContent = document.createElement("p");
  const articleButton = document.createElement("span");

  // structure elements
  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(articleContent);
  article.appendChild(articleButton);

  // set class names
  article.classList.add("article");
  articleDate.classList.add("date");
  articleButton.classList.add("expandButton");

  // set content
  articleTitle.textContent = title;
  articleDate.textContent = date;
  articleContent.textContent = content;
  articleButton.textContent = "Click to Expand";

  // button events
  articleButton.addEventListener("click", event => {
    article.classList.toggle("close");
    article.classList.toggle("article-open");
    if (article.classList.contains("article-open")) {
      articleButton.textContent = "Click to Close";
    } else {
      articleButton.textContent = "Click to Expand";
    }
  });

  return article;
}
