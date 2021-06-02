import { FormType } from '@/shared/types/form-types';

const dynamicForm: FormType = {
  data: [
    {
      sectionId: 1,
      sectionName: 'Información del representante legal',

      fields: [
        {
          fieldId: 1,
          type: 'string',
          key: 'name',
          label: 'Nombre',
          value: '',
        },
        {
          fieldId: 2,
          type: 'string',
          key: 'last_name',
          label: 'Primer apellido',
          value: '',
        },
      ],
      subgroups: [
        {
          subgroupId: 1,
          name: 'Dirección',
          description: 'Agrega la dirección de tu casa',
          fields: [
            {
              fieldId: 1,
              type: 'string',
              key: 'street',
              label: 'Calle',
              value: '',
            },
            {
              fieldId: 2,
              type: 'string',
              key: 'interior_number',
              label: 'No interior',
              value: '',
            },
            {
              fieldId: 3,
              type: 'string',
              key: 'exterior_number',
              label: 'No exterior',
              value: '',
            },
            {
              fieldId: 4,
              type: 'dropdown',
              catalog: 'states',
              key: 'state_address',
              label: 'Estado',
              value: '',
              options: [
                {
                  fieldOptionId: 1,
                  name: 'Yucatán',
                },
                {
                  fieldOptionId: 2,
                  name: 'Monterrey',
                },
                {
                  fieldOptionId: 3,
                  name: 'Guadalajara',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      sectionId: 2,
      sectionName: 'Documentos',
      fields: [
        {
          fieldId: 1,
          type: 'file',
          key: 'indentification_oficial',
          label: 'Identificación oficial',
          value: '',
        },
        {
          fieldId: 2,
          type: 'file',
          key: 'comprobante_domicilio',
          label: 'Comprobante de domicilio',
          value: '',
        },
      ],
      subgroups: [],
    },
    {
      sectionId: 3,
      sectionName: 'Información financiera',
      fields: [
        {
          fieldId: 1,
          type: 'file',
          key: 'statement',
          label: 'Estado de cuenta',
          value: '',
        },
        {
          fieldId: 2,
          type: 'amount',
          key: 'amounts',
          label: 'Ingresos anuales',
          value: 1000,
        },
      ],
      subgroups: [],
    },
  ],
};

export { dynamicForm };
