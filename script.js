function addItem() {
    var newItem = document.getElementById('newItem').value;

    if (newItem.trim() !== '') {
        var li = document.createElement('li');
        li.textContent = newItem;

        document.getElementById('shoppingList').appendChild(li);

        document.getElementById('newItem').value = '';
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addItem();
    }
}
