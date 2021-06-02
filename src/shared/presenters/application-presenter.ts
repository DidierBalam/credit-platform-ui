import {
  ApplicationFieldType,
  ApplicationSectionType,
  ApplicationSubgroupType,
} from '../types/application-types';
import { FormType } from '../types/form-types';

const getFormData = async (
  form: FormType
): Promise<ApplicationSectionType[]> => {
  return new Promise((resolve) => {
    resolve(
      form.data.map(
        (x): ApplicationSectionType => {
          return {
            sectionId: x.sectionId,
            sectionName: x.sectionName,
            fields: x.fields.map(
              (y): ApplicationFieldType => {
                return {
                  fieldId: y.fieldId,
                  type: y.type,
                  name: y.label,
                  value: y.value,
                  file: y.file,
                };
              }
            ),
            subgroups: x.subgroups.map(
              (w): ApplicationSubgroupType => {
                return {
                  subgroupId: w.subgroupId,
                  name: w.name,
                  fields: w.fields.map(
                    (z): ApplicationFieldType => {
                      return {
                        fieldId: z.fieldId,
                        type: z.type,
                        name: z.label,
                        value: z.value,
                        file: z.file,
                      };
                    }
                  ),
                };
              }
            ),
          };
        }
      )
    );
  });
};

export { getFormData };
