import React from 'react';
import { Text } from '../../components';
import { selectedListItemsAtom, useRecoilValue } from '../../state';

export const SelectedItems = () => {
  const selectedItems = useRecoilValue(selectedListItemsAtom);

  console.log('Selected items rendered');

  return (
    <Text
      position={'sticky'}
      top={0}
      w={'100%'}
      h={'10vh'}
      background={'white'}
      backdropFilter={'blur(100px)'}
      fontSize={'xl'}
      color={'purple'}
      textAlign={'center'}
      zIndex={2}
    >
      Selected Items: {[...selectedItems].join(' ')}
    </Text>
  );
};

export default SelectedItems;
