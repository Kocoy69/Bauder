export default function initializeTabs() {
  const tabWraps = Array.from(document.querySelectorAll('.row'));

  function handleClick(event) {
    event.preventDefault();

    const tab = event.target;
    const tabList = tab.closest('.row');
    const activeTab = tabList.querySelector('.nav-link.active');
    const activeContent = tabList.querySelector('.tab-pane.active');
    const targetTab = tabList.querySelector(tab.dataset.bsTarget);

    activeTab.classList.remove('active');
    activeContent.classList.remove('active');
    targetTab.classList.add('active');
    tab.classList.add('active');
  }

  tabWraps.forEach((tabWrap) => {
    const tabs = Array.from(tabWrap.querySelectorAll('[role="tab"]'));
    tabs.forEach((tab) => {
      tab.addEventListener('click', handleClick);
    });
  });
}
