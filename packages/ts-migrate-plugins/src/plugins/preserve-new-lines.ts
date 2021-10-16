import { Plugin } from 'ts-migrate-server';

type Options = {};

const preserveNewLines: Plugin<Options> = {
  name: 'preserve-new-lines',
  async run({ text }) {
    return text.replace(/\n\n/g, "\n/** THIS_IS_A_NEWLINE **/\n")
  },
};

export default preserveNewLines;
