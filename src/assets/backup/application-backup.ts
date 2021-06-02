import { ApplicationType } from '@/shared/types/application-types';

const applications: ApplicationType[] = [
  {
    applicationId: 730276020,
    data: [
      {
        sectionId: 1,
        sectionName: 'Información del representante legal',
        fields: [
          {
            fieldId: 1,
            type: 'string',
            name: 'Nombre',
            value: 'Didier',
          },
          {
            fieldId: 2,
            type: 'string',
            name: 'Primer apellido',
            value: 'Balam',
          },
        ],
        subgroups: [
          {
            subgroupId: 1,
            name: 'Dirección',
            fields: [
              {
                fieldId: 1,
                type: 'string',
                name: 'Calle',
                value: '5 x 2 y 4',
              },
              {
                fieldId: 2,
                type: 'string',
                name: 'No interior',
                value: 'sn',
              },
              {
                fieldId: 3,
                type: 'string',
                name: 'No exterior',
                value: 'sn',
              },
              {
                fieldId: 4,
                type: 'dropdown',
                name: 'Estado',
                value: 'Yucatán',
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
            name: 'Identificación oficial',
            value: 'BalamCauich.15070005.pdf',
            file:
          },
          {
            fieldId: 2,
            type: 'file',
            name: 'Comprobante de domicilio',
            value: 'Didier_Balam_CV.pdf',
            file:
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
            name: 'Estado de cuenta',
            value: 'Dialnet-SoftwareLibre-4851907.pdf',
            file:
          },
          {
            fieldId: 2,
            type: 'amount',
            name: 'Ingresos anuales',
            value: 1000,
          },
        ],
        subgroups: [],
      },
    ],
    create: new Date('March 8, 2021 11:13:00'),
    status: 'waiting',
  },
];

export { applications };