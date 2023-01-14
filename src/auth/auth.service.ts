import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { JwtPayload, sign, verify } from 'jsonwebtoken';

export type SessionTokens = {
    accessToken: string;
    refreshToken: string;
};

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
    ) { }

}
