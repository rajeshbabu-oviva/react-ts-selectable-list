import React from 'react';
import { ListComponent } from '..';

export type ListProps<T> = {
  list: T[];
  renderListItem: (item: T, index: number) => React.ReactNode;
};

export const List = <T,>(props: ListProps<T>): JSX.Element => {
  const { list, renderListItem } = props;

  return <ListComponent width={'50%'}>{list.map(renderListItem)}</ListComponent>;
};

export default List;
