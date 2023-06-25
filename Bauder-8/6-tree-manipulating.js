// BEGIN
export default () => {
    const divs = document.querySelectorAll('div');
    divs.forEach(div => {
        const text = Array.from(div.childNodes).filter((node) => node instanceof Text);
        text.forEach(node => {
            if (node.textContent.trim() !== '') {
                const newNode = document.createElement('p');
                newNode.textContent = node.textContent.trim()
                node.replaceWith(newNode);
            }
        })
    })
}

// END