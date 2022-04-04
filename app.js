const root = document.querySelector('#root');
root.innerHTML = `
    <header>
        Todo list
    </header>
    <div class="content">
        <ul class="list-box">
        </ul>
    </div>
    <footer>
        <input placeholder="Anything input" type="text"/>
        <button id="submit-button">Submit</button>
        <button id="remove-button">All remove</button>
    </footer>
`;

window.onload = () => {
  document.querySelector('#submit-button').addEventListener('click', () => {
    if (!document.querySelector('input').value) {
      console.log('Non-data');
    } else {
      const value = document.querySelector('input').value;
      document.querySelector('input').value = ''; // Initization
      const targetList = document.querySelector('.list-box');
      const list = document.createElement('li');
      const contentList = document.createTextNode(value);
      list.append(contentList);
      targetList.append(list);
      // 수정 필요
      document.querySelectorAll('li').forEach(a =>
        a.addEventListener('click', e => {
          const element = e.target;
          element.parentNode.removeChild(element);
        })
      );
    }
  });
  document.querySelector('#remove-button').addEventListener('click', () => {
    if (document.querySelector('.list-box')) {
      document.querySelector('.list-box').innerHTML = ``;
    }
  });
};
