import { HttpServer } from '@nestjs/common';
import { ExceptionFilterMetadata } from '@nestjs/common/interfaces/exceptions/exception-filter-metadata.interface';
import { HttpException } from '@nestjs/common';
export declare class ExceptionsHandler {
    private readonly applicationRef;
    private static readonly logger;
    private filters;
    constructor(applicationRef: HttpServer);
    next(exception: Error | HttpException | any, response: any): void;
    setCustomFilters(filters: ExceptionFilterMetadata[]): void;
    invokeCustomFilters(exception: any, response: any): boolean;
    isExceptionObject(err: any): err is Error;
}
