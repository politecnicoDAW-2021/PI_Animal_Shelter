import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class GoogleAuthService {
  async getUser(accessToken: string) {
    const client = new google.auth.OAuth2(
      '107038177183-tfbn4vpe57du6invbfh2lbrubcpotpvt.apps.googleusercontent.com' as string,
      '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',
    );

    client.setCredentials({ access_token: accessToken });

    const oauth2 = google.oauth2({
      auth: client,
      version: 'v2',
    });

    const { data } = await oauth2.userinfo.get();

    return data;
  }
}
