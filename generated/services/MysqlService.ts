/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ResponseUtils } from '../models/ResponseUtils';
import type { Tim } from '../models/Tim';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MysqlService {

    /**
     * 综合评分
     * @param tests tests
     * @param label label
     * @param region region
     * @param value value
     * @param elapsedTime elapsedTime
     * @param demo user ticket
     * @param desc desc
     * @returns ResponseUtils OK
     * @returns any Created
     * @throws ApiError
     */
    public static pinfUsingPost(
tests: Array<Tim>,
label: string,
region: string,
value: string,
elapsedTime: number,
demo?: string,
desc?: string,
): CancelablePromise<ResponseUtils | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/choice-question/pinf',
            headers: {
                'demo': demo,
            },
            query: {
                'label': label,
                'region': region,
                'value': value,
                'desc': desc,
                'elapsedTime': elapsedTime,
            },
            body: tests,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 题目输出
     * @param label label
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static selectUsingGet1(
label: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/choice-question/select',
            headers: {
                'demo': demo,
            },
            query: {
                'label': label,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * Topiclist
     * @param label label
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static topiclistUsingGet(
label: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/topic/list',
            headers: {
                'demo': demo,
            },
            query: {
                'label': label,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
