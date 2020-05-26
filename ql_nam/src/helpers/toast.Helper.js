import { toast } from 'react-toastify';

export const toastError = (error) => {
  let message = null;
  if (typeof error === 'object' && error.message) {
    // khi toa object es6 thi khong can dong ngoac tron
    // nhung o day la gan gia tri nen phai su dung ngoac tron
    ({ message } = error);
  }
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.error(message);
  }
};

export const toastSuccess = (message) => {
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.success(message);
  }
};
