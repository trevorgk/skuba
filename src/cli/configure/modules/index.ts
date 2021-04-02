import { Module, Options } from '../types.js';

import { eslintModule } from './eslint.js';
import { ignoreModule } from './ignore.js';
import { jestModule } from './jest.js';
import { nodemonModule } from './nodemon.js';
import { packageModule } from './package.js';
import { prettierModule } from './prettier.js';
import { renovateModule } from './renovate.js';
import { serverlessModule } from './serverless.js';
import { skubaDiveModule } from './skubaDive.js';
import { tsconfigModule } from './tsconfig.js';
import { tslintModule } from './tslint.js';

export const loadModules = (opts: Options): Promise<Module[]> =>
  Promise.all(
    [
      eslintModule,
      ignoreModule,
      jestModule,
      nodemonModule,
      packageModule,
      prettierModule,
      renovateModule,
      serverlessModule,
      skubaDiveModule,
      tsconfigModule,
      tslintModule,
    ].map((createModule) => createModule(opts)),
  );
