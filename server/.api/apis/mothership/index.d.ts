import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * This endpoint allows a user to retrieve details about their company account
     *
     * @summary Retrieve account
     */
    getAccount(): Promise<FetchResponse<200, types.GetAccountResponse200>>;
    /**
     * This endpoint allows a user to generate URLs directing to shipment documents like the
     * Bill of Lading and Proof of Delivery, if available.
     *
     * @summary List shipment documents
     */
    listShipmentDocuments(metadata: types.ListShipmentDocumentsMetadataParam): Promise<FetchResponse<200, types.ListShipmentDocumentsResponse200>>;
    /**
     * This endpoint allows you to retrieve a download url for a file by file Id
     *
     * @summary Retrieve a file
     */
    fetchFileById(metadata: types.FetchFileByIdMetadataParam): Promise<FetchResponse<301, types.FetchFileByIdResponse301>>;
    /**
     * This endpoint allows a user to pass in an ISO timestamp and receive a list of references
     * to invoices that have either been created or modified on or after that date.
     *
     * @summary List all modified invoices
     */
    listModifiedInvoices(metadata: types.ListModifiedInvoicesMetadataParam): Promise<FetchResponse<200, types.ListModifiedInvoicesResponse200>>;
    /**
     * This endpoint allows a user to retrieve an invoice
     *
     * @summary Retrieve an invoice
     */
    fetchInvoiceById(metadata: types.FetchInvoiceByIdMetadataParam): Promise<FetchResponse<200, types.FetchInvoiceByIdResponse200>>;
    /**
     * This endpoint allows a user to retrieve an array of place IDs that represent addresses
     * that may be used as the pickup location or delivery for a quote.
     *
     * @summary (deprecated) Search for a place
     */
    fetchPlaces(metadata: types.FetchPlacesMetadataParam): Promise<FetchResponse<200, types.FetchPlacesResponse200>>;
    /**
     * This endpoint allows a user to fetch address details for the given place ID.
     *
     * @summary (deprecated) Retrieve a place
     */
    fetchPlace(metadata: types.FetchPlaceMetadataParam): Promise<FetchResponse<200, types.FetchPlaceResponse200>>;
    /**
     * This endpoint allows a user to pass in shipment details and create a quote. This
     * response will return the available rates with respective prices, and also return a quote
     * ID that can be used in the Create Shipment endpoint.
     *
     * @summary Create a quote
     */
    createQuote(body: types.CreateQuoteBodyParam): Promise<FetchResponse<201, types.CreateQuoteResponse201>>;
    /**
     * This endpoint allows a user to purchase and create a shipment under his/her shipper
     * account.
     *
     * @summary Create a shipment
     * @throws FetchError<429, types.CreateShipmentResponse429> You've created too many shipments in a short period of time.
     */
    createShipment(body: types.CreateShipmentBodyParam): Promise<FetchResponse<201, types.CreateShipmentResponse201>>;
    /**
     * This endpoint allows a user to list all shipments booked by his/her organization.
     *
     * @summary List Shipments
     */
    listShipments(metadata?: types.ListShipmentsMetadataParam): Promise<FetchResponse<200, types.ListShipmentsResponse200>>;
    /**
     * This endpoint allows a user to get up-to-date shipment details for the shipment
     * represented by the given Shipment ID
     *
     * @summary Retrieve a shipment
     */
    getShipmentDetails(metadata: types.GetShipmentDetailsMetadataParam): Promise<FetchResponse<200, types.GetShipmentDetailsResponse200>>;
    /**
     * This endpoint allows a user to get a list of tracking events related to a shipment
     *
     * @summary Track a shipment
     */
    fetchShipmentTracking(metadata: types.FetchShipmentTrackingMetadataParam): Promise<FetchResponse<200, types.FetchShipmentTrackingResponse200>>;
    /**
     * This endpoint allows a user to fetch all webhook configs set up for his/her shipper
     * account.
     *
     * @summary List webhooks
     */
    fetchWebhookConfigsForAccount(): Promise<FetchResponse<200, types.FetchWebhookConfigsForAccountResponse200>>;
    /**
     * This endpoint allows a user to create a webhook config for his/her shipper account.
     *
     * @summary Create a webhook configuration
     */
    createWebhookConfig(body: types.CreateWebhookConfigBodyParam): Promise<FetchResponse<201, types.CreateWebhookConfigResponse201>>;
    /**
     * This endpoint allows a user to fetch the webhook config represented by webhookConfigId.
     *
     * @summary Retrieve a webhook configuration
     */
    fetchWebhookConfig(metadata: types.FetchWebhookConfigMetadataParam): Promise<FetchResponse<200, types.FetchWebhookConfigResponse200>>;
    /**
     * This endpoint allows a user to update the webhook config represented by webhookConfigId.
     *
     * @summary Update a webhook configuration
     */
    updateWebhookConfig(body: types.UpdateWebhookConfigBodyParam, metadata: types.UpdateWebhookConfigMetadataParam): Promise<FetchResponse<200, types.UpdateWebhookConfigResponse200>>;
    /**
     * This endpoint allows a user to remove the webhook config represented by webhookConfigId.
     *
     * @summary Remove a webhook configuration
     */
    removeWebhookConfig(metadata: types.RemoveWebhookConfigMetadataParam): Promise<FetchResponse<200, types.RemoveWebhookConfigResponse200>>;
}
declare const createSDK: SDK;
export = createSDK;
