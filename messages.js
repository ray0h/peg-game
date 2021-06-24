export const createMessage = (msg='') => {
  let container = document.getElementById('message');
  container.textContent = msg;
};

