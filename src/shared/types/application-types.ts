type ApplicationType = {
  applicationId: number;
  userId?: number;
  status?: string;
  create?: Date;
  update?: Date;
  data: ApplicationSectionType[];
};

type ApplicationSectionType = {
  sectionId: number;
  sectionName: string;
  fields: ApplicationFieldType[];
  subgroups: ApplicationSubgroupType[];
};

type ApplicationSubgroupType = {
  subgroupId: number;
  name: string;
  fields: ApplicationFieldType[];
};

type ApplicationFieldType = {
  fieldId: number;
  type?: string;
  name?: string;
  value?: any;
  file?: any;
};

export {
  ApplicationType,
  ApplicationSectionType,
  ApplicationSubgroupType,
  ApplicationFieldType,
};
