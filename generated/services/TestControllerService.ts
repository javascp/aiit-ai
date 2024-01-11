/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Test } from '../models/Test';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TestControllerService {

    /**
     * select
     * @param demo user ticket
     * @returns Test OK
     * @throws ApiError
     */
    public static selectUsingGet(
demo?: string,
): CancelablePromise<Array<Test>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/test/select',
            headers: {
                'demo': demo,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
