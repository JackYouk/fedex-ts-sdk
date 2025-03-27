// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ShipmentsAPI from './shipments';
import * as PackagesAPI from './packages';
import { PackageValidateParams, PackageValidateResponse, Packages } from './packages';
import * as TagAPI from './tag';
import {
  CompletedTagDetail2,
  Tag,
  TagCancelParams,
  TagCancelResponse,
  TagCreateParams,
  TagCreateResponse,
} from './tag';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Shipments extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);
  tag: TagAPI.Tag = new TagAPI.Tag(this._client);

  /**
   * This endpoint helps you to create shipment requests thereby validating all the
   * shipping input information and either generates the labels (if the responses is
   * synchronous) or a job ID if transaction is processed using asynchronous method.
   * <i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS)
   * mechanism.</i>
   */
  create(params: ShipmentCreateParams, options?: RequestOptions): APIPromise<ShipmentCreateResponse> {
    const { 'x-customer-transaction-id': xCustomerTransactionID, 'x-locale': xLocale, ...body } = params;
    return this._client.post('/ship/v1/shipments', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xCustomerTransactionID != null ?
            { 'x-customer-transaction-id': xCustomerTransactionID }
          : undefined),
          ...(xLocale != null ? { 'x-locale': xLocale } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * Use this endpoint to cancel FedEx Express and Ground shipments that have not
   * already been tendered to FedEx. This request will cancel all packages within the
   * shipment. <i>Note: FedEx APIs do not support Cross-Origin Resource Sharing
   * (CORS) mechanism.</i>
   */
  cancel(params: ShipmentCancelParams, options?: RequestOptions): APIPromise<ShipmentCancelResponse> {
    const { 'x-customer-transaction-id': xCustomerTransactionID, 'x-locale': xLocale, ...body } = params;
    return this._client.put('/ship/v1/shipments/cancel', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xCustomerTransactionID != null ?
            { 'x-customer-transaction-id': xCustomerTransactionID }
          : undefined),
          ...(xLocale != null ? { 'x-locale': xLocale } : undefined),
        },
        options?.headers,
      ]),
    });
  }

  /**
   * This endpoint helps you to process confirmed shipments asynchronously (above 40
   * packages) and produce results based on job id. <i>Note: FedEx APIs do not
   * support Cross-Origin Resource Sharing (CORS) mechanism.</i>
   */
  retrieveAsync(
    params: ShipmentRetrieveAsyncParams,
    options?: RequestOptions,
  ): APIPromise<ShipmentRetrieveAsyncResponse> {
    const { 'x-customer-transaction-id': xCustomerTransactionID, 'x-locale': xLocale, ...body } = params;
    return this._client.post('/ship/v1/shipments/results', {
      body,
      ...options,
      headers: buildHeaders([
        {
          ...(xCustomerTransactionID != null ?
            { 'x-customer-transaction-id': xCustomerTransactionID }
          : undefined),
          ...(xLocale != null ? { 'x-locale': xLocale } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

/**
 * This is detailed information on physical location. May be used as an actual
 * physical address (place to which one could go), or as a container of address
 * parts which should be handled as a unit (such as a city-state-ZIP combination
 * within the U.S.).
 */
export interface Address1 {
  /**
   * This is a placeholder for City Name. Note: This is conditional and not required
   * in all the requests. Note: It is recommended for Express shipments for the most
   * accurate ODA and OPA surcharges. Example: Beverly Hills
   */
  city?: string;

  /**
   * This is the two-letter country code. Maximum length is 2. Example: US
   * <a onclick='loadDocReference("countrycodes")'>click here to see Country
   * codes</a>
   */
  countryCode?: string;

  /**
   * Indicate the Postal code. This is Optional for non postal-aware countries.
   * Maximum length is 10. Example: 65247
   * <a onclick='loadDocReference("postalawarecountries")'>click here to see Postal
   * aware countries</a>
   */
  postalCode?: string;

  /**
   * Indicates whether this address is residential (as opposed to commercial).
   * Example: false
   */
  residential?: boolean;

  /**
   * This is a placeholder for State or Province code.State code is required for US,
   * CA, PR and not required for other countries. Conditional. Max length is 2.
   * Example: CA <a onclick='loadDocReference("canadaprovincecodes")'>click here to
   * see State or Province Code</a>
   */
  stateOrProvinceCode?: string;

  /**
   * This is the combination of number, street name, etc. Note: At least one line is
   * required and streetlines more than 3 will be ignored. Empty lines should not be
   * included. Maximum length per line is 35. Example: [10 FedEx Parkway, Suite 302,
   * .etc.]
   */
  streetLines?: Array<string>;
}

/**
 * These are alert details received in the response.
 */
export interface Alert {
  /**
   * Specifies the api alert type.
   */
  alertType?: 'NOTE' | 'WARNING';

  /**
   * Specifies the api alert code. Example: SHIPMENT.VALIDATION.SUCCESS
   */
  code?: string;

  /**
   * Specifies the api alert message. Example: Shipment validated successfully. No
   * errors found.
   */
  message?: string;
}

/**
 * Indicate the contact details of the shipper.
 */
export interface Contact1 {
  /**
   * Contact person's company name. Note: Recommended Length is 35. There's no
   * specific validation for the company name. Example: FedEx
   */
  companyName?: string;

  /**
   * Specify contact email address. Maximum length is 80. Example: sample@company.com
   */
  emailAddress?: string;

  /**
   * Specify contact fax number. Note: Recommended length is 15. There's no specific
   * validation for the fax number. Example: 1234567890
   */
  faxNumber?: string;

  /**
   * Specify contact person name. Recommended length is 70. Note: There's no specific
   * validation for the person name. Example: John Taylor
   */
  personName?: string;

  /**
   * Specify contact phone extension. Note: Recommended length is 6. There's no
   * specific validation for the phone extension. Example: 1234
   */
  phoneExtension?: string;

  /**
   * Contact person's phone number. Minimum length is 10 and supports maximum of 15
   * for certain countries using longer phone numbers. Note: For US and CA, a phone
   * number must have exactly 10 digits, plus an optional leading country code of '1'
   * or '+1'. Example: 918xxxxx890
   */
  phoneNumber?: string;
}

/**
 * Specifies the contact and address details of a location.
 */
export interface ContactAndAddress {
  /**
   * This is detailed information on physical location. May be used as an actual
   * physical address (place to which one could go), or as a container of address
   * parts which should be handled as a unit (such as a city-state-ZIP combination
   * within the U.S.).
   */
  address?: Address1;

  /**
   * Indicate the contact details of the shipper.
   */
  contact?: Contact1;
}

/**
 * Specifies the currency exchange performed on financial amounts on this rate.
 */
export interface CurrencyExchangeRate {
  /**
   * The currency code for the original (converted FROM) currency. Example: Rupee
   * <a onclick='loadDocReference("currencycodes")'>click here to see Currency
   * codes</a>
   */
  fromCurrency?: string;

  /**
   * The currency code for the final(converted INTO) currency. Example: USD
   * <a onclick='loadDocReference("currencycodes")'>click here to see
   * currencycodes</a>
   */
  intoCurrency?: string;

  /**
   * Multiplier used to convert from Currency units to into Currency units. Example:
   * 25.6
   */
  rate?: number;
}

/**
 * Specify the usse and identification of supplied images to be used on this
 * document.
 */
export interface CustomerImageUsage {
  /**
   * Specify the Image ID. Example:IMAGE_5
   */
  id?: 'IMAGE_1' | 'IMAGE_2' | 'IMAGE_3' | 'IMAGE_4' | 'IMAGE_5';

  /**
   * Provided Image Type Example: SIGNATURE
   */
  providedImageType?: 'LETTER_HEAD' | 'SIGNATURE';

  /**
   * Specify Customer Image Type. Example:SIGNATURE
   */
  type?: 'SIGNATURE' | 'LETTER_HEAD';
}

export interface CustomerReference {
  /**
   * This is a customer reference type. Note: Use type Type, RMA_ASSOCIATION and
   * value as the RMA Number to associate Ground Call Tag shipments to the outbound
   * shipment. Example: DEPARTMENT_NUMBER
   */
  customerReferenceType?:
    | 'CUSTOMER_REFERENCE'
    | 'DEPARTMENT_NUMBER'
    | 'INVOICE_NUMBER'
    | 'P_O_NUMBER'
    | 'INTRACOUNTRY_REGULATORY_REFERENCE'
    | 'RMA_ASSOCIATION';

  /**
   * This is a customer reference type value. Example: 3686 <ul><li>The P_O_NUMBER
   * value must be specified in customerReferences under
   * requestedPackageLineItems</li><li>The INVOICE_NUMBER value that is printed on
   * the FedEx-supplied invoice must be specified in customerReferences under
   * commercialInvoice. Value defined in this section will print on the label that is
   * attached to the package</li><li>The RMA value sent by the customer is returned
   * on the label in human readable form but also as a barcode. RMA_ASSOCIATION only
   * prints on the label as a barcode for a Return shipment.</ul>NOTE:<ul><li>
   * INTRACOUNTRY_REGULATORY_REFERENCE is applicable only in Intra-Brazil.</li><li>
   * Maximum length varies for value field depending on
   * customerReferenceType.</li></ul> Maximum length for value is as follows:
   * <ul><li>CUSTOMER_REFERENCE - 40(Express), 30(Ground)</li><li>DEPARTMENT_NUMBER -
   * 30</li><li>INVOICE_NUMBER - 30</li><li>P_O_NUMBER -
   * 30</li><li>INTRACOUNTRY_REGULATORY_REFERENCE - 30</li><li>RMA_ASSOCIATION -
   * 20</li>
   */
  value?: string;
}

/**
 * These are customs clearance details. Required for International and
 * intra-country Shipments.
 */
export interface CustomsClearanceDetail {
  /**
   * Use this object to provide Commercial Invoice details. This element is required
   * for electronic upload of CI data. It will serve to create/transmit an electronic
   * Commercial Invoice through the FedEx system. Customers are responsible for
   * printing their own Commercial Invoice. If you would like FedEx to generate a
   * Commercial Invoice and transmit it to Customs for clearance purposes, you need
   * to specify that in the ETDDetail/RequestedDocumentCopies element. Supports
   * maximum of 99 commodity line items.
   */
  commercialInvoice: CustomsClearanceDetail.CommercialInvoice;

  /**
   * Indicates the details about the dutiable packages. Maximum upto 999 commodities
   * per shipment.
   */
  commodities: Array<CustomsClearanceDetail.Commodity>;

  /**
   * Specify broker information. Use this option only if you are using Broker Select
   * Option for your shipment. A country code must be specified in addition to one of
   * the following address items: postal code, city, or location id.
   */
  brokers?: Array<CustomsClearanceDetail.Broker>;

  /**
   * These are customs Option Detail, type must be indicated for each occurrence.
   */
  customsOption?: CustomsClearanceDetail.CustomsOption;

  /**
   * Specifies about the statements to be declared for Customs.
   */
  declarationStatementDetail?: CustomsClearanceDetail.DeclarationStatementDetail;

  /**
   * This is a payment type, basically indicates who is the payor for the
   * shipment.Conditional required for International Shipments
   */
  dutiesPayment?: CustomsClearanceDetail.DutiesPayment;

  /**
   * These are export Detail used for US or CA exports.
   */
  exportDetail?: CustomsClearanceDetail.ExportDetail;

  /**
   * Specify the risk owner for the Freight shipment.This element is only mandatory
   * or valid for Intra India shipments. Example: OWN_RISK
   */
  freightOnValue?: 'CARRIER_RISK' | 'OWN_RISK';

  /**
   * This is the locale for generated document. Example: en_US
   * <a onclick='loadDocReference("locales")'>click here to see Locales</a> Note: If
   * the locale is left blank or an invalid locale is entered, an error message is
   * returned in response.
   */
  generatedDocumentLocale?: string;

  /**
   * The descriptive data for the importer of Record for the shipment and their
   * physical address, contact and account number information.
   */
  importerOfRecord?: Party1;

  /**
   * This customs value is applicable for all items(or units) under the specified
   * commodity
   */
  insuranceCharge?: Money;

  /**
   * Defaults to false. Only used for international Express requests to indicate if
   * just documents are being shipped or not. A valude of DERIVED will cause the
   * value to be determined by PMIS based on the specified commodities information
   * Example: false
   */
  isDocumentOnly?: boolean;

  /**
   * Specify if the transacting parties are related.
   */
  partiesToTransactionAreRelated?: boolean;

  /**
   * Use this element to provide valid identification details. Used for populating
   * brazil tax id.
   */
  recipientCustomsId?: CustomsClearanceDetail.RecipientCustomsID;

  /**
   * These are the regulatory controls applicable to the shipment.
   * Example:USMCA,FOOD_OR_PERISHABLE
   */
  regulatoryControls?: Array<
    | 'FOOD_OR_PERISHABLE'
    | 'USMCA'
    | 'NOT_APPLICABLE_FOR_LOW_VALUE_CUSTOMS_EXCEPTIONS'
    | 'NOT_IN_FREE_CIRCULATION'
  >;

  /**
   * This customs value is applicable for all items(or units) under the specified
   * commodity
   */
  totalCustomsValue?: Money;
}

export namespace CustomsClearanceDetail {
  /**
   * Use this object to provide Commercial Invoice details. This element is required
   * for electronic upload of CI data. It will serve to create/transmit an electronic
   * Commercial Invoice through the FedEx system. Customers are responsible for
   * printing their own Commercial Invoice. If you would like FedEx to generate a
   * Commercial Invoice and transmit it to Customs for clearance purposes, you need
   * to specify that in the ETDDetail/RequestedDocumentCopies element. Supports
   * maximum of 99 commodity line items.
   */
  export interface CommercialInvoice {
    /**
     * The comments that will populate the Commercial Invoice (or Pro Forma). Only the
     * comments specified in the first two indexes of the array will be printed on the
     * invoice and other comments would be ignored as the limitation is set for only
     * two indexes. It considers the comment which is in the first index as a Special
     * Instructions, Hence the comment at first index will be printed under special
     * instructions and the other will be printed at comments section in the Commercial
     * Invoice Document. Example: comments
     */
    comments?: Array<string>;

    /**
     * These are additional customer reference data for commercial invoice.
     */
    customerReferences?: Array<ShipmentsAPI.CustomerReference>;

    /**
     * This is the declaration statement which will populate the Commercial Invoice (or
     * Pro Forma). Maximum length is 554. Example: declarationStatement
     */
    declarationStatement?: string;

    /**
     * These are email disposition details. Provides the type and email addresses of
     * e-mail recipients. If returnedDispositionDetail in labelSpecification is set as
     * true then email will be send with label and documents copy.
     */
    emailNotificationDetail?: CommercialInvoice.EmailNotificationDetail;

    /**
     * This customs value is applicable for all items(or units) under the specified
     * commodity
     */
    freightCharge?: ShipmentsAPI.Money;

    /**
     * This customs value is applicable for all items(or units) under the specified
     * commodity
     */
    handlingCosts?: ShipmentsAPI.Money;

    /**
     * The originatorName that will populate the Commercial Invoice (or Pro Forma).
     * Example: originator name
     */
    originatorName?: string;

    /**
     * This customs value is applicable for all items(or units) under the specified
     * commodity
     */
    packingCosts?: ShipmentsAPI.Money;

    /**
     * The reason for the shipment. Note: SOLD is not a valid purpose for a Proforma
     * Invoice. Example: REPAIR_AND_RETURN
     */
    shipmentPurpose?: 'GIFT' | 'NOT_SOLD' | 'PERSONAL_EFFECTS' | 'REPAIR_AND_RETURN' | 'SAMPLE' | 'SOLD';

    /**
     * These are special instructions that will be populated on the Commercial Invoice
     * (or Pro Forma). Example: specialInstructions
     */
    specialInstructions?: string;

    /**
     * This customs value is applicable for all items(or units) under the specified
     * commodity
     */
    taxesOrMiscellaneousCharge?: ShipmentsAPI.Money;

    /**
     * Specifies the Taxes Or Miscellaneous Charge Type Example: COMMISSIONS
     */
    taxesOrMiscellaneousChargeType?:
      | 'COMMISSIONS'
      | 'DISCOUNTS'
      | 'HANDLING_FEES'
      | 'OTHER'
      | 'ROYALTIES_AND_LICENSE_FEES'
      | 'TAXES';

    /**
     * The termsOfSale that will populate the Commercial Invoice (or Pro Forma). Max
     * length is 3 Example: FCA
     */
    termsOfSale?: string;
  }

  export namespace CommercialInvoice {
    /**
     * These are email disposition details. Provides the type and email addresses of
     * e-mail recipients. If returnedDispositionDetail in labelSpecification is set as
     * true then email will be send with label and documents copy.
     */
    export interface EmailNotificationDetail {
      /**
       * This is email Address. Example: xxxx@xxx.com
       */
      emailAddress?: string;

      /**
       * Specify the recipient Type. Example: SHIPPER/BROKER
       */
      recipientType?: string;

      /**
       * Specify the email status. Example: EMAILED
       */
      type?: string;
    }
  }

  export interface Commodity {
    /**
     * Required ScrewsMaximum allowed 450 characters. Example: description
     */
    description: string;

    /**
     * This object contains additional quantitative information other than weight and
     * quantity to calculate duties and taxes.
     */
    additionalMeasures?: Array<Commodity.AdditionalMeasure>;

    /**
     * This is an identifying mark or number used on the packaging of a shipment to
     * help customers identify a particular shipment Example: 87123
     */
    cIMarksAndNumbers?: string;

    /**
     * This is commodity country of manufacture. This is required for International
     * shipments. Maximum allowed length is 4. Example: US
     * <a onclick='loadDocReference("countrycodes")'>click here to see Country
     * codes</a>
     */
    countryOfManufacture?: string;

    /**
     * This customs value is applicable for all items(or units) under the specified
     * commodity.
     */
    customsValue?: Commodity.CustomsValue;

    /**
     * Specify the export license expiration date for the shipment. Format YYYY-MM-DD
     * Example : 2009-04-12
     */
    exportLicenseExpirationDate?: string;

    /**
     * This is the export license number for the shipment. Example: 26456
     */
    exportLicenseNumber?: string;

    /**
     * This is to specify the Harmonized Tariff System (HTS) code to meet U.S. and
     * foreign governments' customs requirements. These are mainly used to estimate the
     * duties and taxes. Example: 0613 To research the classification for your
     * commodity, use the FedEx Global Trade Manager online at
     * <a href='http://www.fedex.com/gtm' target='_blank'>fedex.com/gtm</a>. You will
     * find country-specific information to determine whether your commodity is
     * considered to be a document or non-document for your destination.
     */
    harmonizedCode?: string;

    /**
     * This is Commodity name. Example: Non-Threaded Rivets
     */
    name?: string;

    /**
     * Indicate the number of pieces associated with the commodity. The value can
     * neither be negative nor exceed 9,999. Example: 12
     */
    numberOfPieces?: number;

    /**
     * This is a part number. Example: 167
     */
    partNumber?: string;

    /**
     * This field is used for calculation of duties and taxes.
     *
     * Valid values are : BUSINESS and CONSUMER. Example:BUSINESS
     */
    purpose?: 'BUSINESS' | 'CONSUMER';

    /**
     * This is the units quantity (using quantityUnits as the unit of measure) per
     * commodity. This is used to estimate duties and taxes. Example: 125
     */
    quantity?: number;

    /**
     * This is the unit of measure for the units quantity. This is used to estimate
     * duties and taxes. Example: EA
     * <a onclick='loadDocReference("harmonizedsystemcodeunitofmeasure-table1")'>click
     * here to see Commodity Unit Measures</a>
     */
    quantityUnits?: string;

    /**
     * This customs value is applicable for all items(or units) under the specified
     * commodity
     */
    unitPrice?: ShipmentsAPI.Money;

    /**
     * Indicates the USMCA detail
     */
    usmcaDetail?: Commodity.UsmcaDetail;

    /**
     * It is the total weight of the commodity. Note: Weight is not required for One
     * rate shipments
     */
    weight?: Commodity.Weight;
  }

  export namespace Commodity {
    export interface AdditionalMeasure {
      /**
       * Specify commodity quantity.
       */
      quantity?: number;

      /**
       * Unit of measure used to express the quantity of this commodity line item.
       */
      units?: string;
    }

    /**
     * This customs value is applicable for all items(or units) under the specified
     * commodity.
     */
    export interface CustomsValue {
      /**
       * This is commodity value in amount used for Customs declaration. Max limit: 11
       * digits before decimal. Example: 1,55,6457.25
       */
      amount?: number;

      /**
       * This is the currency code for the amount. Example: USD
       * <a onclick='loadDocReference("currencycodes")'>Click here to see Currency
       * codes</a>
       */
      currency?: string;
    }

    /**
     * Indicates the USMCA detail
     */
    export interface UsmcaDetail {
      /**
       * Specify the origin criterion.
       */
      originCriterion?: 'A' | 'B' | 'C' | 'D' | 'E';
    }

    /**
     * It is the total weight of the commodity. Note: Weight is not required for One
     * rate shipments
     */
    export interface Weight {
      /**
       * Indicate the weight unit type. The package and commodity weight unit should be
       * the same else the request will result in an error.
       */
      units: 'KG';

      /**
       * Weight Value. Example: 68.25
       */
      value: number;
    }
  }

  /**
   * These are broker details for the shipment.
   */
  export interface Broker {
    /**
     * These are broker details for the shipment with physical address, contact and
     * account number information.
     */
    broker?: Broker.Broker;

    /**
     * Identifies the type of Broker. Example: IMPORT
     */
    type?: 'IMPORT';
  }

  export namespace Broker {
    /**
     * These are broker details for the shipment with physical address, contact and
     * account number information.
     */
    export interface Broker extends ShipmentsAPI.Party1 {
      /**
       * Specifies broker address details.
       */
      address: unknown;

      /**
       * Specifies broker contact details.
       */
      contact: unknown;
    }
  }

  /**
   * These are customs Option Detail, type must be indicated for each occurrence.
   */
  export interface CustomsOption {
    /**
     * Specify additional description about customs options. This is a required field
     * when the Type is OTHER.
     */
    description?: string;

    /**
     * Specify the reason for a global return, as recognized by Customs. Valid
     * values:<ul><li>COURTESY_RETURN_LABEL: Applicable for Outbound
     * shipments.</li><li>EXHIBITION_TRADE_SHOW: For exhibition or trade-show, outbound
     * and inbound.</li><li>FAULTY_ITEM: For faulty item being returned, inbound
     * only.</li><li>FOLLOWING_REPAIR: For repaired or processed item being sent,
     * outbound only.</li><li>FOR_REPAIR: For repair or processing, outbound and
     * inbound.</li><li>ITEM_FOR_LOAN: For loan item, outbound and
     * inbound.</li><li>OTHER: Other reason, outbound and inbound. This type requires a
     * description.</li><li>REJECTED: For rejected merchandise being returned,
     * inbound.</li><li>REPLACEMENT: For replacement being sent, outbound
     * only.</li><li>TRIAL: For use in a trial, outbound and inbound.</li></ul>
     */
    type?:
      | 'COURTESY_RETURN_LABEL'
      | 'EXHIBITION_TRADE_SHOW'
      | 'FAULTY_ITEM'
      | 'FOLLOWING_REPAIR'
      | 'FOR_REPAIR'
      | 'ITEM_FOR_LOAN'
      | 'OTHER'
      | 'REJECTED'
      | 'REPLACEMENT'
      | 'TRIAL';
  }

  /**
   * Specifies about the statements to be declared for Customs.
   */
  export interface DeclarationStatementDetail {
    /**
     * Specify the low Value statement necessary for printing the USMCA for Customs
     * documentation.
     */
    usmcaLowValueStatementDetail: DeclarationStatementDetail.UsmcaLowValueStatementDetail;
  }

  export namespace DeclarationStatementDetail {
    /**
     * Specify the low Value statement necessary for printing the USMCA for Customs
     * documentation.
     */
    export interface UsmcaLowValueStatementDetail {
      /**
       * Customs Role Type. Example: EXPORTER
       */
      customsRole: 'EXPORTER' | 'IMPORTER';

      /**
       * Specify the country Of Origin of Low Value Document for Customs declaration.
       * Example:true
       */
      countryOfOriginLowValueDocumentRequested?: boolean;
    }
  }

  /**
   * This is a payment type, basically indicates who is the payor for the
   * shipment.Conditional required for International Shipments
   */
  export interface DutiesPayment {
    /**
     * These are billing details.
     */
    billingDetails?: DutiesPayment.BillingDetails;

    /**
     * Indicates who and how the shipment will be paid for.Required for Express and
     * Ground. Example: SENDER
     */
    paymentType?: 'SENDER' | 'RECIPIENT' | 'THIRD_PARTY' | 'COLLECT';

    /**
     * Information about the person who is paying for the shipment. Not applicable for
     * credit card payment.
     */
    payor?: DutiesPayment.Payor;
  }

  export namespace DutiesPayment {
    /**
     * These are billing details.
     */
    export interface BillingDetails {
      /**
       * This is account nick name.
       */
      accountNickname?: string;

      /**
       * This is bill to account number.
       */
      accountNumber?: string;

      /**
       * This is the country code of the account number. Example: CA
       */
      accountNumberCountryCode?: string;

      /**
       * This is bill to alias identifier.
       */
      aliasId?: string;

      /**
       * Indicates a billing code.
       */
      billingCode?: string;

      /**
       * These are duties and taxes billing type.
       */
      billingType?: string;
    }

    /**
     * Information about the person who is paying for the shipment. Not applicable for
     * credit card payment.
     */
    export interface Payor {
      /**
       * Use this object to provide the attributes such as physical address, contact
       * information and account number information.
       */
      responsibleParty?: Payor.ResponsibleParty;
    }

    export namespace Payor {
      /**
       * Use this object to provide the attributes such as physical address, contact
       * information and account number information.
       */
      export interface ResponsibleParty {
        /**
         * This is FedEx Account number details.
         */
        accountNumber?: ShipmentsAPI.PartyAccountNumber;

        /**
         * This is detailed information on physical location. May be used as an actual
         * physical address (place to which one could go), or as a container of address
         * parts which should be handled as a unit (such as a city-state-ZIP combination
         * within the U.S.).
         */
        address?: ShipmentsAPI.Address1;

        /**
         * Indicate the contact details of the shipper.
         */
        contact?: ShipmentsAPI.Contact1;

        /**
         * This is the tax identification number details.
         */
        tins?: Array<ShipmentsAPI.TaxpayerIdentification>;
      }
    }
  }

  /**
   * These are export Detail used for US or CA exports.
   */
  export interface ExportDetail {
    /**
     * Specify the filing option being exercised. Required for non-document shipments
     * originating in Canada destinated for any country other than Canada, the United
     * States, Puerto Rico, or the U.S. Virgin Islands.
     */
    b13AFilingOption?:
      | 'NOT_REQUIRED'
      | 'MANUALLY_ATTACHED'
      | 'FILED_ELECTRONICALLY'
      | 'SUMMARY_REPORTING'
      | 'FEDEX_TO_STAMP';

    /**
     * Use this object to specify the appropriate destination control statement
     * type(s). Also make sure to specify destination country and end user.
     */
    destinationControlDetail?: ExportDetail.DestinationControlDetail;

    /**
     * For US export shipments requiring an EEI, enter the ITN number received from AES
     * when you filed your shipment or the FTR (Foreign Trade Regulations) exemption
     * number.The proper format for an ITN number is AES XYYYYMMDDNNNNNN where YYYYMMDD
     * is date and NNNNNN are numbers generated by the AES. Example: AESX20220714987654
     * Note: The ITN or FTR exemption number you submit in the ship request prints on
     * the international shipping label.
     *
     * For CA export shipments,it can be Proof of report number(15-32 alphanumeric) ,
     * Summary proof of report number(7-32 alphanumeric) or Exemption number(2 digit)
     * based on the selected b13AFilingOption. Example: 98765432107654321(POR number),
     * 7654321(Summary POR number) and 02(Exemption number). For FTR exemption number
     * you need provide a predefined value as NO_EEI_30_37_A.
     */
    exportComplianceStatement?: string;

    /**
     * This is a Permit Number. This field is applicable only to Canada export
     * non-document shipments of any value to any destination. No special characters
     * are allowed. Example: 12345
     */
    permitNumber?: string;
  }

  export namespace ExportDetail {
    /**
     * Use this object to specify the appropriate destination control statement
     * type(s). Also make sure to specify destination country and end user.
     */
    export interface DestinationControlDetail {
      /**
       * Specify appropriate destination control statement type(s), Also make sure to
       * specify destination country and end user.
       */
      statementTypes: 'DEPARTMENT_OF_COMMERCE' | 'DEPARTMENT_OF_STATE';

      /**
       * Specify DCS shipment destination country. You may enter up to four country codes
       * in this element. Up to 11 alphanumeric characters are allowed. Example: US
       * <a onclick='loadDocReference("countrycodes")'>click here to see Country
       * codes</a>
       */
      destinationCountries?: Array<string>;

      /**
       * Specify End User name. Its is required if StatementTypes is entered as
       * DEPARTMENT_OF_STATE. Example: John Wick
       */
      endUser?: string;
    }
  }

  /**
   * Use this element to provide valid identification details. Used for populating
   * brazil tax id.
   */
  export interface RecipientCustomsID {
    /**
     * This is ID Type.
     */
    type?: 'COMPANY' | 'INDIVIDUAL' | 'PASSPORT';

    /**
     * This is the ID number.
     */
    value?: string;
  }
}

/**
 * Indicate the Delivery On Invoice Acceptance detail. Recipient is required for
 * Delivery On Invoice Special service.
 */
export interface DeliveryOnInvoiceAcceptanceDetail {
  /**
   * The descriptive data for the recipient of the shipment and the physical location
   * for the shipment destination.
   */
  recipient?: DeliveryOnInvoiceAcceptanceDetail.Recipient;
}

export namespace DeliveryOnInvoiceAcceptanceDetail {
  /**
   * The descriptive data for the recipient of the shipment and the physical location
   * for the shipment destination.
   */
  export interface Recipient extends ShipmentsAPI.RecipientsParty {
    address: Recipient.Address;

    contact: Recipient.Contact;
  }

  export namespace Recipient {
    export interface Address {
      /**
       * The two-letter code used to identify a country. Maximum length is 2. Example: US
       * <a onclick='loadDocReference("countrycodes")'>click here to see Country
       * codes</a>
       */
      countryCode: string;

      /**
       * This is the combination of number, street name, etc. Note: At least one line is
       * required and streetlines more than 3 will be ignored. Empty lines should not be
       * included. Maximum length per line is 35. Example: [10 FedEx Parkway, Suite 302,
       * .etc.]
       */
      streetLines: Array<string>;
    }

    export interface Contact {
      /**
       * Identifies the company this contact is associated with. Maximum length is 35.
       */
      companyName: string;

      /**
       * Specify Person Name. Example: John Taylor
       */
      personName: string;

      /**
       * Identifies the phone number associated with this contact. Maximum length is 10.
       */
      phoneNumber: string;
    }
  }
}

/**
 * Indicates the doc tab zone specification.
 */
export interface DocTabZoneSpecification {
  /**
   * Indicate the path request/reply element to be printed on doc tab. Example:
   * <ul><li> REQUEST/PACKAGE/weight/Value</li><li>
   * REQUEST/PACKAGE/weight/Value</li><li>
   * REQUEST/PACKAGE/InsuredValue/Amount</li><li>
   * REQUEST/SHIPMENT/SpecialServicesRequested/CodDetail/CodCollectionAmount/Amount</li><li>REQUEST/SHIPMENT/Shipper/Address/StreetLines[1]CLIENT/MeterNumber</li><li>
   * TRANSACTION/CustomerTransactionId</li><li>
   * REQUEST/SHIPMENT/TotalWeight/Value</li><li>
   * REQUEST/SHIPMENT/ShipTimestamp</li><li>
   * REQUEST/SHIPMENT/Recipient/Contact/PersonName</li><li>
   * REPLY/SHIPMENT/OperationalDetail/DeliveryDate</li><li>
   * REPLY/SHIPMENT/RATES/ACTUAL/totalBaseCharge/Amount</li><li>
   * REPLY/SHIPMENT/RATES/ACTUAL/totalFreightDiscounts/Amount</li><li>
   * REPLY/SHIPMENT/RATES/ACTUAL/totalSurcharges/Amount</li><li>
   * REPLY/SHIPMENT/RATES/ACTUAL/totalNetCharge/Amount</li><li>
   * REPLY/SHIPMENT/RATES/PAYOR_ACCOUNT_PACKAGE/totalSurcharges/Amount</li></ul>
   */
  dataField?: string;

  /**
   * Indicates the parameter name in the header for the doc tab zone. The maximum
   * charater limit is 7. Example: WHT
   */
  header?: string;

  /**
   * Indicates the justification format for the string.
   */
  justification?: 'LEFT' | 'RIGHT';

  /**
   * Indicates the actual data to be printed in the label
   */
  literalValue?: string;

  /**
   * It is a non-negative integer that represents the portion of doc-tab in a label.
   * Example: 1
   */
  zoneNumber?: number;
}

/**
 * Indicate the requested options for document format.
 */
export interface DocumentFormatOptionsRequested {
  /**
   * Indicates the format options. SUPPRESS_ADDITIONAL_LANGUAGES value will suppress
   * English language if another language is specified in the language code field.
   */
  options?: Array<'SHIPPING_LABEL_FIRST' | 'SHIPPING_LABEL_LAST' | 'SUPPRESS_ADDITIONAL_LANGUAGES'>;
}

/**
 * Use this object to specify all information on how the electronic Trade document
 * references used with the shipment.
 */
export interface EtdDetail {
  /**
   * Use this object to specify the details regarding already uploded document(s).
   * This object is required if the documents are uploaded Pre-Shipment uploaded
   * documents. It is recommended to provide values for all elements under this
   * object.
   */
  attachedDocuments?: Array<UploadDocumentReferenceDetail>;

  /**
   * Specifies the Post Document Upload Example: POST_SHIPMENT_UPLOAD_REQUESTED
   */
  attributes?: Array<'POST_SHIPMENT_UPLOAD_REQUESTED'>;

  /**
   * Indicates the types of shipping documents requested by the shipper. Example:
   * CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE etc.
   */
  requestedDocumentTypes?: Array<
    | 'CERTIFICATE_OF_ORIGIN'
    | 'COMMERCIAL_INVOICE'
    | 'CUSTOM_PACKAGE_DOCUMENT'
    | 'CUSTOM_SHIPMENT_DOCUMENT'
    | 'CUSTOMER_SPECIFIED_LABELS'
    | 'EXPORT_DECLARATION'
    | 'GENERAL_AGENCY_AGREEMENT'
    | 'LABEL'
    | 'USMCA_CERTIFICATION_OF_ORIGIN'
    | 'OP_900'
    | 'PENDING_SHIPMENT_EMAIL_NOTIFICATION'
    | 'PRO_FORMA_INVOICE'
    | 'RETURN_INSTRUCTIONS'
    | 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN'
  >;
}

/**
 * Use this object to specify required information for a shipment to be held at
 * destination FedEx location. <i>Note: This object HoldAtLocationDetail is
 * Required, when HOLD_AT_LOCATION is chosen in the specialServiceTypes.</i>
 */
export interface HoldAtLocationDetail {
  /**
   * This is an alphanumeric identifier used for Location/Facility Identification.
   * Example: YBZA Note: <ul><li>For HAL Shipment, Location ID is <b>REQUIRED</b> to
   * ensure packages are delivered to the right location.</li><li>Use endpoint
   * [<b>Find Location</b>] in [<b>Location Search API</b>], to find the correct
   * location ID for your shipment.</li></ul>
   */
  locationId: string;

  /**
   * Specifies the contact and address details of a location.
   */
  locationContactAndAddress?: ContactAndAddress;

  /**
   * Type of facility at which package/shipment is to be held. Example: FEDEX_ONSITE
   */
  locationType?:
    | 'FEDEX_AUTHORIZED_SHIP_CENTER'
    | 'FEDEX_OFFICE'
    | 'FEDEX_SELF_SERVICE_LOCATION'
    | 'FEDEX_STAFFED'
    | 'RETAIL_ALLICANCE_LOCATION'
    | 'FEDEX_GROUND_TERMINAL'
    | 'FEDEX_ONSITE';
}

/**
 * These are Special service elements for FedEx Ground Home Delivery shipments. If
 * selected, element homedeliveryPremiumType is mandatory.
 */
export interface HomeDeliveryPremiumDetail {
  /**
   * This is delivery date. Required for FedEx Date Certain Home Delivery. Valid
   * dates are Monday to Sunday. There may be a delay in delivery on Sundays to
   * locations that are geographically difficult to access. Example: 2019-06-26
   */
  deliveryDate?: string;

  /**
   * Home Delivery Premium Type. Allows the user to specify additional premimum
   * service options for their home delivery shipment. Customer can specify Evening
   * delivery or a Date certain, or can specify they would like to make an
   * appointment for the delivery. Example: APPOINTMENT
   */
  homedeliveryPremiumType?: 'APPOINTMENT' | 'DATE_CERTAIN' | 'EVENING';

  /**
   * Indicate the phone number. Only numeric values allowed. Note that phoneNumber is
   * mandatory when homedeliveryPremiumType is DATE_CERTAIN or EVENING.
   */
  phoneNumber?: HomeDeliveryPremiumDetail.PhoneNumber;
}

export namespace HomeDeliveryPremiumDetail {
  /**
   * Indicate the phone number. Only numeric values allowed. Note that phoneNumber is
   * mandatory when homedeliveryPremiumType is DATE_CERTAIN or EVENING.
   */
  export interface PhoneNumber {
    /**
     * Area-Code Example: 901
     */
    areaCode?: string;

    /**
     * Extension Example: 200
     */
    extension?: string;

    /**
     * Local Number Example: 3575012
     */
    localNumber?: string;

    /**
     * Personal Identification Number Example: 98712345
     */
    personalIdentificationNumber?: string;
  }
}

/**
 * Use this object to specify International Controlled Export shipment Details.
 * Note: licenseOrPermitExpirationDate and licenseOrPermitNumber are not required
 * when type is WAREHOUSE_WITHDRAWAL.
 */
export interface InternationalControlledExportDetail {
  /**
   * International Controlled Export Type Example: WAREHOUSE_WITHDRAWAL
   */
  type:
    | 'DEA_036'
    | 'DEA_236'
    | 'DSP_05'
    | 'DSP_61'
    | 'DSP_73'
    | 'DSP_85'
    | 'DSP_LICENSE_AGREEMENT'
    | 'WAREHOUSE_WITHDRAWAL'
    | 'FROM_FOREIGN_TRADE_ZONE'
    | 'DEA_486'
    | 'DSP_94';

  /**
   * Indicate Entry Number for the export. Example: 125
   */
  entryNumber?: string;

  /**
   * Indicate the Foreign Trade Zone Code. Example: US
   */
  foreignTradeZoneCode?: string;

  /**
   * Indicate the expiration date for the license or permit. The format is
   * YYYY-MM-DD. Example: "2019-12-03"
   */
  licenseOrPermitExpirationDate?: string;

  /**
   * Indicate License Or Permit Number for the commodity being exported. Example: 11
   */
  licenseOrPermitNumber?: string;
}

/**
 * These are International Traffic In Arms Regulations shipment service details.
 */
export interface InternationalTrafficInArmsRegulationsDetail {
  /**
   * The export or license number for the ITAR shipment. Minimum length is 5
   * characters. Maximum length is 21 characters. Example: 9871234
   */
  licenseOrExemptionNumber: string;
}

/**
 * These are shipping document/label specific information.
 */
export interface LabelResponseVo {
  /**
   * These are alerts received in the label response.
   */
  alerts?: Array<Alert>;

  /**
   * This is the content key of the document/label. Example: content key
   */
  contentKey?: string;

  /**
   * Indicates the type of document/label.
   */
  contentType?:
    | 'LABEL'
    | 'BILL_OF_LADING'
    | 'GAA_FORM'
    | 'HAZMAT_LABEL'
    | 'END_OF_DAY_HAZMAT_REPORT'
    | 'MANIFEST_REPORT'
    | 'MULTIWEIGHT_REPORT'
    | 'MERGED_LABEL_DOCUMENTS'
    | 'AUXILIARY'
    | 'RETURN_INSTRUCTIONS'
    | 'ACCEPTANCE_LABEL'
    | 'COMMERCIAL_INVOICE'
    | 'PROFORMA_INVOICE'
    | 'USMCA_CERTIFICATION_OF_ORIGIN'
    | 'CERTIFICATE_OF_ORIGIN'
    | 'MERGED_LABELS_ONLY'
    | 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN';

  /**
   * These are the number of copies to print for the specific document type. Example:
   * 10
   */
  copiesToPrint?: number;

  /**
   * This is the document type. Example: PDF
   */
  docType?: string;

  /**
   * Specifies if the document is encoded. Example: encoded label
   */
  encodedLabel?: string;

  /**
   * This is the tracking number of the package. Example: 49XXX0000XXX20032835
   */
  trackingNumber?: string;

  /**
   * The URL of the shipping document/label Example:
   * https://.../document/v2/document/retrieve/SH,794816968200_Merge/isLabel=true&autoPrint=false
   * <i>Note: The URL once created will be active for 24 hours.</i>
   */
  url?: string;
}

/**
 * These are label specification details includes the image type, printer format,
 * and label stock for label. Can also specify specific details such as doc-tab
 * content, regulatory labels, and masking data on the label.
 */
export interface LabelSpecification {
  /**
   * Specifies the image type of this shipping document. Example:PDF
   */
  imageType: 'ZPLII' | 'EPL2' | 'PDF' | 'PNG';

  /**
   * Label Stock Type. Example: PAPER_7X475
   */
  labelStockType:
    | 'PAPER_4X6'
    | 'STOCK_4X675'
    | 'PAPER_4X675'
    | 'PAPER_4X8'
    | 'PAPER_4X9'
    | 'PAPER_7X475'
    | 'PAPER_85X11_BOTTOM_HALF_LABEL'
    | 'PAPER_85X11_TOP_HALF_LABEL'
    | 'PAPER_LETTER'
    | 'STOCK_4X675_LEADING_DOC_TAB'
    | 'STOCK_4X8'
    | 'STOCK_4X9_LEADING_DOC_TAB'
    | 'STOCK_4X6'
    | 'STOCK_4X675_TRAILING_DOC_TAB'
    | 'STOCK_4X9_TRAILING_DOC_TAB'
    | 'STOCK_4X9'
    | 'STOCK_4X85_TRAILING_DOC_TAB'
    | 'STOCK_4X105_TRAILING_DOC_TAB';

  /**
   * This object allows the control of label content for customization.
   */
  customerSpecifiedDetail?: LabelSpecification.CustomerSpecifiedDetail;

  /**
   * Specifies the label Format Type Example: COMMON2D
   */
  labelFormatType?: 'COMMON2D' | 'LABEL_DATA_ONLY';

  /**
   * This is the order of the Shipping label/documents to be generated.
   */
  labelOrder?: 'SHIPPING_LABEL_FIRST' | 'SHIPPING_LABEL_LAST';

  /**
   * This is applicable only to documents produced on thermal printers with roll
   * stock.
   */
  labelPrintingOrientation?: 'BOTTOM_EDGE_OF_TEXT_FIRST' | 'TOP_EDGE_OF_TEXT_FIRST';

  /**
   * This is applicable only to documents produced on thermal printers with roll
   * stock.
   */
  labelRotation?: 'LEFT' | 'RIGHT' | 'UPSIDE_DOWN' | 'NONE';

  /**
   * Specifies the contact and address details of a location.
   */
  printedLabelOrigin?: ContactAndAddress;

  /**
   * Specifies the image resolution in DPI (Dots Per Inch). Valid values are 203
   * & 300. If not provided or for any other value, system will default it to
   * 203.Note: 300 DPI resolution is only allowed for ZPLII image type.
   */
  resolution?: number;

  /**
   * Specifies a particular way in which a kind of shipping document is to be
   * produced and provided Example:RETURNED
   */
  returnedDispositionDetail?: string;
}

export namespace LabelSpecification {
  /**
   * This object allows the control of label content for customization.
   */
  export interface CustomerSpecifiedDetail {
    /**
     * Specify how the additional details to be provided on the labels.
     */
    additionalLabels?: Array<CustomerSpecifiedDetail.AdditionalLabel>;

    /**
     * Specifies details of doc tab content.It is only applicable only with imageType
     * as ZPLII.
     */
    docTabContent?: CustomerSpecifiedDetail.DocTabContent;

    /**
     * Controls which data/sections will be suppressed. Example: TOTAL_WEIGHT
     */
    maskedData?: Array<
      | 'CUSTOMS_VALUE'
      | 'SHIPPER_ACCOUNT_NUMBER'
      | 'DIMENSIONS'
      | 'DUTIES_AND_TAXES_PAYOR_ACCOUNT_NUMBER'
      | 'INSURED_VALUE'
      | 'SECONDARY_BARCODE'
      | 'SHIPPER_INFORMATION'
      | 'TERMS_AND_CONDITIONS'
      | 'TOTAL_WEIGHT'
      | 'TRANSPORTATION_CHARGES_PAYOR_ACCOUNT_NUMBER'
    >;

    /**
     * Specify how the regulatory details to be provided on the labels.
     */
    regulatoryLabels?: Array<CustomerSpecifiedDetail.RegulatoryLabel>;
  }

  export namespace CustomerSpecifiedDetail {
    export interface AdditionalLabel {
      /**
       * Specifies the count of label to return. Example:1
       */
      count?: number;

      /**
       * Specify the type of additional details to be added on the label.
       * Example:MANIFEST
       */
      type?:
        | 'BROKER'
        | 'CONSIGNEE'
        | 'CUSTOMS'
        | 'DESTINATION'
        | 'DESTINATION_CONTROL_STATEMENT'
        | 'FREIGHT_REFERENCE'
        | 'MANIFEST'
        | 'ORIGIN'
        | 'RECIPIENT'
        | 'SECOND_ADDRESS'
        | 'SHIPPER';
    }

    /**
     * Specifies details of doc tab content.It is only applicable only with imageType
     * as ZPLII.
     */
    export interface DocTabContent {
      /**
       * It is a doc tab content type which is in barcoded format.
       */
      barcoded?: DocTabContent.Barcoded;

      /**
       * Indicates the content type of the doc tab.
       */
      docTabContentType?: 'BARCODED' | 'CUSTOM' | 'MINIMUM' | 'STANDARD' | 'ZONE001';

      /**
       * Indicate the doc tab specification for different zones on the label. The
       * specification includes zone number, header and data field to be displayed on the
       * label.
       */
      zone001?: DocTabContent.Zone001;
    }

    export namespace DocTabContent {
      /**
       * It is a doc tab content type which is in barcoded format.
       */
      export interface Barcoded {
        /**
         * Indicates the doc tab zone specification.
         */
        specification?: ShipmentsAPI.DocTabZoneSpecification;

        /**
         * Indicates the type of barcode symbology used on FedEx documents and labels.
         */
        symbology?:
          | 'CODABAR'
          | 'CODE128'
          | 'CODE128_WIDEBAR'
          | 'CODE128B'
          | 'CODE128C'
          | 'CODE39'
          | 'CODE93'
          | 'I2OF5'
          | 'MANUAL'
          | 'PDF417'
          | 'POSTNET'
          | 'QR_CODE'
          | 'UCC128';
      }

      /**
       * Indicate the doc tab specification for different zones on the label. The
       * specification includes zone number, header and data field to be displayed on the
       * label.
       */
      export interface Zone001 {
        /**
         * Indicate the doc tab specifications for the individual doc tab zone on the
         * label.
         */
        docTabZoneSpecifications?: Array<ShipmentsAPI.DocTabZoneSpecification>;
      }
    }

    export interface RegulatoryLabel {
      /**
       * Specify the regulatory content preference to be displayed on the label.
       */
      generationOptions?:
        | 'CONTENT_ON_SHIPPING_LABEL_PREFERRED'
        | 'CONTENT_ON_SUPPLEMENTAL_LABEL_ONLY'
        | 'CONTENT_ON_SHIPPING_LABEL_ONLY';

      /**
       * Specify the type of regulatory content to be added on the label.
       */
      type?: 'ALCOHOL_SHIPMENT_LABEL';
    }
  }
}

/**
 * Specifies the advisory details.
 */
export interface Message {
  /**
   * Specifies the message code for the tag created. Example: code
   */
  code?: string;

  /**
   * Specifies the message ID and value. Example: localizedText
   */
  localizedText?: string;

  /**
   * Specifies the message parameters list.
   */
  parameters?: Array<Message.Parameter>;

  /**
   * Specifies the text message for the tag created. Example: Text
   */
  text?: string;
}

export namespace Message {
  export interface Parameter {
    /**
     * Specifies the message parameter code. Example: message ID
     */
    id?: string;

    /**
     * Specifies the message parameter value of the code. Example: value
     */
    value?: string;
  }
}

/**
 * This customs value is applicable for all items(or units) under the specified
 * commodity
 */
export interface Money {
  /**
   * This is the amount. Maximum limit is 5 digits before decimal. Example: 12.45
   */
  amount?: number;

  /**
   * This is the currency code for the amount. Example: USD
   * <a onclick='loadDocReference("currencycodes")'>Click here to see Currency
   * codes</a>
   */
  currency?: string;
}

export interface Party1 {
  /**
   * Indicate the contact details for this shipment.
   */
  contact: PartyContact;

  /**
   * This is FedEx Account number details.
   */
  accountNumber?: PartyAccountNumber;

  /**
   * This is detailed information on physical location. May be used as an actual
   * physical address (place to which one could go), or as a container of address
   * parts which should be handled as a unit (such as a city-state-ZIP combination
   * within the US).
   */
  address?: PartyAddress;

  /**
   * This is the tax identification number details.
   */
  tins?: Array<TaxpayerIdentification>;
}

export interface Party3 {
  /**
   * This is detailed information on physical location. May be used as an actual
   * physical address (place to which one could go), or as a container of address
   * parts which should be handled as a unit (such as a city-state-ZIP combination
   * within the US).
   */
  address?: Party3.Address;

  /**
   * Indicate the contact details for this shipment.
   */
  contact?: Party3.Contact;

  /**
   * This is the tax identification number details.
   */
  tins?: Array<TaxpayerIdentification>;
}

export namespace Party3 {
  /**
   * This is detailed information on physical location. May be used as an actual
   * physical address (place to which one could go), or as a container of address
   * parts which should be handled as a unit (such as a city-state-ZIP combination
   * within the US).
   */
  export interface Address {
    /**
     * This is a placeholder for City Name. Example: Beverly Hills
     */
    city?: string;

    /**
     * This is the two-letter country code. Maximum length is 2. Example: US
     * <a onclick='loadDocReference("countrycodes")'>click here to see Country
     * codes</a>
     */
    countryCode?: string;

    /**
     * Indicates the geographic coordinates. example: geographicCoordinates
     */
    geographicCoordinates?: string;

    /**
     * This is the Postal code. This is Optional for non postal-aware countries.
     * Maximum length is 10. Example: 65247
     * <a onclick='loadDocReference("postalawarecountries")'>click here to see Postal
     * aware countries</a>
     */
    postalCode?: string;

    /**
     * Indicate whether this address is residential (as opposed to commercial).
     */
    residential?: boolean;

    /**
     * This is a placeholder for State or Province code.State code is required for US,
     * CA, PR and not required for other countries. Conditional. Max length is 2.
     * Example: CA. <a onclick='loadDocReference("canadaprovincecodes")'>click here to
     * see State or Province Code</a>
     */
    stateOrProvinceCode?: string;

    /**
     * This is the combination of number, street name, etc. Maximum length per line
     * is 35. Example: 10 FedEx Parkway, Suite 302.<p><i>Note:<ul><li>At least one line
     * is required.</li><li>Streetlines more than 3 will be ignored.</li><li>Empty
     * lines should not be included</li><li>For SmartPost Shipments, only 30 characters
     * from the individual street lines will be printed on the
     * labels.</li></ul></i></p>
     */
    streetLines?: Array<string>;
  }

  /**
   * Indicate the contact details for this shipment.
   */
  export interface Contact {
    /**
     * Specify contact company name. Recommended length is 35. Note: There's no
     * specific validation of the company name.
     */
    companyName?: string;

    /**
     * Specify contact email address. Maximum length is 80. Example: sample@company.com
     */
    emailAddress?: string;

    /**
     * Specify contact person's fax number. Maximum length is 15.
     */
    faxNumber?: string;

    /**
     * Specify contact name. Maximum length is 70. Example: John Taylor
     */
    personName?: string;

    /**
     * Specify contact phone extension. Maximum length is 6. Example: 1234
     */
    phoneExtension?: string;

    /**
     * Specify contact phone number. Minimum length is 10 and supports Maximum as 15
     * for certain countries using longer phone numbers. Note: Recommended Maximum
     * length is 15 and there's no specific validation will be done for the phone
     * number. Example: 918xxxxx890
     */
    phoneNumber?: string;
  }
}

/**
 * This is FedEx Account number details.
 */
export interface PartyAccountNumber {
  /**
   * Conditional. The account number value. Max Length is 9. Example: 12XXXXX89
   */
  value?: string;
}

/**
 * This is detailed information on physical location. May be used as an actual
 * physical address (place to which one could go), or as a container of address
 * parts which should be handled as a unit (such as a city-state-ZIP combination
 * within the US).
 */
export interface PartyAddress {
  /**
   * The name of city, town of the recipient.Max length is 35. Example: Beverly Hills
   */
  city: string;

  /**
   * This is the two-letter country code. Maximum length is 2. Example: US
   * <a onclick='loadDocReference("countrycodes")'>click here to see Country
   * codes</a>
   */
  countryCode: string;

  /**
   * Combination of number, street name, etc. At least one line is required for a
   * valid physical address. Empty lines should not be included. Max Length is 35.
   * Example: [1550 Union Blvd,Suite 302]
   */
  streetLines: Array<string>;

  /**
   * This is the postal code. Note: This is Optional for non postal-aware countries.
   * Maximum length is 10. Example: 65247
   * <a onclick='loadDocReference("postalawarecountries")'>click here to see Postal
   * aware countries</a>
   */
  postalCode?: string;

  /**
   * Indicates whether this address is residential (as opposed to commercial).
   * Example: false
   */
  residential?: boolean;

  /**
   * The US States,Canada and Puerto Rico Province codes of the recipient. The Format
   * and presence of this field may vary depending on the country.State code is
   * required for US, CA, PR and not required for other countries. Conditional. Max
   * length is 2. Example: CA
   */
  stateOrProvinceCode?: string;
}

/**
 * This is detailed information on physical location. May be used as an actual
 * physical address (place to which one could go), or as a container of address
 * parts which should be handled as a unit (such as a city-state-ZIP combination
 * within the US).
 */
export interface PartyAddress2 {
  /**
   * The name of city, town of the recipient.Max length is 35. Example: Beverly Hills
   */
  city: string;

  /**
   * This is the two-letter country code. Maximum length is 2. Example: US
   * <a onclick='loadDocReference("countrycodes")'>click here to see Country
   * codes</a>
   */
  countryCode: string;

  /**
   * Combination of number, street name, etc. At least one line is required for a
   * valid physical address. Empty lines should not be included. Max Length is 35.
   * Example: [1550 Union Blvd,Suite 302]
   */
  streetLines: Array<string>;

  /**
   * This is the postal code. Note: This is Optional for non postal-aware countries.
   * Maximum length is 10. Example: 65247
   * <a onclick='loadDocReference("postalawarecountries")'>click here to see Postal
   * aware countries</a>
   */
  postalCode?: string;

  /**
   * Indicates whether this address is residential (as opposed to commercial).
   * Example: false
   */
  residential?: boolean;

  /**
   * It is used to identify the principal subdivisions (e.g., provinces or states) of
   * countries. The Format and presence of this field may vary depending on the
   * country. Note: For specific countries, such as the United States and Canada, and
   * Puerto Rico, there is a two-character state, province, codes limit . Example: TX
   */
  stateOrProvinceCode?: string;
}

/**
 * Indicate the contact details for this shipment.
 */
export interface PartyContact {
  /**
   * The shipper's phone number. Minimum length is 10 and supports maximum of 15 for
   * certain countries using longer phone numbers. Note: For US and CA, a phone
   * number must have exactly 10 digits, plus an optional leading country code of '1'
   * or '+1'. Example: 918xxxxx890
   */
  phoneNumber: string;

  /**
   * The shipper's company name. Max length is 35. Example: FedEx
   */
  companyName?: string;

  /**
   * Specify contact email address. Maximum length is 80. Example: sample@company.com
   */
  emailAddress?: string;

  /**
   * Specify contact name. Maximum length is 70. Note: Either the companyName or
   * personName is mandatory. Example: John Taylor
   */
  personName?: string;

  /**
   * Specify contact phone extension. Maximum length is 6. Example: 1234
   */
  phoneExtension?: string;
}

/**
 * Specifies the payment details specifying the method and means of payment to
 * FedEx for providing shipping services.
 */
export interface Payment {
  /**
   * Indicates who and how the shipment will be paid for.Required for Express and
   * Ground. Example: SENDER
   */
  paymentType: 'SENDER' | 'RECIPIENT' | 'THIRD_PARTY' | 'COLLECT';

  /**
   * Payor is mandatory when the paymentType is RECIPIENT, THIRD_PARTY or COLLECT.
   */
  payor?: Payment.Payor;
}

export namespace Payment {
  /**
   * Payor is mandatory when the paymentType is RECIPIENT, THIRD_PARTY or COLLECT.
   */
  export interface Payor {
    /**
     * Indicate the payer Information responsible for paying for the shipment. Note:
     * ResponsibleParty accountNumber is required for ACCOUNT based services.
     */
    responsibleParty: Payor.ResponsibleParty;
  }

  export namespace Payor {
    /**
     * Indicate the payer Information responsible for paying for the shipment. Note:
     * ResponsibleParty accountNumber is required for ACCOUNT based services.
     */
    export interface ResponsibleParty {
      /**
       * This is FedEx Account number details.
       */
      accountNumber: ShipmentsAPI.PartyAccountNumber;

      /**
       * This is detailed information on physical location. May be used as an actual
       * physical address (place to which one could go), or as a container of address
       * parts which should be handled as a unit (such as a city-state-ZIP combination
       * within the US).
       */
      address?: ShipmentsAPI.PartyAddress;

      /**
       * Indicate the contact details for this shipment.
       */
      contact?: ShipmentsAPI.PartyContact;
    }
  }
}

/**
 * This object is used to specify the Pending Shipment Type for Email label.
 */
export interface PendingShipmentDetail {
  /**
   * These are specific information about the pending email label. Required when
   * PendingShipmentType is EMAIL. Not applicable for CreateTag.
   */
  emailLabelDetail: PendingShipmentDetail.EmailLabelDetail;

  /**
   * Specifies the pending shipment type. Must include the value: EMAIL for email
   * return shipments. Not applicable for other types of shipments Example: EMAIL
   */
  pendingShipmentType: 'EMAIL';

  /**
   * These are the reference document details with the shipment.
   */
  attachedDocuments?: Array<PendingShipmentDetail.AttachedDocument>;

  /**
   * Specifies the Email Label expiration date. The maximum expiration date for an
   * Email Return Label must be greater of equal to the day of the label request and
   * not greater than 2 years in the future. Format[YYYY-MM-DD] Example: 2020-01-01
   */
  expirationTimeStamp?: string;

  /**
   * Use this object to allow the Email Label shipment originator, specify if the
   * Email label shipment completer can make modifications to editable shipment data.
   */
  processingOptions?: PendingShipmentDetail.ProcessingOptions;

  /**
   * These are documents that are recommended to be included with the shipment.
   * Example:ANTIQUE_STATEMENT_EUROPEAN_UNION
   */
  recommendedDocumentSpecification?: PendingShipmentDetail.RecommendedDocumentSpecification;
}

export namespace PendingShipmentDetail {
  /**
   * These are specific information about the pending email label. Required when
   * PendingShipmentType is EMAIL. Not applicable for CreateTag.
   */
  export interface EmailLabelDetail {
    /**
     * Specifies an optional personalized message to be included in the email to the
     * email label recipient. Example: YOUR OPTIONAL MESSAGE
     */
    message?: string;

    /**
     * This is Email label recipient email address, shipment role, & language locale
     * details. Atleast one entry must be specified.
     */
    recipients?: Array<EmailLabelDetail.Recipient>;
  }

  export namespace EmailLabelDetail {
    /**
     * These are the recipient details for the online email return label.
     */
    export interface Recipient {
      /**
       * This is recipient email address for notifying the return label. Maximum length
       * 200 characters. Example: neenaaaaa@abc.com
       */
      emailAddress: string;

      /**
       * Relationship that the emailRecipient has to the pending email return label
       * shipments. Valid Values: SHIPMENT_COMPLETOR,SHIPMENT_INITIATOR Example:
       * SHIPMENT_COMPLETOR
       */
      role: 'SHIPMENT_COMPLETOR' | 'SHIPMENT_INITIATOR';

      /**
       * These are locale details. Example: 'en_US'
       * <a onclick='loadDocReference("locales")'>click here to see locales</a> Note: If
       * the locale is left blank or an invalid locale is entered, an error message is
       * returned in response.
       */
      locale?: string;

      /**
       * These are to indicate how the email notifications for the pending shipment to be
       * processed.
       */
      optionsRequested?: Recipient.OptionsRequested;
    }

    export namespace Recipient {
      /**
       * These are to indicate how the email notifications for the pending shipment to be
       * processed.
       */
      export interface OptionsRequested {
        /**
         * These are the processing options.
         */
        options?: Array<
          'PRODUCE_PAPERLESS_SHIPPING_FORMAT' | 'SUPPRESS_ADDITIONAL_LANGUAGES' | 'SUPPRESS_ACCESS_EMAILS'
        >;
      }
    }
  }

  /**
   * Specify the document upload reference details.
   */
  export interface AttachedDocument {
    /**
     * This is the document description of the attached document. Example: PRO FORMA
     * INVOICE
     */
    description?: string;

    /**
     * This is the uploaded document ID value. Example: 090927d680038c61
     */
    documentId?: string;

    /**
     * Specify the reference for the uploaded document. Example: Reference
     */
    documentReference?: string;

    /**
     * This is the uploaded document type.
     */
    documentType?:
      | 'CERTIFICATE_OF_ORIGIN'
      | 'COMMERCIAL_INVOICE'
      | 'ETD_LABEL'
      | 'USMCA_CERTIFICATION_OF_ORIGIN'
      | 'NET_RATE_SHEET'
      | 'OTHER'
      | 'PRO_FORMA_INVOICE'
      | 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN';
  }

  /**
   * Use this object to allow the Email Label shipment originator, specify if the
   * Email label shipment completer can make modifications to editable shipment data.
   */
  export interface ProcessingOptions {
    /**
     * Pending Shipment Processing Option Type Example: ALLOW_MODIFICATIONS
     */
    options?: Array<'ALLOW_MODIFICATIONS'>;
  }

  /**
   * These are documents that are recommended to be included with the shipment.
   * Example:ANTIQUE_STATEMENT_EUROPEAN_UNION
   */
  export interface RecommendedDocumentSpecification {
    /**
     * This is the recommended document Type.
     * <a onclick='loadDocReference("shipmentdocumenttype")'>click here to see shipment
     * document type</a>
     */
    types: Array<
      | 'ANTIQUE_STATEMENT_EUROPEAN_UNION'
      | 'ANTIQUE_STATEMENT_UNITED_STATES'
      | 'ASSEMBLER_DECLARATION'
      | 'BEARING_WORKSHEET'
      | 'CERTIFICATE_OF_SHIPMENTS_TO_SYRIA'
      | 'COMMERCIAL_INVOICE_FOR_THE_CARIBBEAN_COMMON_MARKET'
      | 'CONIFEROUS_SOLID_WOOD_PACKAGING_MATERIAL_TO_THE_PEOPLES_REPUBLIC_OF_CHINA'
      | 'DECLARATION_FOR_FREE_ENTRY_OF_RETURNED_AMERICAN_PRODUCTS'
      | 'DECLARATION_OF_BIOLOGICAL_STANDARDS'
      | 'DECLARATION_OF_IMPORTED_ELECTRONIC_PRODUCTS_SUBJECT_TO_RADIATION_CONTROL_STANDARD'
      | 'ELECTRONIC_INTEGRATED_CIRCUIT_WORKSHEET'
      | 'FILM_AND_VIDEO_CERTIFICATE'
      | 'INTERIM_FOOTWEAR_INVOICE'
      | 'USMCA_CERTIFICATION_OF_ORIGIN_CANADA_ENGLISH'
      | 'USMCA_CERTIFICATION_OF_ORIGIN_CANADA_FRENCH'
      | 'USMCA_CERTIFICATION_OF_ORIGIN_SPANISH'
      | 'USMCA_CERTIFICATION_OF_ORIGIN_UNITED_STATES'
      | 'PACKING_LIST'
      | 'PRINTED_CIRCUIT_BOARD_WORKSHEET'
      | 'REPAIRED_WATCH_BREAKOUT_WORKSHEET'
      | 'STATEMENT_REGARDING_THE_IMPORT_OF_RADIO_FREQUENCY_DEVICES'
      | 'TOXIC_SUBSTANCES_CONTROL_ACT'
      | 'UNITED_STATES_CARIBBEAN_BASIN_TRADE_PARTNERSHIP_ACT_CERTIFICATE_OF_ORIGIN_TEXTILES'
      | 'UNITED_STATES_CARIBBEAN_BASIN_TRADE_PARTNERSHIP_ACT_CERTIFICATE_OF_ORIGIN_NON_TEXTILES'
      | 'UNITED_STATES_NEW_WATCH_WORKSHEET'
      | 'UNITED_STATES_WATCH_REPAIR_DECLARATION'
    >;
  }
}

/**
 * Specifies discount Rate for Shipment.
 */
export interface RateDiscount {
  /**
   * Specifies the amount. Example: 8.9
   */
  amount?: number;

  /**
   * Specifies the description of the discounted rate. Example: description
   */
  description?: string;

  /**
   * Specifies the percentage of Rate discount. Example: 28.9
   */
  percent?: number;

  /**
   * The type of rate discount. <br/> Valid Values are BONUS,
   * COUPON,EARNED,OTHER,VOLUME. Example: COUPON
   */
  rateDiscountType?: string;
}

/**
 * The descriptive information of the recipient for the shipment and the physical
 * location for the package destination.
 */
export interface RecipientsParty {
  /**
   * This is detailed information on physical location. May be used as an actual
   * physical address (place to which one could go), or as a container of address
   * parts which should be handled as a unit (such as a city-state-ZIP combination
   * within the US).
   */
  address: PartyAddress2;

  /**
   * Indicate the contact details for this shipment.
   */
  contact: PartyContact;

  /**
   * Specify the delivery instructions to be added with the shipment. Use with Ground
   * Home Delivery. Example: Delivery Instructions
   */
  deliveryInstructions?: string;

  /**
   * This is the tax identification number details.
   */
  tins?: Array<TaxpayerIdentification>;
}

/**
 * These are one or more package-attribute descriptions, each of which describes an
 * individual package, a group of identical packages, or (for the
 * total-piece-total-weight case) common characteristics of all packages in the
 * shipment.<ul><li>At least one instance containing the weight for at least one
 * package is required for EXPRESS and GROUND shipments.</li><li>Single piece
 * requests will have one RequestedPackageLineItem.</li><li>Multiple piece requests
 * will have multiple RequestedPackageLineItems.</li><li>Maximum occurrences
 * is 30.</li></ul>
 */
export interface RequestedPackageLineItem {
  /**
   * These are the package weight details. Note: Weight is not required for One rate
   * shipments
   */
  weight: Weight;

  /**
   * Use this object to specify package content details.
   */
  contentRecord?: Array<RequestedPackageLineItem.ContentRecord>;

  /**
   * This object lists the customer references provided with the package.
   */
  customerReferences?: Array<RequestedPackageLineItem.CustomerReference>;

  /**
   * This customs value is applicable for all items(or units) under the specified
   * commodity
   */
  declaredValue?: Money;

  /**
   * Indicate the dimensions of the package. Following conditions will apply:
   * <ul><li>Dimensions are optional but when added, then all three dimensions must
   * be indicated.</li><li>Dimensions are required with YOUR_PACKAGING package
   * type.</li></ul>Note: The maximum/minimum dimension values varies based on the
   * services and the packaging types. Refer
   * <a href="https://www.fedex.com/en-us/service-guide.html" target="_blank">FedEx
   * Service Guide</a> for service details related to DIM Weighting for FedEx Express
   * and oversize conditions for FedEx Express and FedEx Ground.
   */
  dimensions?: RequestedPackageLineItem.Dimensions;

  /**
   * Indicate the grouped package count. These are number of identical package(s)
   * each with one or more commodities. Example: 2
   */
  groupPackageCount?: number;

  /**
   * This the item description for the package. Note: Item description is required
   * for Email Label return shipments and ground Create tag. Example: Item
   * description Maximum limit is 50 characters
   */
  itemDescription?: string;

  /**
   * Package description used for clearance. The value is required for intra-UAE. and
   * is optional for intra-EU. Example:description
   */
  itemDescriptionForClearance?: string;

  /**
   * These are special services that are available at the package level for some or
   * all service types.
   */
  packageSpecialServices?: RequestedPackageLineItem.PackageSpecialServices;

  /**
   * Optional. Used only with individual packages as a unique identifier of each
   * requested package. Will be adjusted at the shipment level as pieces are added.
   * Example: 1
   */
  sequenceNumber?: number;

  /**
   * Indicate the subPackagingType, if you are using your own packaging for the
   * shipment. Use it for all shipments inbound to Canada (CA) and inbound shipments
   * to the U.S. and Puerto Rico (PR) from Canada and Mexico (MX).subPackagingType is
   * mandatory for shipments to Canada. Example: TUBE, CARTON, CONTAINER. etc. Note:
   * If the value is TUBE, a non-machinable surcharge will be applicable for
   * SmartPost shipments. <a onclick='loadDocReference("subpackagetypes")'>click here
   * to see Sub-Packaging Types</a> For more information on physical packaging or
   * packaging regulatory requirements, contact your FedEx representative.
   */
  subPackagingType?: string;

  /**
   * Indicate the details about how to calculate variable handling charges at the
   * shipment level. They can be based on a percentage of the shipping charges or a
   * fixed amount. If indicated, element rateLevelType is required.
   */
  variableHandlingChargeDetail?: VariableHandlingChargeDetail;
}

export namespace RequestedPackageLineItem {
  /**
   * Use this object to specify package content details.
   */
  export interface ContentRecord {
    /**
     * This is the description of the package item.
     */
    description?: string;

    /**
     * This is a package item number.
     */
    itemNumber?: string;

    /**
     * This is the part number.
     */
    partNumber?: string;

    /**
     * This is the package item quantity.
     */
    receivedQuantity?: number;
  }

  export interface CustomerReference {
    /**
     * This is a customer reference type. The value specified here for the element is
     * printed on the Commercial Invoice only for tracking and label
     * information.<p>Note: <ul><li>The P_O_NUMBER value must be specified in
     * customerReferences under requestedPackageLineItems</li><li>The INVOICE_NUMBER
     * value that is printed on the FedEx-supplied invoice must be specified in
     * customerReferences under commercialInvoice. Value defined in this section will
     * print on the label that is attached to the package</li><li>The RMA_ASSOCIATION
     * value sent by the customer is returned on the label in human readable form but
     * also as a barcode.</li></ul>Note: INTRACOUNTRY_REGULATORY_REFERENCE is
     * applicable only in Intra-Brazil.
     * <a onclick='loadDocReference("customerreferencetypes")'>For more information,
     * click here for Customer References</a>. Example: DEPARTMENT_NUMBER
     */
    customerReferenceType?:
      | 'CUSTOMER_REFERENCE'
      | 'DEPARTMENT_NUMBER'
      | 'INVOICE_NUMBER'
      | 'P_O_NUMBER'
      | 'INTRACOUNTRY_REGULATORY_REFERENCE'
      | 'RMA_ASSOCIATION';

    /**
     * This is a customer reference type value. Example: 3686 <ul><li>The P_O_NUMBER
     * value must be specified in customerReferences under
     * requestedPackageLineItems</li><li>The INVOICE_NUMBER value that is printed on
     * the FedEx-supplied invoice must be specified in customerReferences under
     * commercialInvoice. Value defined in this section will print on the label that is
     * attached to the package</li><li>The RMA value sent by the customer is returned
     * on the label in human readable form but also as a barcode. RMA_ASSOCIATION only
     * prints on the label as a barcode for a Return shipment.</ul>NOTE:<ul><li>
     * INTRACOUNTRY_REGULATORY_REFERENCE is applicable only in Intra-Brazil.</li><li>
     * Maximum length varies for value field depending on
     * customerReferenceType.</li></ul> Maximum length for value is as follows:
     * <ul><li>CUSTOMER_REFERENCE - 40(Express), 30(Ground)</li><li>DEPARTMENT_NUMBER -
     * 30</li><li>INVOICE_NUMBER - 30</li><li>P_O_NUMBER -
     * 30</li><li>INTRACOUNTRY_REGULATORY_REFERENCE - 30</li><li>RMA_ASSOCIATION -
     * 20</li>
     */
    value?: string;
  }

  /**
   * Indicate the dimensions of the package. Following conditions will apply:
   * <ul><li>Dimensions are optional but when added, then all three dimensions must
   * be indicated.</li><li>Dimensions are required with YOUR_PACKAGING package
   * type.</li></ul>Note: The maximum/minimum dimension values varies based on the
   * services and the packaging types. Refer
   * <a href="https://www.fedex.com/en-us/service-guide.html" target="_blank">FedEx
   * Service Guide</a> for service details related to DIM Weighting for FedEx Express
   * and oversize conditions for FedEx Express and FedEx Ground.
   */
  export interface Dimensions {
    /**
     * Indicate the height of the package. No implied decimal places. Maximum value:
     * 999 Example: 10
     */
    height?: number;

    /**
     * Indicate the length of the package. No implied decimal places. Maximum value:
     * 999 Example: 20
     */
    length?: number;

    /**
     * Indicate the Unit of measure for the provided dimensions. Valid Values
     * are:<li>IN - inches</li><li>CM - centimeters</li>Note: Any value other than CM
     * including blank/null will default to IN.
     */
    units?: 'CM' | 'IN';

    /**
     * Indicate the width of the package. No implied decimal places. Maximum value: 999
     * Example: 10
     */
    width?: number;
  }

  /**
   * These are special services that are available at the package level for some or
   * all service types.
   */
  export interface PackageSpecialServices {
    /**
     * These are detcontentails for the package containing alcohol. This is required
     * for alcohol special service. The alcoholRecipientType is required.
     */
    alcoholDetail?: PackageSpecialServices.AlcoholDetail;

    /**
     * Provide details about the batteries or cells that are contained within this
     * specific package.
     */
    batteryDetails?: Array<PackageSpecialServices.BatteryDetail>;

    /**
     * Provide dangerous goods shipment details.
     */
    dangerousGoodsDetail?: PackageSpecialServices.DangerousGoodsDetail;

    /**
     * These are the package weight details. Note: Weight is not required for One rate
     * shipments
     */
    dryIceWeight?: PackageSpecialServices.DryIceWeight;

    /**
     * These are COD package details. For use with FedEx Ground services only; COD must
     * be present in shipments special services.
     */
    packageCODDetail?: PackageSpecialServices.PackageCodDetail;

    /**
     * Provide the pieceCount or VerificationBoxCount for batteries or cells that are
     * contained within this specific package. Example:1
     */
    pieceCountVerificationBoxCount?: number;

    /**
     * Specifies the Priority Alert Detail.
     */
    priorityAlertDetail?: PackageSpecialServices.PriorityAlertDetail;

    /**
     * This element specifies Signature option details.
     */
    signatureOptionDetail?: PackageSpecialServices.SignatureOptionDetail;

    /**
     * Signature Option Type<br/>ADULT - Adult signature required, at recipient''s
     * address.<br/>DIRECT - Signature required, at recipient''s address. INDIRECT -
     * Signature required, alternate address is accepted.<br/>NO_SIGNATURE_REQUIRED -
     * Signature is not required.<br/>SERVICE_DEFAULT - Signature handled as per
     * current Service Guide. Example:ADULT
     */
    signatureOptionType?: 'SERVICE_DEFAULT' | 'NO_SIGNATURE_REQUIRED' | 'INDIRECT' | 'DIRECT' | 'ADULT';

    /**
     * The list of all special services requested for the package.
     * <a href="/developer-portal/en-us/reference-guide.html#packagespecialservicetypes" target="_blank">Click
     * here to see Package Special Service Types</a> Example:ALCOHOL
     */
    specialServiceTypes?: Array<string>;

    /**
     * Provide details about the batteries or cells that are contained within this
     * specific package.
     */
    standaloneBatteryDetails?: Array<PackageSpecialServices.StandaloneBatteryDetail>;
  }

  export namespace PackageSpecialServices {
    /**
     * These are detcontentails for the package containing alcohol. This is required
     * for alcohol special service. The alcoholRecipientType is required.
     */
    export interface AlcoholDetail {
      /**
       * Specify the Alcohol Recipient Type of the shipment. Example: LICENSEE
       */
      alcoholRecipientType?: 'LICENSEE' | 'CONSUMER';

      /**
       * Specify the type of entity, the shipper for alcohol shipment is registered such
       * as fulfillment house, retailer or a winery.
       */
      shipperAgreementType?: string;
    }

    export interface BatteryDetail {
      /**
       * Indicate the material composition of the battery or cell.
       */
      batteryMaterialType?: 'LITHIUM_METAL' | 'LITHIUM_ION';

      /**
       * Describe the packing arrangement of the battery or cell with respect to other
       * items within the same package.
       */
      batteryPackingType?: 'CONTAINED_IN_EQUIPMENT' | 'PACKED_WITH_EQUIPMENT';

      /**
       * This is a regulation specific classification for the battery or the cell.
       */
      batteryRegulatoryType?: 'IATA_SECTION_II';
    }

    /**
     * Provide dangerous goods shipment details.
     */
    export interface DangerousGoodsDetail {
      /**
       * Specify Dangerous Goods Accessibility Type. <ul><li>Inaccessible &ndash; it does
       * not have to be accessable on the aircraft.</li><li>Accessible &ndash; it must be
       * fully accessible on the aircraft, and is more strictly
       * controlled.</li></ul><i>Note: Accessibility is only required for IATA controlled
       * DG shipments.</i>
       */
      accessibility?: 'ACCESSIBLE' | 'INACCESSIBLE';

      /**
       * A Boolean value that, when True, specifies the mode of shipment transportation
       * should be Cargo Aircraft for Dangerous Goods. Its default value is set as False.
       * Note: An identifier DGD-CAO is added in AWB for cargo aircraft shipments.
       */
      cargoAircraftOnly?: boolean;

      /**
       * Indicate type of DG being reported.
       *
       * - SMALL_QUANTITY_EXCEPTION : It is applicable for only One Piece shipment.
       */
      options?: Array<
        | 'HAZARDOUS_MATERIALS'
        | 'BATTERY'
        | 'ORM_D'
        | 'REPORTABLE_QUANTITIES'
        | 'SMALL_QUANTITY_EXCEPTION'
        | 'LIMITED_QUANTITIES_COMMODITIES'
      >;

      /**
       * It is a HazardousCommodityRegulationType(The regulation under which the DG data
       * has been validated).
       */
      regulation?: 'ADR' | 'DOT' | 'IATA' | 'ORMD';
    }

    /**
     * These are the package weight details. Note: Weight is not required for One rate
     * shipments
     */
    export interface DryIceWeight {
      /**
       * Indicate the weight unit type. The package and commodity weight unit should be
       * the same else the request will result in an error. Example:KG
       */
      units: 'KG' | 'LB';

      /**
       * Weight Value. Example: 68.25
       */
      value: number;
    }

    /**
     * These are COD package details. For use with FedEx Ground services only; COD must
     * be present in shipments special services.
     */
    export interface PackageCodDetail {
      /**
       * This customs value is applicable for all items(or units) under the specified
       * commodity
       */
      codCollectionAmount?: ShipmentsAPI.Money;
    }

    /**
     * Specifies the Priority Alert Detail.
     */
    export interface PriorityAlertDetail {
      /**
       * Specifies Content for the Priority Alert Detail. Example:string
       */
      content?: Array<string>;

      /**
       * The types of all enhancement for the Priority Alert. Example:
       * PRIORITY_ALERT_PLUS
       */
      enhancementTypes?: Array<string>;
    }

    /**
     * This element specifies Signature option details.
     */
    export interface SignatureOptionDetail {
      /**
       * This is release number. Example: 23456
       */
      signatureReleaseNumber?: string;
    }

    export interface StandaloneBatteryDetail {
      /**
       * Describes the material composition of the battery or cell.
       */
      batteryMaterialType?: 'LITHIUM_METAL' | 'LITHIUM_ION';
    }
  }
}

/**
 * The descriptive data of the requested shipment.
 */
export interface RequestedShipment {
  /**
   * These are label specification details includes the image type, printer format,
   * and label stock for label. Can also specify specific details such as doc-tab
   * content, regulatory labels, and masking data on the label.
   */
  labelSpecification: LabelSpecification;

  /**
   * Specify the packaging used. Note: For Express Freight shipments, the packaging
   * will default to YOUR_PACKAGING irrespective of the user provided package type in
   * the request. Example: FEDEX_PAK
   * <a onclick='loadDocReference("packagetypes")'>click here to see Package
   * Types</a>
   */
  packagingType: string;

  /**
   * Indicates if shipment is being dropped off at a FedEx location or being picked
   * up by FedEx or if it's a regularly scheduled pickup for this shipment. Required
   * for FedEx Express and Ground Shipment. Example: USE_SCHEDULED_PICKUP
   */
  pickupType: 'CONTACT_FEDEX_TO_SCHEDULE' | 'DROPOFF_AT_FEDEX_LOCATION' | 'USE_SCHEDULED_PICKUP';

  /**
   * Indicate the descriptive data for the recipient location to which the shipment
   * is to be received.
   */
  recipients: Array<RecipientsParty>;

  /**
   * These are one or more package-attribute descriptions, each of which describes an
   * individual package, a group of identical packages, or (for the
   * total-piece-total-weight case) common characteristics of all packages in the
   * shipment.<ul><li>At least one instance containing the weight for at least one
   * package is required for EXPRESS and GROUND shipments.</li><li>Single piece
   * requests will have one RequestedPackageLineItem.</li><li>Multiple piece requests
   * will have multiple RequestedPackageLineItems.</li><li>Maximum occurrences
   * is 30.</li></ul>
   */
  requestedPackageLineItems: Array<RequestedPackageLineItem>;

  /**
   * Indicate the FedEx service type used for this shipment. Example:
   * STANDARD_OVERNIGHT <a onclick='loadDocReference("servicetypes")'>click here to
   * see Service Types</a>
   */
  serviceType: string;

  /**
   * Indicate the Shipper contact details for this shipment.
   */
  shipper: ShipperParty;

  /**
   * Specifies the payment details specifying the method and means of payment to
   * FedEx for providing shipping services.
   */
  shippingChargesPayment: Payment;

  /**
   * Indicate the shipment total weight in pounds. Example: 10.6 Note: <ul><li>This
   * only applies to International shipments and should be used on the first package
   * of a multiple piece shipment.</li><li>This value contains 1 explicit decimal
   * position.</li><li>For one Label at a time shipments, the unit of totalWeight is
   * considered same as the unit of weight provided in requestedPackageLineItem
   * field.</li></ul>
   */
  totalWeight: number;

  /**
   * If true, only the shipper/payer will have visibility of this shipment. Valid
   * Value : true, false. Default:false Example: true
   */
  blockInsightVisibility?: boolean;

  /**
   * These are customs clearance details. Required for International and
   * intra-country Shipments.
   */
  customsClearanceDetail?: CustomsClearanceDetail;

  /**
   * This is used to provide eMail notification information..
   */
  emailNotificationDetail?: RequestedShipment.EmailNotificationDetail;

  /**
   * Indicates the advance booking number, shipper load /count and packing list
   * details. This details must be provided by the user during freight shipment.
   */
  expressFreightDetail?: RequestedShipment.ExpressFreightDetail;

  /**
   * Indicates the tracking details of the package.Required for child shipments of an
   * oneLabelAtATime shipments
   */
  masterTrackingId?: RequestedShipment.MasterTrackingID;

  /**
   * Specifies the contact and address details of a location.
   */
  origin?: RequestedShipment.Origin;

  /**
   * Indicate the currency the caller requests to have used in all returned monetary
   * values. Should be Used in conjunction with the element RateRequestType. Example:
   * USD <a onclick='loadDocReference("currencycodes")'>click here to see available
   * Currency codes</a> Note: Incorrect currency codes should not be supplied. The
   * system ignores the incorrect currency code.
   */
  preferredCurrency?: string;

  /**
   * Indicate the type of rates to be returned. The account specific rates are
   * returned by default if the account number is specified in the request. Following
   * are values:<ul><li>LIST - Returns FedEx published list rates in addition to
   * account-specific rates (if applicable).</li><li>INCENTIVE - This is one-time
   * discount for incentivising the customer. For more information, contact your
   * FedEx representative.</li><li>ACCOUNT - Returns account specific rates
   * (Default).</li><li>PREFERRED - Returns rates in the preferred currency specified
   * in the element preferredCurrency.</li><li>RETAIL - Returns customer rate from
   * one of retail FedEx service centers.</li></ul>Examples: ["ACCOUNT", "PREFERRED"]
   */
  rateRequestType?: Array<'LIST' | 'NONE' | 'PREFERRED' | 'ACCOUNT' | 'INCENTIVE' | 'RETAIL'>;

  /**
   * A unique identifier for a recipient location. Example:1234567
   */
  recipientLocationNumber?: string;

  /**
   * This is the shipment date. Default value is current date in case the date is not
   * provided or a past date is provided. Format [YYYY-MM-DD]. Example: 2019-10-14
   */
  shipDatestamp?: string;

  /**
   * Specify the special services requested at the shipment level. If the shipper is
   * requesting a special service which requires additional data (such as the COD
   * amount), the shipment special service type must be present in the
   * specialServiceTypes collection, and the supporting detail must be provided in
   * the appropriate sub-object below. RETURN_SHIPMENT is required for creating
   * return shipments.
   */
  shipmentSpecialServices?: RequestedShipment.ShipmentSpecialServices;

  /**
   * Use this object to provide all data required for additional (non-label) shipping
   * documents to be produced.
   */
  shippingDocumentSpecification?: ShippingDocumentSpecification;

  /**
   * Use this object to specify the smartpost shipment details. Required for
   * SMARTPOST service. If SmartPostInfoDetail is indicated, the elements below it
   * are also required.
   */
  smartPostInfoDetail?: SmartPostInfoDetail;

  /**
   * Will indicate the party responsible for purchasing the goods shipped from the
   * shipper to the recipient. The sold to party is not necessarily the recipient or
   * the importer of record. The sold to party is relevant when the purchaser, rather
   * than the recipient determines when certain customs regulations apply.
   */
  soldTo?: RequestedShipment.SoldTo;

  /**
   * This customs value is applicable for all items(or units) under the specified
   * commodity
   */
  totalDeclaredValue?: Money;

  /**
   * For an MPS, this is the total number of packages in the shipment.Applicable for
   * parent shipment for one label at a time shipments. Example: 25
   */
  totalPackageCount?: number;

  /**
   * Indicate the details about how to calculate variable handling charges at the
   * shipment level. They can be based on a percentage of the shipping charges or a
   * fixed amount. If indicated, element rateLevelType is required.
   */
  variableHandlingChargeDetail?: VariableHandlingChargeDetail;
}

export namespace RequestedShipment {
  /**
   * This is used to provide eMail notification information..
   */
  export interface EmailNotificationDetail {
    /**
     * Shipment Notification Aggregation Type. Example:PER_PACKAGE
     */
    aggregationType?: 'PER_PACKAGE' | 'PER_SHIPMENT';

    /**
     * These are email notification recipient details.
     */
    emailNotificationRecipients?: Array<EmailNotificationDetail.EmailNotificationRecipient>;

    /**
     * This is your personal message for the email. Note: The maximum personal message
     * character limit depends on the element notificationFormatType values:<ul><li>If
     * notificationFormatType is TEXT, then only 120 characters printed on the
     * email</li><li>If notificationFormatType is HTML, then 500 characters printed on
     * the email</li></ul> Example: This is concerning the order 123456 of 26 July
     * 2021 - art no 34324-23 Teddy Bear, brown
     */
    personalMessage?: string;
  }

  export namespace EmailNotificationDetail {
    /**
     * These are recipient details for receiving email notification.
     */
    export interface EmailNotificationRecipient {
      /**
       * Specify the recipient email address. Example: xyz@aol.com
       */
      emailAddress: string;

      /**
       * This is the email notification recipient type. Example: SHIPPER
       */
      emailNotificationRecipientType: 'BROKER' | 'OTHER' | 'RECIPIENT' | 'SHIPPER' | 'THIRD_PARTY';

      /**
       * These are the locale details for email. Example: en_US, fr_CA, es_MX,.etc.
       * <a onclick='loadDocReference("locales")'>click here to see Locales</a> Note: If
       * the locale is left blank or an invalid locale is entered, an error message is
       * returned in response.
       */
      locale?: string;

      /**
       * Specify the recipient name. Example: Joe Smith
       */
      name?: string;

      /**
       * These are to specify the notification event types. Example:
       * [ON_PICKUP_DRIVER_ARRIVED, ON_SHIPMENT]
       * <a onclick='loadDocReference("notificationeventtypes")'>Click here for more
       * information on Notification Event Types.</a>
       */
      notificationEventType?: Array<
        | 'ON_DELIVERY'
        | 'ON_EXCEPTION'
        | 'ON_SHIPMENT'
        | 'ON_TENDER'
        | 'ON_ESTIMATED_DELIVERY'
        | 'ON_PICKUP_DRIVER_ARRIVED'
        | 'ON_PICKUP_DRIVER_ASSIGNED'
        | 'ON_PICKUP_DRIVER_DEPARTED'
        | 'ON_PICKUP_DRIVER_EN_ROUTE'
      >;

      /**
       * This is the format for the email notification. Either HTML or plain text can be
       * provided. Example: TEXT
       */
      notificationFormatType?: 'HTML' | 'TEXT';

      /**
       * Indicate the type of notification that will be sent as an email Example: EMAIL
       */
      notificationType?: 'EMAIL';
    }
  }

  /**
   * Indicates the advance booking number, shipper load /count and packing list
   * details. This details must be provided by the user during freight shipment.
   */
  export interface ExpressFreightDetail {
    /**
     * This is an advanced booking number that must be acquired through the appropriate
     * channel in the shipment origin country. Without the booking number pickup and
     * space allocation for the Express Freight shipment are not guaranteed. Minimum
     * length: 5 digits Maximum length: 12 digits
     * Example: XXXX56789812
     */
    bookingConfirmationNumber?: string;

    /**
     * This indicates whether or not the Packing List is enclosed with the shipment. A
     * packing list is a document that includes details about the contents of a
     * package. Example: true
     */
    packingListEnclosed?: boolean;

    /**
     * Indicates the content of a container were loaded and counted by the shipper.
     * Minimum length: 1 digits Maximum length: 5 digits Example: If a skid has 32
     * small boxes on it that are shrinkwrapped, the shippersLoadAndCount should be
     * “32”
     */
    shippersLoadAndCount?: number;
  }

  /**
   * Indicates the tracking details of the package.Required for child shipments of an
   * oneLabelAtATime shipments
   */
  export interface MasterTrackingID {
    /**
     * This is FedEx tracking Identifier associated with the package. Example: 8600
     */
    formId?: string;

    /**
     * Specify the FedEx transportation type. Example: EXPRESS
     */
    trackingIdType?: string;

    /**
     * This is the number associated with the package that is used to track it.For
     * child shipment of an oneLabelAtATime shipments,this should be same as the
     * masterTrackingNumber of the parent shipment. Example: 49XXX0000XXX20032835
     */
    trackingNumber?: string;

    /**
     * Specify the USPS tracking Identifier associated with FedEx SmartPost shipment.
     * Example: 92
     */
    uspsApplicationId?: string;
  }

  /**
   * Specifies the contact and address details of a location.
   */
  export interface Origin {
    /**
     * This is detailed information on physical location. May be used as an actual
     * physical address (place to which one could go), or as a container of address
     * parts which should be handled as a unit (such as a city-state-ZIP combination
     * within the U.S.).
     */
    address?: ShipmentsAPI.Address1;

    /**
     * Indicate the contact details of the shipper.
     */
    contact?: Origin.Contact;
  }

  export namespace Origin {
    /**
     * Indicate the contact details of the shipper.
     */
    export interface Contact {
      /**
       * Specify contact company name. Recommended length is 35. Note: There's no
       * specific validation for the company name. Example: FedEx
       */
      companyName?: string;

      /**
       * Specify contact email address. Maximum length is 80. Example: sample@company.com
       */
      emailAddress?: string;

      /**
       * Specify contact fax number. Note: Recommended length is 15. There's no specific
       * validation for the fax number. Example: 1234567890
       */
      faxNumber?: string;

      /**
       * Specify contact person name. Recommended length is 70. Note: There's no specific
       * validation for the person name. Example: John Taylor
       */
      personName?: string;

      /**
       * Specify contact phone extension. Note: Recommended length is 6. There's no
       * specific validation for the phone extension. Example: 1234
       */
      phoneExtension?: string;

      /**
       * Specify contact phone number. Minimum length is 10 and supports maximum of 15
       * for certain countries using longer phone numbers. Note: Recommended Maximum
       * length is 15 and there's no specific validation will be done for the phone
       * number. Example: 918xxxxx890
       */
      phoneNumber?: string;
    }
  }

  /**
   * Specify the special services requested at the shipment level. If the shipper is
   * requesting a special service which requires additional data (such as the COD
   * amount), the shipment special service type must be present in the
   * specialServiceTypes collection, and the supporting detail must be provided in
   * the appropriate sub-object below. RETURN_SHIPMENT is required for creating
   * return shipments.
   */
  export interface ShipmentSpecialServices {
    /**
     * Indicate the Delivery On Invoice Acceptance detail. Recipient is required for
     * Delivery On Invoice Special service.
     */
    deliveryOnInvoiceAcceptanceDetail?: ShipmentsAPI.DeliveryOnInvoiceAcceptanceDetail;

    /**
     * Use this object to specify all information on how the electronic Trade document
     * references used with the shipment.
     */
    etdDetail?: ShipmentsAPI.EtdDetail;

    /**
     * Use this object to specify required information for a shipment to be held at
     * destination FedEx location. <i>Note: This object HoldAtLocationDetail is
     * Required, when HOLD_AT_LOCATION is chosen in the specialServiceTypes.</i>
     */
    holdAtLocationDetail?: ShipmentsAPI.HoldAtLocationDetail;

    /**
     * These are Special service elements for FedEx Ground Home Delivery shipments. If
     * selected, element homedeliveryPremiumType is mandatory.
     */
    homeDeliveryPremiumDetail?: ShipmentsAPI.HomeDeliveryPremiumDetail;

    /**
     * Use this object to specify International Controlled Export shipment Details.
     * Note: licenseOrPermitExpirationDate and licenseOrPermitNumber are not required
     * when type is WAREHOUSE_WITHDRAWAL.
     */
    internationalControlledExportDetail?: ShipmentsAPI.InternationalControlledExportDetail;

    /**
     * These are International Traffic In Arms Regulations shipment service details.
     */
    internationalTrafficInArmsRegulationsDetail?: ShipmentsAPI.InternationalTrafficInArmsRegulationsDetail;

    /**
     * This object is used to specify the Pending Shipment Type for Email label.
     */
    pendingShipmentDetail?: ShipmentsAPI.PendingShipmentDetail;

    /**
     * Use this object for specifying return shipment details.
     */
    returnShipmentDetail?: ShipmentsAPI.ReturnShipmentDetail;

    /**
     * This is the shipment level COD detail.
     */
    shipmentCODDetail?: ShipmentsAPI.ShipmentCodDetail;

    /**
     * This is the descriptive data required for a FedEx shipment containing dangerous
     * materials. This element is required when SpecialServiceType DRY_ICE is
     * selected.<p><i>Note:<ul><li>Dry Ice is a Package level Special Service for
     * Domestic and International shipments.</li><li>Dry Ice must be declared at both
     * Shipment and Package level for International MPS shipments to print the
     * compliance statement on Airway Bill labels.</li></ul></i></p>
     */
    shipmentDryIceDetail?: ShipmentsAPI.ShipmentDryIceDetail1;

    /**
     * Special services requested for the shipment. Example:
     * <ul><li>HOLD_AT_LOCATION</li><li>RETURN_SHIPMENT</li><li>BROKER_SELECT_OPTION</li><li>CALL_BEFORE_DELIVERY</li><li>COD</li><li>CUSTOM_DELIVERY_WINDOW</li></ul>
     * <a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>click here to
     * see Shipment Special Service Types</a>
     */
    specialServiceTypes?: Array<string>;
  }

  /**
   * Will indicate the party responsible for purchasing the goods shipped from the
   * shipper to the recipient. The sold to party is not necessarily the recipient or
   * the importer of record. The sold to party is relevant when the purchaser, rather
   * than the recipient determines when certain customs regulations apply.
   */
  export interface SoldTo {
    /**
     * Identification of a specific FedEx customer account.
     */
    accountNumber?: ShipmentsAPI.PartyAccountNumber;

    /**
     * This is detailed information on physical location. May be used as an actual
     * physical address (place to which one could go), or as a container of address
     * parts which should be handled as a unit (such as a city-state-ZIP combination
     * within the US).
     */
    address?: ShipmentsAPI.PartyAddress;

    /**
     * Indicate the contact details for this shipment.
     */
    contact?: ShipmentsAPI.PartyContact;

    /**
     * Used for adding the tax id
     */
    tins?: Array<ShipmentsAPI.TaxpayerIdentification>;
  }
}

/**
 * Use this object for specifying return shipment details.
 */
export interface ReturnShipmentDetail {
  /**
   * This specifies the return Type. Required to be set to PRINT_RETURN_LABEL for
   * printed return label shipments.For email return label shipments returnType must
   * be set to PENDING and pendingShipmentDetail must be set to EMAIL. Valid Values :
   * PENDING, PRINT_RETURN_LABEL Example: PRINT_RETURN_LABEL
   */
  returnType: 'PENDING' | 'PRINT_RETURN_LABEL';

  /**
   * Specifies the details of an outbound shipment in order to associate the return
   * shipment to it.
   */
  returnAssociationDetail?: ReturnShipmentDetail.ReturnAssociationDetail;

  /**
   * These are email details for the return shipment.
   */
  returnEmailDetail?: ReturnShipmentDetail.ReturnEmailDetail;

  /**
   * This is a Return Merchant Authorization (RMA) for the return shipment. Reason
   * for the requirement is mandatory.
   */
  rma?: ReturnShipmentDetail.Rma;
}

export namespace ReturnShipmentDetail {
  /**
   * Specifies the details of an outbound shipment in order to associate the return
   * shipment to it.
   */
  export interface ReturnAssociationDetail {
    /**
     * This is the tracking number associated with this package. Example:
     * 49XXX0000XXX20032835
     */
    trackingNumber: string;

    /**
     * This is the ship date for the outbound shipment associated with a return
     * shipment. The format is YYYY-MM-DD. Example: 2019-10-01
     */
    shipDatestamp?: string;
  }

  /**
   * These are email details for the return shipment.
   */
  export interface ReturnEmailDetail {
    /**
     * Indicate the allowed (merchant-authorized) special services which may be
     * selected when the subsequent shipment is created. Only services represented in
     * EmailLabelAllowedSpecialServiceType will be controlled by this list.
     */
    allowedSpecialService: Array<'SATURDAY_DELIVERY' | 'SATURDAY_PICKUP'>;

    /**
     * This is the merchant phone number and required for Email Return Labels. Example:
     * 19012635656
     */
    merchantPhoneNumber: string;
  }

  /**
   * This is a Return Merchant Authorization (RMA) for the return shipment. Reason
   * for the requirement is mandatory.
   */
  export interface Rma {
    /**
     * Specify the reason for the return. Note: There is no validation for reason.
     * Recommended length is 60 alpha-numeric characters Example: Wrong color or size.
     */
    reason?: string;
  }
}

/**
 * This is the shipment level COD detail.
 */
export interface ShipmentCodDetail {
  /**
   * Identifies the type of funds FedEx should collect upon shipment delivery
   * Example: CASH
   */
  codCollectionType: 'ANY' | 'CASH' | 'GUARANTEED_FUNDS' | 'COMPANY_CHECK' | 'PERSONAL_CHECK';

  /**
   * Use this object to specify C.O.D. transportation charges.
   */
  addTransportationChargesDetail?: ShipmentCodDetail.AddTransportationChargesDetail;

  /**
   * This customs value is applicable for all items(or units) under the specified
   * commodity
   */
  codCollectionAmount?: Money;

  /**
   * Descriptive data of the Cash On Delivery along with their details of the
   * physical location.
   */
  codRecipient?: Party1;

  /**
   * Specifies the contact and address details of a location.
   */
  financialInstitutionContactAndAddress?: ContactAndAddress;

  /**
   * Specify the name of the person or company receiving the secured/unsecured funds
   * payment Example: remitToName
   */
  remitToName?: string;

  /**
   * Indicates which type of reference information to include on the COD return
   * shipping label. Example: INVOICE
   */
  returnReferenceIndicatorType?: 'INVOICE' | 'PO' | 'REFERENCE' | 'TRACKING';

  /**
   * This customs value is applicable for all items(or units) under the specified
   * commodity
   */
  shipmentCodAmount?: Money;
}

export namespace ShipmentCodDetail {
  /**
   * Use this object to specify C.O.D. transportation charges.
   */
  export interface AddTransportationChargesDetail {
    /**
     * Specify which level the charges to be applied.
     */
    chargeLevelType?: 'CURRENT_PACKAGE' | 'SUM_OF_PACKAGES';

    /**
     * Specify Charge type.
     */
    chargeType?: 'COD_SURCHARGE' | 'NET_CHARGE' | 'NET_FREIGHT' | 'TOTAL_CUSTOMER_CHARGE';

    /**
     * Specify which level the rate to be applied.
     */
    rateLevelType?: 'BUNDLED_RATE' | 'INDIVIDUAL_PACKAGE_RATE';

    /**
     * Specify the Rate Type used.
     */
    rateType?: 'ACCOUNT' | 'LIST' | 'ACTUAL' | 'CURRENT' | 'CUSTOM';
  }
}

/**
 * This is the descriptive data required for a FedEx shipment containing dangerous
 * materials. This element is required when SpecialServiceType DRY_ICE is
 * selected.<p><i>Note:<ul><li>Dry Ice is a Package level Special Service for
 * Domestic and International shipments.</li><li>Dry Ice must be declared at both
 * Shipment and Package level for International MPS shipments to print the
 * compliance statement on Airway Bill labels.</li></ul></i></p>
 */
export interface ShipmentDryIceDetail1 {
  /**
   * Indicates the total number of packages in the shipment that contain dry ice.
   * Example: 12
   */
  packageCount?: number;

  /**
   * This is the total dry ice weight in all the packages of the shipment.
   */
  totalWeight?: ShipmentDryIceDetail1.TotalWeight;
}

export namespace ShipmentDryIceDetail1 {
  /**
   * This is the total dry ice weight in all the packages of the shipment.
   */
  export interface TotalWeight {
    /**
     * For the Dry Ice weight in the shipment the unit of measure must be KG.
     */
    units?: 'KG' | 'LB';

    /**
     * Weight Value. Example: 68.25
     * <a href='https://developer.fedex.com/api/en-us/guides/api-reference.html#packagetypes' target='_blank'>Click
     * here to see Weight Values</a>.
     */
    value?: number;
  }
}

/**
 * The account number associated with the shipment.
 */
export interface ShipperAccountNumber {
  /**
   * The account number value. Maximum length is 9 . Example: Your account number
   */
  value: string;
}

/**
 * Indicate the Shipper contact details for this shipment.
 */
export interface ShipperParty {
  /**
   * This is detailed information on physical location. May be used as an actual
   * physical address (place to which one could go), or as a container of address
   * parts which should be handled as a unit (such as a city-state-ZIP combination
   * within the US).
   */
  address: PartyAddress2;

  /**
   * Indicate the contact details for this shipment.
   */
  contact: PartyContact;

  /**
   * This is the tax identification number details.
   */
  tins?: Array<TaxpayerIdentification>;
}

/**
 * These are document diposition details. Each occurrence of this class specifies a
 * particular way in which a kind of shipping document is to be produced and
 * provided.
 */
export interface ShippingDocumentDispositionDetail {
  /**
   * Values in this field specify how to create and return the document.
   * Example:CONFIRMED
   */
  dispositionType?:
    | 'CONFIRMED'
    | 'DEFERRED_QUEUED'
    | 'DEFERRED_RETURNED'
    | 'DEFERRED_STORED'
    | 'EMAILED'
    | 'QUEUED'
    | 'RETURNED'
    | 'STORED';

  /**
   * Specifies how to e-mail shipping documents.
   */
  eMailDetail?: ShippingDocumentDispositionDetail.EMailDetail;
}

export namespace ShippingDocumentDispositionDetail {
  /**
   * Specifies how to e-mail shipping documents.
   */
  export interface EMailDetail {
    /**
     * Indicates the shipping document email recipients.
     */
    eMailRecipients: Array<EMailDetail.EMailRecipient>;

    /**
     * Identifies the convention by which documents are to be grouped as email
     * attachment.
     */
    grouping?: 'BY_RECIPIENT' | 'NONE';

    /**
     * These are locale details. Example: 'en_US'
     * <a onclick='loadDocReference("locales")'>click here to see locales</a> Note: If
     * the locale is left blank or an invalid locale is entered, an error message is
     * returned in response.
     */
    locale?: string;
  }

  export namespace EMailDetail {
    export interface EMailRecipient {
      /**
       * Specify the email notification recipient type.
       */
      recipientType: 'BROKER' | 'OTHER' | 'RECIPIENT' | 'SHIPPER' | 'THIRD_PARTY' | 'OTHER1' | 'OTHER2';

      /**
       * Specifies the email address. Example: email@fedex.com
       */
      emailAddress?: string;
    }
  }
}

/**
 * Specify the shipping document format.
 */
export interface ShippingDocumentFormat {
  /**
   * Specifies how to create, organize, and return the document
   */
  dispositions?: Array<ShippingDocumentDispositionDetail>;

  /**
   * Specify the image format used for a shipping document. Example:PDF
   */
  docType?: 'PDF';

  /**
   * These are locale details. example: 'en_US'
   * <a onclick='loadDocReference("locales")'>click here to see Locales</a> Note: If
   * the locale is left blank or an invalid locale is entered, an error message is
   * returned in response.
   */
  locale?: string;

  /**
   * Indicate the requested options for document format.
   */
  optionsRequested?: DocumentFormatOptionsRequested;

  /**
   * For those shipping document types which have both a "form" and "instructions"
   * component (e.g General Agency Agreement), this field indicates whether to
   * provide the instructions. Example: true
   */
  provideInstructions?: boolean;

  /**
   * Specifies the label stock type. Lists the correct type of paper for the Freight
   * address label option.Specify valid value PAPER_4_PER_PAGE_PORTRAIT.
   * Example:PAPER_TYPE
   */
  stockType?: 'PAPER_LETTER';
}

/**
 * Use this object to provide all data required for additional (non-label) shipping
 * documents to be produced.
 */
export interface ShippingDocumentSpecification {
  /**
   * The instructions indicating how to print the Certificate of Origin ( e.g.
   * whether or not to include the instructions, image type, etc ...)
   */
  certificateOfOrigin?: ShippingDocumentSpecification.CertificateOfOrigin;

  /**
   * The instructions indicating how to print the Commercial Invoice( e.g. image
   * type) Specifies characteristics of a shipping document to be produced.
   */
  commercialInvoiceDetail?: ShippingDocumentSpecification.CommercialInvoiceDetail;

  /**
   * Use this object to specify details to generate general agency agreement detail.
   */
  generalAgencyAgreementDetail?: ShippingDocumentSpecification.GeneralAgencyAgreementDetail;

  /**
   * Use this object to specify details to generate the OP-900 document for hazardous
   * material packages.
   */
  op900Detail?: ShippingDocumentSpecification.Op900Detail;

  /**
   * These are return instruction details which will be returned in the transaction
   * to be printed on Return Label.
   */
  returnInstructionsDetail?: ShippingDocumentSpecification.ReturnInstructionsDetail;

  /**
   * Conditionally required in order to obtain shipping documents.Indicates the types
   * of shipping documents requested by the shipper Example:RETURN_INSTRUCTIONS
   */
  shippingDocumentTypes?: Array<
    | 'CERTIFICATE_OF_ORIGIN'
    | 'COMMERCIAL_INVOICE'
    | 'CUSTOM_PACKAGE_DOCUMENT'
    | 'CUSTOM_SHIPMENT_DOCUMENT'
    | 'CUSTOMER_SPECIFIED_LABELS'
    | 'EXPORT_DECLARATION'
    | 'GENERAL_AGENCY_AGREEMENT'
    | 'LABEL'
    | 'USMCA_CERTIFICATION_OF_ORIGIN'
    | 'OP_900'
    | 'PENDING_SHIPMENT_EMAIL_NOTIFICATION'
    | 'PRO_FORMA_INVOICE'
    | 'RETURN_INSTRUCTIONS'
    | 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN'
  >;

  /**
   * The instructions indicating how to print the USMCA Certificate of Origin (e.g.
   * whether or not to include the instructions, image type, etc ...).
   */
  usmcaCertificationOfOriginDetail?: ShippingDocumentSpecification.UsmcaCertificationOfOriginDetail;

  /**
   * The instructions indicating commercial invoice certification of origin.
   */
  usmcaCommercialInvoiceCertificationOfOriginDetail?: ShippingDocumentSpecification.UsmcaCommercialInvoiceCertificationOfOriginDetail;
}

export namespace ShippingDocumentSpecification {
  /**
   * The instructions indicating how to print the Certificate of Origin ( e.g.
   * whether or not to include the instructions, image type, etc ...)
   */
  export interface CertificateOfOrigin {
    /**
     * Specifies the usage and identification of customer supplied images to be used on
     * this document.
     */
    customerImageUsages?: Array<ShipmentsAPI.CustomerImageUsage>;

    /**
     * Specify the shipping document format.
     */
    documentFormat?: ShipmentsAPI.ShippingDocumentFormat;
  }

  /**
   * The instructions indicating how to print the Commercial Invoice( e.g. image
   * type) Specifies characteristics of a shipping document to be produced.
   */
  export interface CommercialInvoiceDetail {
    /**
     * Specifies the usage and identification of customer supplied images to be used on
     * this document.
     */
    customerImageUsages?: Array<ShipmentsAPI.CustomerImageUsage>;

    /**
     * Specify the shipping document format.
     */
    documentFormat?: ShipmentsAPI.ShippingDocumentFormat;
  }

  /**
   * Use this object to specify details to generate general agency agreement detail.
   */
  export interface GeneralAgencyAgreementDetail {
    /**
     * Specify the shipping document format.
     */
    documentFormat?: ShipmentsAPI.ShippingDocumentFormat;
  }

  /**
   * Use this object to specify details to generate the OP-900 document for hazardous
   * material packages.
   */
  export interface Op900Detail {
    /**
     * Specify the use and identification of supplied images to be used on document.
     */
    customerImageUsages?: Array<ShipmentsAPI.CustomerImageUsage>;

    /**
     * Specify the shipping document format.
     */
    documentFormat?: ShipmentsAPI.ShippingDocumentFormat;

    /**
     * Indicates the name to be printed as signature on the document instead of (or in
     * addition to) a signature image. Example: John Hill
     */
    signatureName?: string;
  }

  /**
   * These are return instruction details which will be returned in the transaction
   * to be printed on Return Label.
   */
  export interface ReturnInstructionsDetail {
    /**
     * Specify additional information (text) to be inserted into the return document.
     * Example: This is additional text printed on Return Label
     */
    customText?: string;

    /**
     * These are characteristics of a shipping document to be produced.
     */
    documentFormat?: ReturnInstructionsDetail.DocumentFormat;
  }

  export namespace ReturnInstructionsDetail {
    /**
     * These are characteristics of a shipping document to be produced.
     */
    export interface DocumentFormat {
      /**
       * Details on creating, organizing, and returning the document.
       */
      dispositions?: Array<ShipmentsAPI.ShippingDocumentDispositionDetail>;

      /**
       * Specify the image format used for a shipping document. Example:PNG
       */
      docType?: 'PNG' | 'PDF';

      /**
       * These are locale details. example: 'en_US'
       * <a onclick='loadDocReference("locales")'>click here to see Locales</a> Note: If
       * the locale is left blank or an invalid locale is entered, an error message is
       * returned in response.
       */
      locale?: string;

      /**
       * Indicate the requested options for document format.
       */
      optionsRequested?: ShipmentsAPI.DocumentFormatOptionsRequested;

      /**
       * For those shipping document types which have both a "form" and "instructions"
       * component (e.g General Agency Agreement), this field indicates whether to
       * provide the instructions. Example: true
       */
      provideInstructions?: boolean;

      /**
       * Specifies the label stock type. Lists the correct type of paper for the Freight
       * address label option.Specify valid value PAPER_4_PER_PAGE_PORTRAIT
       * Example:PAPER_LETTER
       */
      stockType?: 'PAPER_LETTER';
    }
  }

  /**
   * The instructions indicating how to print the USMCA Certificate of Origin (e.g.
   * whether or not to include the instructions, image type, etc ...).
   */
  export interface UsmcaCertificationOfOriginDetail {
    /**
     * Date Range for custom delivery request; only used if type is BETWEEN.
     */
    blanketPeriod?: UsmcaCertificationOfOriginDetail.BlanketPeriod;

    /**
     * Specify the job title of the certifier
     */
    certifierJobTitle?: string;

    /**
     * This is certifier specification.
     */
    certifierSpecification?: 'EXPORTER' | 'IMPORTER' | 'PRODUCER';

    /**
     * Specifies the usage and identification of customer supplied images to be used on
     * this document.
     */
    customerImageUsages?: Array<ShipmentsAPI.CustomerImageUsage>;

    /**
     * Specify the shipping document format.
     */
    documentFormat?: ShipmentsAPI.ShippingDocumentFormat;

    /**
     * This is importer specification.
     */
    importerSpecification?: 'UNKNOWN' | 'VARIOUS';

    producer?: ShipmentsAPI.Party3;

    /**
     * This is producer specification.
     */
    producerSpecification?: 'AVAILABLE_UPON_REQUEST' | 'VARIOUS' | 'SAME_AS_EXPORTER';
  }

  export namespace UsmcaCertificationOfOriginDetail {
    /**
     * Date Range for custom delivery request; only used if type is BETWEEN.
     */
    export interface BlanketPeriod {
      /**
       * Indicates the start date.
       */
      begins?: string;

      /**
       * Indicates the end date.
       */
      ends?: string;
    }
  }

  /**
   * The instructions indicating commercial invoice certification of origin.
   */
  export interface UsmcaCommercialInvoiceCertificationOfOriginDetail {
    /**
     * Specify the job title of the certifier
     */
    certifierJobTitle?: string;

    /**
     * This is certifier specification.
     */
    certifierSpecification?: 'EXPORTER' | 'IMPORTER' | 'PRODUCER';

    /**
     * Specifies the usage and identification of customer supplied images to be used on
     * this document.
     */
    customerImageUsages?: Array<ShipmentsAPI.CustomerImageUsage>;

    /**
     * Specify the shipping document format.
     */
    documentFormat?: ShipmentsAPI.ShippingDocumentFormat;

    /**
     * This is importer specification.
     */
    importerSpecification?: 'UNKNOWN' | 'VARIOUS';

    producer?: ShipmentsAPI.Party3;

    /**
     * This is producer specification.
     */
    producerSpecification?: 'AVAILABLE_UPON_REQUEST' | 'VARIOUS' | 'SAME_AS_EXPORTER';
  }
}

/**
 * Use this object to specify the smartpost shipment details. Required for
 * SMARTPOST service. If SmartPostInfoDetail is indicated, the elements below it
 * are also required.
 */
export interface SmartPostInfoDetail {
  /**
   * Required Specify the HubID using the four-digit numeric value. Example: 5015
   */
  hubId: string;

  /**
   * Specify the indicia type. Available options
   * include:<ul><li>MEDIA_MAIL</li><li>PARCEL_SELECT (1 LB through 70
   * LB)</li><li>PRESORTED_BOUND_PRINTED_MATTER</li><li>PRESORTED_STANDARD (less than
   * 1 LB)</li><li>PARCEL_RETURN</li></ul>Example:PRESORTED_STANDARD
   */
  indicia:
    | 'MEDIA_MAIL'
    | 'PARCEL_RETURN'
    | 'PARCEL_SELECT'
    | 'PRESORTED_BOUND_PRINTED_MATTER'
    | 'PRESORTED_STANDARD';

  /**
   * Required for Presorted Standard but not for returns or parcel select. They are
   * not all usable for all ancillary endorsements. Example: RETURN_SERVICE
   */
  ancillaryEndorsement?:
    | 'ADDRESS_CORRECTION'
    | 'CARRIER_LEAVE_IF_NO_RESPONSE'
    | 'CHANGE_SERVICE'
    | 'FORWARDING_SERVICE'
    | 'RETURN_SERVICE';

  /**
   * SmartPost Shipment Special Service Type Example: USPS_DELIVERY_CONFIRMATION
   */
  specialServices?: 'USPS_DELIVERY_CONFIRMATION';
}

/**
 * These are surcharges details. <a onclick='loadDocReference("surcharges")'>click
 * here to see Surcharges</a>
 */
export interface Surcharge {
  /**
   * This is the surcharge amount. Example: 15.35
   */
  amount?: number;

  /**
   * Specifies the description of the surcharge. Indicates delivery and returns
   * information for FedEx Ground Economy services. Example: Fuel Surcharge
   */
  description?: string;

  /**
   * Specifies if the surcharge applies to the entire shipment, or to an individual
   * package. Example: PACKAGE
   */
  level?: string;

  /**
   * This is the surcharge type. Example: APPOINTMENT_DELIVERY
   */
  surchargeType?: string;
}

/**
 * Specifies the tax for the shipment.
 */
export interface Tax {
  /**
   * Indicates the amount of tax. Example: 10.0
   */
  amount?: number;

  /**
   * Placeholder for the tax description. Example: descrption
   */
  description?: string;

  /**
   * Indicates the Level of Tax. Example: level
   */
  level?: string;

  /**
   * Placeholder for the Type of the Tax. Example:type
   */
  type?: string;
}

export interface TaxpayerIdentification {
  /**
   * Specify tax ID number. Maximum length is 18. Example: 123567
   */
  number: string;

  /**
   * Identifies the type of Tax Identification Number in Shipment processing.
   * Example: FEDERAL
   */
  tinType:
    | 'PERSONAL_NATIONAL'
    | 'PERSONAL_STATE'
    | 'FEDERAL'
    | 'BUSINESS_NATIONAL'
    | 'BUSINESS_STATE'
    | 'BUSINESS_UNION';

  /**
   * Effective Date. FORMAT[YYYY-MM-DD] Example: 2024-06-13
   */
  effectiveDate?: string;

  /**
   * Expiration Date. FORMAT[YYYY-MM-DD] Example: 2024-06-13
   */
  expirationDate?: string;

  /**
   * Identifies the usage of Tax Identification Number in Shipment processing.
   * Example: usage
   */
  usage?: string;
}

/**
 * Indicates the tracking details of the package.
 */
export interface TrackingID {
  /**
   * This is FedEx tracking Identifier associated with the package. Example: 8600
   */
  formId?: string;

  /**
   * Specify the FedEx transportation type. Example: EXPRESS
   */
  trackingIdType?: string;

  /**
   * This is the number associated with the package that is used to track it.
   * Example: 49XXX0000XXX20032835
   */
  trackingNumber?: string;

  /**
   * Specify the USPS tracking Identifier associated with FedEx SmartPost shipment.
   * Example: 92
   */
  uspsApplicationId?: string;
}

/**
 * Specifies shipping transaction output details
 */
export interface TransactionShipmentOutputVo {
  /**
   * These are alert details received in the response.
   */
  alerts?: Array<TransactionShipmentOutputVo.Alert3P | TransactionShipmentOutputVo.Alert3Pp>;

  /**
   * Returns the result of processing the desired package as a single-package
   * shipment.
   */
  completedShipmentDetail?: TransactionShipmentOutputVo.CompletedShipmentDetail;

  /**
   * This is a master tracking number for the shipment (must be unique for
   * stand-alone open shipments, or unique within consolidation if consolidation key
   * is provided). Example: 794953535000
   */
  masterTrackingNumber?: string;

  /**
   * Specifies the information about the pieces, received in the response.
   */
  pieceResponses?: Array<TransactionShipmentOutputVo.PieceResponse>;

  /**
   * Indicates the Service Category. Example: EXPRESS
   */
  serviceCategory?: string;

  /**
   * This is the service name associated with the shipment. Example: FedEx Ground
   */
  serviceName?: string;

  /**
   * Indicate the FedEx serviceType used for this shipment. The results will be
   * filtered by the serviceType value indicated. Example: STANDARD_OVERNIGHT
   * <a onclick='loadDocReference("servicetypes")'>click here to see Service
   * Types</a>
   */
  serviceType?: string;

  /**
   * This is the shipment date. Default value is current date in case the date is not
   * provided or a past date is provided. Format [YYYY-MM-DD]. Example: 2019-10-14
   */
  shipDatestamp?: string;

  /**
   * These are shipment advisory details.
   */
  shipmentAdvisoryDetails?: TransactionShipmentOutputVo.ShipmentAdvisoryDetails;

  /**
   * These are shipping document details.
   */
  shipmentDocuments?: Array<LabelResponseVo>;
}

export namespace TransactionShipmentOutputVo {
  /**
   * Specifies the api alerts.
   */
  export interface Alert3P {
    /**
     * Specifies the api alert code. Example: RECIPIENTCONTACT.PHONENUMBER.INVALID
     */
    code?: string;

    /**
     * Specifies the api alert message. Example: Recipient’s phone number format is not
     * matching with recipient's country code; hence, recipient will not receive
     * Convenient Delivery Options. Moving forward, please provide valid mobile phone
     * number.
     */
    message?: string;
  }

  /**
   * Specifies the api alerts.
   */
  export interface Alert3Pp {
    /**
     * Specifies the api alert code. Example: RECIPIENTCONTACT.PHONENUMBER.NOTSUPPORTED
     */
    code?: string;

    /**
     * Convenient Delivery Options will not be provided with recipient’s landline
     * number. Moving forward, please provide valid mobile phone number.
     */
    message?: string;
  }

  /**
   * Returns the result of processing the desired package as a single-package
   * shipment.
   */
  export interface CompletedShipmentDetail {
    /**
     * This information describes how and when a online email return label shipment may
     * be accessed for completion.
     */
    accessDetail?: CompletedShipmentDetail.AccessDetail;

    /**
     * Specify the four letter code of a FedEx operating company that meets your
     * requirements Examples of FedEx Operating Companies are:<ul><li>FDXE - FedEx
     * Express</li><li>FDXG - FedEx Ground</li><li>FXSP - FedEx
     * SmartPost</li><li>FXCC - FedEx Custom Critical.</li></ul>
     */
    carrierCode?: string;

    /**
     * These are completed ETD details when ELECTRONIC_TRADE_DOCUMENTS Special service
     * type is requested
     */
    completedEtdDetail?: CompletedShipmentDetail.CompletedEtdDetail;

    /**
     * This is default holding location information when HOLD_AT_LOCATION special
     * service is requested and the client does not specify the hold location address.
     */
    completedHoldAtLocationDetail?: CompletedShipmentDetail.CompletedHoldAtLocationDetail;

    /**
     * Indicates the completed package details.
     */
    completedPackageDetails?: Array<CompletedShipmentDetail.CompletedPackageDetail>;

    /**
     * Indicates the document requirements detail.
     */
    documentRequirements?: CompletedShipmentDetail.DocumentRequirements;

    /**
     * For US export shipments requiring an EEI, enter the ITN number received from AES
     * when you filed your shipment or the FTR (Foreign Trade Regulations) exemption
     * number.The proper format for an ITN number is AES XYYYYMMDDNNNNNN where YYYYMMDD
     * is date and NNNNNN are numbers generated by the AES. Example: AESX20220714987654
     * Note: The ITN or FTR exemption number you submit in the ship request prints on
     * the international shipping label.
     *
     * For CA export shipments,it can be Proof of report number(15-32 alphanumeric) ,
     * Summary proof of report number(7-32 alphanumeric) or Exemption number(2 digit)
     * based on the selected b13AFilingOption. Example: 98765432107654321(POR number),
     * 7654321(Summary POR number) and 02(Exemption number). For FTR exemption number
     * you need provide a predefined value as NO_EEI_30_37_A.
     */
    exportComplianceStatement?: string;

    /**
     * Completed shipment level hazardous commodity information.
     */
    hazardousShipmentDetail?: CompletedShipmentDetail.HazardousShipmentDetail;

    /**
     * Indicates the tracking details of the package.
     */
    masterTrackingId?: ShipmentsAPI.TrackingID;

    /**
     * Indicates the shipment level operational information.
     */
    operationalDetail?: CompletedShipmentDetail.OperationalDetail;

    /**
     * Specifies packaging description Example: Customer Packaging
     */
    packagingDescription?: string;

    /**
     * Descriptions for a service.
     */
    serviceDescription?: CompletedShipmentDetail.ServiceDescription;

    /**
     * All shipment-level rating data for this shipment, which may include data for
     * multiple rate types.
     */
    shipmentRating?: CompletedShipmentDetail.ShipmentRating;

    /**
     * Indicates whether or not this is an intra-U.S. shipment.
     */
    usDomestic?: boolean;
  }

  export namespace CompletedShipmentDetail {
    /**
     * This information describes how and when a online email return label shipment may
     * be accessed for completion.
     */
    export interface AccessDetail {
      /**
       * Indicates the details about the users who can access the shipment.
       */
      accessorDetails?: Array<AccessDetail.AccessorDetail>;
    }

    export namespace AccessDetail {
      /**
       * Specifies details for how to access the pending email return label.
       */
      export interface AccessorDetail {
        /**
         * Specifies the URL for the email label. Example: emailLabelUrl
         */
        emailLabelUrl?: string;

        /**
         * Specifies the accessor password. Example: password
         */
        password?: string;

        /**
         * Specifies the accessor role. Example: role
         */
        role?: string;

        /**
         * Specifies the accessor User ID. Example: userId
         */
        userId?: string;
      }
    }

    /**
     * These are completed ETD details when ELECTRONIC_TRADE_DOCUMENTS Special service
     * type is requested
     */
    export interface CompletedEtdDetail {
      /**
       * Returns the folder id where the documents is uploaded Example:
       * "0b0493e580dc1a1b"
       */
      folderId?: string;

      /**
       * Returns the type of the document that is being uploaded Example:
       * "COMMERCIAL_INVOICE"
       */
      type?: string;

      /**
       * Specify the document upload reference details.
       */
      uploadDocumentReferenceDetails?: Array<ShipmentsAPI.UploadDocumentReferenceDetail>;
    }

    /**
     * This is default holding location information when HOLD_AT_LOCATION special
     * service is requested and the client does not specify the hold location address.
     */
    export interface CompletedHoldAtLocationDetail {
      /**
       * Indicate the physical address of the FedEx holding location.
       */
      holdingLocation?: CompletedHoldAtLocationDetail.HoldingLocation;

      /**
       * Indicates the type of the FedEx holding location Example: FEDEX_STAFFED
       */
      holdingLocationType?: string;
    }

    export namespace CompletedHoldAtLocationDetail {
      /**
       * Indicate the physical address of the FedEx holding location.
       */
      export interface HoldingLocation {
        /**
         * Descriptive data for a physical location. May be used as an actual physical
         * address (place to which one could go), or as a container of "address parts"
         * which should be handled as a unit (such as a city-state-ZIP combination within
         * the US).
         */
        address?: HoldingLocation.Address;

        /**
         * Specify the contact information.
         */
        contact?: HoldingLocation.Contact;
      }

      export namespace HoldingLocation {
        /**
         * Descriptive data for a physical location. May be used as an actual physical
         * address (place to which one could go), or as a container of "address parts"
         * which should be handled as a unit (such as a city-state-ZIP combination within
         * the US).
         */
        export interface Address {
          /**
           * This is a placeholder for City Name. Note: This is conditional and not required
           * in all the requests. Note: It is recommended for Express shipments for the most
           * accurate ODA and OPA surcharges. Example: Beverly Hills
           */
          city?: string;

          /**
           * This is the two-letter country code. Maximum length is 2. Example: US
           * <a onclick='loadDocReference("countrycodes")'>click here to see Country
           * codes</a>
           */
          countryCode?: string;

          /**
           * Indicate the Postal code. This is Optional for non postal-aware countries.
           * Maximum length is 10. Example: 65247
           * <a onclick='loadDocReference("postalawarecountries")'>click here to see Postal
           * aware countries</a>
           */
          postalCode?: string;

          /**
           * Indicate whether this address is residential (as opposed to commercial).
           */
          residential?: boolean;

          /**
           * This is a placeholder for State or Province code.State code is required for US,
           * CA, PR and not required for other countries. Conditional. Max length is 2.
           * Example: CA <a onclick='loadDocReference("canadaprovincecodes")'>click here to
           * see State or Province Code</a>
           */
          stateOrProvinceCode?: string;

          /**
           * This is the combination of number, street name, etc. Note: At least one line is
           * required and streetlines more than 3 will be ignored. Empty lines should not be
           * included. Maximum length per line is 35. Example: [10 FedEx Parkway, Suite 302,
           * .etc.]
           */
          streetLines?: Array<string>;
        }

        /**
         * Specify the contact information.
         */
        export interface Contact {
          /**
           * Specify company name.
           */
          companyName?: string;

          /**
           * Specify email address. Example: sample@company.com
           */
          emailAddress?: string;

          /**
           * Specify person name. Example: John Taylor
           */
          personName?: string;

          /**
           * The shipper's phone extension. Max length is 6. Example: 91
           */
          phoneExtension?: string;

          /**
           * The shippers phone number. Minimum length is 10 and supports maximum of 15 for
           * certain countries using longer phone numbers. Note: For US and CA, a phone
           * number must have exactly 10 digits, plus an optional leading country code of 1
           * or +1. Example: 918xxxxx890
           */
          phoneNumber?: string;
        }
      }
    }

    export interface CompletedPackageDetail {
      /**
       * These are the package weight details. Note: Weight is not required for One rate
       * shipments
       */
      dryIceWeight?: ShipmentsAPI.Weight;

      /**
       * This is group shipment number. Used with request containing PACKAGE_GROUPS, to
       * identify which group of identical packages was used to produce a reply item.
       * Example: 10
       */
      groupNumber?: number;

      /**
       * Complete package-level hazardous commodity information for a single package.
       */
      hazardousPackageDetail?: CompletedPackageDetail.HazardousPackageDetail;

      /**
       * Package-level data required for labeling and/or movement.
       */
      operationalDetail?: CompletedPackageDetail.OperationalDetail;

      /**
       * Indicates the oversize classification. Example: OVERSIZE_1
       */
      oversizeClass?: string;

      /**
       * This class groups together all package-level rate data for a single package
       * (across all rate types) as part of the response to a shipping request, which
       * groups shipment-level data together and groups package-level data by package.
       */
      packageRating?: CompletedPackageDetail.PackageRating;

      /**
       * This is package sequence number. No negative value or decimals are allowed.
       * Example: 256
       */
      sequenceNumber?: number;

      /**
       * It specifies the signature option applied, to allow cases in which the value
       * requested conflicted with other service features in the shipment. Example:
       * DIRECT
       */
      signatureOption?: string;

      /**
       * Tracking details of the package.
       */
      trackingIds?: Array<ShipmentsAPI.TrackingID>;
    }

    export namespace CompletedPackageDetail {
      /**
       * Complete package-level hazardous commodity information for a single package.
       */
      export interface HazardousPackageDetail {
        /**
         * Specifies the hazardous package accessibility. Example: ACCESSIBLE
         */
        accessibility?: string;

        /**
         * When TRUE-indicates that the package can be transported only on a cargo
         * aircraft. Example: true
         */
        cargoAircraftOnly?: boolean;

        /**
         * Indicates one or more approved containers used to pack dangerous goods
         * commodities. This does not describe any individual inner receptacles that may be
         * within this container.
         */
        containers?: Array<HazardousPackageDetail.Container>;

        /**
         * Specifies the label type of hazardous package. Example: II_YELLOW
         */
        labelType?: string;

        /**
         * Specifies the maximum radiation level from the package (measured in
         * microSieverts per hour at a distance of one meter from the external surface of
         * the package, divided by 10). Example: 2.45
         */
        radioactiveTransportIndex?: number;

        /**
         * A unique reference id that matches the package to a package configuration. This
         * is populated if the client provided a package configuration for several packages
         * that have the exact same dangerous goods content. Example: 123456
         */
        referenceId?: string;

        /**
         * Specifies the hazardous package regulation type. Example: IATA
         */
        regulation?: string;
      }

      export namespace HazardousPackageDetail {
        /**
         * Specifies the details of a container used to package dangerous goods
         * commodities.
         */
        export interface Container {
          /**
           * Indicates the details of the hazardous commodities in the completed package.
           */
          hazardousCommodities?: Array<Container.HazardousCommodity>;

          /**
           * Indicates that the quantity of the dangerous goods packaged is permissible for
           * shipping. This is used to ensure that the dangerous goods commodities do not
           * exceed the net quantity per package restrictions. Example: 2.0
           */
          QValue?: number;
        }

        export namespace Container {
          /**
           * These the details on the kind and quantity of an individual hazardous commodity
           * in a package.
           */
          export interface HazardousCommodity {
            /**
             * Identifies and describes an individual hazardous commodity. For 201001 load,
             * this is based on data from the FedEx Ground Hazardous Materials Shipping Guide.
             */
            description?: HazardousCommodity.Description;

            /**
             * The mass points are a calculation used by ADR regulations for measuring the risk
             * of a particular hazardous commodity. Example: 2.0
             */
            massPoints?: number;

            /**
             * Specifies the total mass of the contained explosive substances, without the mass
             * of any casings, bullets, shells, etc.
             */
            netExplosiveDetail?: HazardousCommodity.NetExplosiveDetail;

            /**
             * Provides details of Hazardous Commodity Option Detail
             */
            options?: HazardousCommodity.Options;

            /**
             * Specify the Hazardous commodity quantity details.
             */
            quantity?: HazardousCommodity.Quantity;
          }

          export namespace HazardousCommodity {
            /**
             * Identifies and describes an individual hazardous commodity. For 201001 load,
             * this is based on data from the FedEx Ground Hazardous Materials Shipping Guide.
             */
            export interface Description {
              /**
               * Specifies the Identification. Example: 1234
               */
              id?: string;

              /**
               * Specifies attributes. Example: ["attributes"]
               */
              attributes?: Array<string>;

              /**
               * Information related to quantity limitations and operator or state variations as
               * may be applicable to the dangerous goods commodity.
               */
              authorization?: string;

              /**
               * Specifies hazard class. Example: Hazard Class
               */
              hazardClass?: string;

              /**
               * Specifies Hazard Label Text. Example: labelText
               */
              labelText?: string;

              /**
               * Specifies packing Group. Example: Packing Group
               */
              packingGroup?: string;

              /**
               * Specifies Packing Instructions. Example: packingInstructions
               */
              packingInstructions?: string;

              /**
               * Specifies Proper Shipping Name. Example: Proper Shipping Name
               */
              properShippingName?: string;

              /**
               * Fully-expanded descriptive text for a hazardous commodity. Example:
               * properShippingNameAndDescription
               */
              properShippingNameAndDescription?: string;

              /**
               * In conjunction with the regulatory identifier, this field uniquely identifies a
               * specific hazardous materials commodity. Example: 876
               */
              sequenceNumber?: number;

              /**
               * Specifies Special Provisions if any. Example: specialProvisions
               */
              specialProvisions?: string;

              /**
               * Specifies subsidiary Classes. Example:["Subsidiary Classes"]
               */
              subsidiaryClasses?: Array<string>;

              /**
               * Specifies Symbols. Example: symbols
               */
              symbols?: string;

              /**
               * Specifies Technical Name. Example: technicalName
               */
              technicalName?: string;

              /**
               * There are five categories of tunnel categorization with A representing the least
               * restrictive and E as the most restrictive. Category A, as the least restrictive,
               * will not be sign-posted. Category E, the most restrictive, only allows the
               * passage of UN2919, UN3291, UN3331, UN3359 and UN3373. Example: UN2919
               */
              tunnelRestrictionCode?: string;
            }

            /**
             * Specifies the total mass of the contained explosive substances, without the mass
             * of any casings, bullets, shells, etc.
             */
            export interface NetExplosiveDetail {
              /**
               * Specifies amount. Example: 10.0
               */
              amount?: number;

              /**
               * Specifies net explosive classification type. Example: NET_EXPLOSIVE_WEIGHT
               */
              type?: string;

              /**
               * Specifies net explosive units. Example: units
               */
              units?: string;
            }

            /**
             * Provides details of Hazardous Commodity Option Detail
             */
            export interface Options {
              /**
               * DG Data Upload Mode:- Optional DG Full Validation Mode: Optional Text used in
               * labeling the commodity under control of the LabelTextOption field
               */
              customerSuppliedLabelText?: string;

              /**
               * Provides the label text option
               */
              labelTextOption?: 'APPEND' | 'OVERRIDE' | 'STANDARD';
            }

            /**
             * Specify the Hazardous commodity quantity details.
             */
            export interface Quantity {
              /**
               * Indicate the amount of the commodity in alternate units. Example: 24.56
               */
              amount: number;

              /**
               * Specifies which measure of quantity is to be validated. Example:GROSS
               */
              quantityType: 'GROSS' | 'NET';

              /**
               * Indicate the unit of measure. Example: KG
               */
              units?: string;
            }
          }
        }
      }

      /**
       * Package-level data required for labeling and/or movement.
       */
      export interface OperationalDetail {
        /**
         * Human-readable text for pre-January 2011 clients. Example: astraHandlingText
         */
        astraHandlingText?: string;

        /**
         * These are package barcode details. Each instance of this data type represents
         * the set of barcodes (of all types) which are associated with a specific package.
         */
        barcodes?: OperationalDetail.Barcodes;

        /**
         * These are operational instruction such as Ground Information printed on a given
         * area of the label, one-dimensional barcode with only x-axis that contains the
         * details of the shipment in encrypted form, COD Return operational instructions
         * data such as COD amount, SECURED or UNSECURED.
         */
        operationalInstructions?: Array<OperationalDetail.OperationalInstruction>;
      }

      export namespace OperationalDetail {
        /**
         * These are package barcode details. Each instance of this data type represents
         * the set of barcodes (of all types) which are associated with a specific package.
         */
        export interface Barcodes {
          /**
           * This is binary-style barcodes used for the package identification.
           */
          binaryBarcodes?: Array<Barcodes.BinaryBarcode>;

          /**
           * This is string-style barcodes used for package identification.
           */
          stringBarcodes?: Array<Barcodes.StringBarcode>;
        }

        export namespace Barcodes {
          /**
           * Each instance of this data type represents a barcode whose content must be
           * represented as binary data (i.e. not ASCII text).
           */
          export interface BinaryBarcode {
            /**
             * The kind of barcode data in this instance. Example: COMMON-2D
             */
            type?: string;

            /**
             * This is the value.
             */
            value?: string;
          }

          /**
           * Each instance of this data type represents a barcode whose content must be
           * represented as ASCII text (i.e. not binary data).
           */
          export interface StringBarcode {
            /**
             * The kind of barcode data in this instance. example valid values are: ADDRESS -
             * Represents the recipient address GROUND - FedEx Ground parcel barcode Example:
             * ADDRESS
             */
            type?: string;

            /**
             * This is the value. Example: 1010062512241535917900794953544894
             */
            value?: string;
          }
        }

        export interface OperationalInstruction {
          /**
           * This is an operational instruction printed or available on the shipping
           * document. Example: SECURED
           */
          content?: string;

          /**
           * Specifies the number of operational instructions returned for this shipment.
           * Example: 17
           */
          number?: number;
        }
      }

      /**
       * This class groups together all package-level rate data for a single package
       * (across all rate types) as part of the response to a shipping request, which
       * groups shipment-level data together and groups package-level data by package.
       */
      export interface PackageRating {
        /**
         * This is the actual rate type. It identifies which entry in the following array
         * is considered as presenting the actual rates for the package. Example:
         * PAYOR_ACCOUNT_PACKAGE
         */
        actualRateType?: string;

        /**
         * This is the difference between the list and account net charge. Example: 0.0
         */
        effectiveNetDiscount?: number;

        /**
         * Data for a package's rates, as calculated per a specific rate type.
         */
        packageRateDetails?: Array<PackageRating.PackageRateDetail>;
      }

      export namespace PackageRating {
        /**
         * These are package rate details, as calculated per a specific rate type.
         */
        export interface PackageRateDetail {
          /**
           * The package transportation charge(prior to any discounts applied). Example:
           * 45.67
           */
          baseCharge?: number;

          /**
           * These are the package weight details. Note: Weight is not required for One rate
           * shipments
           */
          billingWeight?: ShipmentsAPI.Weight;

          /**
           * This is the currency code. Example: USD
           * <a onclick='loadDocReference("currencycodes")'>click here to see Currency
           * codes</a>
           */
          currency?: string;

          /**
           * Indicates the minumum charge type. INTERNAL FEDEX USE ONLY.Example:
           * minimumChargeType
           */
          minimumChargeType?: string;

          /**
           * This is the sum of net freight, total surcharges and total taxes for a package.
           * Example: 121.56
           */
          netCharge?: number;

          /**
           * This is sum of net freight and total surcharges (not including totalTaxes) for
           * this package. Example: 12.56
           */
          netFedExCharge?: number;

          /**
           * This is the net freight charges. i.e. base charge minus total freight discounts
           * for a package. Example: 4.89
           */
          netFreight?: number;

          /**
           * Indicates the weight types used in calculating this rate, such as actual weight
           * or dimensional weight. Example: DIM
           */
          ratedWeightMethod?: string;

          /**
           * This is the rate type used. Example: PAYOR_RETAIL_PACKAGE
           */
          rateType?: string;

          /**
           * These are all surcharges on this package.
           * <a onclick='loadDocReference("surcharges")'>click here to see Surcharges</a>
           */
          surcharges?: Array<ShipmentsAPI.Surcharge>;

          /**
           * The sum of all freight discounts for this package. Example: 44.55
           */
          totalFreightDiscounts?: number;

          /**
           * Specifies total rebates on this package. Example: 4.56
           */
          totalRebates?: number;

          /**
           * The sum of all surcharges on this package. Example: 22.56
           */
          totalSurcharges?: number;

          /**
           * The sum of all taxes on this package. Example: 3.45
           */
          totalTaxes?: number;
        }
      }
    }

    /**
     * Indicates the document requirements detail.
     */
    export interface DocumentRequirements {
      /**
       * Specifies the generation details.
       */
      generationDetails?: Array<DocumentRequirements.GenerationDetail>;

      /**
       * Indicates the prohibited Documents info. Example: ["CERTIFICATE_OF_ORIGIN "]
       */
      prohibitedDocuments?: Array<string>;

      /**
       * Indicates the required documents information. Example:
       * ["COMMERCIAL_OR_PRO_FORMA_INVOICE","AIR_WAYBILL"]
       */
      requiredDocuments?: Array<string>;
    }

    export namespace DocumentRequirements {
      /**
       * Indicates the document generation detail information.
       */
      export interface GenerationDetail {
        /**
         * Indicates electronic signature requirement type. Example: OPTIONAL
         */
        electronicSignature?: string;

        /**
         * Indicates the letterhead requirement type. Example: OPTIONAL
         */
        letterhead?: string;

        /**
         * It is a non-Negative Integer. Example: 3
         */
        minimumCopiesRequired?: number;

        /**
         * It is an Enterprise Document Type. Example: COMMERCIAL_INVOICE
         */
        type?: string;
      }
    }

    /**
     * Completed shipment level hazardous commodity information.
     */
    export interface HazardousShipmentDetail {
      /**
       * Specifies the details around the ADR license required for shipping.
       */
      adrLicense?: HazardousShipmentDetail.AdrLicense;

      /**
       * Specifies the shipment level totals of dry ice data across all packages.
       */
      dryIceDetail?: HazardousShipmentDetail.DryIceDetail;

      /**
       * Specifies Completed Hazardous Summary Detail.
       */
      hazardousSummaryDetail?: HazardousShipmentDetail.HazardousSummaryDetail;
    }

    export namespace HazardousShipmentDetail {
      /**
       * Specifies the details around the ADR license required for shipping.
       */
      export interface AdrLicense {
        /**
         * This contains the ADR license information, which identifies the license number,
         * the effective date and the expiration date under which the customer is allowed
         * to ship.
         */
        licenseOrPermitDetail?: AdrLicense.LicenseOrPermitDetail;
      }

      export namespace AdrLicense {
        /**
         * This contains the ADR license information, which identifies the license number,
         * the effective date and the expiration date under which the customer is allowed
         * to ship.
         */
        export interface LicenseOrPermitDetail {
          /**
           * Specifies the effective date of the license. The format is [YYYY-MM-DD].
           * Example: 2019-08-09
           */
          effectiveDate?: string;

          /**
           * Specifies the expiration date of the license. The format is [YYYY-MM-DD].
           * Example: 2019-04-09
           */
          expirationDate?: string;

          /**
           * Specifies license or permit detail number. Example: 12345
           */
          number?: string;
        }
      }

      /**
       * Specifies the shipment level totals of dry ice data across all packages.
       */
      export interface DryIceDetail {
        /**
         * Specifies the package Count for the shipment Example: 10
         */
        packageCount: number;

        /**
         * Specify that dry ice information is only applicable at the shipment level.
         * Package level dry ice information would not apply.
         */
        processingOptions?: DryIceDetail.ProcessingOptions;

        /**
         * These are the package weight details. Note: Weight is not required for One rate
         * shipments
         */
        totalWeight?: ShipmentsAPI.Weight;
      }

      export namespace DryIceDetail {
        /**
         * Specify that dry ice information is only applicable at the shipment level.
         * Package level dry ice information would not apply.
         */
        export interface ProcessingOptions {
          /**
           * Specifies the options. Example: ["options"]
           */
          options?: Array<string>;
        }
      }

      /**
       * Specifies Completed Hazardous Summary Detail.
       */
      export interface HazardousSummaryDetail {
        /**
         * Specifies the total number of packages containing hazardous commodities in small
         * exceptions. Example: 10
         */
        smallQuantityExceptionPackageCount?: number;
      }
    }

    /**
     * Indicates the shipment level operational information.
     */
    export interface OperationalDetail {
      /**
       * Indicates the airport identifier. Example: DFW
       */
      airportId?: string;

      /**
       * Specifies astra description. Example: SMART POST
       */
      astraDescription?: string;

      /**
       * Text describing planned delivery. Example: TUE - 15 OCT 10:30A
       */
      astraPlannedServiceLevel?: string;

      /**
       * This is committed date of delivery. Example: 2019-10-15
       */
      commitDate?: string;

      /**
       * Committed day of week of delivery. Example: TUE
       */
      commitDay?: string;

      /**
       * Indicate the two-letter country code. Example: US
       * <a onclick='loadDocReference("countrycodes")'>click here to see Country
       * codes</a>
       */
      countryCode?: string;

      /**
       * Transit time based on customer eligibility. Example: ONE_DAY
       */
      customTransitTime?: string;

      /**
       * Specifies delivery date for the shipment. The format is [YYYY-MM-DD] Example:
       * 2001-04-05
       */
      deliveryDate?: string;

      /**
       * Specifies expected/estimated day of week of the delivery. Example: TUE
       */
      deliveryDay?: string;

      /**
       * FedEx Ground delivery features for which this shipment may be eligible. Example:
       * ["deliveryEligibilities"]
       */
      deliveryEligibilities?: Array<string>;

      /**
       * Specifies the FedEx Destination Location Identifier. Example: DALA
       */
      destinationLocationId?: string;

      /**
       * Indicates destination location number. Example: 876
       */
      destinationLocationNumber?: number;

      /**
       * This is the state or province code of the shipment destination location, and is
       * not necessarily the same as the postal state. Example: GA
       * <a onclick='loadDocReference("canadaprovincecodes")'>click here to see State or
       * Province Code</a>
       */
      destinationLocationStateOrProvinceCode?: string;

      /**
       * Specifies destination service area. Example: A1
       */
      destinationServiceArea?: string;

      /**
       * Indicates that this shipment is not eligible for money back guarantee.
       */
      ineligibleForMoneyBackGuarantee?: boolean;

      /**
       * Maximum expected transit time. Example: SEVEN_DAYS
       */
      maximumTransitTime?: string;

      /**
       * This is the origin Location identifier. Example: 678
       */
      originLocationId?: string;

      /**
       * Specifies origin location number. Example: 243
       */
      originLocationNumber?: number;

      /**
       * Indicates the origin service area. Example: A1
       */
      originServiceArea?: string;

      /**
       * Indicates packaging code. Example: 03
       */
      packagingCode?: string;

      /**
       * Specifies the postal code. Example: 38010
       * <a onclick='loadDocReference("postalawarecountries")'>click here to see Postal
       * aware countries</a>
       */
      postalCode?: string;

      /**
       * This is delivery time, as published in Service Guide. Example: 10:30A
       */
      publishedDeliveryTime?: string;

      /**
       * Indicates standard carrier alpha code.
       */
      scac?: string;

      /**
       * Indicates the service code. Example: 010
       */
      serviceCode?: string;

      /**
       * This is a placeholder for State or Province code.State code is required for US,
       * CA, PR and not required for other countries. Conditional. Max length is 2.
       * Example: CA <a onclick='loadDocReference("canadaprovincecodes")'>click here to
       * see State or Province Code</a>
       */
      stateOrProvinceCode?: string;

      /**
       * Standard transit time per origin, destination, and service. Example: TWO_DAYS
       */
      transitTime?: string;

      /**
       * This is ursa prefix code. Example: XH
       */
      ursaPrefixCode?: string;

      /**
       * This is ursa suffix code. Example: Ga
       */
      ursaSuffixCode?: string;
    }

    /**
     * Descriptions for a service.
     */
    export interface ServiceDescription {
      /**
       * Specifies astra Description. Example: 2 DAY FRT
       */
      astraDescription?: string;

      /**
       * Specifies code of the Service. example: 80
       */
      code?: string;

      /**
       * specifies the description. Example:description
       */
      description?: string;

      /**
       * Branded, translated, and/or localized names for this service.
       */
      names?: Array<ServiceDescription.Name>;

      /**
       * FOR FEDEX INTERNAL USE ONLY. The operating org code in a service. Example:
       * ["FXE", "FXE"]
       */
      operatingOrgCodes?: Array<string>;

      /**
       * FOR FEDEX INTERNAL USE ONLY. This is tied to the Product EFS interface
       * definition which will currently contain the values of parcel. Example:
       * EXPRESS_PARCEL
       */
      serviceCategory?: string;

      /**
       * FOR FEDEX INTERNAL USE ONLY, Designates the service ID. Example: EP1000000027
       */
      serviceId?: string;

      /**
       * Indicate the FedEx serviceType used for this shipment. The results will be
       * filtered by the serviceType value indicated. Example: STANDARD_OVERNIGHT
       * <a onclick='loadDocReference("servicetypes")'>click here to see Service
       * Types</a>
       */
      serviceType?: string;
    }

    export namespace ServiceDescription {
      /**
       * Product Name information.
       */
      export interface Name {
        /**
         * The character encoding used to represent this product name. Example: UTF-8
         */
        encoding?: string;

        /**
         * The type of name (long, medium, short, etc.) to which this value refers.
         * Example: long
         */
        type?: string;

        /**
         * Specifies the value of the Product. Example: F-2
         */
        value?: string;
      }
    }

    /**
     * All shipment-level rating data for this shipment, which may include data for
     * multiple rate types.
     */
    export interface ShipmentRating {
      /**
       * This rate type identifies which entry in the following array is considered as
       * presenting the "actual" rates for the shipment. Example: PAYOR_LIST_SHIPMENT
       */
      actualRateType?: string;

      /**
       * Each element of this field provides shipment-level rate totals for a specific
       * rate type.
       */
      shipmentRateDetails?: Array<ShipmentRating.ShipmentRateDetail>;
    }

    export namespace ShipmentRating {
      /**
       * This is a placeholder for shipment total/summary rates details, as calculated
       * per a specific rate type. The totals may differ from the sum of corresponding
       * package data for Multiweight or Express MPS.
       */
      export interface ShipmentRateDetail {
        /**
         * Indicates the currency code.
         * <a onclick='loadDocReference("currencycodes")'>click here to see Currency
         * Codes</a>
         */
        currency?: string;

        /**
         * Specifies the currency exchange performed on financial amounts on this rate.
         */
        currencyExchangeRate?: ShipmentsAPI.CurrencyExchangeRate;

        /**
         * The value used to calculate the weight based on the dimensions. Example: 0
         */
        dimDivisor?: number;

        /**
         * Indicates the freight discounts.
         */
        freightDiscounts?: Array<ShipmentsAPI.RateDiscount>;

        /**
         * Specifies a fuel surcharge percentage. Example: 4.56
         */
        fuelSurchargePercent?: number;

        /**
         * Specifies pricing Code. Example: PACKAGE
         */
        pricingCode?: string;

        /**
         * Indicates which weight was used. Example: ACTUAL
         */
        ratedWeightMethod?: string;

        /**
         * Indicates the rate scale used. Example: 00000
         */
        rateScale?: string;

        /**
         * The Type used for this specific set of rate data. Example:
         * RATED_ACCOUNT_SHIPMENT
         */
        rateType?: string;

        /**
         * Indicates the rate zone used (based on origin and destination). Example: US001O
         */
        rateZone?: string;

        /**
         * This is data for a single leg of a shipment's total/summary rates, as calculated
         * per a specific rate type.
         */
        shipmentLegRateDetails?: Array<ShipmentRateDetail.ShipmentLegRateDetail>;

        /**
         * All surcharges that apply to this shipment.
         * <a onclick='loadDocReference("surcharges")'>click here to see Surcharges</a>
         */
        surcharges?: Array<ShipmentsAPI.Surcharge>;

        /**
         * All transportation-based taxes applicable to this shipment.
         */
        taxes?: Array<ShipmentsAPI.Tax>;

        /**
         * Identifies the total amount of the shipment-level fees and taxes that are not
         * based on transportation charges or commodity-level estimated duties and taxes.
         * Example: 5.67
         */
        totalAncillaryFeesAndTaxes?: number;

        /**
         * The total Shipment charge that was calculated before surcharges, discounts and
         * taxes. Example: 234.56
         */
        totalBaseCharge?: number;

        /**
         * These are the package weight details. Note: Weight is not required for One rate
         * shipments
         */
        totalBillingWeight?: ShipmentsAPI.Weight;

        /**
         * Total of all values under this shipment's duties and taxes; only provided if
         * estimated duties and taxes were calculated for this shipment. Example: 6.78
         */
        totalDutiesAndTaxes?: number;

        /**
         * The total of the total duties & taxes and the total ancillary fees & taxes.
         * Example: 24.56
         */
        totalDutiesTaxesAndFees?: number;

        /**
         * The total discounts used in the rate calculation. Example: 1.56
         */
        totalFreightDiscounts?: number;

        /**
         * The net charge after applying all discounts and surcharges. Example: 3.78
         */
        totalNetCharge?: number;

        /**
         * This is the sum of shipment's total net charges and total duties and taxes; only
         * provided if estimated duties and taxes were calculated for this shipment AND
         * duties, taxes and transportation charges are all paid by the same sender
         * account. Example: 222.56
         */
        totalNetChargeWithDutiesAndTaxes?: number;

        /**
         * This is the sum of shipment's total net freight, total surchages (not including
         * totalTaxes). Example: 88.56
         */
        totalNetFedExCharge?: number;

        /**
         * The freight charge minus discounts. Example: 9.56
         */
        totalNetFreight?: number;

        /**
         * The total sum of all rebates applied to this shipment. Example: 1.98
         */
        totalRebates?: number;

        /**
         * The total amount of all surcharges applied to this shipment. Example: 9.88
         */
        totalSurcharges?: number;

        /**
         * Total of the transportation-based taxes. Example: 3.45
         */
        totalTaxes?: number;
      }

      export namespace ShipmentRateDetail {
        /**
         * This is a placeholder for single leg of a shipment rates details, as calculated
         * per a specific rate type.
         */
        export interface ShipmentLegRateDetail {
          /**
           * This is the currency code for the amount. Example: USD
           * <a onclick='loadDocReference("currencycodes")'>click here to see Currency
           * codes</a>
           */
          currency?: string;

          /**
           * Specifies the currency exchange performed on financial amounts on this rate.
           */
          currencyExchangeRate?: ShipmentsAPI.CurrencyExchangeRate;

          /**
           * The value used to calculate the weight based on the dimensions. Example: 6
           */
          dimDivisor?: number;

          /**
           * Identifies the type of dim divisor that was applied. Example: dimDivisorType
           */
          dimDivisorType?: string;

          freightDiscounts?: Array<ShipmentsAPI.RateDiscount>;

          /**
           * Specifies a fuel surcharge percentage. Example: 6.0
           */
          fuelSurchargePercent?: number;

          /**
           * Specifies the location id the destination of shipment leg. Example: HKAA
           */
          legDestinationLocationId?: string;

          /**
           * Specifies minimum charge type.Example: minimumChargeType
           */
          minimumChargeType?: string;

          /**
           * Specifies the Pricing Code. Example: pricingCode
           */
          pricingCode?: string;

          /**
           * Indicates which weight was used. Example: ratedWeightMethod
           */
          ratedWeightMethod?: string;

          /**
           * Indicates the rate scale used. Example: 6702
           */
          rateScale?: string;

          /**
           * Type used for this specific set of rate data. Example: PAYOR_RETAIL_PACKAGE
           */
          rateType?: string;

          /**
           * Indicates the rate zone used (based on origin and destination). Example:
           * rateZone
           */
          rateZone?: string;

          /**
           * All surcharges that apply to this shipment.
           * <a onclick='loadDocReference("surcharges")'>click here to see surcharges</a>
           */
          surcharges?: Array<ShipmentsAPI.Surcharge>;

          /**
           * Specifies the taxes.
           */
          taxes?: Array<ShipmentsAPI.Tax>;

          /**
           * The total freight charge that was calculated before surcharges, discounts and
           * taxes. Example: 6.0
           */
          totalBaseCharge?: number;

          /**
           * These are the package weight details. Note: Weight is not required for One rate
           * shipments
           */
          totalBillingWeight?: ShipmentsAPI.Weight;

          /**
           * These are the package weight details. Note: Weight is not required for One rate
           * shipments
           */
          totalDimWeight?: ShipmentsAPI.Weight;

          /**
           * Total of shipments duties and taxes; only provided if estimated duties and taxes
           * were calculated for this shipment. Example: 17.78
           */
          totalDutiesAndTaxes?: number;

          /**
           * The sum of all discounts. Example: 9.0
           */
          totalFreightDiscounts?: number;

          /**
           * The net charge after applying all discounts and surcharges. Example: 253
           */
          totalNetCharge?: number;

          /**
           * Sum of total net charge, total duties and taxes; only provided if estimated
           * duties and taxes were calculated for this shipment and duties, taxes and
           * transportation charges are all paid by the same sender account. Example: 25.67
           */
          totalNetChargeWithDutiesAndTaxes?: number;

          /**
           * This is the sum of shipment's total surcharges (not including total taxes).
           * Example: 3.2
           */
          totalNetFedExCharge?: number;

          /**
           * The freight charge minus discounts. Example: 6.0
           */
          totalNetFreight?: number;

          /**
           * Specifies the total rebate. Example: 2.0
           */
          totalRebates?: number;

          /**
           * The total of all surcharges. Example: 5.0
           */
          totalSurcharges?: number;

          /**
           * Total of the transportation-based taxes. Example: 12.6
           */
          totalTaxes?: number;
        }
      }
    }
  }

  /**
   * Piece Response information.
   */
  export interface PieceResponse {
    /**
     * Indicates the acceptance tracking number. Example: 7949XXXXX5000
     */
    acceptanceTrackingNumber?: string;

    /**
     * Indicates acceptance type. Example: acceptanceType Example:acceptanceType
     */
    acceptanceType?: string;

    /**
     * These are additional charges or discounts. Example: 621.45
     */
    additionalChargesDiscount?: number;

    /**
     * Specifies the base rate amount. Example: 321.45
     */
    baseRateAmount?: number;

    /**
     * Specifies the Collect on Delivery collection amount. Example: 231.45
     */
    codCollectionAmount?: number;

    /**
     * These are additional customer reference data. Note: The groupPackageCount must
     * be specified to retrieve customer references.
     */
    customerReferences?: Array<ShipmentsAPI.CustomerReference>;

    /**
     * Indicates delivery date with timestamp. Example: 2012-09-23
     */
    deliveryTimestamp?: string;

    /**
     * Indicates total charges applicable to the customer. Example:
     * listCustomerTotalCharge
     */
    listCustomerTotalCharge?: string;

    /**
     * Indicates the net List rate amount. Example: 1.45
     */
    listRateAmount?: number;

    /**
     * This is a master tracking number of the shipment (must be unique for stand-alone
     * open shipments, or unique within consolidation if consolidation key is
     * provided). Example: 794XXXXX5000
     */
    masterTrackingNumber?: string;

    /**
     * Indicates the net charges amount. Example: 21.45
     */
    netChargeAmount?: number;

    /**
     * Specifies the net discount amount. Example: 121.45
     */
    netDiscountAmount?: number;

    /**
     * These are package documents returned in the response.
     */
    packageDocuments?: Array<ShipmentsAPI.LabelResponseVo>;

    /**
     * Indicates package sequence number. Example: 215
     */
    packageSequenceNumber?: number;

    /**
     * Indicates the service category.
     */
    serviceCategory?:
      | 'EXPRESS'
      | 'GROUND'
      | 'EXPRESS_FREIGHT'
      | 'FREIGHT'
      | 'SMARTPOST'
      | 'EXPRESS_PARCEL'
      | 'NULL';

    /**
     * Indicates the type of the tracking identifier.
     */
    trackingIdType?: string;

    /**
     * This is the tracking number associated with this package. Example:
     * 49XXX0000XXX20032835
     */
    trackingNumber?: string;
  }

  /**
   * These are shipment advisory details.
   */
  export interface ShipmentAdvisoryDetails {
    /**
     * Indicates the regulatory advisory details.
     */
    regulatoryAdvisory?: ShipmentAdvisoryDetails.RegulatoryAdvisory;
  }

  export namespace ShipmentAdvisoryDetails {
    /**
     * Indicates the regulatory advisory details.
     */
    export interface RegulatoryAdvisory {
      /**
       * It is a regulatory probitions.
       */
      prohibitions?: Array<RegulatoryAdvisory.Prohibition>;
    }

    export namespace RegulatoryAdvisory {
      export interface Prohibition {
        /**
         * Specifies the advisory details.
         */
        advisory?: ShipmentsAPI.Message;

        /**
         * Indicate the shipment rule type. Example: ["categories"]
         */
        categories?: Array<string>;

        /**
         * Indicates one based index identifying the associated commodity. Example: 12
         */
        commodityIndex?: number;

        /**
         * Indicates the derived harmonized code value Example: 01
         */
        derivedHarmonizedCode?: string;

        /**
         * Indicates the prohibition source type. Example: source
         */
        source?: string;

        /**
         * Indicates the prohibitory status. Example: status
         */
        status?: string;

        /**
         * Indicates the prohibition type. Example: type
         */
        type?: string;

        /**
         * Indicates the regulatory waiver.
         */
        waiver?: Prohibition.Waiver;
      }

      export namespace Prohibition {
        /**
         * Indicates the regulatory waiver.
         */
        export interface Waiver {
          /**
           * Indicates the prohibitory ID. Example: id
           */
          id?: string;

          /**
           * Indicates the advisories list.
           */
          advisories?: Array<ShipmentsAPI.Message>;

          /**
           * Indicates the regulatory prohibitions description. Example: description
           */
          description?: string;
        }
      }
    }
  }
}

/**
 * Specify the document upload reference details.
 */
export interface UploadDocumentReferenceDetail {
  /**
   * Specify additional information about the uploaded document for better
   * understanding. Example: Certificate of Origin is uploaded for country of
   * manufacturing verification.
   */
  description?: string;

  /**
   * This is the uploaded document ID value. Example: 090927d680038c61
   */
  documentId?: string;

  /**
   * Specify the reference for the uploaded document.This is for the customer to
   * reference their uploaded docs when they retrieve them. Could be anything, order
   * number, po number, whatever the customer used to tie the document to something
   * they would use. Note: Ensure to supply document references in case of
   * Pre-Shipment document upload. Example: Reference
   */
  documentReference?: string;

  /**
   * Returns the type of document (if any) specified in the ship shipment request.
   * Example: PRO_FORMA_INVOICE
   */
  documentType?:
    | 'CERTIFICATE_OF_ORIGIN'
    | 'NET_RATE_SHEET'
    | 'COMMERCIAL_INVOICE'
    | 'ETD_LABEL'
    | 'USMCA_CERTIFICATION_OF_ORIGIN'
    | 'OTHER'
    | 'PRO_FORMA_INVOICE'
    | 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN';
}

/**
 * Indicate the details about how to calculate variable handling charges at the
 * shipment level. They can be based on a percentage of the shipping charges or a
 * fixed amount. If indicated, element rateLevelType is required.
 */
export interface VariableHandlingChargeDetail {
  /**
   * This is to specify a fixed handling charge on the shipment. The element allows
   * entry of 7 characters before the decimal and 2 characters following the decimal.
   * Example: 5.00.
   */
  fixedValue?: VariableHandlingChargeDetail.FixedValue;

  /**
   * This is the variable handling percentage. If the percent value is mentioned as
   * 10, it means 10%(multiplier of 0.1). Example: 12.45
   */
  percentValue?: number;

  /**
   * Specify the charge type upon which the variable handling percentage amount is
   * calculated.
   */
  rateElementBasis?: 'NET_CHARGE' | 'NET_FREIGHT' | 'BASE_CHARGE' | 'NET_CHARGE_EXCLUDING_TAXES';

  /**
   * indicates whether or not the rating is being done at the package level, or if
   * the packages are bundled together. At the package level, charges are applied
   * based on the details of each individual package. If they are bundled, one
   * package is chosen as the parent and charges are applied based on that one
   * package. Example: INDIVIDUAL_PACKAGE_RATE
   */
  rateLevelType?: 'BUNDLED_RATE' | 'INDIVIDUAL_PACKAGE_RATE';

  /**
   * The rate type indicates what type of rate request is being returned; account,
   * preferred, incentive, etc Example: PREFERRED_CURRENCY
   */
  rateType?:
    | 'ACCOUNT'
    | 'ACTUAL'
    | 'CURRENT'
    | 'CUSTOM'
    | 'LIST'
    | 'INCENTIVE'
    | 'PREFERRED'
    | 'PREFERRED_INCENTIVE'
    | 'PREFERRED_CURRENCY';
}

export namespace VariableHandlingChargeDetail {
  /**
   * This is to specify a fixed handling charge on the shipment. The element allows
   * entry of 7 characters before the decimal and 2 characters following the decimal.
   * Example: 5.00.
   */
  export interface FixedValue extends ShipmentsAPI.Money {
    /**
     * fixed variable handling charge amount
     */
    amount: number;

    /**
     * fixed variable handling charge currency type
     * <a onclick='loadDocReference("currencycodes")'>click here to see Currency
     * codes</a>
     */
    currency: string;
  }
}

/**
 * These are the package weight details. Note: Weight is not required for One rate
 * shipments
 */
export interface Weight {
  /**
   * Specifies the package weight unit type. Example:KG
   */
  units: 'KG' | 'LB';

  /**
   * Weight Value. Example: 68.25
   * <a href='https://developer.fedex.com/api/en-us/guides/api-reference.html#packagetypes' target='_blank'>Click
   * here to see Weight Values</a>.
   */
  value: number;
}

/**
 * Wrapper class for ShipShipmentOutputVO. It holds transactionId and output.
 */
export interface ShipmentCreateResponse {
  /**
   * This element has a unique identifier added in your request, helps you match the
   * request to the reply. Example: XXXX_XXX123XXXXX
   */
  customerTransactionId?: string;

  /**
   * This is the response received when a shipment is requested.
   */
  output?: ShipmentCreateResponse.Output;

  /**
   * The transaction ID is a special set of numbers that defines each transaction.
   * Example: 624deea6-b709-470c-8c39-4b5511281492
   */
  transactionId?: string;
}

export namespace ShipmentCreateResponse {
  /**
   * This is the response received when a shipment is requested.
   */
  export interface Output {
    /**
     * The alerts received when processing a shipment request.
     */
    alerts?: Array<ShipmentsAPI.Alert>;

    /**
     * Unique identifier for a Job. Example: abc123456
     */
    jobId?: string;

    /**
     * These are shipping transaction details, such as master tracking number, service
     * type, and ship date and time.
     */
    transactionShipments?: Array<ShipmentsAPI.TransactionShipmentOutputVo>;
  }
}

/**
 * This is a wrapper class for outputVO
 */
export interface ShipmentCancelResponse {
  /**
   * This element allows you to assign a unique identifier to your transaction. This
   * element is also returned in the reply and helps you match the request to the
   * reply. Example: AnyCo_order123456789
   */
  customerTransactionId?: string;

  /**
   * The response elements received when a shipment is cancelled.
   */
  output?: ShipmentCancelResponse.Output;

  /**
   * The transaction ID is a special set of numbers that defines each transaction.
   * Example: 624deea6-b709-470c-8c39-4b5511281492
   */
  transactionId?: string;
}

export namespace ShipmentCancelResponse {
  /**
   * The response elements received when a shipment is cancelled.
   */
  export interface Output {
    /**
     * This is a cancellation request alert. This alert includes information such as
     * alert code, alert type, and alert message.
     */
    alerts?: Array<ShipmentsAPI.Alert>;

    /**
     * Indicates whether the shipment has been deleted from history or not. If the
     * value is True, then it indicates that the shipment has been deleted. Example:
     * true
     */
    cancelledHistory?: boolean;

    /**
     * Indicates whether the shipment has been cancelled or not. If the value is True,
     * then it indicates that the shipment has been cancelled. Example: true
     */
    cancelledShipment?: boolean;

    /**
     * The success message generated during cancellation request for Shipment. Example:
     * Success
     */
    successMessage?: string;
  }
}

/**
 * Wrapper class for GetOpenshipmentResultsOutputVo. It holds transactionId and
 * output.
 */
export interface ShipmentRetrieveAsyncResponse {
  /**
   * This is a unique identifier to your transaction and helps you match the request
   * to the reply. Example: AnyCo_order123456789
   */
  customerTransactionId?: string;

  /**
   * This is the output response.
   */
  output?: ShipmentRetrieveAsyncResponse.Output;

  /**
   * The transaction ID is a special set of numbers that defines each transaction.
   * Example: 624xxxxx-b709-470c-8c39-4b55112xxxxx
   */
  transactionId?: string;
}

export namespace ShipmentRetrieveAsyncResponse {
  /**
   * This is the output response.
   */
  export interface Output {
    /**
     * object indicate the alert details received in the output.
     */
    alerts?: Array<ShipmentsAPI.Alert>;

    /**
     * These are shipping transaction details, such as master tracking number, service
     * type, and ship date and time.
     */
    transactionShipments?: Array<ShipmentsAPI.TransactionShipmentOutputVo>;
  }
}

export interface ShipmentCreateParams {
  /**
   * Body param: The account number associated with the shipment.
   */
  accountNumber: ShipperAccountNumber;

  /**
   * Body param: LabelResponseOptions specifies the label generation format.
   * Example:URL_ONLY
   */
  labelResponseOptions: 'URL_ONLY' | 'LABEL';

  /**
   * Body param: The descriptive data of the requested shipment.
   */
  requestedShipment: RequestedShipment;

  /**
   * Body param: It specifies the content of the merged pdf URL in the response. The
   * merged pdf URL is generated only if the labelResponseOption is indicated as
   * URL_ONLY.<ul><li>If the value is 'LABELS_AND_DOCS', then merged (all shipping
   * labels and shipping documents) pdf URL will be returned.</li><li>If the value is
   * 'LABELS_ONLY', merged (all shipping labels only) pdf URL will be
   * returned.</li><li>If the value is 'NONE', then no merged pdf URL will be
   * returned.</li></ul> This is optional field and will default to LABELS_AND_DOCS.
   * Note: If the value is 'LABELS_ONLY', then the returned merged pdf label will not
   * be in the Base64 encoded format.
   */
  mergeLabelDocOption?: 'NONE' | 'LABELS_AND_DOCS' | 'LABELS_ONLY';

  /**
   * Body param: This flag is used to specify if the shipment is singleshot mps or
   * one Label at a time, piece by piece shipment. Default is false. If true, one
   * label at a time is processed.
   */
  oneLabelAtATime?: boolean;

  /**
   * Body param: Indicate the processing option for submitting a Single shot MPS
   * shipment. The value indicates if the MPS to be processed synchronously or
   * asynchronously. Note: <ul><li>Default value is SYNCHRONOUS_ONLY.</li><li>Value
   * or element is not needed when groupPackageCount is less than or equal
   * to 40.</li><li>Must provide element with value ALLOW_ASYNCHRONOUS when
   * groupPackageCount is greater than 40.</li></ul> Example:ALLOW_ASYNCHRONUS
   */
  processingOptionType?: 'SYNCHRONOUS_ONLY' | 'ALLOW_ASYNCHRONOUS';

  /**
   * Body param: Indicate shipment action for the Shipment. <ul><li>CONFIRM &ndash;
   * used in case of shipment submission</li><li>TRANSFER &ndash; used in case of
   * Email Label Shipment or Pending Shipment submission.
   */
  shipAction?: 'CONFIRM' | 'TRANSFER';

  /**
   * Header param: This element allows you to assign a unique identifier to your
   * transaction. This element is also returned in the reply and helps you match the
   * request to the reply.
   */
  'x-customer-transaction-id'?: string;

  /**
   * Header param: This indicates the combination of language code and country code.
   * <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
   */
  'x-locale'?: string;
}

export interface ShipmentCancelParams {
  /**
   * Body param: The account number associated with the shipment.
   */
  accountNumber: ShipperAccountNumber;

  /**
   * Body param: This is an unique number assigned by FedEx to the packages for
   * tracking. Example: "794953555571"
   */
  trackingNumber: string;

  /**
   * Body param: Specifies which packages in a shipment to be
   * canceled<b>DELETE_ALL_PACKAGES</b> which will cancel all tracking numbers
   * associated to the shipment.
   */
  deletionControl?: 'DELETE_ALL_PACKAGES';

  /**
   * Body param: A boolean flag passed by Clients to indicate that whether a shipment
   * is a EMAIL shipment(Pending Shipment) or not. Once a shipment is confirmed, it
   * can no longer be cancelled by having this flag as True.
   */
  emailShipment?: boolean;

  /**
   * Body param: The two-letter sender Country code(Ex: US, CA, GB..etc). Example: US
   * <a onclick='loadDocReference("countrycodes")'>Click here to see Country
   * Codes</a>
   */
  senderCountryCode?: string;

  /**
   * Header param: This element allows you to assign a unique identifier to your
   * transaction. This element is also returned in the reply and helps you match the
   * request to the reply.
   */
  'x-customer-transaction-id'?: string;

  /**
   * Header param: This indicates the combination of language code and country code.
   * <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
   */
  'x-locale'?: string;
}

export interface ShipmentRetrieveAsyncParams {
  /**
   * Body param: This is FedEx Account number details.
   */
  accountNumber: PartyAccountNumber;

  /**
   * Body param: Indicates the job under which the deferred shipment artifacts must
   * be identified in the subsequent retrieval request. Example:
   * 89sxxxxx233ae24ff31xxxxx
   */
  jobId: string;

  /**
   * Header param: This transaction Id helps the customers to track the transaction
   * with APIF.
   */
  'x-customer-transaction-id'?: string;

  /**
   * Header param: This indicates the combination of language code and country code.
   * <a onclick='loadDocReference("locales")'>Click here to see Locales</a>
   */
  'x-locale'?: string;
}

Shipments.Packages = Packages;
Shipments.Tag = Tag;

export declare namespace Shipments {
  export {
    type Address1 as Address1,
    type Alert as Alert,
    type Contact1 as Contact1,
    type ContactAndAddress as ContactAndAddress,
    type CurrencyExchangeRate as CurrencyExchangeRate,
    type CustomerImageUsage as CustomerImageUsage,
    type CustomerReference as CustomerReference,
    type CustomsClearanceDetail as CustomsClearanceDetail,
    type DeliveryOnInvoiceAcceptanceDetail as DeliveryOnInvoiceAcceptanceDetail,
    type DocTabZoneSpecification as DocTabZoneSpecification,
    type DocumentFormatOptionsRequested as DocumentFormatOptionsRequested,
    type EtdDetail as EtdDetail,
    type HoldAtLocationDetail as HoldAtLocationDetail,
    type HomeDeliveryPremiumDetail as HomeDeliveryPremiumDetail,
    type InternationalControlledExportDetail as InternationalControlledExportDetail,
    type InternationalTrafficInArmsRegulationsDetail as InternationalTrafficInArmsRegulationsDetail,
    type LabelResponseVo as LabelResponseVo,
    type LabelSpecification as LabelSpecification,
    type Message as Message,
    type Money as Money,
    type Party1 as Party1,
    type Party3 as Party3,
    type PartyAccountNumber as PartyAccountNumber,
    type PartyAddress as PartyAddress,
    type PartyAddress2 as PartyAddress2,
    type PartyContact as PartyContact,
    type Payment as Payment,
    type PendingShipmentDetail as PendingShipmentDetail,
    type RateDiscount as RateDiscount,
    type RecipientsParty as RecipientsParty,
    type RequestedPackageLineItem as RequestedPackageLineItem,
    type RequestedShipment as RequestedShipment,
    type ReturnShipmentDetail as ReturnShipmentDetail,
    type ShipmentCodDetail as ShipmentCodDetail,
    type ShipmentDryIceDetail1 as ShipmentDryIceDetail1,
    type ShipperAccountNumber as ShipperAccountNumber,
    type ShipperParty as ShipperParty,
    type ShippingDocumentDispositionDetail as ShippingDocumentDispositionDetail,
    type ShippingDocumentFormat as ShippingDocumentFormat,
    type ShippingDocumentSpecification as ShippingDocumentSpecification,
    type SmartPostInfoDetail as SmartPostInfoDetail,
    type Surcharge as Surcharge,
    type Tax as Tax,
    type TaxpayerIdentification as TaxpayerIdentification,
    type TrackingID as TrackingID,
    type TransactionShipmentOutputVo as TransactionShipmentOutputVo,
    type UploadDocumentReferenceDetail as UploadDocumentReferenceDetail,
    type VariableHandlingChargeDetail as VariableHandlingChargeDetail,
    type Weight as Weight,
    type ShipmentCreateResponse as ShipmentCreateResponse,
    type ShipmentCancelResponse as ShipmentCancelResponse,
    type ShipmentRetrieveAsyncResponse as ShipmentRetrieveAsyncResponse,
    type ShipmentCreateParams as ShipmentCreateParams,
    type ShipmentCancelParams as ShipmentCancelParams,
    type ShipmentRetrieveAsyncParams as ShipmentRetrieveAsyncParams,
  };

  export {
    Packages as Packages,
    type PackageValidateResponse as PackageValidateResponse,
    type PackageValidateParams as PackageValidateParams,
  };

  export {
    Tag as Tag,
    type CompletedTagDetail2 as CompletedTagDetail2,
    type TagCreateResponse as TagCreateResponse,
    type TagCancelResponse as TagCancelResponse,
    type TagCreateParams as TagCreateParams,
    type TagCancelParams as TagCancelParams,
  };
}
