import React from 'react';
import { ThemeProvider, Flex, theme } from './components';
import { SelectedItems, SelectableList } from './containers';
import { RecoilRoot } from './state';

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Flex justify={'start'} align={'center'} direction={'column'}>
        <RecoilRoot>
          <SelectedItems />
          <SelectableList />
        </RecoilRoot>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
