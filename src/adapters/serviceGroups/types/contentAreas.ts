export type ContentItem = ContentArea | Widget;

type FlexArea = {
  type: 'flex';
  direction: 'row' | 'column';
  items: ContentItem[];
};

type GridArea = {
  type: 'grid';
  rows: number;
  columns: number;
};

export function isFlexArea(area: ContentArea): area is FlexArea {
  const flexArea = area as FlexArea;
  return (
    typeof flexArea.type !== 'undefined' &&
    flexArea.type === 'flex' &&
    typeof flexArea.direction !== undefined &&
    (flexArea.direction === 'row' || flexArea.direction === 'column') &&
    typeof flexArea.items !== 'undefined'
  );
}

export type ContentArea = FlexArea | GridArea; // add new area types here e.g. grid

type TextWidgetProperties = {
  type: 'text';
  url: string;
};

type TextWithButtonWidgetProperties = {
  type: 'textWithButton';
  url: string;
  button: {
    caption: string;
  };
};

type ButtonsWidgetProperties = {
  type: 'buttons';
  buttons: Array<{
    caption: string;
    type: 'plain' | 'tile';
  }>;
};

type SupportedWidgetProperties = TextWidgetProperties | TextWithButtonWidgetProperties | ButtonsWidgetProperties;

export type Widget = {
  title: string;
  properties: SupportedWidgetProperties;
};

export function isTextWidgetProperties(properties: SupportedWidgetProperties): properties is TextWidgetProperties {
  const textWidgetProperties = properties as TextWidgetProperties;
  return (
    typeof textWidgetProperties.type !== 'undefined' &&
    textWidgetProperties.type === 'text' &&
    typeof textWidgetProperties.url !== 'undefined' &&
    textWidgetProperties.url !== undefined
  );
}

export function isWidget(item: ContentItem): item is Widget {
  return typeof (item as Widget).title !== 'undefined';
}
