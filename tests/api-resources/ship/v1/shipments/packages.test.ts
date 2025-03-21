// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fedex from 'Fedex';

const client = new Fedex({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource packages', () => {
  // skipped: tests are disabled for the time being
  test.skip('validate: only required params', async () => {
    const responsePromise = client.ship.v1.shipments.packages.validate({
      requestedShipment: {
        labelSpecification: { imageType: 'ZPLII', labelStockType: 'PAPER_4X6' },
        packagingType: 'YOUR_PACKAGING',
        pickupType: 'CONTACT_FEDEX TO_SCHEDULE',
        recipients: [
          {
            address: {
              city: 'Beverly Hills',
              countryCode: 'US',
              streetLines: ['10 FedEx Parkway', 'Suite 302'],
            },
            contact: { phoneNumber: 'XXXX345671' },
          },
        ],
        requestedPackageLineItems: [{ weight: { units: 'KG', value: 68 } }],
        serviceType: 'PRIORITY_OVERNIGHT',
        shipper: {
          address: {
            city: 'Beverly Hills',
            countryCode: 'US',
            streetLines: ['10 FedEx Parkway', 'Suite 302'],
          },
          contact: { phoneNumber: 'XXXX345671' },
        },
        shippingChargesPayment: { paymentType: 'SENDER' },
        totalWeight: 20,
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('validate: required and optional params', async () => {
    const response = await client.ship.v1.shipments.packages.validate({
      requestedShipment: {
        labelSpecification: {
          imageType: 'ZPLII',
          labelStockType: 'PAPER_4X6',
          customerSpecifiedDetail: {
            additionalLabels: [{ count: 1, type: 'BROKER' }],
            docTabContent: {
              barcoded: {
                specification: {
                  dataField: 'dataField',
                  header: 'header',
                  justification: 'LEFT',
                  literalValue: 'literalValue',
                  zoneNumber: 0,
                },
                symbology: 'CODABAR',
              },
              docTabContentType: 'BARCODED',
              zone001: {
                docTabZoneSpecifications: [
                  {
                    dataField: 'dataField',
                    header: 'header',
                    justification: 'LEFT',
                    literalValue: 'literalValue',
                    zoneNumber: 0,
                  },
                ],
              },
            },
            maskedData: ['CUSTOMS_VALUE', 'SHIPPER_ACCOUNT_NUMBER'],
            regulatoryLabels: [
              { generationOptions: 'CONTENT_ON_SHIPPING_LABEL_PREFERRED', type: 'ALCOHOL_SHIPMENT_LABEL' },
            ],
          },
          labelFormatType: 'COMMON2D',
          labelOrder: 'SHIPPING_LABEL_FIRST',
          labelPrintingOrientation: 'BOTTOM_EDGE_OF_TEXT_FIRST',
          labelRotation: 'LEFT',
          printedLabelOrigin: {
            address: {
              city: 'Beverly Hills',
              countryCode: 'US',
              postalCode: '38127',
              residential: false,
              stateOrProvinceCode: 'CA',
              streetLines: ['10 FedEx Parkway', 'Suite 302'],
            },
            contact: {
              companyName: 'company name',
              emailAddress: 'email address',
              faxNumber: 'fax number',
              personName: 'person name',
              phoneExtension: 'phone extension',
              phoneNumber: 'phone number',
            },
          },
          resolution: 300,
          returnedDispositionDetail: 'RETURNED',
        },
        packagingType: 'YOUR_PACKAGING',
        pickupType: 'CONTACT_FEDEX TO_SCHEDULE',
        recipients: [
          {
            address: {
              city: 'Beverly Hills',
              countryCode: 'US',
              streetLines: ['10 FedEx Parkway', 'Suite 302'],
              postalCode: '90210',
              residential: false,
              stateOrProvinceCode: 'CA',
            },
            contact: {
              phoneNumber: 'XXXX345671',
              companyName: 'FedEx',
              emailAddress: 'sample@company.com',
              personName: 'John Taylor',
              phoneExtension: '000',
            },
            deliveryInstructions: 'Delivery Instructions',
            tins: [
              {
                number: '123567',
                tinType: 'PERSONAL_NATIONAL',
                effectiveDate: '2000-01-23T04:56:07.000+00:00',
                expirationDate: '2000-01-23T04:56:07.000+00:00',
                usage: 'usage',
              },
            ],
          },
        ],
        requestedPackageLineItems: [
          {
            weight: { units: 'KG', value: 68 },
            contentRecord: [
              { description: 'Description', itemNumber: '2876', partNumber: '456', receivedQuantity: 256 },
            ],
            customerReferences: [{ customerReferenceType: 'CUSTOMER_REFERENCE', value: '3686' }],
            declaredValue: { amount: 12.45, currency: 'USD' },
            dimensions: { height: 30, length: 100, units: 'CM', width: 50 },
            groupPackageCount: 2,
            itemDescription: 'item description for the package',
            itemDescriptionForClearance: 'description',
            packageSpecialServices: {
              alcoholDetail: { alcoholRecipientType: 'LICENSEE', shipperAgreementType: 'Retailer' },
              batteryDetails: [
                {
                  batteryMaterialType: 'LITHIUM_METAL',
                  batteryPackingType: 'CONTAINED_IN_EQUIPMENT',
                  batteryRegulatoryType: 'IATA_SECTION_II',
                },
              ],
              dangerousGoodsDetail: {
                accessibility: 'ACCESSIBLE',
                cargoAircraftOnly: false,
                options: ['HAZARDOUS_MATERIALS', 'BATTERY'],
                regulation: 'ADR',
              },
              dryIceWeight: { units: 'KG', value: 68 },
              packageCODDetail: { codCollectionAmount: { amount: 12.45, currency: 'USD' } },
              pieceCountVerificationBoxCount: 0,
              priorityAlertDetail: { content: ['string'], enhancementTypes: ['PRIORITY_ALERT_PLUS'] },
              signatureOptionDetail: { signatureReleaseNumber: '23456' },
              signatureOptionType: 'SERVICE_DEFAULT',
              specialServiceTypes: [
                'ALCOHOL',
                'NON_STANDARD_CONTAINER',
                'DANGEROUS_GOODS',
                'SIGNATURE_OPTION',
                'PRIORITY_ALERT',
              ],
              standaloneBatteryDetails: [{ batteryMaterialType: 'LITHIUM_METAL' }],
            },
            sequenceNumber: 0,
            subPackagingType: 'BUCKET',
            variableHandlingChargeDetail: {
              fixedValue: { amount: 24.45, currency: 'USD' },
              percentValue: 12.45,
              rateElementBasis: 'NET_CHARGE',
              rateLevelType: 'BUNDLED_RATE',
              rateType: 'ACCOUNT',
            },
          },
        ],
        serviceType: 'PRIORITY_OVERNIGHT',
        shipper: {
          address: {
            city: 'Beverly Hills',
            countryCode: 'US',
            streetLines: ['10 FedEx Parkway', 'Suite 302'],
            postalCode: '90210',
            residential: false,
            stateOrProvinceCode: 'CA',
          },
          contact: {
            phoneNumber: 'XXXX345671',
            companyName: 'Fedex',
            emailAddress: 'sample@company.com',
            personName: 'John Taylor',
            phoneExtension: '000',
          },
          tins: [
            {
              number: '123567',
              tinType: 'PERSONAL_NATIONAL',
              effectiveDate: '2000-01-23T04:56:07.000+00:00',
              expirationDate: '2000-01-23T04:56:07.000+00:00',
              usage: 'usage',
            },
          ],
        },
        shippingChargesPayment: {
          paymentType: 'SENDER',
          payor: {
            responsibleParty: {
              accountNumber: { value: 'Your account number' },
              address: {
                city: 'Beverly Hills',
                countryCode: 'US',
                streetLines: ['10 FedEx Parkway', 'Suite 302'],
                postalCode: '90210',
                residential: false,
                stateOrProvinceCode: 'CA',
              },
              contact: {
                phoneNumber: 'XXXX567890',
                companyName: 'Fedex',
                emailAddress: 'sample@company.com',
                personName: 'John Taylor',
                phoneExtension: 'phone extension',
              },
            },
          },
        },
        totalWeight: 20,
        blockInsightVisibility: true,
        customsClearanceDetail: {
          commercialInvoice: {
            comments: ['optional comments for the commercial invoice'],
            customerReferences: [{ customerReferenceType: 'CUSTOMER_REFERENCE', value: '3686' }],
            declarationStatement: 'declarationStatement',
            emailNotificationDetail: {
              emailAddress: 'neena@fedex.com',
              recipientType: 'SHIPPER',
              type: 'EMAILED',
            },
            freightCharge: { amount: 12.45, currency: 'USD' },
            handlingCosts: { amount: 12.45, currency: 'USD' },
            originatorName: 'originator Name',
            packingCosts: { amount: 12.45, currency: 'USD' },
            shipmentPurpose: 'GIFT',
            specialInstructions: 'specialInstructions"',
            taxesOrMiscellaneousCharge: { amount: 12.45, currency: 'USD' },
            taxesOrMiscellaneousChargeType: 'COMMISSIONS',
            termsOfSale: 'FCA',
          },
          commodities: [
            {
              description: 'description',
              additionalMeasures: [{ quantity: 12.45, units: 'KG' }],
              cIMarksAndNumbers: '87123',
              countryOfManufacture: 'US',
              customsValue: { amount: 0, currency: 'USD' },
              exportLicenseExpirationDate: '2019-12-27T18:11:19.117Z',
              exportLicenseNumber: '26456',
              harmonizedCode: '0613',
              name: 'non-threaded rivets',
              numberOfPieces: 12,
              partNumber: '167',
              purpose: 'BUSINESS',
              quantity: 125,
              quantityUnits: 'Ea',
              unitPrice: { amount: 12.45, currency: 'USD' },
              usmcaDetail: { originCriterion: 'A' },
              weight: { units: 'KG', value: 68 },
            },
          ],
          brokers: [
            {
              broker: {
                contact: {
                  personName: 'John Taylor',
                  emailAddress: 'sample@company.com',
                  phoneNumber: '1234567890',
                  phoneExtension: '91',
                  companyName: 'Fedex',
                  faxNumber: 1234567,
                },
                accountNumber: { value: 'Your account number' },
                address: {
                  streetLines: ['10 FedEx Parkway', 'Suite 302'],
                  city: 'Beverly Hills',
                  stateOrProvinceCode: 'CA',
                  postalCode: '90210',
                  countryCode: 'US',
                  residential: false,
                },
                tins: [
                  {
                    number: 'number',
                    tinType: 'PERSONAL_NATIONAL',
                    effectiveDate: '2000-01-23T04:56:07.000+00:00',
                    expirationDate: '2000-01-23T04:56:07.000+00:00',
                    usage: 'usage',
                  },
                ],
              },
              type: 'IMPORT',
            },
          ],
          customsOption: { description: 'Description', type: 'COURTESY_RETURN_LABEL' },
          declarationStatementDetail: {
            usmcaLowValueStatementDetail: {
              customsRole: 'EXPORTER',
              countryOfOriginLowValueDocumentRequested: true,
            },
          },
          dutiesPayment: {
            billingDetails: {
              accountNickname: 'accountNickname',
              accountNumber: 'Your account number',
              accountNumberCountryCode: 'US',
              aliasId: 'aliasId',
              billingCode: 'billingCode',
              billingType: 'billingType',
            },
            paymentType: 'SENDER',
            payor: {
              responsibleParty: {
                accountNumber: { value: 'Your account number' },
                address: {
                  city: 'Beverly Hills',
                  countryCode: 'US',
                  postalCode: '38127',
                  residential: false,
                  stateOrProvinceCode: 'CA',
                  streetLines: ['10 FedEx Parkway', 'Suite 302'],
                },
                contact: {
                  companyName: 'Fedex',
                  emailAddress: 'sample@company.com',
                  faxNumber: 'fax number',
                  personName: 'John Taylor',
                  phoneExtension: 'phone extension',
                  phoneNumber: '1234567890',
                },
                tins: [
                  {
                    number: 'number',
                    tinType: 'PERSONAL_NATIONAL',
                    effectiveDate: '2024-06-13',
                    expirationDate: '2024-06-13',
                    usage: 'usage',
                  },
                  {
                    number: 'number',
                    tinType: 'PERSONAL_NATIONAL',
                    effectiveDate: '2024-06-13',
                    expirationDate: '2024-06-13',
                    usage: 'usage',
                  },
                ],
              },
            },
          },
          exportDetail: {
            b13AFilingOption: 'NOT_REQUIRED',
            destinationControlDetail: {
              statementTypes: 'DEPARTMENT_OF_COMMERCE',
              destinationCountries: ['USA', 'India'],
              endUser: 'dest country user',
            },
            exportComplianceStatement: '12345678901234567',
            permitNumber: '12345',
          },
          freightOnValue: 'CARRIER_RISK',
          generatedDocumentLocale: 'en_US',
          importerOfRecord: {
            contact: {
              phoneNumber: 'XXXX345671',
              companyName: 'Fedex',
              emailAddress: 'sample@company.com',
              personName: 'John Taylor',
              phoneExtension: '000',
            },
            accountNumber: { value: 'Your account number' },
            address: {
              city: 'Beverly Hills',
              countryCode: 'US',
              streetLines: ['10 FedEx Parkway', 'Suite 302'],
              postalCode: '90210',
              residential: false,
              stateOrProvinceCode: 'CA',
            },
            tins: [
              {
                number: '123567',
                tinType: 'PERSONAL_NATIONAL',
                effectiveDate: '2000-01-23T04:56:07.000+00:00',
                expirationDate: '2000-01-23T04:56:07.000+00:00',
                usage: 'usage',
              },
            ],
          },
          insuranceCharge: { amount: 12.45, currency: 'USD' },
          isDocumentOnly: false,
          partiesToTransactionAreRelated: true,
          recipientCustomsId: { type: 'COMPANY', value: '123' },
          regulatoryControls: ['FOOD_OR_PERISHABLE', 'USMCA'],
          totalCustomsValue: { amount: 12.45, currency: 'USD' },
        },
        emailNotificationDetail: {
          aggregationType: 'PER_PACKAGE',
          emailNotificationRecipients: [
            {
              emailNotificationRecipientType: 'BROKER',
              emailAddress: 'jsmith3@aol.com',
              locale: 'en_US',
              name: 'Joe Smith',
              notificationEventType: ['ON_DELIVERY', 'ON_EXCEPTION'],
              notificationFormatType: 'HTML',
              notificationType: 'EMAIL',
            },
          ],
          personalMessage: 'your personal message here',
        },
        origin: {
          address: {
            city: 'Beverly Hills',
            countryCode: 'US',
            postalCode: '38127',
            residential: false,
            stateOrProvinceCode: 'CA',
            streetLines: ['10 FedEx Parkway', 'Suite 302'],
          },
          contact: {
            companyName: 'company name',
            emailAddress: 'email address',
            faxNumber: 'fax number',
            personName: 'person name',
            phoneExtension: 'phone extension',
            phoneNumber: 'phone number',
          },
        },
        preferredCurrency: 'USD',
        rateRequestType: ['LIST', 'NONE'],
        shipDatestamp: '2019-10-14',
        shipmentSpecialServices: {
          deliveryOnInvoiceAcceptanceDetail: {
            recipient: {
              address: { countryCode: 'US', streetLines: ['23, RUE JOSEPH-DE MA'] },
              contact: { companyName: 'Fedex', personName: 'John Taylor', phoneNumber: '1234567890' },
              deliveryInstructions: 'Delivery Instructions',
              tins: [
                {
                  number: '123567',
                  tinType: 'PERSONAL_NATIONAL',
                  effectiveDate: '2000-01-23T04:56:07.000+00:00',
                  expirationDate: '2000-01-23T04:56:07.000+00:00',
                  usage: 'usage',
                },
              ],
            },
          },
          etdDetail: {
            attachedDocuments: [
              {
                description: 'PRO FORMA INVOICE',
                documentId: '090927d680038c61',
                documentReference: 'DocumentReference',
                documentType: 'CERTIFICATE_OF_ORIGIN',
              },
            ],
            attributes: ['POST_SHIPMENT_UPLOAD_REQUESTED'],
            requestedDocumentTypes: ['CERTIFICATE_OF_ORIGIN', 'COMMERCIAL_INVOICE'],
          },
          holdAtLocationDetail: {
            locationId: 'YBZA',
            locationContactAndAddress: {
              address: {
                city: 'Beverly Hills',
                countryCode: 'US',
                postalCode: '38127',
                residential: false,
                stateOrProvinceCode: 'CA',
                streetLines: ['10 FedEx Parkway', 'Suite 302'],
              },
              contact: {
                companyName: 'company name',
                emailAddress: 'email address',
                faxNumber: 'fax number',
                personName: 'person name',
                phoneExtension: 'phone extension',
                phoneNumber: 'phone number',
              },
            },
            locationType: 'FEDEX_AUTHORIZED_SHIP_CENTER',
          },
          homeDeliveryPremiumDetail: {
            deliveryDate: '2019-06-26',
            homedeliveryPremiumType: 'APPOINTMENT',
            phoneNumber: {
              areaCode: '901',
              extension: '200',
              localNumber: '3575012',
              personalIdentificationNumber: '98712345',
            },
          },
          internationalControlledExportDetail: {
            type: 'DEA_036',
            entryNumber: '125',
            foreignTradeZoneCode: 'US',
            licenseOrPermitExpirationDate: '2019-12-03',
            licenseOrPermitNumber: '11',
          },
          internationalTrafficInArmsRegulationsDetail: { licenseOrExemptionNumber: '9871234' },
          pendingShipmentDetail: {
            emailLabelDetail: {
              message: 'your optional message',
              recipients: [
                {
                  emailAddress: 'nnnnneena@fedex.com',
                  role: 'SHIPMENT_COMPLETOR',
                  locale: 'en_US',
                  optionsRequested: {
                    options: ['PRODUCE_PAPERLESS_SHIPPING_FORMAT', 'SUPPRESS_ADDITIONAL_LANGUAGES'],
                  },
                },
              ],
            },
            pendingShipmentType: 'EMAIL',
            attachedDocuments: [
              {
                description: 'PRO FORMA INVOICE',
                documentId: '090927d680038c61',
                documentReference: 'DocumentReference',
                documentType: 'CERTIFICATE_OF_ORIGIN',
              },
            ],
            expirationTimeStamp: '2020-01-01',
            processingOptions: { options: ['ALLOW_MODIFICATIONS'] },
            recommendedDocumentSpecification: {
              types: ['ANTIQUE_STATEMENT_EUROPEAN_UNION', 'ANTIQUE_STATEMENT_UNITED_STATES'],
            },
          },
          returnShipmentDetail: {
            returnType: 'PENDING',
            returnAssociationDetail: { trackingNumber: '123456789', shipDatestamp: '2019-10-01' },
            returnEmailDetail: {
              allowedSpecialService: ['SATURDAY_DELIVERY'],
              merchantPhoneNumber: '19012635656',
            },
            rma: { reason: 'Wrong Size or Color' },
          },
          shipmentCODDetail: {
            codCollectionType: 'ANY',
            addTransportationChargesDetail: {
              chargeLevelType: 'CURRENT_PACKAGE',
              chargeType: 'COD_SURCHARGE',
              rateLevelType: 'BUNDLED_RATE',
              rateType: 'ACCOUNT',
            },
            codCollectionAmount: { amount: 12.45, currency: 'USD' },
            codRecipient: {
              contact: {
                phoneNumber: 'XXXX345671',
                companyName: 'Fedex',
                emailAddress: 'sample@company.com',
                personName: 'John Taylor',
                phoneExtension: '000',
              },
              accountNumber: { value: 'Your account number' },
              address: {
                city: 'Beverly Hills',
                countryCode: 'US',
                streetLines: ['10 FedEx Parkway', 'Suite 302'],
                postalCode: '90210',
                residential: false,
                stateOrProvinceCode: 'CA',
              },
              tins: [
                {
                  number: '123567',
                  tinType: 'PERSONAL_NATIONAL',
                  effectiveDate: '2000-01-23T04:56:07.000+00:00',
                  expirationDate: '2000-01-23T04:56:07.000+00:00',
                  usage: 'usage',
                },
              ],
            },
            financialInstitutionContactAndAddress: {
              address: {
                city: 'Beverly Hills',
                countryCode: 'US',
                postalCode: '38127',
                residential: false,
                stateOrProvinceCode: 'CA',
                streetLines: ['10 FedEx Parkway', 'Suite 302'],
              },
              contact: {
                companyName: 'company name',
                emailAddress: 'email address',
                faxNumber: 'fax number',
                personName: 'person name',
                phoneExtension: 'phone extension',
                phoneNumber: 'phone number',
              },
            },
            remitToName: 'remitToName',
            returnReferenceIndicatorType: 'INVOICE',
            shipmentCodAmount: { amount: 12.45, currency: 'USD' },
          },
          shipmentDryIceDetail: { packageCount: 12, totalWeight: { units: 'KG', value: 10 } },
          specialServiceTypes: ['THIRD_PARTY_CONSIGNEE'],
        },
        shippingDocumentSpecification: {
          certificateOfOrigin: {
            customerImageUsages: [{ id: 'IMAGE_1', providedImageType: 'LETTER_HEAD', type: 'SIGNATURE' }],
            documentFormat: {
              dispositions: [
                {
                  dispositionType: 'CONFIRMED',
                  eMailDetail: {
                    eMailRecipients: [{ recipientType: 'BROKER', emailAddress: 'email@fedex.com' }],
                    grouping: 'BY_RECIPIENT',
                    locale: 'en_US',
                  },
                },
              ],
              docType: 'PDF',
              locale: 'en_US',
              optionsRequested: { options: ['SHIPPING_LABEL_FIRST', 'SHIPPING_LABEL_LAST'] },
              provideInstructions: true,
              stockType: 'PAPER_LETTER',
            },
          },
          commercialInvoiceDetail: {
            customerImageUsages: [{ id: 'IMAGE_1', providedImageType: 'LETTER_HEAD', type: 'SIGNATURE' }],
            documentFormat: {
              dispositions: [
                {
                  dispositionType: 'CONFIRMED',
                  eMailDetail: {
                    eMailRecipients: [{ recipientType: 'BROKER', emailAddress: 'email@fedex.com' }],
                    grouping: 'BY_RECIPIENT',
                    locale: 'en_US',
                  },
                },
              ],
              docType: 'PDF',
              locale: 'en_US',
              optionsRequested: { options: ['SHIPPING_LABEL_FIRST', 'SHIPPING_LABEL_LAST'] },
              provideInstructions: true,
              stockType: 'PAPER_LETTER',
            },
          },
          generalAgencyAgreementDetail: {
            documentFormat: {
              dispositions: [
                {
                  dispositionType: 'CONFIRMED',
                  eMailDetail: {
                    eMailRecipients: [{ recipientType: 'BROKER', emailAddress: 'email@fedex.com' }],
                    grouping: 'BY_RECIPIENT',
                    locale: 'en_US',
                  },
                },
              ],
              docType: 'PDF',
              locale: 'en_US',
              optionsRequested: { options: ['SHIPPING_LABEL_FIRST', 'SHIPPING_LABEL_LAST'] },
              provideInstructions: true,
              stockType: 'PAPER_LETTER',
            },
          },
          op900Detail: {
            customerImageUsages: [{ id: 'IMAGE_1', providedImageType: 'LETTER_HEAD', type: 'SIGNATURE' }],
            documentFormat: {
              dispositions: [
                {
                  dispositionType: 'CONFIRMED',
                  eMailDetail: {
                    eMailRecipients: [{ recipientType: 'BROKER', emailAddress: 'email@fedex.com' }],
                    grouping: 'BY_RECIPIENT',
                    locale: 'en_US',
                  },
                },
              ],
              docType: 'PDF',
              locale: 'en_US',
              optionsRequested: { options: ['SHIPPING_LABEL_FIRST', 'SHIPPING_LABEL_LAST'] },
              provideInstructions: true,
              stockType: 'PAPER_LETTER',
            },
            signatureName: 'Signature Name',
          },
          returnInstructionsDetail: {
            customText: 'This is additional text printed on Return instr',
            documentFormat: {
              dispositions: [
                {
                  dispositionType: 'CONFIRMED',
                  eMailDetail: {
                    eMailRecipients: [{ recipientType: 'BROKER', emailAddress: 'email@fedex.com' }],
                    grouping: 'BY_RECIPIENT',
                    locale: 'en_US',
                  },
                },
              ],
              docType: 'PNG',
              locale: 'en_US"',
              optionsRequested: { options: ['SHIPPING_LABEL_FIRST', 'SHIPPING_LABEL_LAST'] },
              provideInstructions: true,
              stockType: 'PAPER_LETTER',
            },
          },
          shippingDocumentTypes: ['CERTIFICATE_OF_ORIGIN'],
          usmcaCertificationOfOriginDetail: {
            blanketPeriod: { begins: '22-01-2020', ends: '2-01-2020' },
            certifierJobTitle: 'Manager',
            certifierSpecification: 'EXPORTER',
            customerImageUsages: [{ id: 'IMAGE_1', providedImageType: 'LETTER_HEAD', type: 'SIGNATURE' }],
            documentFormat: {
              dispositions: [
                {
                  dispositionType: 'CONFIRMED',
                  eMailDetail: {
                    eMailRecipients: [{ recipientType: 'BROKER', emailAddress: 'email@fedex.com' }],
                    grouping: 'BY_RECIPIENT',
                    locale: 'en_US',
                  },
                },
              ],
              docType: 'PDF',
              locale: 'en_US',
              optionsRequested: { options: ['SHIPPING_LABEL_FIRST', 'SHIPPING_LABEL_LAST'] },
              provideInstructions: true,
              stockType: 'PAPER_LETTER',
            },
            importerSpecification: 'UNKNOWN',
            producer: {
              address: {
                city: 'Beverly Hills',
                countryCode: 'US',
                geographicCoordinates: 'geographicCoordinates',
                postalCode: '90210',
                residential: false,
                stateOrProvinceCode: 'CA',
                streetLines: ['10 FedEx Parkway', 'Suite 302'],
              },
              contact: {
                companyName: 'Fedex',
                emailAddress: 'sample@company.com',
                faxNumber: 'faxNumber',
                personName: 'John Taylor',
                phoneExtension: '000',
                phoneNumber: 'XXXX345671',
              },
              tins: [
                {
                  number: '123567',
                  tinType: 'PERSONAL_NATIONAL',
                  effectiveDate: '2000-01-23T04:56:07.000+00:00',
                  expirationDate: '2000-01-23T04:56:07.000+00:00',
                  usage: 'usage',
                },
              ],
            },
            producerSpecification: 'AVAILABLE_UPON_REQUEST',
          },
          usmcaCommercialInvoiceCertificationOfOriginDetail: {
            certifierJobTitle: 'Manager',
            certifierSpecification: 'EXPORTER',
            customerImageUsages: [{ id: 'IMAGE_1', providedImageType: 'LETTER_HEAD', type: 'SIGNATURE' }],
            documentFormat: {
              dispositions: [
                {
                  dispositionType: 'CONFIRMED',
                  eMailDetail: {
                    eMailRecipients: [{ recipientType: 'BROKER', emailAddress: 'email@fedex.com' }],
                    grouping: 'BY_RECIPIENT',
                    locale: 'en_US',
                  },
                },
              ],
              docType: 'PDF',
              locale: 'en_US',
              optionsRequested: { options: ['SHIPPING_LABEL_FIRST', 'SHIPPING_LABEL_LAST'] },
              provideInstructions: true,
              stockType: 'PAPER_LETTER',
            },
            importerSpecification: 'UNKNOWN',
            producer: {
              address: {
                city: 'Beverly Hills',
                countryCode: 'US',
                geographicCoordinates: 'geographicCoordinates',
                postalCode: '90210',
                residential: false,
                stateOrProvinceCode: 'CA',
                streetLines: ['10 FedEx Parkway', 'Suite 302'],
              },
              contact: {
                companyName: 'Fedex',
                emailAddress: 'sample@company.com',
                faxNumber: 'faxNumber',
                personName: 'John Taylor',
                phoneExtension: '000',
                phoneNumber: 'XXXX345671',
              },
              tins: [
                {
                  number: '123567',
                  tinType: 'PERSONAL_NATIONAL',
                  effectiveDate: '2000-01-23T04:56:07.000+00:00',
                  expirationDate: '2000-01-23T04:56:07.000+00:00',
                  usage: 'usage',
                },
              ],
            },
            producerSpecification: 'AVAILABLE_UPON_REQUEST',
          },
        },
        smartPostInfoDetail: {
          hubId: '5015',
          indicia: 'MEDIA_MAIL',
          ancillaryEndorsement: 'ADDRESS_CORRECTION',
          specialServices: 'USPS_DELIVERY_CONFIRMATION',
        },
        variableHandlingChargeDetail: {
          fixedValue: { amount: 24.45, currency: 'USD' },
          percentValue: 12.45,
          rateElementBasis: 'NET_CHARGE',
          rateLevelType: 'BUNDLED_RATE',
          rateType: 'ACCOUNT',
        },
      },
      accountNumber: { value: 'Your account number' },
      'x-customer-transaction-id': '624deea6-b709-470c-8c39-4b5511281492',
      'x-locale': 'en_US',
    });
  });
});
