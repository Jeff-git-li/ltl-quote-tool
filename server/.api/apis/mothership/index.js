"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'mothership/1.0.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
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
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
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
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * This endpoint allows a user to retrieve details about their company account
     *
     * @summary Retrieve account
     */
    SDK.prototype.getAccount = function () {
        return this.core.fetch('/account', 'get');
    };
    /**
     * This endpoint allows a user to generate URLs directing to shipment documents like the
     * Bill of Lading and Proof of Delivery, if available.
     *
     * @summary List shipment documents
     */
    SDK.prototype.listShipmentDocuments = function (metadata) {
        return this.core.fetch('/documents/{shipmentId}', 'get', metadata);
    };
    /**
     * This endpoint allows you to retrieve a download url for a file by file Id
     *
     * @summary Retrieve a file
     */
    SDK.prototype.fetchFileById = function (metadata) {
        return this.core.fetch('/files/{fileId}', 'get', metadata);
    };
    /**
     * This endpoint allows a user to pass in an ISO timestamp and receive a list of references
     * to invoices that have either been created or modified on or after that date.
     *
     * @summary List all modified invoices
     */
    SDK.prototype.listModifiedInvoices = function (metadata) {
        return this.core.fetch('/invoices/modified_since', 'get', metadata);
    };
    /**
     * This endpoint allows a user to retrieve an invoice
     *
     * @summary Retrieve an invoice
     */
    SDK.prototype.fetchInvoiceById = function (metadata) {
        return this.core.fetch('/invoices/{invoiceId}', 'get', metadata);
    };
    /**
     * This endpoint allows a user to retrieve an array of place IDs that represent addresses
     * that may be used as the pickup location or delivery for a quote.
     *
     * @summary (deprecated) Search for a place
     */
    SDK.prototype.fetchPlaces = function (metadata) {
        return this.core.fetch('/places', 'get', metadata);
    };
    /**
     * This endpoint allows a user to fetch address details for the given place ID.
     *
     * @summary (deprecated) Retrieve a place
     */
    SDK.prototype.fetchPlace = function (metadata) {
        return this.core.fetch('/places/{placeId}', 'get', metadata);
    };
    /**
     * This endpoint allows a user to pass in shipment details and create a quote. This
     * response will return the available rates with respective prices, and also return a quote
     * ID that can be used in the Create Shipment endpoint.
     *
     * @summary Create a quote
     */
    SDK.prototype.createQuote = function (body) {
        return this.core.fetch('/quotes', 'post', body);
    };
    /**
     * This endpoint allows a user to purchase and create a shipment under his/her shipper
     * account.
     *
     * @summary Create a shipment
     * @throws FetchError<429, types.CreateShipmentResponse429> You've created too many shipments in a short period of time.
     */
    SDK.prototype.createShipment = function (body) {
        return this.core.fetch('/shipments', 'post', body);
    };
    /**
     * This endpoint allows a user to list all shipments booked by his/her organization.
     *
     * @summary List Shipments
     */
    SDK.prototype.listShipments = function (metadata) {
        return this.core.fetch('/shipments', 'get', metadata);
    };
    /**
     * This endpoint allows a user to get up-to-date shipment details for the shipment
     * represented by the given Shipment ID
     *
     * @summary Retrieve a shipment
     */
    SDK.prototype.getShipmentDetails = function (metadata) {
        return this.core.fetch('/shipments/{shipmentId}', 'get', metadata);
    };
    /**
     * This endpoint allows a user to get a list of tracking events related to a shipment
     *
     * @summary Track a shipment
     */
    SDK.prototype.fetchShipmentTracking = function (metadata) {
        return this.core.fetch('/tracking/{shipmentId}', 'get', metadata);
    };
    /**
     * This endpoint allows a user to fetch all webhook configs set up for his/her shipper
     * account.
     *
     * @summary List webhooks
     */
    SDK.prototype.fetchWebhookConfigsForAccount = function () {
        return this.core.fetch('/webhookConfigs', 'get');
    };
    /**
     * This endpoint allows a user to create a webhook config for his/her shipper account.
     *
     * @summary Create a webhook configuration
     */
    SDK.prototype.createWebhookConfig = function (body) {
        return this.core.fetch('/webhookConfigs', 'post', body);
    };
    /**
     * This endpoint allows a user to fetch the webhook config represented by webhookConfigId.
     *
     * @summary Retrieve a webhook configuration
     */
    SDK.prototype.fetchWebhookConfig = function (metadata) {
        return this.core.fetch('/webhookConfigs/{webhookConfigId}', 'get', metadata);
    };
    /**
     * This endpoint allows a user to update the webhook config represented by webhookConfigId.
     *
     * @summary Update a webhook configuration
     */
    SDK.prototype.updateWebhookConfig = function (body, metadata) {
        return this.core.fetch('/webhookConfigs/{webhookConfigId}', 'put', body, metadata);
    };
    /**
     * This endpoint allows a user to remove the webhook config represented by webhookConfigId.
     *
     * @summary Remove a webhook configuration
     */
    SDK.prototype.removeWebhookConfig = function (metadata) {
        return this.core.fetch('/webhookConfigs/{webhookConfigId}', 'delete', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
