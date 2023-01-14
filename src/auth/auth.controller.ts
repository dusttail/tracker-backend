import { Body, Controller, Post, Put, UseInterceptors } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TransactionInterceptor } from 'src/database/common/transaction.interceptor';
import { UsersService } from 'src/routes/users/users.service';
import { AuthService } from './auth.service';


@ApiTags('auth')
@Controller('auth')
@UseInterceptors(TransactionInterceptor)
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) { }

    @Post('google')
    @ApiOperation({ summary: 'Create new session via Google' })
    @ApiCreatedResponse({ type: () => SessionDto })
    async createSessionWithGMail(
        @Body() body: CreateSessionByGoogleSchema
    ): Promise<SessionDto> {

    }

    @Put()
    @ApiOperation({ summary: 'Prolong current session' })
    @ApiOkResponse({ type: () => SessionDto })
    async prolongSession(
        @Body() body: ProlongSessionSchema
    ): Promise<SessionDto> {
       
    }
}
