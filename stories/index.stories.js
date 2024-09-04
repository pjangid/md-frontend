import '../src/styles/tailwind/output.css'

export default {
  title: 'Something Else',
};

export const Simple = () => {
  const defaultButton=document.createElement('button')
  defaultButton.type="button";
  defaultButton.innerText="Default Button"
  return defaultButton
};

export const WithEmoji = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.className += "oic-bg-blue-500 hover:oic-bg-blue-700 oic-text-white oic-font-bold oic-py-2 oic-px-4 oic-rounded";

  btn.addEventListener('click', e => console.log(e));
  return btn;
};
