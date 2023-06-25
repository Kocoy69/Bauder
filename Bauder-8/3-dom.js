// BEGIN
const textToParagraph = () => {
    const bodyContent = document.body.innerHTML.trim();
    const wrappedContent = bodyContent.replace(/(.+)/g, '<p>$1</p>');
    document.body.innerHTML = wrappedContent;
  }
  
  textToParagraph();
// END