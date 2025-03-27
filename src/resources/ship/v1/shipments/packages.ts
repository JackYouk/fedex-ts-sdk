// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ShipmentsAPI from './shipments';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';

export class Packages extends APIResource {
  /**
   * Use this endpoint to verify the accuracy of a shipment request prior to actually
   * submitting shipment request. This allow businesses that receive shipping orders
   * from end-user/customers to verify the shipment information prior to submitting a
   * create shipment request to FedEx and printing a label. If for any reason the
   * information needs to be edited or changed, it can be done while the end-user is
   * still available to confirm the changes.
   *
   * Note:<ul><li>This is shipment level validation hence supports validation for
   * single piece shipment only.</li><li>Shipment validation is supported for all
   * Express and Ground - Domestic as well as international shipments with all
   * applicable special services. </li><li>Shipment validation is supported for
   * SmartPost and not for Freight LTL shipments.</li></ul>
   *
   * <i>Note: FedEx APIs do not support Cross-Origin Resource Sharing (CORS)
   * mechanism.</i>
   */
  validate(params: PackageValidateParams, options?: RequestOptions): APIPromise<PackageValidateResponse> {
    const { 'x-customer-transaction-id': xCustomerTransactionID, 'x-locale': xLocale, ...body } = params;
    return this._client.post('/ship/v1/shipments/packages/validate', {
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
 * Wrapper class for VerifyShipmentOutputVO. It holds transactionId and output.
 */
export interface PackageValidateResponse {
  /**
   * This element allows you to assign a unique identifier to your transaction. This
   * element is also returned in the reply and helps you match the request to the
   * reply. Example: AnyCo_order123456789
   */
  customerTransactionId?: string;

  /**
   * The response elements received when a shipment is created.
   */
  output?: PackageValidateResponse.Output;

  /**
   * The transaction ID is a special set of numbers that defines each transaction.
   * Example: 624deea6-b709-470c-8c39-4b5511281492
   */
  transactionId?: string;
}

export namespace PackageValidateResponse {
  /**
   * The response elements received when a shipment is created.
   */
  export interface Output {
    /**
     * The alerts received when a Shipment Package Validate is processed. This includes
     * the alert code, alert type, and alert message.
     */
    alerts?: Array<ShipmentsAPI.Alert>;
  }
}

export interface PackageValidateParams {
  /**
   * Body param: This is the detailed shipment request data to be validated before
   * being submitted to FedEx.
   */
  requestedShipment: PackageValidateParams.RequestedShipment;

  /**
   * Body param: The account number associated with the shipment.
   */
  accountNumber?: ShipmentsAPI.ShipperAccountNumber;

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

export namespace PackageValidateParams {
  /**
   * This is the detailed shipment request data to be validated before being
   * submitted to FedEx.
   */
  export interface RequestedShipment {
    /**
     * These are label specification details includes the image type, printer format,
     * and label stock for label. Can also specify specific details such as doc-tab
     * content, regulatory labels, and masking data on the label.
     */
    labelSpecification: ShipmentsAPI.LabelSpecification;

    /**
     * Indicate the type of packaging used for the package. Note: For Express Freight
     * shipments, the packaging will default to value YOUR_PACKAGING irrespective type
     * provided in the request. Example: FEDEX_ENVELOPE
     * <a onclick='loadDocReference("packagetypes")'>click here to see Package
     * Types</a>
     */
    packagingType: string;

    /**
     * Select if the shipment is to be dropped off at Fedex location or to be picked up
     * by FedEx or if it is a scheduled pickup for this shipment.
     * <a onclick='loadDocReference("pickuptypes")'>Click here for more information on
     * Pickup Types.</a>
     */
    pickupType: 'CONTACT_FEDEX TO_SCHEDULE' | 'DROPOFF_AT_FEDEX_LOCATION' | 'USE_SCHEDULED_PICKUP';

    /**
     * Indicate the shipment recipient details or the physical location details for the
     * package destination.
     */
    recipients: Array<ShipmentsAPI.RecipientsParty>;

    /**
     * Use this object to provide the package details. Note: <ul><li>At least one
     * instance containing the weight is required for EXPRESS and GROUND
     * package.</li><li>Only Single piece requests are supported henceonly one line
     * item should be provided.</li><li>Multiple piece shipment validation is not
     * supported.</li></ul>
     */
    requestedPackageLineItems: Array<ShipmentsAPI.RequestedPackageLineItem>;

    /**
     * Indicate the FedEx service Type used for this shipment. Example:
     * STANDARD_OVERNIGHT <a onclick='loadDocReference("servicetypes")'>click here to
     * see available FedEx Service Types</a>
     */
    serviceType: string;

    /**
     * Indicate the Shipper contact details for this shipment.
     */
    shipper: ShipmentsAPI.ShipperParty;

    /**
     * Specifies the payment details specifying the method and means of payment to
     * FedEx for providing shipping services.
     */
    shippingChargesPayment: ShipmentsAPI.Payment;

    /**
     * shipment total weight should be in Kg or in Lbs
     */
    totalWeight: number;

    /**
     * Indicate if the shipment be available to be visible/tracked using FedEx InSight®
     * tool. If value indicated as true, only the shipper/payer will have visibility of
     * this shipment in the said tool.
     */
    blockInsightVisibility?: boolean;

    /**
     * These are customs clearance details. Required for International and
     * intra-country Shipments.
     */
    customsClearanceDetail?: ShipmentsAPI.CustomsClearanceDetail;

    /**
     * These are email disposition details. Provides the type and email addresses of
     * e-mail recipients. If returnedDispositionDetail in labelSpecification is set as
     * true then email will be send with label and documents copy.
     */
    emailNotificationDetail?: RequestedShipment.EmailNotificationDetail;

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
     * Indicate the type of rates to be returned. Following are values:<ul><li>LIST -
     * Returns published list rates will be returned in addition to account-specific
     * rate (if applicable).</li><li>PREFERRED - It returns rates in currency as
     * specified in the PreferredCurrency element.</li><li>ACCOUNT - Returns account
     * specific rates. Note: The account specific rates are returned by default if the
     * shipper account number is specified in the shipment.</li><li>INCENTIVE - This is
     * one-time discount for incentivizing the customer.</li></ul>Examples: ["ACCOUNT",
     * "PREFERRED"]
     */
    rateRequestType?: Array<'LIST' | 'NONE' | 'PREFERRED' | 'ACCOUNT' | 'INCENTIVE' | 'RETAIL'>;

    /**
     * Indicate the shipment date. Format: YYYY-MM-DD Note: Default value is current
     * date in case the date is not provided in the request. Example: 2021-04-06
     */
    shipDatestamp?: string;

    /**
     * Indicate the shipment special service or handling required for this shipment.
     * Note: <ul><li>If the shipper is requesting a special service, the special
     * service type must be indicated in the object specialServiceTypes, and all
     * supporting detail must be provided in the appropriate sub-object
     * below.</li><li>For returns it is required to provide value RETURN_SHIPMENT in
     * the specialServiceTypes.</li></ul>
     */
    shipmentSpecialServices?: RequestedShipment.ShipmentSpecialServices;

    /**
     * Use this object to provide all data required for additional (non-label) shipping
     * documents to be produced.
     */
    shippingDocumentSpecification?: ShipmentsAPI.ShippingDocumentSpecification;

    /**
     * Use this object to specify the smartpost shipment details. Required for
     * SMARTPOST service. If SmartPostInfoDetail is indicated, the elements below it
     * are also required.
     */
    smartPostInfoDetail?: ShipmentsAPI.SmartPostInfoDetail;

    /**
     * Indicate the details about how to calculate variable handling charges at the
     * shipment level. They can be based on a percentage of the shipping charges or a
     * fixed amount. If indicated, element rateLevelType is required.
     */
    variableHandlingChargeDetail?: ShipmentsAPI.VariableHandlingChargeDetail;
  }

  export namespace RequestedShipment {
    /**
     * These are email disposition details. Provides the type and email addresses of
     * e-mail recipients. If returnedDispositionDetail in labelSpecification is set as
     * true then email will be send with label and documents copy.
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
       * character limit depends on the element
       * emailNotificationDetail\emailNotificationRecipients\notificationFormatType
       * values:<ul><li>If notificationFormatType is TEXT, then only 120 characters
       * printed on the email</li><li>If notificationFormatType is HTML, then 500
       * characters printed on the email</li></ul> Example: This is concerning the order
       * 123456 of 26 July 2021 - art no 34324-23 Teddy Bear, brown
       */
      personalMessage?: string;
    }

    export namespace EmailNotificationDetail {
      /**
       * These are recipient details for receiving email notification.
       */
      export interface EmailNotificationRecipient {
        /**
         * This is the email notification recipient type. Example: SHIPPER
         */
        emailNotificationRecipientType: 'BROKER' | 'OTHER' | 'RECIPIENT' | 'SHIPPER' | 'THIRD_PARTY';

        /**
         * Specify the recipient email address. Example: xyz@aol.com
         */
        emailAddress?: string;

        /**
         * These are the locale details for email.
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
         * Specify notification event types.
         * <a onclick='loadDocReference("notificationeventtypes")'>Click here for more
         * information on Notification Event Types.</a>
         */
        notificationEventType?: Array<
          | 'ON_DELIVERY'
          | 'ON_EXCEPTION'
          | 'ON_SHIPMENT'
          | 'ON_TENDER'
          | 'ON_ESTIMATED_DELIVERY'
          | 'ON_BILL_OF_LADING'
          | 'ON_PICKUP_DRIVER_ARRIVED'
          | 'ON_PICKUP_DRIVER_ASSIGNED'
          | 'ON_PICKUP_DRIVER_DEPARTED'
          | 'ON_PICKUP_DRIVER_EN_ROUTE'
        >;

        /**
         * This is the format for the email notification. Either HTML or plain text can be
         * provided.
         */
        notificationFormatType?: 'HTML' | 'TEXT';

        /**
         * Indicate the type of notification that will be sent as an email.
         */
        notificationType?: 'EMAIL';
      }
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
         * specific validation for the company name.
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
     * Indicate the shipment special service or handling required for this shipment.
     * Note: <ul><li>If the shipper is requesting a special service, the special
     * service type must be indicated in the object specialServiceTypes, and all
     * supporting detail must be provided in the appropriate sub-object
     * below.</li><li>For returns it is required to provide value RETURN_SHIPMENT in
     * the specialServiceTypes.</li></ul>
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
       * Indicate the Special services requested for this shipment. Example:
       * <ul><li>HOLD_AT_LOCATION</li><li>RETURN_SHIPMENT</li><li>BROKER_SELECT_OPTION</li><li>CALL_BEFORE_DELIVERY</li><li>COD</li><li>CUSTOM_DELIVERY_WINDOW</li></ul>
       * <a onclick='loadDocReference("shipmentlevelspecialservicetypes")'>click here to
       * see Shipment Special Service Types</a>
       */
      specialServiceTypes?: Array<string>;
    }
  }
}

export declare namespace Packages {
  export {
    type PackageValidateResponse as PackageValidateResponse,
    type PackageValidateParams as PackageValidateParams,
  };
}
