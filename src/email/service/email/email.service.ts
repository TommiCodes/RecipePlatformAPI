import { Injectable } from '@nestjs/common';
import { InjectSendGrid } from '@ntegral/nestjs-sendgrid/dist/common';
import { SendGridService } from '@ntegral/nestjs-sendgrid/dist/services';

@Injectable()
export class EmailService {
  constructor(@InjectSendGrid() private readonly client: SendGridService) {}

  async sendWelComeEmail(mailTo: string) {
    try {
      const result = this.client.send({
        to: mailTo, // Change to your recipient
        from: 'fernandocorreia316@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        templateId: 'd-27661eb6530c4c8d8e639180da235f24',
      });
      console.log('Email sent!');
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
