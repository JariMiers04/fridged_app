/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Shopping: {
            screens: {
              Shopping: 'Shopping',
            },
          },
          Recipes: {
            screens: {
              Recipes: 'Recipes',
            },
          },
          Home: {
            screens: {
              Home: '',
            }
          },
          Nutrition: {
            screens: {
              Nutrition: 'Nutrition',
            }
          },
          Account: {
            screens: {
              Account: 'Account'
            }
          }
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
