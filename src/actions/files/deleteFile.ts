import { apiFileRequest } from '../api';
import { API_DELETE_FILE } from '../utils';

export const apiDeleteFile = async (fileId: string) => await apiFileRequest(API_DELETE_FILE(fileId), 'DELETE');
