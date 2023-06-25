export default (document) => {
  // BEGIN
  const category = document.getElementsByTagName('h1')[0].textContent.trim();
  const categoryDescription = document.querySelector('.description').textContent.trim();
  const articleElements = document.querySelectorAll('.links > div');

  const articles = Array.from(articleElements).map(articleElement => {
    const title = articleElement.querySelector('h2 > a').textContent.trim();
    const description = articleElement.querySelector('p').textContent.trim();
    return { title, description };
  });

  return { title: category, description: categoryDescription, items: articles };
  // END
};
