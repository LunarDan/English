import { Injectable } from '@nestjs/common';
import { Business } from '../common/business';

@Injectable()
export class ResponseService {
    success(data: any) {
        return {
            data,
            code: Business.SUCCESS.code,
            message: Business.SUCCESS.message,
        }
    }
    error(data = null, message: string, code: number = Business.ERROR.code) {
        return {
            data,
            code,
            message: message || Business.ERROR.message,
        }
    }
}
