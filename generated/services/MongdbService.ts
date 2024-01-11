/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseUtils } from '../models/ResponseUtils';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MongdbService {

    /**
     * 上传
     * @param file file
     * @param demo user ticket
     * @param params params
     * @returns ResponseUtils OK
     * @returns any Created
     * @throws ApiError
     */
    public static filesaveUsingPost(
file: Blob,
demo?: string,
params?: string,
): CancelablePromise<ResponseUtils | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dbfile/save',
            headers: {
                'demo': demo,
            },
            query: {
                'params': params,
            },
            formData: {
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 按id 删除
     * @param id id
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static fildeleteUsingDelete(
id: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/dbfile/{id}',
            path: {
                'id': id,
            },
            headers: {
                'demo': demo,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

}
