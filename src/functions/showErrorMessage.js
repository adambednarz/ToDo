import { Dialog, Loading } from 'quasar';

export function showErrorMessage(errorMessge) {
  Loading.hide();
  Dialog.create({
    title: 'Error',
    message: errorMessge,
  });
}
