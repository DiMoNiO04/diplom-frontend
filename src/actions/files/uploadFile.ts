import { apiFileRequest } from '../api';
import { API_UPLOAD_FILE } from '../utils';

export async function apiUploadFile(file: File) {
  const formData = new FormData();
  formData.append('files', file);

  const result = await apiFileRequest(API_UPLOAD_FILE, 'POST', formData);
  return result.isSuccess ? result.data : null;
}
