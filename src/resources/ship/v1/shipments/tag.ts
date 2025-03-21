// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as TagAPI from './tag';
import * as ShipmentsAPI from './shipments';
import { APIPromise } from '../../../../api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tag extends APIResource {
  /**
   * FedEx creates and delivers a returnnn shipping label to your customer and
   * collects the item for return. Your customer needs to have the package ready for
   * pickup when the FedEx driver arrives. Use this endpoint to create tag requests
   * for FedEx Express and FedEx Ground shipments. <i>Note: FedEx APIs do not support
   * Cross-Origin Resource Sharing (CORS) mechanism.</i>
   */
  create(params: TagCreateParams, options?: RequestOptions): APIPromise<TagCreateResponse> {
    const { 'x-customer-transaction-id': xCustomerTransactionID, 'x-locale': xLocale, ...body } = params;
    return this._client.post('/ship/v1/shipments/tag', {
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
   * This endpoint cancels a FedEx Return Tag and the associated pickup for FedEx
   * Express and FedEx Ground shipments if the shipment has not yet been picked up by
   * the courier. <i>Note: FedEx APIs do not support Cross-Origin Resource Sharing
   * (CORS) mechanism.</i>
   */
  cancel(
    shipmentid: string,
    params: TagCancelParams,
    options?: RequestOptions,
  ): APIPromise<TagCancelResponse> {
    const { 'x-customer-transaction-id': xCustomerTransactionID, 'x-locale': xLocale, ...body } = params;
    return this._client.put(path`/ship/v1/shipments/tag/cancel/${shipmentid}`, {
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

export interface CompletedTagDetail2 {
  /**
   * Confirmation Number. Example: 275
   */
  confirmationNumber: string;

  /**
   * The dispatch date for the FedEx Tag to be cancelled. Example: 2019-08-03
   */
  dispatchDate: string;

  /**
   * Applicable for FedEx Express services. Example: NQAA
   */
  location: string;
}

/**
 * Wrapper class for ShipShipmentOutputVO. It holds transactionId and output.
 */
export interface TagCreateResponse {
  /**
   * This element allows you to assign a unique identifier to your transaction. This
   * element is also returned in the reply and helps you match the request to the
   * reply. Example: AnyCo_order123456789
   */
  customerTransactionId?: string;

  /**
   * Specifies the output details when a tag is created.
   */
  output?: TagCreateResponse.Output;

  /**
   * The transaction ID is a special set of numbers that defines each transaction.
   * Example: 624deea6-b709-470c-8c39-4b5511281492
   */
  transactionId?: string;
}

export namespace TagCreateResponse {
  /**
   * Specifies the output details when a tag is created.
   */
  export interface Output {
    /**
     * Specifies the alerts received when a tag is created. This includes the alert
     * code, alert type, and alert message.
     */
    alerts?: Array<ShipmentsAPI.Alert>;

    /**
     * Specifies the pickup confirmation and location details for the return tag
     * shipment.
     */
    completedTagDetail?: TagAPI.CompletedTagDetail2;

    /**
     * Specifies the Master Tracking Number for the requested shipment. Example:
     * 997338100007320
     */
    masterTrackingNumber?: string;

    /**
     * Specifies the service type for this shipment. Example: GROUND_HOME_DELIVERY
     * <a onclick='loadDocReference("servicetypes")'>Click here to see Service
     * Types</a>
     */
    serviceType?: string;

    /**
     * Specifies the shipment date and time. The default timestamp is the current
     * date-time. Format is MMM-dd-yyyy. Example: 2019-10-04
     */
    shipTimestamp?: string;
  }
}

/**
 * Wrapper class for CancelTagOuputVO. It holds transactionId and output.
 */
export interface TagCancelResponse {
  /**
   * This element allows you to assign a unique identifier to your transaction. This
   * element is also returned in the reply and helps you match the request to the
   * reply. Example: AnyCo_order123456789
   */
  customerTransactionId?: string;

  /**
   * The output details when a tag is cancelled.
   */
  output?: TagCancelResponse.Output;

  /**
   * The transaction ID is a special set of numbers that defines each transaction.
   * Example: 624deea6-b709-470c-8c39-4b5511281492
   */
  transactionId?: string;
}

export namespace TagCancelResponse {
  /**
   * The output details when a tag is cancelled.
   */
  export interface Output {
    /**
     * Indicates whether the tag has been cancelled or not. If true, then the tag has
     * been successfully cancelled. Example: true
     */
    cancelledTag?: boolean;

    /**
     * Message received when a tag is successfully cancelled. Example: success
     */
    successMessage?: string;
  }
}

export interface TagCreateParams {
  /**
   * Body param: This is FedEx Account number details.
   */
  accountNumber: ShipmentsAPI.PartyAccountNumber;

  /**
   * Body param: The shipment data describing the shipment being tendered to FedEx.
   */
  requestedShipment: TagCreateParams.RequestedShipment;

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

export namespace TagCreateParams {
  /**
   * The shipment data describing the shipment being tendered to FedEx.
   */
  export interface RequestedShipment extends ShipmentsAPI.RequestedShipment {
    /**
     * Specifies the pickup details for the Tag shipment. ReadyDateTime and
     * LatestPickupDateTime are required.
     */
    pickupDetail?: RequestedShipment.PickupDetail;
  }

  export namespace RequestedShipment {
    /**
     * Specifies the pickup details for the Tag shipment. ReadyDateTime and
     * LatestPickupDateTime are required.
     */
    export interface PickupDetail {
      /**
       * Specify the last possible pickup date and time.
       */
      latestPickupDateTime: string;

      /**
       * Specify the time and date the package will be ready for pickup.
       */
      readyPickupDateTime: string;
    }
  }
}

export interface TagCancelParams {
  /**
   * Body param: The account number of the recipient.
   */
  accountNumber: TagCancelParams.AccountNumber;

  /**
   * Body param: The details of the package for which shipping has been completed.
   * The details include dispatch confirmation number, dispatch date, location, and
   * the cxs alerts associated with the process.
   */
  completedTagDetail: CompletedTagDetail2;

  /**
   * Body param: This is the FedEx service type associated with the shipment.
   * Example: PRIORITY_OVERNIGHT <a onclick='loadDocReference("servicetypes")'>Click
   * here to see Service Types</a>
   */
  serviceType: string;

  /**
   * Body param: The tracking number for the Express or Ground Tag to the cancelled.
   * Example: 301025281523
   * <a onclick='loadDocReference("mocktrackingnumbersforfedexexpressandfedexground")'>Click
   * here to see mock tracking numbers for FedEx Express and FedEx Ground.</a>
   */
  trackingNumber?: string;

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

export namespace TagCancelParams {
  /**
   * The account number of the recipient.
   */
  export interface AccountNumber {
    /**
     * Conditional. The account number value. Max Length is 9. Example: 123456789
     */
    value?: string;
  }
}

export declare namespace Tag {
  export {
    type CompletedTagDetail2 as CompletedTagDetail2,
    type TagCreateResponse as TagCreateResponse,
    type TagCancelResponse as TagCancelResponse,
    type TagCreateParams as TagCreateParams,
    type TagCancelParams as TagCancelParams,
  };
}
