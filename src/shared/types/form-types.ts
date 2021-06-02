type FormType = {
  data: FormSectionType[];
};


type FormSectionType = {
  sectionId: number;
  sectionName: string;
  fields: FormFieldType[];
  subgroups: FormSubgroupType[];
};

type FormSubgroupType = {
  subgroupId: number;
  name: string;
  description: string;
  fields: FormFieldType[];
};

type FormFieldType = {
  fieldId: number;
  type?: string;
  key?: string;
  catalog?: string;
  label?: string;
  value?: any;
  file?: any;
  options?: FieldOption[];
};

type FieldOption = {
  fieldOptionId: number;
  name: string;
};

export { FormType, FormSectionType, FormSubgroupType, FormFieldType, FieldOption };
