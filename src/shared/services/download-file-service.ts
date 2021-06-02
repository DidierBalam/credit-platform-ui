import { generateId } from './idgenerator-service';

const downloadFile = (file: any) => {
  let element = document.createElement('a');
  element.setAttribute('href', file);
  element.setAttribute('download', generateId().toString());
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export { downloadFile };
