using Microsoft.Extensions.Options;
using OA.Core.Configurations;
using OA.Core.Constants;
using OA.Core.Models;
using System;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;
namespace OA.Service.Helpers
{
    public class AuthMessageSender: IAuthMessageSender //: IEmailSender, ISmsSender
    {
        public AuthMessageSender(IOptions<SMSoptions> optionsAccessor)
        {
            Options = optionsAccessor.Value;
        }
        public SMSoptions Options { get; }  // set only via Secret Manager
        public async Task<ResponseResult> SendMailAsync(string fromEmail, string fromPassWord, string toEmail, string sendMailTitle, string sendMailBody)
        {
            var result = new ResponseResult();
            result.Success = false;
            if (fromEmail != null && fromPassWord != null)
            {
                var fromAddress = new MailAddress(fromEmail, sendMailTitle);
                var toAddress = new MailAddress(toEmail, sendMailTitle);
                var smtp = new SmtpClient
                {
                    Host = "smtp.gmail.com",
                    Port = 587,
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false,
                    Credentials = new NetworkCredential(fromAddress.Address, fromPassWord)
                };
                var message = new MailMessage(fromAddress, toAddress)
                {
                    Subject = sendMailTitle,
                    Body = sendMailBody,
                    IsBodyHtml = true
                };
                using (message)
                {
                    try
                    {
                        await smtp.SendMailAsync(message);
                        result.Success = true;
                    }
                    catch (Exception ex)
                    {
                        result.ErrorNumber = (int)Enums.Common.Exception;
                        result.Message = Utilities.MakeExceptionMessage(ex);
                        result.Success = false;
                    }
                }
            }
            return result;
        }
        public Task SendSmsAsync(string number, string message)
        {
            // Plug in your SMS service here to send a text message.
            // Your Account SID from twilio.com/console
            var accountSid = Options.SMSAccountIdentification;
            // Your Auth Token from twilio.com/console
            var authToken = Options.SMSAccountPassword;
            TwilioClient.Init(accountSid, authToken);
            return MessageResource.CreateAsync(
              to: new PhoneNumber(number),
              from: new PhoneNumber(Options.SMSAccountFrom),
              body: message);
        }
    }
    public interface IAuthMessageSender
    {
        Task<ResponseResult> SendMailAsync(string fromEmail, string fromPassWord, string toEmail, string sendMailTitle, string sendMailBody);
        Task SendSmsAsync(string number, string message);
    }
}
