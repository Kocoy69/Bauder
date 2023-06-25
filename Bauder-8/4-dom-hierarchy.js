// BEGIN
function extractParagraphsContent(documentElement) {
    const paragraphs = [...documentElement.querySelectorAll('p')];
    return paragraphs.map(p => p.textContent.trim());
}

export default extractParagraphsContent;
// END