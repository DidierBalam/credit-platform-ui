import { ApplicationStatusOptions } from '../types/enum/applicaton-status-enum';

const translateStatusName = (status: string) : string => {
  let response = '';
  switch (status) {
    case ApplicationStatusOptions.ok:
      response = 'Aprobado';
      break;
    case ApplicationStatusOptions.waiting:
      response = 'Pendiente';
      break;
    case ApplicationStatusOptions.rejected:
      response = 'Rechazado';
      break;
    default:
      response = 'Desconocido';
      break;
  }
  return response;
};

export { translateStatusName };
