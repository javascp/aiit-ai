/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileDocument } from '../models/FileDocument';
import type { ResponseUtils } from '../models/ResponseUtils';
import type { SourceData } from '../models/SourceData';
import type { TreeKnowledgePoints } from '../models/TreeKnowledgePoints';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class Service {

    /**
     * 删除
     * @param id id
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static deleteFileUsingGet1(
id: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dafile/delect',
            headers: {
                'demo': demo,
            },
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 上传接口
     * @param file file
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @returns any Created
     * @throws ApiError
     */
    public static handleFileUploadUsingPost(
file: Blob,
demo?: string,
): CancelablePromise<ResponseUtils | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/dafile/upload',
            headers: {
                'demo': demo,
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
     * 查看
     * @param id id
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static fileselectUsingGet(
id: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dafile/view',
            headers: {
                'demo': demo,
            },
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 分页
     * @param pageIndex pageIndex
     * @param pageSize pageSize
     * @param demo user ticket
     * @returns FileDocument OK
     * @throws ApiError
     */
    public static listFilesUsingGet1(
pageIndex: number,
pageSize: number,
demo?: string,
): CancelablePromise<Array<FileDocument>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dafile/{pageIndex}/{pageSize}',
            path: {
                'pageIndex': pageIndex,
                'pageSize': pageSize,
            },
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

    /**
     * 复制一个文件
     * @param sourceBucket sourceBucket
     * @param sourceObject sourceObject
     * @param targetBucket targetBucket
     * @param targetObject targetObject
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static copyObjectUsingGet(
sourceBucket: string,
sourceObject: string,
targetBucket: string,
targetObject: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/copyObject',
            headers: {
                'demo': demo,
            },
            query: {
                'sourceBucket': sourceBucket,
                'sourceObject': sourceObject,
                'targetBucket': targetBucket,
                'targetObject': targetObject,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 删除一个桶
     * @param bucket bucket
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static deleteBucketUsingGet(
bucket: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/deleteBucket',
            headers: {
                'demo': demo,
            },
            query: {
                'bucket': bucket,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 删除一个文件
     * @param bucket bucket
     * @param objectName objectName
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static deleteFileUsingGet(
bucket: string,
objectName: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/deleteFile',
            headers: {
                'demo': demo,
            },
            query: {
                'bucket': bucket,
                'objectName': objectName,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 下载一个文件
     * @param bucket bucket
     * @param objectName objectName
     * @param demo user ticket
     * @returns any OK
     * @throws ApiError
     */
    public static downloadFileUsingGet(
bucket: string,
objectName: string,
demo?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/downloadFile',
            headers: {
                'demo': demo,
            },
            query: {
                'bucket': bucket,
                'objectName': objectName,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 获取文件信息
     * @param bucket bucket
     * @param objectName objectName
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static getObjectInfoUsingGet(
bucket: string,
objectName: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/getObjectInfo',
            headers: {
                'demo': demo,
            },
            query: {
                'bucket': bucket,
                'objectName': objectName,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 获取一个连接以供下载
     * @param bucket bucket
     * @param objectName objectName
     * @param expires expires
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static getPresignedObjectUrlUsingGet(
bucket: string,
objectName: string,
expires: number,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/getPresignedObjectUrl',
            headers: {
                'demo': demo,
            },
            query: {
                'bucket': bucket,
                'objectName': objectName,
                'expires': expires,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 列一个桶中文件
     * @param demo user ticket
     * @returns any OK
     * @throws ApiError
     */
    public static listUsingGet(
demo?: string,
): CancelablePromise<Array<any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/list',
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

    /**
     * 获取minio中所有的文件
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static listAllFileUsingGet(
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/listAllFile',
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

    /**
     * 列出所有的桶
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static listBucketsUsingGet(
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/listBuckets',
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

    /**
     * 递归列出一个桶中的所有文件和目录
     * @param bucket bucket
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static listFilesUsingGet(
bucket: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/file/listFiles',
            headers: {
                'demo': demo,
            },
            query: {
                'bucket': bucket,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 上传一个文件
     * @param file file
     * @param demo user ticket
     * @param bucket bucket
     * @param objectName objectName
     * @returns ResponseUtils OK
     * @returns any Created
     * @throws ApiError
     */
    public static fileuploadUsingPost(
file: Blob,
demo?: string,
bucket: string = 'mybucket1',
objectName?: string,
): CancelablePromise<ResponseUtils | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/file/uploadfild',
            headers: {
                'demo': demo,
            },
            query: {
                'bucket': bucket,
                'objectName': objectName,
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
     * Timselect
     * @param demo user ticket
     * @param name name
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static timselectUsingGet(
demo?: string,
name?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/knowledge/tim',
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
     * Knowledge
     * @param name name
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static knowledgeUsingGet(
name: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/knowledge/video',
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
     * List
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static listUsingGet11(
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/media-resources/list',
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

    /**
     * 数据删除
     * @param id id
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static delectUsingDelete(
id: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/souce/delete',
            headers: {
                'demo': demo,
            },
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }

    /**
     * 数据修改
     * @param sourceData sourceData
     * @param demo user ticket
     * @returns boolean OK
     * @returns any Created
     * @throws ApiError
     */
    public static putSourceUsingPut(
sourceData: SourceData,
demo?: string,
): CancelablePromise<boolean | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/souce/put',
            headers: {
                'demo': demo,
            },
            body: sourceData,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 数据新增
     * @param sourceData sourceData
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @returns any Created
     * @throws ApiError
     */
    public static saveSourceUsingPost(
sourceData: SourceData,
demo?: string,
): CancelablePromise<ResponseUtils | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/souce/save',
            headers: {
                'demo': demo,
            },
            body: sourceData,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * 查询所有
     * @param demo user ticket
     * @returns SourceData OK
     * @throws ApiError
     */
    public static selectUsingGet2(
demo?: string,
): CancelablePromise<Array<SourceData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/souce/select',
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

    /**
     * 数据分页
     * @param page page
     * @param size size
     * @param demo user ticket
     * @param knowledgePoints knowledgePoints
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static sourceFilUsingGet(
page: string,
size: string,
demo?: string,
knowledgePoints?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sourcefile/fill',
            headers: {
                'demo': demo,
            },
            query: {
                'page': page,
                'size': size,
                'knowledgePoints': knowledgePoints,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * es 聚合搜索
     * @param string string
     * @param demo user ticket
     * @returns ResponseUtils OK
     * @throws ApiError
     */
    public static sourceSousUsingGet(
string: string,
demo?: string,
): CancelablePromise<ResponseUtils> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sourcefile/sous',
            headers: {
                'demo': demo,
            },
            query: {
                'string': string,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * List
     * @param demo user ticket
     * @returns TreeKnowledgePoints OK
     * @throws ApiError
     */
    public static listUsingGet1(
demo?: string,
): CancelablePromise<Array<TreeKnowledgePoints>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tree/list',
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

    /**
     * getById
     * @param userId userId
     * @param demo user ticket
     * @returns number OK
     * @throws ApiError
     */
    public static getByIdUsingGet(
userId: number,
demo?: string,
): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/yuy/getById/{userId}',
            path: {
                'userId': userId,
            },
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

    /**
     * 语音转文本
     * @param demo user ticket
     * @returns string OK
     * @throws ApiError
     */
    public static selectUsingGet(
demo?: string,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/yuy/select',
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
