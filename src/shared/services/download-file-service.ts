import { generateId } from '../../core/services/idgenerator-service';

const downloadFile = (file: any) : void => {
  const element = document.createElement('a');
  element.setAttribute('href', file);
  element.setAttribute('download', generateId().toString());
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export { downloadFile };
