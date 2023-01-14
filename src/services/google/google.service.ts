import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { LoginTicket, OAuth2Client } from 'google-auth-library';

interface UserInfo {
    email: string;
    domain: string;
    name: string;
    picture?: string;
}

@Injectable()
export class GoogleService {
    readonly client: OAuth2Client;
    private readonly clientId: string;

    constructor(      
        private readonly configService: ConfigService
    ) {
        this.clientId = <string>this.configService.get('GOOGLE_CLIENT_ID');
        const clientSecret = <string>this.configService.get('GOOGLE_CLIENT_SECRET');

        this.client = new OAuth2Client(this.clientId, clientSecret);
    }

    async verifyToken(token: string): Promise<UserInfo> {
        let ticket: LoginTicket;

        try {
            ticket = await this.client.verifyIdToken({ idToken: token });
        } catch (error) {
            throw new BadRequestException('token_invalid');
        }

        const payload = ticket.getPayload();

        return {
            id: payload.iss,
            email: payload.email,
            name: payload.name,
            domain: payload.hd,
            picture: payload.picture
        };
    }
}
