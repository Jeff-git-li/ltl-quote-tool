declare const CreateQuote: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly pickup: {
                readonly type: "object";
                readonly properties: {
                    readonly subStreet: {
                        readonly type: "string";
                        readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                        readonly deprecated: true;
                    };
                    readonly accessorials: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                        };
                        readonly uniqueItems: true;
                        readonly default: readonly [];
                        readonly description: "Array of accessorials required at this location";
                    };
                    readonly emails: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly uniqueItems: true;
                        readonly default: readonly [];
                        readonly description: "Array of emails to receive notification emails";
                    };
                    readonly openTime: {
                        readonly type: "string";
                        readonly pattern: "[0-9]+";
                        readonly minLength: 4;
                        readonly maxLength: 4;
                        readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                    };
                    readonly closeTime: {
                        readonly type: "string";
                        readonly pattern: "[0-9]+";
                        readonly minLength: 4;
                        readonly maxLength: 4;
                        readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                    };
                    readonly referenceNumber: {
                        readonly type: "string";
                        readonly description: "Reference number set for this location";
                    };
                    readonly notes: {
                        readonly type: "string";
                        readonly description: "Notes set for this location";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Business or company name";
                    };
                    readonly phoneNumber: {
                        readonly type: "string";
                        readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                    };
                    readonly placeId: {
                        readonly type: "string";
                        readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                        readonly deprecated: true;
                    };
                    readonly address: {
                        readonly type: "object";
                        readonly properties: {
                            readonly street: {
                                readonly type: "string";
                                readonly description: "Street of the address";
                            };
                            readonly subStreet: {
                                readonly type: "string";
                                readonly description: "Substreet of the address, such as suite number or letter.";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "City name of the address";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "2-letter state abbreviation name of the address";
                            };
                            readonly zip: {
                                readonly type: "string";
                                readonly description: "Postal zip code of the address";
                            };
                        };
                        readonly required: readonly ["zip"];
                        readonly additionalProperties: false;
                    };
                };
                readonly required: readonly ["openTime", "closeTime"];
                readonly additionalProperties: false;
                readonly description: "Object containing pickup (shipper) location information. Must contain either placeId or address.";
            };
            readonly delivery: {
                readonly type: "object";
                readonly properties: {
                    readonly subStreet: {
                        readonly type: "string";
                        readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                        readonly deprecated: true;
                    };
                    readonly accessorials: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                            readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                        };
                        readonly uniqueItems: true;
                        readonly default: readonly [];
                        readonly description: "Array of accessorials required at this location";
                    };
                    readonly emails: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                        readonly uniqueItems: true;
                        readonly default: readonly [];
                        readonly description: "Array of emails to receive notification emails";
                    };
                    readonly openTime: {
                        readonly type: "string";
                        readonly pattern: "[0-9]+";
                        readonly minLength: 4;
                        readonly maxLength: 4;
                        readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                    };
                    readonly closeTime: {
                        readonly type: "string";
                        readonly pattern: "[0-9]+";
                        readonly minLength: 4;
                        readonly maxLength: 4;
                        readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                    };
                    readonly referenceNumber: {
                        readonly type: "string";
                        readonly description: "Reference number set for this location";
                    };
                    readonly notes: {
                        readonly type: "string";
                        readonly description: "Notes set for this location";
                    };
                    readonly name: {
                        readonly type: "string";
                        readonly description: "Business or company name";
                    };
                    readonly phoneNumber: {
                        readonly type: "string";
                        readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                    };
                    readonly placeId: {
                        readonly type: "string";
                        readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                        readonly deprecated: true;
                    };
                    readonly address: {
                        readonly type: "object";
                        readonly properties: {
                            readonly street: {
                                readonly type: "string";
                                readonly description: "Street of the address";
                            };
                            readonly subStreet: {
                                readonly type: "string";
                                readonly description: "Substreet of the address, such as suite number or letter.";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "City name of the address";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly description: "2-letter state abbreviation name of the address";
                            };
                            readonly zip: {
                                readonly type: "string";
                                readonly description: "Postal zip code of the address";
                            };
                        };
                        readonly required: readonly ["zip"];
                        readonly additionalProperties: false;
                    };
                    readonly appointmentContact: {
                        readonly type: "object";
                        readonly properties: {
                            readonly email: {
                                readonly type: "string";
                                readonly description: "Contact email to receive consignee scheduling notifications.";
                            };
                            readonly phoneNumber: {
                                readonly type: "string";
                                readonly description: "Contact phone number in .e164 format.<br><br>For example: +17148130000";
                            };
                        };
                        readonly required: readonly ["email", "phoneNumber"];
                        readonly additionalProperties: false;
                        readonly description: "Only for use with the scheduleDelivery accessorial. Alternate contact information if the consignee is not scheduling delivery.";
                    };
                };
                readonly required: readonly ["openTime", "closeTime"];
                readonly additionalProperties: false;
                readonly description: "Object containing delivery (consignee) location information. Must contain either placeId or address.";
            };
            readonly rateResponseTimeoutMs: {
                readonly type: "number";
                readonly format: "float";
                readonly minimum: 5000;
                readonly default: 25000;
                readonly description: "Timeout (in milliseconds) for rates to be returned. Default is 25000ms. Some carriers take longer than others to return rates, so a lower rateResponseTimeoutMs may result in fewer rates being returned. Certain platforms, like Shopify, have a strict timeout time, so a lower rateResponseTimeoutMs may be necessary for your use-case. Use with caution.\n - If you are unsure, leave this field blank.\n - If you are experiencing issues with rates not being returned, you may want to increase this value.\n - This value is the time taken to retrieve the rate. If you have a hard limit on the time to wait for a response, you should set a timeout on the request itself.\nNOTE - If set, the minimum value is 5000ms (5 seconds)";
                readonly maximum: 3.402823669209385e+38;
            };
            readonly freight: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly quantity: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "Quantity of this cargo line item";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["Bag", "Bale", "Box", "Bucket", "Bundle", "Can", "Carton", "Case", "Coil", "Crate", "Cylinder", "Drum", "Pail", "Pallet", "Pieces", "Reel", "Roll", "Skid", "Tote", "Tube", "LooseItem"];
                            readonly description: "Type of this cargo. Can be: Bag, Bale, Box, Bucket, Bundle, Can, Carton, Case, Coil, Crate, Cylinder, Drum, Pail, Pallet, Pieces, Reel, Roll, Skid, Tote, or Tube.<br><br>LooseItem has been deprecated in favor of Pieces.";
                        };
                        readonly weight: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Weight (in pounds) of each item in this line item<br><br>For example, if you have a 1600 lb shipment consisting of 4 pallets at 400 lbs each, this property should be 400 lbs";
                        };
                        readonly length: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Length (in inches) of each item in this line item";
                        };
                        readonly width: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Width (in inches) of each item in this line item";
                        };
                        readonly height: {
                            readonly type: "integer";
                            readonly minimum: 1;
                            readonly description: "Height (in inches) of each item in this line item";
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Cargo description of this line item";
                        };
                    };
                    readonly required: readonly ["quantity", "type", "weight", "length", "width", "height"];
                    readonly additionalProperties: false;
                };
                readonly minItems: 1;
                readonly description: "Array of freight information. Each array element represents a different line item of freight";
            };
            readonly pickupReadyDate: {
                readonly anyOf: readonly [{
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly description: "Deprecated. ISOString in UTC.";
                    readonly deprecated: true;
                }, {
                    readonly type: "object";
                    readonly properties: {
                        readonly date: {
                            readonly type: "string";
                            readonly pattern: "[0-9][0-0][0-9][0-9]-[0-9][0-9]-[0-9][0-9]";
                        };
                        readonly time: {
                            readonly type: "string";
                            readonly minLength: 4;
                            readonly maxLength: 4;
                        };
                    };
                    readonly required: readonly ["date", "time"];
                    readonly additionalProperties: false;
                }];
                readonly description: "Date and time of day that this shipment will be ready to be picked up. Object consisting of `date` and `time` where `date` has a format of \"YYYY-MM-DD\"and `time` has a 24-hour time format, such as \"0900\".<br>For example: {\"date\": \"2024-01-30\", \"time\": \"0900\"}";
            };
            readonly applyAvailableCredits: {
                readonly type: "boolean";
                readonly default: true;
                readonly description: "If false, will not apply any available credits on the shipper account to this quote";
            };
            readonly declaredFreightValue: {
                readonly type: "integer";
                readonly minimum: 101;
                readonly maximum: 2000000;
                readonly description: "Declared freight value in Dollars. This enables insurance coverage in USD Currency";
            };
        };
        readonly required: readonly ["pickup", "delivery", "freight", "pickupReadyDate"];
        readonly additionalProperties: false;
        readonly description: "Declared freight value in Dollars. This enables insurance coverage in USD Currency";
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Quote ID, which can be used in the Create Shipment Endpoint";
                        };
                        readonly expiresAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing when this quote expires and can no longer be used in the Create Shipment endpoint";
                        };
                        readonly rates: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                    };
                                    readonly price: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "Price, in USD, of the rate";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly transitDays: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly minimum: {
                                                readonly type: "number";
                                                readonly format: "float";
                                                readonly minimum: 0;
                                                readonly maximum: 3.402823669209385e+38;
                                            };
                                            readonly maximum: {
                                                readonly type: "number";
                                                readonly format: "float";
                                                readonly minimum: 0;
                                                readonly maximum: 3.402823669209385e+38;
                                            };
                                        };
                                        readonly required: readonly ["minimum", "maximum"];
                                        readonly additionalProperties: false;
                                        readonly description: "Range number of transit days";
                                    };
                                    readonly estimatedPickupDate: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly description: "ISOString representing the estimated earliest datetime that this shipment would be picked up at";
                                    };
                                    readonly estimatedDeliveryDate: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly description: "ISOString representing the estimated latest datetime that this shipment would be delivered at";
                                    };
                                    readonly provider: {
                                        readonly type: "string";
                                        readonly enum: readonly ["mothership", "abf", "centralTransport", "customCompanies", "forwardAir", "frontline", "oldDominion", "roadrunner", "saia", "southeastern", "tforce", "ups", "ward", "xpo", "conway", "partner"];
                                        readonly description: "The shipping provider for this rate\n\n`mothership` `abf` `centralTransport` `customCompanies` `forwardAir` `frontline` `oldDominion` `roadrunner` `saia` `southeastern` `tforce` `ups` `ward` `xpo` `conway` `partner`";
                                    };
                                    readonly providerScac: {
                                        readonly type: "string";
                                        readonly enum: readonly ["mhpg", "abfs", "ctii", "ctbv", "fwdn", "fcsy", "odfl", "rdfs", "saia", "sefl", "tfin", "upgf", "ward", "xpol", "cnwy", "partner"];
                                        readonly description: "The shipping provider for this rate\n\n`mhpg` `abfs` `ctii` `ctbv` `fwdn` `fcsy` `odfl` `rdfs` `saia` `sefl` `tfin` `upgf` `ward` `xpol` `cnwy` `partner`";
                                    };
                                    readonly truck: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly equipment: {
                                                readonly type: "string";
                                                readonly enum: readonly ["any", "straightTruck", "tractor"];
                                                readonly description: "`any` `straightTruck` `tractor`";
                                            };
                                            readonly specialty: {
                                                readonly type: "string";
                                                readonly enum: readonly ["reefer", "flatbed", "dryVan"];
                                                readonly description: "`reefer` `flatbed` `dryVan`";
                                            };
                                        };
                                        readonly required: readonly ["equipment", "specialty"];
                                        readonly additionalProperties: false;
                                        readonly description: "Truck is deprecated. This is the truck equipment and specialty for this rate. This is often unknown as purchase time so should be ignored.";
                                        readonly deprecated: true;
                                    };
                                    readonly services: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                            readonly enum: readonly ["dedicated", "teamDrive", "custom", "standard", "guaranteed", "guaranteed08", "guaranteed09", "guaranteed10", "guaranteed11", "guaranteed12", "guaranteed14", "guaranteed15", "guaranteed1530", "expedited", "expedited12", "expedited17", "accelerated", "guaranteedWithinWindow", "guaranteedMultiHourWindow", "guaranteedSingleHourWindow", "capacityLoad", "unknown"];
                                            readonly description: "Services included with this rate\n\n`dedicated` `teamDrive` `custom` `standard` `guaranteed` `guaranteed08` `guaranteed09` `guaranteed10` `guaranteed11` `guaranteed12` `guaranteed14` `guaranteed15` `guaranteed1530` `expedited` `expedited12` `expedited17` `accelerated` `guaranteedWithinWindow` `guaranteedMultiHourWindow` `guaranteedSingleHourWindow` `capacityLoad` `unknown`";
                                        };
                                        readonly default: readonly [];
                                        readonly description: "List of services associated with this rate";
                                    };
                                    readonly serviceType: {
                                        readonly type: "string";
                                        readonly enum: readonly ["nextDay", "sameDay", "customRate", "limitedAccessRegional", "lowest", "bestValue", "fastest", "flatbed", "reefer", "other"];
                                        readonly description: "Service type is deprecated in favor of the services. Please use that instead. This will often be returned as \"other\"\n\n`nextDay` `sameDay` `customRate` `limitedAccessRegional` `lowest` `bestValue` `fastest` `flatbed` `reefer` `other`";
                                        readonly deprecated: true;
                                    };
                                    readonly warnings: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                            readonly enum: readonly ["consolidator"];
                                            readonly description: "Warning associated with this rate\n\n`consolidator`";
                                        };
                                        readonly default: readonly [];
                                        readonly description: "List of warnings associated with this rate";
                                    };
                                    readonly creditsApplied: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "Dollars of credit applied towards this rate";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly coveragePrice: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "Price of the insurance coverage in USD";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly coveredValue: {
                                        readonly type: "integer";
                                        readonly description: "Freight's value covered by insurance in USD";
                                    };
                                };
                                readonly required: readonly ["id", "price", "transitDays", "estimatedPickupDate", "estimatedDeliveryDate", "provider", "providerScac", "truck", "serviceType"];
                                readonly additionalProperties: false;
                            };
                            readonly minItems: 1;
                            readonly description: "Array of available rates that can be purchased. Desired rate should be passed into the Create Shipment endpoint with the Quote ID";
                        };
                        readonly freight: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly quantity: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "Quantity of this cargo line item";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["Bag", "Bale", "Box", "Bucket", "Bundle", "Can", "Carton", "Case", "Coil", "Crate", "Cylinder", "Drum", "Pail", "Pallet", "Pieces", "Reel", "Roll", "Skid", "Tote", "Tube", "LooseItem"];
                                        readonly description: "Type of this cargo. Can be: Bag, Bale, Box, Bucket, Bundle, Can, Carton, Case, Coil, Crate, Cylinder, Drum, Pail, Pallet, Pieces, Reel, Roll, Skid, Tote, or Tube.<br><br>LooseItem has been deprecated in favor of Pieces.\n\n`Bag` `Bale` `Box` `Bucket` `Bundle` `Can` `Carton` `Case` `Coil` `Crate` `Cylinder` `Drum` `Pail` `Pallet` `Pieces` `Reel` `Roll` `Skid` `Tote` `Tube` `LooseItem`";
                                    };
                                    readonly weight: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Weight (in pounds) of each item in this line item<br><br>For example, if you have a 1600 lb shipment consisting of 4 pallets at 400 lbs each, this property should be 400 lbs";
                                    };
                                    readonly length: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Length (in inches) of each item in this line item";
                                    };
                                    readonly width: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Width (in inches) of each item in this line item";
                                    };
                                    readonly height: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Height (in inches) of each item in this line item";
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Cargo description of this line item";
                                    };
                                };
                                readonly required: readonly ["quantity", "type", "weight", "length", "width", "height"];
                                readonly additionalProperties: false;
                            };
                            readonly minItems: 1;
                            readonly description: "Array of freight information. Each array element represents a different line item of freight";
                        };
                        readonly pickup: {
                            readonly type: "object";
                            readonly properties: {
                                readonly subStreet: {
                                    readonly type: "string";
                                    readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                                    readonly deprecated: true;
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly description: "City name of the address";
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly description: "2-letter state abbreviation name of the address";
                                };
                                readonly zip: {
                                    readonly type: "string";
                                    readonly description: "Postal zip code of the address";
                                };
                                readonly placeId: {
                                    readonly type: "string";
                                    readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                                    readonly deprecated: true;
                                };
                                readonly accessorials: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                        readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of accessorials required at this location";
                                };
                                readonly emails: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of emails to receive notification emails";
                                };
                                readonly openTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                                };
                                readonly closeTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                                };
                                readonly referenceNumber: {
                                    readonly type: "string";
                                    readonly description: "Reference number set for this location";
                                };
                                readonly notes: {
                                    readonly type: "string";
                                    readonly description: "Notes set for this location";
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "Business or company name";
                                };
                                readonly phoneNumber: {
                                    readonly type: "string";
                                    readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                                };
                                readonly street: {
                                    readonly type: "string";
                                    readonly description: "Street of the address";
                                };
                            };
                            readonly required: readonly ["city", "state", "zip", "placeId", "openTime", "closeTime"];
                            readonly additionalProperties: false;
                        };
                        readonly delivery: {
                            readonly type: "object";
                            readonly properties: {
                                readonly subStreet: {
                                    readonly type: "string";
                                    readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                                    readonly deprecated: true;
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly description: "City name of the address";
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly description: "2-letter state abbreviation name of the address";
                                };
                                readonly zip: {
                                    readonly type: "string";
                                    readonly description: "Postal zip code of the address";
                                };
                                readonly placeId: {
                                    readonly type: "string";
                                    readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                                    readonly deprecated: true;
                                };
                                readonly accessorials: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                        readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of accessorials required at this location";
                                };
                                readonly emails: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of emails to receive notification emails";
                                };
                                readonly openTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                                };
                                readonly closeTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                                };
                                readonly referenceNumber: {
                                    readonly type: "string";
                                    readonly description: "Reference number set for this location";
                                };
                                readonly notes: {
                                    readonly type: "string";
                                    readonly description: "Notes set for this location";
                                };
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "Business or company name";
                                };
                                readonly phoneNumber: {
                                    readonly type: "string";
                                    readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                                };
                                readonly street: {
                                    readonly type: "string";
                                    readonly description: "Street of the address";
                                };
                            };
                            readonly required: readonly ["city", "state", "zip", "placeId", "openTime", "closeTime"];
                            readonly additionalProperties: false;
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly properties: {
                                readonly purchasable: {
                                    readonly type: "boolean";
                                    readonly description: "If true, the returned Quote ID can be used in the Create Shipment endpoint. If false, more properties (detailed in the invalidFieldsRequiredForPurchase property) must be included in this Create Quote call before the returned Quote ID can be used in the Create Shipment endpoint";
                                };
                                readonly invalidFieldsRequiredForPurchase: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly field: {
                                                readonly type: "string";
                                            };
                                            readonly errorMessage: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly required: readonly ["field", "errorMessage"];
                                        readonly additionalProperties: false;
                                    };
                                    readonly default: readonly [];
                                    readonly description: "Array of fields that still need to be provided in this endpoint before the given Quote ID can be used in the Create Shipment endpoint";
                                };
                                readonly pickupLocationSuggestedAccessorials: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                        readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of accessorials suggested at pickup location";
                                };
                                readonly deliveryLocationSuggestedAccessorials: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                        readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of accessorials suggested at delivery location";
                                };
                            };
                            readonly required: readonly ["purchasable"];
                            readonly additionalProperties: false;
                        };
                    };
                    readonly required: readonly ["id", "expiresAt", "rates", "freight", "pickup", "delivery", "metadata"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateShipment: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly quoteId: {
                readonly type: "string";
                readonly description: "Quote ID, acquired from the Create Quote endpoint, to purchase and convert into a shipment";
            };
            readonly rateId: {
                readonly type: "string";
                readonly description: "Represents the ID of the desired rate to purchase, which must be any one of the returned rates in the quote object corresponding with the given quoteId";
            };
        };
        readonly required: readonly ["quoteId", "rateId"];
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID of the created shipment";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing the datetime of when the shipment was created";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Current status of the shipment";
                        };
                        readonly price: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "Price paid, in USD, for the shipment";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly earliestPickupDate: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing the earliest datetime that this shipment would be picked up at";
                        };
                        readonly estimatedDeliveryDate: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing the estimated latest datetime that this shipment would be delivered at";
                        };
                        readonly freight: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly quantity: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "Quantity of this cargo line item";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["Bag", "Bale", "Box", "Bucket", "Bundle", "Can", "Carton", "Case", "Coil", "Crate", "Cylinder", "Drum", "Pail", "Pallet", "Pieces", "Reel", "Roll", "Skid", "Tote", "Tube", "LooseItem"];
                                        readonly description: "Type of this cargo. Can be: Bag, Bale, Box, Bucket, Bundle, Can, Carton, Case, Coil, Crate, Cylinder, Drum, Pail, Pallet, Pieces, Reel, Roll, Skid, Tote, or Tube.<br><br>LooseItem has been deprecated in favor of Pieces.\n\n`Bag` `Bale` `Box` `Bucket` `Bundle` `Can` `Carton` `Case` `Coil` `Crate` `Cylinder` `Drum` `Pail` `Pallet` `Pieces` `Reel` `Roll` `Skid` `Tote` `Tube` `LooseItem`";
                                    };
                                    readonly weight: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Weight (in pounds) of each item in this line item<br><br>For example, if you have a 1600 lb shipment consisting of 4 pallets at 400 lbs each, this property should be 400 lbs";
                                    };
                                    readonly length: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Length (in inches) of each item in this line item";
                                    };
                                    readonly width: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Width (in inches) of each item in this line item";
                                    };
                                    readonly height: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Height (in inches) of each item in this line item";
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Cargo description of this line item";
                                    };
                                };
                                readonly required: readonly ["quantity", "type", "weight", "length", "width", "height", "description"];
                                readonly additionalProperties: false;
                            };
                            readonly minItems: 1;
                            readonly description: "Array of freight information. Each array element represents a different line item of freight";
                        };
                        readonly pickup: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "Business or company name";
                                };
                                readonly street: {
                                    readonly type: "string";
                                    readonly description: "Street of the address";
                                };
                                readonly subStreet: {
                                    readonly type: "string";
                                    readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                                    readonly deprecated: true;
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly description: "City name of the address";
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly description: "2-letter state abbreviation name of the address";
                                };
                                readonly zip: {
                                    readonly type: "string";
                                    readonly description: "Postal zip code of the address";
                                };
                                readonly placeId: {
                                    readonly type: "string";
                                    readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                                    readonly deprecated: true;
                                };
                                readonly accessorials: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                        readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of accessorials required at this location";
                                };
                                readonly phoneNumber: {
                                    readonly type: "string";
                                    readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                                };
                                readonly emails: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of emails to receive notification emails";
                                };
                                readonly openTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                                };
                                readonly closeTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                                };
                                readonly referenceNumber: {
                                    readonly type: "string";
                                    readonly description: "Reference number set for this location";
                                };
                                readonly notes: {
                                    readonly type: "string";
                                    readonly description: "Notes set for this location";
                                };
                            };
                            readonly required: readonly ["name", "city", "state", "zip", "placeId", "phoneNumber", "openTime", "closeTime"];
                            readonly additionalProperties: false;
                        };
                        readonly delivery: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "Business or company name";
                                };
                                readonly street: {
                                    readonly type: "string";
                                    readonly description: "Street of the address";
                                };
                                readonly subStreet: {
                                    readonly type: "string";
                                    readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                                    readonly deprecated: true;
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly description: "City name of the address";
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly description: "2-letter state abbreviation name of the address";
                                };
                                readonly zip: {
                                    readonly type: "string";
                                    readonly description: "Postal zip code of the address";
                                };
                                readonly placeId: {
                                    readonly type: "string";
                                    readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                                    readonly deprecated: true;
                                };
                                readonly accessorials: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                        readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of accessorials required at this location";
                                };
                                readonly phoneNumber: {
                                    readonly type: "string";
                                    readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                                };
                                readonly emails: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of emails to receive notification emails";
                                };
                                readonly openTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                                };
                                readonly closeTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                                };
                                readonly referenceNumber: {
                                    readonly type: "string";
                                    readonly description: "Reference number set for this location";
                                };
                                readonly notes: {
                                    readonly type: "string";
                                    readonly description: "Notes set for this location";
                                };
                            };
                            readonly required: readonly ["name", "city", "state", "zip", "placeId", "phoneNumber", "openTime", "closeTime"];
                            readonly additionalProperties: false;
                        };
                        readonly trackingUrl: {
                            readonly type: "string";
                            readonly description: "Tracking url for the shipment";
                        };
                    };
                    readonly required: readonly ["id", "createdAt", "price", "earliestPickupDate", "estimatedDeliveryDate", "freight", "pickup", "delivery"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "429": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly enum: readonly [100, 101, 200, 201, 202, 203, 204, 205, 206, 300, 301, 302, 303, 304, 305, 307, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 422, 429, 500, 501, 502, 503, 504, 505];
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                            readonly description: "`100` `101` `200` `201` `202` `203` `204` `205` `206` `300` `301` `302` `303` `304` `305` `307` `400` `401` `402` `403` `404` `405` `406` `407` `408` `409` `410` `411` `412` `413` `414` `415` `416` `417` `422` `429` `500` `501` `502` `503` `504` `505`";
                        };
                        readonly type: {
                            readonly type: "string";
                            readonly enum: readonly ["UNKNOWN", "NOT_FOUND", "SERVER_ERROR", "UNAUTHENTICATED", "MISSING_PERMISSION", "INVALID_REQUEST", "RATE_LIMIT_EXCEEDED", "CARGO_TOO_LARGE", "NO_RATES_FOUND", "QUOTE_NOT_PURCHASABLE", "PAYMENT_FAILED"];
                            readonly description: "`UNKNOWN` `NOT_FOUND` `SERVER_ERROR` `UNAUTHENTICATED` `MISSING_PERMISSION` `INVALID_REQUEST` `RATE_LIMIT_EXCEEDED` `CARGO_TOO_LARGE` `NO_RATES_FOUND` `QUOTE_NOT_PURCHASABLE` `PAYMENT_FAILED`";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                        readonly metadata: {
                            readonly type: "object";
                            readonly properties: {};
                            readonly additionalProperties: false;
                        };
                    };
                    readonly required: readonly ["code", "type", "message"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const CreateWebhookConfig: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly webhookUrl: {
                readonly type: "string";
                readonly description: "URL that Mothership's server will POST webhook events to";
            };
            readonly subscribedEvents: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["billOfLading.created", "billOfLading.updated", "proofOfDelivery.created", "proofOfDelivery.updated", "deliveryReceipt.created", "deliveryReceipt.updated", "certificateOfInsurance.created", "shipment.purchased", "shipment.status.updated"];
                };
                readonly description: "Array of events that will trigger a webhook event";
            };
        };
        readonly required: readonly ["webhookUrl", "subscribedEvents"];
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID of the webhook config";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing the datetime that this webhook config was created";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly enum: readonly ["active", "inactive"];
                            readonly description: "Current status of the webhook config\n\n`active` `inactive`";
                        };
                        readonly subscribedEvents: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["billOfLading.created", "billOfLading.updated", "proofOfDelivery.created", "proofOfDelivery.updated", "deliveryReceipt.created", "deliveryReceipt.updated", "certificateOfInsurance.created", "shipment.purchased", "shipment.status.updated"];
                                readonly description: "`billOfLading.created` `billOfLading.updated` `proofOfDelivery.created` `proofOfDelivery.updated` `deliveryReceipt.created` `deliveryReceipt.updated` `certificateOfInsurance.created` `shipment.purchased` `shipment.status.updated`";
                            };
                            readonly description: "Array of events that will trigger a webhook event";
                        };
                        readonly webhookUrl: {
                            readonly type: "string";
                            readonly description: "URL that Mothership's server will POST webhook events to";
                        };
                        readonly secretKey: {
                            readonly type: "string";
                            readonly description: "Secret key specific to this token record that can be used to validate incoming webhook payloads";
                        };
                    };
                    readonly required: readonly ["id", "createdAt", "status", "subscribedEvents", "webhookUrl", "secretKey"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FetchFileById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly fileId: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "File ID to generate a download url";
                };
            };
            readonly required: readonly ["fileId"];
        }];
    };
    readonly response: {
        readonly "301": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly url: {
                            readonly type: "string";
                            readonly description: "Redirect to presigned url for file id";
                        };
                    };
                    readonly required: readonly ["url"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FetchInvoiceById: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly invoiceId: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the invoice to get fetch";
                };
            };
            readonly required: readonly ["invoiceId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The ID of the invoice";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "ISO string of when the invoice was first created";
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "ISO string of when the invoice was last updated";
                        };
                        readonly dueDate: {
                            readonly type: "string";
                            readonly description: "ISO string of when the invoice is required to be paid by";
                        };
                        readonly total: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The total amount (in cents) of the invoice in USD";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly amountDue: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The amount (in cents) in USD due remaining on the invoice";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly credits: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {};
                                readonly additionalProperties: false;
                            };
                            readonly description: "The credits applied to the invoice";
                        };
                        readonly payments: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {};
                                readonly additionalProperties: false;
                            };
                            readonly description: "The payments applied to the invoice";
                        };
                        readonly paidAmount: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The amount (in cents) paid against this invoice";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly creditedAmount: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The amount (in cents) credit back to this invoice";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "Three-letter ISO currency code, in lowercase. Defaulted to 'usd'.";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly enum: readonly ["open", "paid", "unpaid", "pastDue", "void"];
                            readonly description: "The status of the invoice\n\n`open` `paid` `unpaid` `pastDue` `void`";
                        };
                        readonly referenceNumber: {
                            readonly type: "string";
                            readonly description: "The reference number of the invoice. This is not guaranteed to be unique nor match the reference number of it's owning entity type";
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "The description of the invoice";
                        };
                        readonly entityType: {
                            readonly type: "string";
                            readonly enum: readonly ["shipment", "claim", "statement"];
                            readonly description: "The invoiceable entity type, most commonly 'shipment'\n\n`shipment` `claim` `statement`";
                        };
                        readonly entityId: {
                            readonly type: "string";
                            readonly description: "The invoiceable entity id, most commonly the shipment id";
                        };
                    };
                    readonly required: readonly ["id", "createdAt", "updatedAt", "status", "referenceNumber", "description", "entityType", "entityId"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FetchPlace: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly placeId: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Place ID of an address";
                };
            };
            readonly required: readonly ["placeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Place ID of the address";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "City name of the address";
                        };
                        readonly street: {
                            readonly type: "string";
                            readonly description: "Street address of the address";
                        };
                        readonly state: {
                            readonly type: "string";
                            readonly minLength: 2;
                            readonly maxLength: 2;
                            readonly description: "2-letter state abbrevation of the address";
                        };
                        readonly zip: {
                            readonly type: "string";
                            readonly description: "Postal zip code of the address";
                        };
                    };
                    readonly required: readonly ["id", "zip"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FetchPlaces: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly zip: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Postal zip code";
                };
                readonly city: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "City name";
                };
                readonly state: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "2-letter state abbreviation";
                };
                readonly street: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Street address";
                };
            };
            readonly required: readonly ["zip"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Place ID of the address";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "City name of the address";
                            };
                            readonly street: {
                                readonly type: "string";
                                readonly description: "Street address of the address";
                            };
                            readonly state: {
                                readonly type: "string";
                                readonly minLength: 2;
                                readonly maxLength: 2;
                                readonly description: "2-letter state abbrevation of the address";
                            };
                            readonly zip: {
                                readonly type: "string";
                                readonly description: "Postal zip code of the address";
                            };
                        };
                        readonly required: readonly ["id", "zip"];
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FetchShipmentTracking: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly shipmentId: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Shipment ID of the shipment to get tracking";
                };
            };
            readonly required: readonly ["shipmentId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly city: {
                                        readonly type: "string";
                                        readonly description: "City in which the shipment is currently residing in";
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly description: "State in which the shipment is currently residing in";
                                    };
                                    readonly deliveryLocationName: {
                                        readonly type: "string";
                                        readonly description: "Name of the location the shipment is being delivery to";
                                    };
                                    readonly pickupLocationName: {
                                        readonly type: "string";
                                        readonly description: "Name of the location the shipment is being picked up from";
                                    };
                                    readonly eventType: {
                                        readonly type: "string";
                                        readonly description: "Type of tracking event";
                                    };
                                    readonly shipmentReferenceNumber: {
                                        readonly type: "string";
                                        readonly description: "Reference number that identifies the shipment";
                                    };
                                    readonly proNumber: {
                                        readonly type: "string";
                                        readonly description: "Pro number for the shipment, if one is available from the provider";
                                    };
                                    readonly timestamp: {
                                        readonly type: "string";
                                        readonly description: "ISO string of when the tracking event took place";
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly description: "New status of the shipment, or a description of how the shipment is progressing from an integrated carrier";
                                    };
                                };
                                readonly required: readonly ["deliveryLocationName", "pickupLocationName", "eventType", "shipmentReferenceNumber", "timestamp"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: readonly ["results"];
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FetchWebhookConfig: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhookConfigId: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the webhook config to fetch";
                };
            };
            readonly required: readonly ["webhookConfigId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID of the webhook config";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing the datetime that this webhook config was created";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly enum: readonly ["active", "inactive"];
                            readonly description: "Current status of the webhook config\n\n`active` `inactive`";
                        };
                        readonly subscribedEvents: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["billOfLading.created", "billOfLading.updated", "proofOfDelivery.created", "proofOfDelivery.updated", "deliveryReceipt.created", "deliveryReceipt.updated", "certificateOfInsurance.created", "shipment.purchased", "shipment.status.updated"];
                                readonly description: "`billOfLading.created` `billOfLading.updated` `proofOfDelivery.created` `proofOfDelivery.updated` `deliveryReceipt.created` `deliveryReceipt.updated` `certificateOfInsurance.created` `shipment.purchased` `shipment.status.updated`";
                            };
                            readonly description: "Array of events that will trigger a webhook event";
                        };
                        readonly webhookUrl: {
                            readonly type: "string";
                            readonly description: "URL that Mothership's server will POST webhook events to";
                        };
                        readonly secretKey: {
                            readonly type: "string";
                            readonly description: "Secret key specific to this token record that can be used to validate incoming webhook payloads";
                        };
                    };
                    readonly required: readonly ["id", "createdAt", "status", "subscribedEvents", "webhookUrl", "secretKey"];
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const FetchWebhookConfigsForAccount: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "ID of the webhook config";
                            };
                            readonly createdAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISOString representing the datetime that this webhook config was created";
                            };
                            readonly status: {
                                readonly type: "string";
                                readonly enum: readonly ["active", "inactive"];
                                readonly description: "Current status of the webhook config\n\n`active` `inactive`";
                            };
                            readonly subscribedEvents: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["billOfLading.created", "billOfLading.updated", "proofOfDelivery.created", "proofOfDelivery.updated", "deliveryReceipt.created", "deliveryReceipt.updated", "certificateOfInsurance.created", "shipment.purchased", "shipment.status.updated"];
                                    readonly description: "`billOfLading.created` `billOfLading.updated` `proofOfDelivery.created` `proofOfDelivery.updated` `deliveryReceipt.created` `deliveryReceipt.updated` `certificateOfInsurance.created` `shipment.purchased` `shipment.status.updated`";
                                };
                                readonly description: "Array of events that will trigger a webhook event";
                            };
                            readonly webhookUrl: {
                                readonly type: "string";
                                readonly description: "URL that Mothership's server will POST webhook events to";
                            };
                        };
                        readonly required: readonly ["id", "createdAt", "status", "subscribedEvents", "webhookUrl"];
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetAccount: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "The ID of the payment term";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly description: "ISO string of when the payment term was first created";
                        };
                        readonly updatedAt: {
                            readonly type: "string";
                            readonly description: "ISO string of when the payment term was last updated";
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "The name of your company account";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "The primary email of your company account";
                        };
                        readonly phoneNumber: {
                            readonly type: "string";
                            readonly description: "The primary phone number of your company account";
                        };
                        readonly paymentTermsEnabled: {
                            readonly type: "boolean";
                            readonly description: "Are payment terms enabled for the account";
                        };
                        readonly paymentTermLengthDays: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The number of days from invoice to payment due";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly creditLimitAmount: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The total amount of term credit in USD";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly availableCreditAmount: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The amount in USD due remaining on the credit term";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly totalAmountDue: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The total amount due in USD of unpaid invoices";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly currency: {
                            readonly type: "string";
                            readonly description: "Three-letter ISO currency code, in lowercase";
                        };
                    };
                    readonly required: readonly ["id", "createdAt", "updatedAt", "name", "email", "phoneNumber", "paymentTermLengthDays"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetShipmentDetails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly shipmentId: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the shipment to fetch details for";
                };
            };
            readonly required: readonly ["shipmentId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID of the created shipment";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing the datetime of when the shipment was created";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly description: "Current status of the shipment";
                        };
                        readonly price: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "Price paid, in USD, for the shipment";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly earliestPickupDate: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing the earliest datetime that this shipment would be picked up at";
                        };
                        readonly estimatedDeliveryDate: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing the estimated latest datetime that this shipment would be delivered at";
                        };
                        readonly freight: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly quantity: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "Quantity of this cargo line item";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: readonly ["Bag", "Bale", "Box", "Bucket", "Bundle", "Can", "Carton", "Case", "Coil", "Crate", "Cylinder", "Drum", "Pail", "Pallet", "Pieces", "Reel", "Roll", "Skid", "Tote", "Tube", "LooseItem"];
                                        readonly description: "Type of this cargo. Can be: Bag, Bale, Box, Bucket, Bundle, Can, Carton, Case, Coil, Crate, Cylinder, Drum, Pail, Pallet, Pieces, Reel, Roll, Skid, Tote, or Tube.<br><br>LooseItem has been deprecated in favor of Pieces.\n\n`Bag` `Bale` `Box` `Bucket` `Bundle` `Can` `Carton` `Case` `Coil` `Crate` `Cylinder` `Drum` `Pail` `Pallet` `Pieces` `Reel` `Roll` `Skid` `Tote` `Tube` `LooseItem`";
                                    };
                                    readonly weight: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Weight (in pounds) of each item in this line item<br><br>For example, if you have a 1600 lb shipment consisting of 4 pallets at 400 lbs each, this property should be 400 lbs";
                                    };
                                    readonly length: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Length (in inches) of each item in this line item";
                                    };
                                    readonly width: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Width (in inches) of each item in this line item";
                                    };
                                    readonly height: {
                                        readonly type: "integer";
                                        readonly minimum: 1;
                                        readonly description: "Height (in inches) of each item in this line item";
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Cargo description of this line item";
                                    };
                                };
                                readonly required: readonly ["quantity", "type", "weight", "length", "width", "height", "description"];
                                readonly additionalProperties: false;
                            };
                            readonly minItems: 1;
                            readonly description: "Array of freight information. Each array element represents a different line item of freight";
                        };
                        readonly pickup: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "Business or company name";
                                };
                                readonly street: {
                                    readonly type: "string";
                                    readonly description: "Street of the address";
                                };
                                readonly subStreet: {
                                    readonly type: "string";
                                    readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                                    readonly deprecated: true;
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly description: "City name of the address";
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly description: "2-letter state abbreviation name of the address";
                                };
                                readonly zip: {
                                    readonly type: "string";
                                    readonly description: "Postal zip code of the address";
                                };
                                readonly placeId: {
                                    readonly type: "string";
                                    readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                                    readonly deprecated: true;
                                };
                                readonly accessorials: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                        readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of accessorials required at this location";
                                };
                                readonly phoneNumber: {
                                    readonly type: "string";
                                    readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                                };
                                readonly emails: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of emails to receive notification emails";
                                };
                                readonly openTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                                };
                                readonly closeTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                                };
                                readonly referenceNumber: {
                                    readonly type: "string";
                                    readonly description: "Reference number set for this location";
                                };
                                readonly notes: {
                                    readonly type: "string";
                                    readonly description: "Notes set for this location";
                                };
                            };
                            readonly required: readonly ["name", "city", "state", "zip", "placeId", "phoneNumber", "openTime", "closeTime"];
                            readonly additionalProperties: false;
                        };
                        readonly delivery: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "Business or company name";
                                };
                                readonly street: {
                                    readonly type: "string";
                                    readonly description: "Street of the address";
                                };
                                readonly subStreet: {
                                    readonly type: "string";
                                    readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                                    readonly deprecated: true;
                                };
                                readonly city: {
                                    readonly type: "string";
                                    readonly description: "City name of the address";
                                };
                                readonly state: {
                                    readonly type: "string";
                                    readonly description: "2-letter state abbreviation name of the address";
                                };
                                readonly zip: {
                                    readonly type: "string";
                                    readonly description: "Postal zip code of the address";
                                };
                                readonly placeId: {
                                    readonly type: "string";
                                    readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                                    readonly deprecated: true;
                                };
                                readonly accessorials: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                        readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                        readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of accessorials required at this location";
                                };
                                readonly phoneNumber: {
                                    readonly type: "string";
                                    readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                                };
                                readonly emails: {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                    readonly uniqueItems: true;
                                    readonly default: readonly [];
                                    readonly description: "Array of emails to receive notification emails";
                                };
                                readonly openTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                                };
                                readonly closeTime: {
                                    readonly type: "string";
                                    readonly pattern: "[0-9]+";
                                    readonly minLength: 4;
                                    readonly maxLength: 4;
                                    readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                                };
                                readonly referenceNumber: {
                                    readonly type: "string";
                                    readonly description: "Reference number set for this location";
                                };
                                readonly notes: {
                                    readonly type: "string";
                                    readonly description: "Notes set for this location";
                                };
                            };
                            readonly required: readonly ["name", "city", "state", "zip", "placeId", "phoneNumber", "openTime", "closeTime"];
                            readonly additionalProperties: false;
                        };
                        readonly trackingUrl: {
                            readonly type: "string";
                            readonly description: "Tracking url for the shipment";
                        };
                        readonly estimatedLocation: {
                            readonly type: "object";
                            readonly properties: {
                                readonly latitude: {
                                    readonly type: "number";
                                    readonly format: "float";
                                    readonly description: "The latitude of the shipment's last estimated location.";
                                    readonly minimum: -3.402823669209385e+38;
                                    readonly maximum: 3.402823669209385e+38;
                                };
                                readonly longitude: {
                                    readonly type: "number";
                                    readonly format: "float";
                                    readonly description: "The longitude of the shipment's last estimated location.";
                                    readonly minimum: -3.402823669209385e+38;
                                    readonly maximum: 3.402823669209385e+38;
                                };
                            };
                            readonly required: readonly ["latitude", "longitude"];
                            readonly additionalProperties: false;
                        };
                        readonly partner: {
                            readonly type: "object";
                            readonly properties: {
                                readonly name: {
                                    readonly type: "string";
                                    readonly description: "The name of the shipment's partner carrier.";
                                };
                                readonly pickupNumber: {
                                    readonly type: "string";
                                    readonly description: "The pickup number associated with the partner shipment.";
                                };
                                readonly proNumber: {
                                    readonly type: "string";
                                    readonly description: "The pro number associated with the partner shipment.";
                                };
                            };
                            readonly required: readonly ["name"];
                            readonly additionalProperties: false;
                        };
                    };
                    readonly required: readonly ["id", "createdAt", "price", "earliestPickupDate", "estimatedDeliveryDate", "freight", "pickup", "delivery"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListModifiedInvoices: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timestamp: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The ISO timestamp of the on or after date to query";
                };
                readonly limit: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.";
                };
                readonly page: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A cursor for pagination across multiple pages of results. Don’t include this parameter on the first call. Use the nextPage value returned in a previous response to request subsequent results.";
                };
            };
            readonly required: readonly ["timestamp"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly invoices: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "Invoice ID";
                                    };
                                    readonly lastModifiedAt: {
                                        readonly type: "string";
                                        readonly description: "The most recent timestamp the invoice was modified at.";
                                    };
                                };
                                readonly required: readonly ["id", "lastModifiedAt"];
                                readonly additionalProperties: false;
                            };
                        };
                        readonly hasMore: {
                            readonly type: "boolean";
                            readonly description: "True if there are more records to fetch.";
                        };
                        readonly total: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The total number of invoices that are modified on or after the date.";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly limit: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The number of results requested in this page, not necessarily the number of results returned if on the last page.";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly currentPage: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The index of the current page of results returned.";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly nextPage: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly description: "The index of the next page of results to fetch, if available.";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                    };
                    readonly required: readonly ["invoices", "hasMore"];
                    readonly additionalProperties: false;
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListShipmentDocuments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly shipmentId: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Shipment ID of the shipment to generate document URLs for";
                };
            };
            readonly required: readonly ["shipmentId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly type: "string";
                                readonly enum: readonly ["billOfLading", "certificateOfInsurance", "deliveryReceipt", "proofOfDelivery"];
                                readonly description: "Type of document\n\n`billOfLading` `certificateOfInsurance` `deliveryReceipt` `proofOfDelivery`";
                            };
                            readonly url: {
                                readonly type: "string";
                                readonly description: "URL directing to the document";
                            };
                            readonly expiresAt: {
                                readonly type: "string";
                                readonly format: "date-time";
                                readonly description: "ISOString representing the datetime of when the document URL will expire";
                            };
                        };
                        readonly required: readonly ["type", "url", "expiresAt"];
                        readonly additionalProperties: false;
                    };
                };
            };
            readonly required: readonly ["data"];
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ListShipments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly page: {
                    readonly type: "number";
                    readonly format: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "current page (for first page, use 1) - if not provided, this will default to 1";
                };
                readonly perPage: {
                    readonly type: "number";
                    readonly format: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "maximum number of shipments returned for each page - if not provided, this will default to 25";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly results: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "string";
                                        readonly description: "ID of the created shipment";
                                    };
                                    readonly createdAt: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly description: "ISOString representing the datetime of when the shipment was created";
                                    };
                                    readonly status: {
                                        readonly type: "string";
                                        readonly description: "Current status of the shipment";
                                    };
                                    readonly price: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "Price paid, in USD, for the shipment";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly earliestPickupDate: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly description: "ISOString representing the earliest datetime that this shipment would be picked up at";
                                    };
                                    readonly estimatedDeliveryDate: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly description: "ISOString representing the estimated latest datetime that this shipment would be delivered at";
                                    };
                                    readonly freight: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly quantity: {
                                                    readonly type: "number";
                                                    readonly format: "float";
                                                    readonly description: "Quantity of this cargo line item";
                                                    readonly minimum: -3.402823669209385e+38;
                                                    readonly maximum: 3.402823669209385e+38;
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["Bag", "Bale", "Box", "Bucket", "Bundle", "Can", "Carton", "Case", "Coil", "Crate", "Cylinder", "Drum", "Pail", "Pallet", "Pieces", "Reel", "Roll", "Skid", "Tote", "Tube", "LooseItem"];
                                                    readonly description: "Type of this cargo. Can be: Bag, Bale, Box, Bucket, Bundle, Can, Carton, Case, Coil, Crate, Cylinder, Drum, Pail, Pallet, Pieces, Reel, Roll, Skid, Tote, or Tube.<br><br>LooseItem has been deprecated in favor of Pieces.\n\n`Bag` `Bale` `Box` `Bucket` `Bundle` `Can` `Carton` `Case` `Coil` `Crate` `Cylinder` `Drum` `Pail` `Pallet` `Pieces` `Reel` `Roll` `Skid` `Tote` `Tube` `LooseItem`";
                                                };
                                                readonly weight: {
                                                    readonly type: "integer";
                                                    readonly minimum: 1;
                                                    readonly description: "Weight (in pounds) of each item in this line item<br><br>For example, if you have a 1600 lb shipment consisting of 4 pallets at 400 lbs each, this property should be 400 lbs";
                                                };
                                                readonly length: {
                                                    readonly type: "integer";
                                                    readonly minimum: 1;
                                                    readonly description: "Length (in inches) of each item in this line item";
                                                };
                                                readonly width: {
                                                    readonly type: "integer";
                                                    readonly minimum: 1;
                                                    readonly description: "Width (in inches) of each item in this line item";
                                                };
                                                readonly height: {
                                                    readonly type: "integer";
                                                    readonly minimum: 1;
                                                    readonly description: "Height (in inches) of each item in this line item";
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly description: "Cargo description of this line item";
                                                };
                                            };
                                            readonly required: readonly ["quantity", "type", "weight", "length", "width", "height", "description"];
                                            readonly additionalProperties: false;
                                        };
                                        readonly minItems: 1;
                                        readonly description: "Array of freight information. Each array element represents a different line item of freight";
                                    };
                                    readonly pickup: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "Business or company name";
                                            };
                                            readonly street: {
                                                readonly type: "string";
                                                readonly description: "Street of the address";
                                            };
                                            readonly subStreet: {
                                                readonly type: "string";
                                                readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                                                readonly deprecated: true;
                                            };
                                            readonly city: {
                                                readonly type: "string";
                                                readonly description: "City name of the address";
                                            };
                                            readonly state: {
                                                readonly type: "string";
                                                readonly description: "2-letter state abbreviation name of the address";
                                            };
                                            readonly zip: {
                                                readonly type: "string";
                                                readonly description: "Postal zip code of the address";
                                            };
                                            readonly placeId: {
                                                readonly type: "string";
                                                readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                                                readonly deprecated: true;
                                            };
                                            readonly accessorials: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                                    readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                                };
                                                readonly uniqueItems: true;
                                                readonly default: readonly [];
                                                readonly description: "Array of accessorials required at this location";
                                            };
                                            readonly phoneNumber: {
                                                readonly type: "string";
                                                readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                                            };
                                            readonly emails: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                                readonly uniqueItems: true;
                                                readonly default: readonly [];
                                                readonly description: "Array of emails to receive notification emails";
                                            };
                                            readonly openTime: {
                                                readonly type: "string";
                                                readonly pattern: "[0-9]+";
                                                readonly minLength: 4;
                                                readonly maxLength: 4;
                                                readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                                            };
                                            readonly closeTime: {
                                                readonly type: "string";
                                                readonly pattern: "[0-9]+";
                                                readonly minLength: 4;
                                                readonly maxLength: 4;
                                                readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                                            };
                                            readonly referenceNumber: {
                                                readonly type: "string";
                                                readonly description: "Reference number set for this location";
                                            };
                                            readonly notes: {
                                                readonly type: "string";
                                                readonly description: "Notes set for this location";
                                            };
                                        };
                                        readonly required: readonly ["name", "city", "state", "zip", "placeId", "phoneNumber", "openTime", "closeTime"];
                                        readonly additionalProperties: false;
                                    };
                                    readonly delivery: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "Business or company name";
                                            };
                                            readonly street: {
                                                readonly type: "string";
                                                readonly description: "Street of the address";
                                            };
                                            readonly subStreet: {
                                                readonly type: "string";
                                                readonly description: "Substreet of the address, such as suite number or letter. Deprecated - please provide this in the address field.";
                                                readonly deprecated: true;
                                            };
                                            readonly city: {
                                                readonly type: "string";
                                                readonly description: "City name of the address";
                                            };
                                            readonly state: {
                                                readonly type: "string";
                                                readonly description: "2-letter state abbreviation name of the address";
                                            };
                                            readonly zip: {
                                                readonly type: "string";
                                                readonly description: "Postal zip code of the address";
                                            };
                                            readonly placeId: {
                                                readonly type: "string";
                                                readonly description: "Deprecated -- please use address parameter instead. Place ID acquired from the Fetch Places endpoint.";
                                                readonly deprecated: true;
                                            };
                                            readonly accessorials: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                    readonly enum: readonly ["alcohol", "appointment", "cfs", "crossDock", "hazmat", "homeDelivery", "inside", "liftgate", "limitedAccess", "localInsideDelivery", "residential", "scheduledDelivery", "sortSeg", "tobacco", "tradeshow", "twicRequired"];
                                                    readonly description: "`alcohol` `appointment` `cfs` `crossDock` `hazmat` `homeDelivery` `inside` `liftgate` `limitedAccess` `localInsideDelivery` `residential` `scheduledDelivery` `sortSeg` `tobacco` `tradeshow` `twicRequired`";
                                                };
                                                readonly uniqueItems: true;
                                                readonly default: readonly [];
                                                readonly description: "Array of accessorials required at this location";
                                            };
                                            readonly phoneNumber: {
                                                readonly type: "string";
                                                readonly description: "Contacts phone number at this location in .e164 format<br><br>For example: +17148130000";
                                            };
                                            readonly emails: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "string";
                                                };
                                                readonly uniqueItems: true;
                                                readonly default: readonly [];
                                                readonly description: "Array of emails to receive notification emails";
                                            };
                                            readonly openTime: {
                                                readonly type: "string";
                                                readonly pattern: "[0-9]+";
                                                readonly minLength: 4;
                                                readonly maxLength: 4;
                                                readonly description: "Open time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 0900 to represent 9:00am in local time";
                                            };
                                            readonly closeTime: {
                                                readonly type: "string";
                                                readonly pattern: "[0-9]+";
                                                readonly minLength: 4;
                                                readonly maxLength: 4;
                                                readonly description: "Close time of this location, in 4-digit 24-hour time format (HHmm) of this location's timezone. Refraining from including minutes is a recommended best practice.<br><br>For example: 2200 to represent 10:00pm in local time";
                                            };
                                            readonly referenceNumber: {
                                                readonly type: "string";
                                                readonly description: "Reference number set for this location";
                                            };
                                            readonly notes: {
                                                readonly type: "string";
                                                readonly description: "Notes set for this location";
                                            };
                                        };
                                        readonly required: readonly ["name", "city", "state", "zip", "placeId", "phoneNumber", "openTime", "closeTime"];
                                        readonly additionalProperties: false;
                                    };
                                    readonly trackingUrl: {
                                        readonly type: "string";
                                        readonly description: "Tracking url for the shipment";
                                    };
                                };
                                readonly required: readonly ["id", "createdAt", "price", "earliestPickupDate", "estimatedDeliveryDate", "freight", "pickup", "delivery"];
                                readonly additionalProperties: false;
                            };
                        };
                        readonly perPage: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly page: {
                            readonly type: "number";
                            readonly format: "float";
                            readonly minimum: -3.402823669209385e+38;
                            readonly maximum: 3.402823669209385e+38;
                        };
                        readonly hasMore: {
                            readonly type: "boolean";
                        };
                    };
                    readonly required: readonly ["perPage", "page", "hasMore"];
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RemoveWebhookConfig: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhookConfigId: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the webhook config to remove";
                };
            };
            readonly required: readonly ["webhookConfigId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "string";
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const UpdateWebhookConfig: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly subscribedEvents: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["billOfLading.created", "billOfLading.updated", "proofOfDelivery.created", "proofOfDelivery.updated", "deliveryReceipt.created", "deliveryReceipt.updated", "certificateOfInsurance.created", "shipment.purchased", "shipment.status.updated"];
                };
                readonly description: "Array of events that will trigger a webhook event";
            };
            readonly webhookUrl: {
                readonly type: "string";
                readonly description: "URL that Mothership's server will POST webhook events to";
            };
        };
        readonly additionalProperties: false;
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly webhookConfigId: {
                    readonly type: "string";
                    readonly format: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID of the webhook config to update";
                };
            };
            readonly required: readonly ["webhookConfigId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "ID of the webhook config";
                        };
                        readonly createdAt: {
                            readonly type: "string";
                            readonly format: "date-time";
                            readonly description: "ISOString representing the datetime that this webhook config was created";
                        };
                        readonly status: {
                            readonly type: "string";
                            readonly enum: readonly ["active", "inactive"];
                            readonly description: "Current status of the webhook config\n\n`active` `inactive`";
                        };
                        readonly subscribedEvents: {
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                                readonly enum: readonly ["billOfLading.created", "billOfLading.updated", "proofOfDelivery.created", "proofOfDelivery.updated", "deliveryReceipt.created", "deliveryReceipt.updated", "certificateOfInsurance.created", "shipment.purchased", "shipment.status.updated"];
                                readonly description: "`billOfLading.created` `billOfLading.updated` `proofOfDelivery.created` `proofOfDelivery.updated` `deliveryReceipt.created` `deliveryReceipt.updated` `certificateOfInsurance.created` `shipment.purchased` `shipment.status.updated`";
                            };
                            readonly description: "Array of events that will trigger a webhook event";
                        };
                        readonly webhookUrl: {
                            readonly type: "string";
                            readonly description: "URL that Mothership's server will POST webhook events to";
                        };
                    };
                    readonly required: readonly ["id", "createdAt", "status", "subscribedEvents", "webhookUrl"];
                    readonly additionalProperties: false;
                };
            };
            readonly additionalProperties: false;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { CreateQuote, CreateShipment, CreateWebhookConfig, FetchFileById, FetchInvoiceById, FetchPlace, FetchPlaces, FetchShipmentTracking, FetchWebhookConfig, FetchWebhookConfigsForAccount, GetAccount, GetShipmentDetails, ListModifiedInvoices, ListShipmentDocuments, ListShipments, RemoveWebhookConfig, UpdateWebhookConfig };
