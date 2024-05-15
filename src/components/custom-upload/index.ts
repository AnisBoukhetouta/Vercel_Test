import dynamic from 'next/dynamic';

export * from './types';

export { default as RejectionFiles } from './errors-rejection-files';
export { default as MultiFilePreview } from './custom-preview-multi-file';
export { default as SingleFilePreview } from './custom-preview-single-file';

export const CustomUpload = dynamic(() => import('./custom-upload'), {
  ssr: false,
});

export const CustomUploadBox = dynamic(() => import('./custom-upload-box'), {
  ssr: false,
});

export const CustomUploadAvatar = dynamic(() => import('./custom-upload-avatar'), {
  ssr: false,
});
