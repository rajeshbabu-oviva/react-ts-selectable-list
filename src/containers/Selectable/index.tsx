import React from 'react';
import { Checkbox } from '../../components';
import { selectedListItemsAtom, useSetRecoilState } from '../../state';

export interface SelectableProps {
  index: number;
}

export const Selectable = ({ index }: SelectableProps) => {
  const setSelectedItems = useSetRecoilState(selectedListItemsAtom);

  console.log('Selectable rendered ');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedItems((val) => new Set(val).add(index));
    } else {
      setSelectedItems((val) => {
        val.delete(index);
        return new Set(val);
      });
    }
  };

  return (
    <Checkbox
      size={'md'}
      borderColor={'purple'}
      colorScheme={'purple'}
      onChange={handleChange}
    ></Checkbox>
  );
};

export default Selectable;
