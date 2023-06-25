// BEGIN
const calc = () => {
    const plusBtn = document.querySelector('[type="submit"]');
    const resetBtn = document.querySelector('[type="button"]')

    const form = document.querySelector('input[type="number"]')

    const resultSumm = document.getElementById('result');

    let summ = 0;

    form.focus();

    if (!plusBtn) {
        return 'Не найден кнопка plus';
    }
    if (!resetBtn) {
        return 'Не найдена кнопка reset';
    }
    if (!form) {
        return 'Не найдено поле ввода';
    }

    const resetFormAndChangeSumm = () => {
        form.value = '';
        form.focus();
        resultSumm.innerHTML = summ;
    }

    plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        summ = summ + +form.value;
        resetFormAndChangeSumm();
    })

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();
        summ = 0;
        resetFormAndChangeSumm();
    })

}

export default calc;
// END