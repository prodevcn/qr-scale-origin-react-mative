﻿INSERT INTO Common.LocalizationRecord
SELECT [Group] ='MobileUI',
       'OrderPicking.PickStep.UserModal.Button.Yes' [Key] ,
       LocaleId ,
       CASE LocaleId
         WHEN 282 THEN '' -- Turkish
         WHEN 86 THEN 'Yes' -- English
         WHEN 59 THEN '' -- Dutch
         WHEN 131 THEN ''
         WHEN 108 THEN ''
         ELSE ''
         END ,
       GETUTCDATE() ,
       NULL ,
       0 ,
       NULL,
       NULL,
       NULL,
       NULL
FROM   Common.LocalizationRecord
WHERE  [Key] = 'AttributeDetail.Fields.BackToList' AND IsDeleted=0
