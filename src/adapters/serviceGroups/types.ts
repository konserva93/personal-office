import { ContentArea } from '@adapters/serviceGroups/types/contentAreas';

export type ServiceGroupInfo = {
  id: UniqueId;
  title: string;
};

export type ServiceGroup = ServiceGroupInfo & {
  content: ContentArea;
};
