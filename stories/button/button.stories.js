export default {
    title: 'Button',
  };
  
  export const withText = ()=>"<button>classic button</button>"
  
  export const WithEmoji = () => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = 'Hello Button';
    btn.addEventListener('click', e => console.log(e));
    return btn;
  };
  