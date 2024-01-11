/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseUtils } from '../models/ResponseUtils';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GraphControllerService {

    /**
     * addNode
     * @param demo user ticket
     * @param name name
     * @param age age
     * @param nameTo nameTo
     * @param remark remark
     * @returns ResponseUtils OK
     * @returns any Created
     * @throws ApiError
     */
    public static addNodeUsingPost(
demo?: string,
name: string = 'node1',
age?: number,
nameTo: string = 'node2',
remark: string = '朋友',
): CancelablePromise<ResponseUtils | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/account/create',
            headers: {
                'demo': demo,
            },
            query: {
                'name': name,
                'age': age,
                'nameTo': nameTo,
                'remark': remark,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * deleteNode
     * @param demo user ticket
     * @param id id
     * @param name name
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static deleteNodeUsingGet(
demo?: string,
id?: number,
name?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/account/delete',
            headers: {
                'demo': demo,
            },
            query: {
                'id': id,
                'name': name,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * findNode
     * @param name name
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static findNodeUsingGet(
name: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/account/find',
            headers: {
                'demo': demo,
            },
            query: {
                'name': name,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * updateNode
     * @param demo user ticket
     * @param id id
     * @param name name
     * @param age age
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static updateNodeUsingGet(
demo?: string,
id?: number,
name?: string,
age?: number,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/account/update',
            headers: {
                'demo': demo,
            },
            query: {
                'id': id,
                'name': name,
                'age': age,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
