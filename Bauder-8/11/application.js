import 'whatwg-fetch';

export default () => {
  // BEGIN
  const inputs = Array.from(document.querySelectorAll('input[data-autocomplete]'));

  inputs.forEach((input) => {
    const autocompleteUrl = input.dataset.autocomplete;
    const autocompleteName = input.dataset.autocompleteName;
    const autocompleteList = document.querySelector(`ul[data-autocomplete-name="${autocompleteName}"]`);

    input.addEventListener('input', async (event) => {
      const searchQuery = event.target.value;

      try {
        const response = await fetch(`${autocompleteUrl}?search=${encodeURIComponent(searchQuery)}`);
        const countries = await response.json();

        if (countries.length > 0) {
          const countryListItems = countries.map((country) => `<li>${country}</li>`).join('');
          autocompleteList.innerHTML = countryListItems;
        } else {
          autocompleteList.innerHTML = '<li>Nothing</li>';
        }
      } catch (error) {
        throw new Error(error);
      }
    });
  });
  // END
};
