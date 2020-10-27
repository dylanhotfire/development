import 'core-js/es/array/iterator';
import { registerApplication, start } from 'single-spa';
import { v1 as uuid } from 'uuid';
import bootstrapComponent from './src/components';

__webpack_public_path__ = '/';

document.querySelectorAll('.component').forEach(item => {
  const { component } = item.dataset;

  registerApplication(
    'component-' + uuid(),
    () => bootstrapComponent(component),
    () => true,
    {
      ...item.dataset,
      domElementGetter: () => item,
    }
  );
});

start();
