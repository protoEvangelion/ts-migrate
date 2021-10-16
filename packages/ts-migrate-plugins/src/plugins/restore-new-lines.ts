import { Plugin } from 'ts-migrate-server';

type Options = {};

const restoreNewLines: Plugin<Options> = {
  name: 'restore-new-lines',
  async run({ text }) {
    return text.replace(/ *\/\*\* THIS_IS_A_NEWLINE \*\*\//g, '');
  },
};

export default restoreNewLines;
