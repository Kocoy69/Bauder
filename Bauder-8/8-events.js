export default () => {
  // BEGIN
  const alertGenerator = document.querySelector('#alert-generator');
  const alerts = document.querySelector('.alerts');
  let counter = 1;
  
  alertGenerator.addEventListener('click', () => {
    const newAlert = document.createElement('div');
    newAlert.textContent = `Alert ${counter}`;
    newAlert.classList = 'alert alert-primary';
  
    alerts.prepend(newAlert);
    counter++;
  });
  // END
};