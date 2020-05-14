import 'isomorphic-fetch';
import { IProject } from '../interface';
/**
 * fetch remote spec if url starts with "http"
 * or use "require" read local file.
 * when remote swagger doc has auth, the best way is download the spec to local, and assign the local file path.
 * the second param ref is https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
 * */
export declare const fetchSwagger: (project: IProject, tsGearConfigPath: string) => Promise<any>;
