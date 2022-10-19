export type ServiceGroupInfo = {
  id: UniqueId;
  title: string;
};

type FlexArea = {
  type: 'flex';
  direction: 'row' | 'column';
  items: Array<ContentArea | Widget>;
};

export type ContentArea = FlexArea; // add new area types here e.g. grid

type Widget = {
  title: string;
};

export type ServiceGroup = ServiceGroupInfo & {
  content: ContentArea;
};
