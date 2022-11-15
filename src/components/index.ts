import { extendTheme } from '@chakra-ui/react';

export {
  List as ListComponent,
  ListItem,
  Box,
  Flex,
  Text,
  Spacer,
  Checkbox,
  ThemeProvider,
  VStack,
  Stack,
} from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'sans-serif',
      },
    },
  },
});

export { List } from './List';
export { SelectableListItem } from './SelectableListItem';
export { TextStack } from './TextStack';
