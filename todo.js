document.querySelector(`.btn`).addEventListener('click', function () {
    const inputField = document.querySelector('.input');
    const inputValue = inputField.value;
    const todoParent = document.querySelector(`.list-disc`);
    const createLi = document.createElement('li');
    createLi.innerText = inputValue;
    createLi.classList.add('text-lg');
    createLi.classList.add('font-extrabold');
    createLi.classList.add('child');
    createLi.classList.add('list-item');
    todoParent.appendChild(createLi);
    inputField.value = '';
})
document.querySelector('.btn-warning').addEventListener('click', function () {
    const todoParent = document.querySelector(`.list-disc`);
    const todoChild = document.querySelectorAll('.list-item');
    if (todoChild.length > 0) {
        const lastItem = todoChild[0];
        todoParent.removeChild(lastItem);
    }
})