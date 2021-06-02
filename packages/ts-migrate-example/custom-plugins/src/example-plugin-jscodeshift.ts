import jscodeshift from 'jscodeshift';
import { Plugin } from 'ts-migrate-server';
import {parse, print} from 'recast'
import {parseSync} from '@babel/core'
type Options = {};

const j = jscodeshift.withParser('tsx');

const examplePluginJscodeshift: Plugin<Options> = {
  name: 'example-plugin-jscodeshift',
  async run({ text }) {
    const root = j(text);
    root
      .find(j.Identifier)
      .replaceWith((p) => j.identifier(p.node.name.split('').reverse().join('')));

    console.log(text, 'root.toSource()', root.toSource())
    return root.toSource();
  },
};

export default examplePluginJscodeshift;
