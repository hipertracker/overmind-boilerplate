import { Context } from '../overmind';

export const onInitializeOvermind = ({ state }: Context): void => {
  state.counter = 10;
}

export const inc = ({ state }: Context): void => {
  state.counter += 1;
};

export const dec = ({ state }: Context): void => {
  state.counter -= 1;
};
