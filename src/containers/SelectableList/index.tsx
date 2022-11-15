import React from 'react';
import { SelectableListItem, List, TextStack } from '../../components';
import { listAtom, useRecoilValue } from '../../state';
import { Selectable } from '../Selectable';

export const SelectableList = () => {
  const list = useRecoilValue(listAtom);

  console.log('Selectable list rendered');

  return (
    <List
      list={list}
      renderListItem={(listItemData, index) => (
        <SelectableListItem key={index} selectable={<Selectable index={index} />}>
          <TextStack content={Object.values(listItemData)} />
        </SelectableListItem>
      )}
    />
  );
};

export default SelectableList;
