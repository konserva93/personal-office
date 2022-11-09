export type ServiceGroupInfo = {
  id: UniqueId;
  title: string;
};

type ContentItem = ContentArea | Widget;

type FlexArea = {
  type: 'flex';
  direction: 'row' | 'column';
  items: ContentItem[];
};

export function isFlexArea(area: ContentArea): area is FlexArea {
  const flexArea = area;
  return (
    typeof flexArea.type !== 'undefined' &&
    flexArea.type === 'flex' &&
    typeof flexArea.direction !== undefined &&
    (flexArea.direction === 'row' || flexArea.direction === 'column') &&
    typeof flexArea.items !== 'undefined'
  );
}

export type ContentArea = FlexArea; // add new area types here e.g. grid

type Widget = {
  title: string;
};

export function isWidget(item: ContentItem): item is Widget {
  return typeof (item as Widget).title !== 'undefined';
}

export type ServiceGroup = ServiceGroupInfo & {
  content: ContentArea;
};
