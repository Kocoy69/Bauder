import uniqueId from 'lodash/uniqueId.js';

// BEGIN

const render = (about, elements, elementToRender) => {
    if (elementToRender === 'tasks') {
        elements.tasksContainer.innerHTML = '';
        const filteredTasks = about.tasks.filter(({ listId }) => listId === about.current);
    
        if (filteredTasks.length === 0) {
            return;
        }
    
        const ul = document.createElement('ul');
    
        filteredTasks.forEach(({ name }) => {
            const li = document.createElement('li');
            li.textContent = name;
            ul.append(li);
        });
    
        elements.tasksContainer.append(ul);
    } else if (elementToRender === 'lists') {
        elements.listsContainer.innerHTML = '';
        const ul = document.createElement('ul');

        about.lists.forEach(({ number, name }) => {
        const li = document.createElement('li');
        let listItemContent;
    
        if (number === about.current) {
            listItemContent = document.createElement('b');
            listItemContent.textContent = name;
        } else {
            listItemContent = document.createElement('a');
            listItemContent.setAttribute('href', `#${name.toLowerCase()}`);
            listItemContent.textContent = name;
            listItemContent.addEventListener('click', (e) => {
                e.preventDefault();
                about.current = number;
                render(about, elements, 'lists');
                render(about, elements, 'tasks');
            });
        }
    
        li.append(listItemContent);
        ul.append(li);
        });
        
        elements.listsContainer.append(ul);
    }
    
};


const todolist = () => {
    const number = uniqueId();
    const about = {
        current: number,
        lists: [{ number: number, name: 'General' }],
        tasks: [],
    };

    const elements = {
        listsContainer: document.querySelector('[data-container="lists"]'),
        tasksContainer: document.querySelector('[data-container="tasks"]'),
    };
    
    const newListForm = document.querySelector('[data-container="new-list-form"]');
    const newTaskForm = document.querySelector('[data-container="new-task-form"]');

    render(about, elements, 'lists');
    render(about, elements, 'tasks');
    
    newListForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const value = e.target.querySelector('input').value;

        const list = { number: uniqueId(), name: value };
        form.reset();
        form.focus();

        let t = true;
        for (let item of about.lists) {
            if (item.name === value) {
                t = false;
            }
        }
        if (t) {
            about.lists.push(list);
        }


        render(about, elements, 'lists');
    });

    newTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.target);
        const task = { number: uniqueId(), name: e.target.querySelector('input').value, listId: about.current };
        e.target.reset();
        e.target.focus();
        about.tasks.push(task);
        render(about, elements, 'tasks');
    });

    
};

export default todolist;
// END