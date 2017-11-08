// tslint:disable:max-line-length

import { registerIcons } from '@uifabric/styling/lib/index';

export function initializeIcons(baseUrl: string = ''): void {
  registerIcons({
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-10"`,
      src: `url('data:application/octet-stream;base64,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') format('woff')`, 
    },
    icons: {
      'BankSolid': '\uF34F',
      'DecisionSolid': '\uF350',
      'Parachute': '\uF351',
      'ParachuteSolid': '\uF352',
      'FiltersSolid': '\uF353',
      'ColorSolid': '\uF354',
      'ReviewSolid': '\uF355',
      'ReviewRequestSolid': '\uF356',
      'ReviewRequestMirroredSolid': '\uF357',
      'ReviewResponseSolid': '\uF358',
      'FeedbackRequestSolid': '\uF359',
      'FeedbackRequestMirroredSolid': '\uF35A',
      'FeedbackResponseSolid': '\uF35B',
      'WorkItemBar': '\uF35C',
      'WorkItemBarSolid': '\uF35D',
      'Separator': '\uF35E',
      'NavigateExternalInline': '\uF35F',
      'PlanView': '\uF360',
      'TimelineMatrixView': '\uF361',
      'EngineeringGroup': '\uF362',
      'ProjectCollection': '\uF363',
      'CaretBottomRightCenter8': '\uF364',
      'CaretBottomLeftCenter8': '\uF365',
      'CaretTopRightCenter8': '\uF366',
      'CaretTopLeftCenter8': '\uF367',
      'DonutChart': '\uF368',
      'ChevronUnfold10': '\uF369',
      'ChevronFold10': '\uF36A',
      'DoubleChevronDown8': '\uF36B',
      'DoubleChevronUp8': '\uF36C',
      'DoubleChevronLeft8': '\uF36D',
      'DoubleChevronRight8': '\uF36E',
      'ChevronDownEnd6': '\uF36F',
      'ChevronUpEnd6': '\uF370',
      'ChevronLeftEnd6': '\uF371',
      'ChevronRightEnd6': '\uF372',
      'AzureAPIManagement': '\uF37F',
      'AzureServiceEndpoint': '\uF380',
      'VSTSLogo': '\uF381',
      'VSTSAltLogo1': '\uF382',
      'VSTSAltLogo2': '\uF383',
      'FileTypeSolution': '\uF387',
      'WordLogoInverse16': '\uF390',
      'WordLogo16': '\uF391',
      'WordLogoFill16': '\uF392',
      'PowerPointLogoInverse16': '\uF393',
      'PowerPointLogo16': '\uF394',
      'PowerPointLogoFill16': '\uF395',
      'ExcelLogoInverse16': '\uF396',
      'ExcelLogo16': '\uF397',
      'ExcelLogoFill16': '\uF398',
      'OneNoteLogoInverse16': '\uF399',
      'OneNoteLogo16': '\uF39A',
      'OneNoteLogoFill16': '\uF39B',
      'OutlookLogoInverse16': '\uF39C',
      'OutlookLogo16': '\uF39D',
      'OutlookLogoFill16': '\uF39E',
      'PublisherLogoInverse16': '\uF39F',
      'PublisherLogo16': '\uF3A0',
      'PublisherLogoFill16': '\uF3A1',
      'VisioLogoInverse16': '\uF3A2',
      'VisioLogo16': '\uF3A3',
      'VisioLogoFill16': '\uF3A4',
      'TestBeaker': '\uF3A5',
      'TestBeakerSolid': '\uF3A6',
      'TestExploreSolid': '\uF3A7',
      'TestAutoSolid': '\uF3A8',
      'TestUserSolid': '\uF3A9',
      'TestImpactSolid': '\uF3AA',
      'TestPlan': '\uF3AB',
      'TestStep': '\uF3AC',
      'TestParameter': '\uF3AD',
      'TestSuite': '\uF3AE',
      'TestCase': '\uF3AF',
      'Sprint': '\uF3B0',
      'SignOut': '\uF3B1',
      'TriggerApproval': '\uF3B2',
      'Rocket': '\uF3B3',
      'AzureKeyVault': '\uF3B4',
      'LikeSolid': '\uF3BF',
      'DislikeSolid': '\uF3C0',
      'DeclineCall': '\uF405',
      'Spacer': '\uF40D',
      'SkypeLogo16': '\uF40E',
      'SkypeForBusinessLogo16': '\uF40F',
      'SkypeForBusinessLogoFill16': '\uF410',
      'FilterSolid': '\uF412',
      'MailUndelivered': '\uF415',
      'MailTentative': '\uF416',
      'MailTentativeMirrored': '\uF417',
      'MailReminder': '\uF418',
      'ReceiptUndelivered': '\uF419',
      'ReceiptTentative': '\uF41A',
      'ReceiptTentativeMirrored': '\uF41B',
      'Inbox': '\uF41C',
      'IRMReply': '\uF41D'
    }
  });
}