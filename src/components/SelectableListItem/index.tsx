import React from 'react';
import { Stack, ListItem } from '..';

export interface SelectableListItemProps {
  children: React.ReactNode;
  selectable: React.ReactNode;
}

export const SelectableListItem = ({
  children,
  selectable,
}: SelectableListItemProps): JSX.Element => {
  return (
    <Stack spacing={25} direction={'row'} padding={4} margin={4} border={'1px solid'}>
      {selectable}
      <ListItem width={'100%'}>{children}</ListItem>
    </Stack>
  );
};

export default SelectableListItem;
