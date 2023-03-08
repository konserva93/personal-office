export type ServiceGroupInfo = {
  id: UniqueId;
  title: string;
};

export type ServiceGroup = ServiceGroupInfo & {
  content: ContentArea;
  widgets: Widget[];
};

export type ContentItem = ContentArea | WidgetBinding;

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

export type WidgetBinding = {
  name: string;
  minWidth?: string;
};

export function isWidgetBinding(item: ContentItem): item is WidgetBinding {
  const binding = item as WidgetBinding;
  return (
    typeof binding.name !== 'undefined'
  );
}

type TextWidgetProperties = {
  type: 'text';
};

type TextWithButtonWidgetProperties = {
  type: 'textWithButton';
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

type ListWidgetProperties = {
  type: 'list';
};

type SupportedWidgetProperties = TextWidgetProperties | TextWithButtonWidgetProperties | ButtonsWidgetProperties | ListWidgetProperties;

export type Widget = {
  name: string;
  title: string;
  url: string;
  properties: SupportedWidgetProperties;
};

export function isTextWidgetProperties(properties: SupportedWidgetProperties): properties is TextWidgetProperties {
  const textWidgetProperties = properties as TextWidgetProperties;
  return (
    typeof textWidgetProperties.type !== 'undefined' &&
    textWidgetProperties.type === 'text'
  );
}

export function isTextWithButtonWidgetProperties(properties: SupportedWidgetProperties): properties is TextWithButtonWidgetProperties {
  const textWithButtonProperties = properties as TextWithButtonWidgetProperties;
  return (
    typeof textWithButtonProperties.type !== 'undefined' &&
    textWithButtonProperties.type === 'textWithButton' &&
    typeof textWithButtonProperties.button !== 'undefined' &&
    typeof textWithButtonProperties.button.caption !== 'undefined'
  );
}

export function isListWidgetProperties(properties: SupportedWidgetProperties): properties is ListWidgetProperties {
  const listWidgetProperties = properties as ListWidgetProperties;
  return (
    typeof listWidgetProperties.type !== 'undefined' &&
    listWidgetProperties.type === 'list'
  );
}
