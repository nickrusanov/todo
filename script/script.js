const listNode = document.querySelector('.task-list');
const inputNode = document.querySelector('.task-input');
const addNode = document.querySelector('.task-add');
const taskNode = document.querySelector('.task');
const formNode = document.querySelector('.task-form');

const todoList = new Array();
let idCount = 0;

const todoShow = () => {
	let html = '';

	todoList.forEach(el => {
		el.done
			? html += `<button class="task task--complite" data-id="${el.id}">${el.text}</button>`
			: html += `<button class="task" data-id="${el.id}">${el.text}</button>`
	})

	listNode.innerHTML = html;
}

const todoAdd = (text) => {
	const todoNewItem = {
		text,
		done: false,
		id: idCount++,
	}

	todoList.push(todoNewItem);
}

const todoDel = (id) => {
	todoList.forEach(el => {
		if (`${el.id}` === id) {


			el.done = !el.done;
		}
	})
}

addNode.addEventListener('click', () => {
	if (inputNode.value) {
		todoAdd(inputNode.value);
		inputNode.value = '';
		todoShow();
	}
})

listNode.addEventListener('click', (event) => {
	if (event.target.tagName !== 'BUTTON' && event.target.tagName !== 'S') {
		return;
	} else {
		todoDel(event.target.dataset.id);
		todoShow();
	}
})

formNode.addEventListener('submit', () => {
	if (inputNode.value) {
		todoAdd(inputNode.value);
		inputNode.value = '';
		todoShow();
	}
	return false
})