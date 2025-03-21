# Ship

## V1

### Shipments

Types:

- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Address1</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Alert</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Contact1</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ContactAndAddress</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">CurrencyExchangeRate</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">CustomerImageUsage</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">CustomerReference</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">CustomsClearanceDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">DeliveryOnInvoiceAcceptanceDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">DocTabZoneSpecification</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">DocumentFormatOptionsRequested</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">EtdDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">HoldAtLocationDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">HomeDeliveryPremiumDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">InternationalControlledExportDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">InternationalTrafficInArmsRegulationsDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">LabelResponseVo</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">LabelSpecification</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Message</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Money</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Party1</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Party3</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">PartyAccountNumber</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">PartyAddress</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">PartyAddress2</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">PartyContact</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Payment</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">PendingShipmentDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">RateDiscount</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">RecipientsParty</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">RequestedPackageLineItem</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">RequestedShipment</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ReturnShipmentDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShipmentCodDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShipmentDryIceDetail1</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShipperAccountNumber</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShipperParty</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShippingDocumentDispositionDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShippingDocumentFormat</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShippingDocumentSpecification</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">SmartPostInfoDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Surcharge</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Tax</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">TaxpayerIdentification</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">TrackingID</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">TransactionShipmentOutputVo</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">UploadDocumentReferenceDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">VariableHandlingChargeDetail</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">Weight</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShipmentCreateResponse</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShipmentCancelResponse</a></code>
- <code><a href="./src/resources/ship/v1/shipments/shipments.ts">ShipmentRetrieveAsyncResponse</a></code>

Methods:

- <code title="post /ship/v1/shipments">client.ship.v1.shipments.<a href="./src/resources/ship/v1/shipments/shipments.ts">create</a>({ ...params }) -> ShipmentCreateResponse</code>
- <code title="put /ship/v1/shipments/cancel">client.ship.v1.shipments.<a href="./src/resources/ship/v1/shipments/shipments.ts">cancel</a>({ ...params }) -> ShipmentCancelResponse</code>
- <code title="post /ship/v1/shipments/results">client.ship.v1.shipments.<a href="./src/resources/ship/v1/shipments/shipments.ts">retrieveAsync</a>({ ...params }) -> ShipmentRetrieveAsyncResponse</code>

#### Packages

Types:

- <code><a href="./src/resources/ship/v1/shipments/packages.ts">PackageValidateResponse</a></code>

Methods:

- <code title="post /ship/v1/shipments/packages/validate">client.ship.v1.shipments.packages.<a href="./src/resources/ship/v1/shipments/packages.ts">validate</a>({ ...params }) -> PackageValidateResponse</code>

#### Tag

Types:

- <code><a href="./src/resources/ship/v1/shipments/tag.ts">CompletedTagDetail2</a></code>
- <code><a href="./src/resources/ship/v1/shipments/tag.ts">TagCreateResponse</a></code>
- <code><a href="./src/resources/ship/v1/shipments/tag.ts">TagCancelResponse</a></code>

Methods:

- <code title="post /ship/v1/shipments/tag">client.ship.v1.shipments.tag.<a href="./src/resources/ship/v1/shipments/tag.ts">create</a>({ ...params }) -> TagCreateResponse</code>
- <code title="put /ship/v1/shipments/tag/cancel/{shipmentid}">client.ship.v1.shipments.tag.<a href="./src/resources/ship/v1/shipments/tag.ts">cancel</a>(shipmentid, { ...params }) -> TagCancelResponse</code>
