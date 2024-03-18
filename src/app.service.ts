import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class AppService {
  async sendMail() {
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: '',
        pass: '',
      },
      tls: {
        ciphers: 'SSLv3',
      },
    });

    const mailOptions = {
      from: '',
      to: '',
      subject: 'Assunto do E-mail',
      text: 'Corpo do e-mail',
    };

    return transporter.sendMail(mailOptions);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
