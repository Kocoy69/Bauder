// BEGIN
export default (items) => {

    const result = document.querySelector('.container');

    const btns = [];
    items.forEach(item => {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.classList.add('btn-primary');
        btn.innerHTML = item.name;

        btn.setAttribute('data-description', item.description);

        btns.push(btn);
    })

    btns.forEach(btn => {
        result.appendChild(btn);
    })

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            const descrContainer = document.createElement('div');
            descrContainer.textContent = event.target.dataset.description;

            if (result.querySelector('div')) {
                if (result.querySelector('div').innerHTML == descrContainer.innerHTML) {
                    result.querySelector('div').remove()
                } else {
                    result.querySelector('div').textContent = descrContainer.innerHTML;
                }
            } else {
                result.appendChild(descrContainer);
            }
        })
    })



}
// END