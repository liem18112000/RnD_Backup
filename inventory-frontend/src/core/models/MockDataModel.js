export const mockPageIngredientCategory = () => {
    const mock = {
        "content": [
            {
                "id": 28,
                "clientId": 1,
                "name": "Mirinda",
                "code": "88331188",
                "description": "Mirinda",
                "unit": "bottle",
                "unitType": "whole",
                "quantity": 0,
                "createAt": "2021-10-07T14:16:52.357651500Z",
                "updateAt": "2021-10-07T14:16:52.357651500Z"
            },
            {
                "id": 24,
                "clientId": 1,
                "name": "Pepsi",
                "code": "99331133",
                "description": "Pepsi",
                "unit": "can",
                "unitType": "whole",
                "quantity": 4,
                "createAt": "2021-10-07T07:00:36.379957900Z",
                "updateAt": "2021-10-07T07:00:36.380955400Z"
            },
            {
                "id": 23,
                "clientId": 1,
                "name": "Coca cola",
                "code": "00331133",
                "description": "Coca cola",
                "unit": "can",
                "unitType": "whole",
                "quantity": 3,
                "createAt": "2021-10-07T02:18:36.061655500Z",
                "updateAt": "2021-10-07T02:18:36.061655500Z"
            },
            {
                "id": 3,
                "clientId": 1,
                "name": "Queen land Goat milk",
                "code": "QLGM",
                "description": "Queen land Goat milk",
                "unit": "bottle",
                "unitType": "whole",
                "quantity": 3,
                "createAt": "2021-10-03 22:27:07",
                "updateAt": "2021-10-05T15:22:04.989878200Z"
            },
            {
                "id": 2,
                "clientId": 1,
                "name": "New Zealand Cow Milk",
                "code": "NZCM",
                "description": "New Zealand Cow Milk",
                "unit": "bottle",
                "unitType": "whole",
                "quantity": 4,
                "createAt": "2021-10-03 22:27:07",
                "updateAt": "2021-10-05T15:25:04.225930500Z"
            }
        ],
        "pageable": {
            "sort": {
                "empty": false,
                "sorted": true,
                "unsorted": false
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 10,
            "unpaged": false,
            "paged": true
        },
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "number": 0,
        "size": 10,
        "sort": {
            "empty": false,
            "sorted": true,
            "unsorted": false
        },
        "first": true,
        "numberOfElements": 5,
        "empty": false
    }
    return Promise.resolve(mock);
}

export const mockPageIngredientType = () => {
    const mock = {
        "content": [
            {
                "id": 28,
                "clientId": 1,
                "name": "Mirinda",
                "code": "88331188",
                "description": "Mirinda",
                "unit": "bottle",
                "unitType": "whole",
                "quantity": 0,
                "createAt": "2021-10-07T14:16:52.357651500Z",
                "updateAt": "2021-10-07T14:16:52.357651500Z"
            },
            {
                "id": 24,
                "clientId": 1,
                "name": "Pepsi",
                "code": "99331133",
                "description": "Pepsi",
                "unit": "can",
                "unitType": "whole",
                "quantity": 4,
                "createAt": "2021-10-07T07:00:36.379957900Z",
                "updateAt": "2021-10-07T07:00:36.380955400Z"
            },
            {
                "id": 23,
                "clientId": 1,
                "name": "Coca cola",
                "code": "00331133",
                "description": "Coca cola",
                "unit": "can",
                "unitType": "whole",
                "quantity": 3,
                "createAt": "2021-10-07T02:18:36.061655500Z",
                "updateAt": "2021-10-07T02:18:36.061655500Z"
            },
            {
                "id": 3,
                "clientId": 1,
                "name": "Queen land Goat milk",
                "code": "QLGM",
                "description": "Queen land Goat milk",
                "unit": "bottle",
                "unitType": "whole",
                "quantity": 3,
                "createAt": "2021-10-03 22:27:07",
                "updateAt": "2021-10-05T15:22:04.989878200Z"
            },
            {
                "id": 2,
                "clientId": 1,
                "name": "New Zealand Cow Milk",
                "code": "NZCM",
                "description": "New Zealand Cow Milk",
                "unit": "bottle",
                "unitType": "whole",
                "quantity": 4,
                "createAt": "2021-10-03 22:27:07",
                "updateAt": "2021-10-05T15:25:04.225930500Z"
            }
        ],
        "pageable": {
            "sort": {
                "empty": false,
                "sorted": true,
                "unsorted": false
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 10,
            "unpaged": false,
            "paged": true
        },
        "last": true,
        "totalElements": 5,
        "totalPages": 1,
        "number": 0,
        "size": 10,
        "sort": {
            "empty": false,
            "sorted": true,
            "unsorted": false
        },
        "first": true,
        "numberOfElements": 5,
        "empty": false
    }
    return Promise.resolve(mock);
}

export const mockPageIngredientItem = () => {
    const mock  = {
        "content": [
            {
                "id": 17,
                "clientId": 1,
                "ingredient": {
                    "id": 23,
                    "clientId": 1,
                    "name": "Coca cola",
                    "code": "00331133",
                    "description": "Coca cola",
                    "unit": "can",
                    "unitType": "whole",
                    "createAt": "2021-10-07T02:18:36.061655500Z",
                    "updateAt": "2021-10-07T02:18:36.061655500Z"
                },
                "name": "British Coca cola",
                "code": "CCCL01",
                "description": "British Coca cola",
                "unit": "can",
                "unitType": "whole",
                "expiredAt": "2021-12-21"
            },
            {
                "id": 19,
                "clientId": 1,
                "ingredient": {
                    "id": 23,
                    "clientId": 1,
                    "name": "Coca cola",
                    "code": "00331133",
                    "description": "Coca cola",
                    "unit": "can",
                    "unitType": "whole",
                    "createAt": "2021-10-07T02:18:36.061655500Z",
                    "updateAt": "2021-10-07T02:18:36.061655500Z"
                },
                "importId": 2,
                "name": "British Coca cola",
                "code": "CCCL02",
                "description": "British Coca cola",
                "unit": "can",
                "unitType": "whole",
                "expiredAt": "2021-12-21"
            },
            {
                "id": 20,
                "clientId": 1,
                "ingredient": {
                    "id": 23,
                    "clientId": 1,
                    "name": "Coca cola",
                    "code": "00331133",
                    "description": "Coca cola",
                    "unit": "can",
                    "unitType": "whole",
                    "createAt": "2021-10-07T02:18:36.061655500Z",
                    "updateAt": "2021-10-07T02:18:36.061655500Z"
                },
                "importId": 2,
                "name": "Premium British Coca cola",
                "code": "CCCL03",
                "description": "British Coca cola",
                "unit": "can",
                "unitType": "whole",
                "expiredAt": "2022-12-21"
            },
            {
                "id": 47,
                "clientId": 1,
                "ingredient": {
                    "id": 23,
                    "clientId": 1,
                    "name": "Coca cola",
                    "code": "00331133",
                    "description": "Coca cola",
                    "unit": "can",
                    "unitType": "whole",
                    "createAt": "2021-10-07T02:18:36.061655500Z",
                    "updateAt": "2021-10-07T02:18:36.061655500Z"
                },
                "name": "British Coca cola",
                "code": "CCCL07",
                "description": "British Coca cola",
                "unit": "can",
                "unitType": "whole",
                "expiredAt": "2021-11-19"
            },
            {
                "id": 48,
                "clientId": 1,
                "ingredient": {
                    "id": 23,
                    "clientId": 1,
                    "name": "Coca cola",
                    "code": "00331133",
                    "description": "Coca cola",
                    "unit": "can",
                    "unitType": "whole",
                    "createAt": "2021-10-07T02:18:36.061655500Z",
                    "updateAt": "2021-10-07T02:18:36.061655500Z"
                },
                "name": "British Coca cola",
                "code": "CCCL05",
                "description": "British Coca cola",
                "unit": "can",
                "unitType": "whole",
                "expiredAt": "2021-11-19"
            }
        ],
        "pageable": {
            "sort": {
                "empty": false,
                "unsorted": false,
                "sorted": true
            },
            "offset": 0,
            "pageNumber": 0,
            "pageSize": 5,
            "paged": true,
            "unpaged": false
        },
        "totalElements": 9,
        "totalPages": 2,
        "last": false,
        "number": 0,
        "size": 5,
        "sort": {
            "empty": false,
            "unsorted": false,
            "sorted": true
        },
        "first": true,
        "numberOfElements": 5,
        "empty": false
    }
    return Promise.resolve(mock);
}

export const mockIngredientLabelValue = () => {
    const mock = [
        {
            "value": 2,
            "label": "New Zealand Cow Milk"
        },
        {
            "value": 3,
            "label": "Queen land Goat milk"
        },
        {
            "value": 23,
            "label": "Coca cola"
        },
        {
            "value": 28,
            "label": "Mirinda"
        },
        {
            "value": 37,
            "label": "Spritee"
        },
        {
            "value": 47,
            "label": "coke"
        },
        {
            "value": 83,
            "label": "DoubleMint"
        },
        {
            "value": 95,
            "label": "Japan Pepsi"
        },
        {
            "value": 100,
            "label": "fanta"
        },
        {
            "value": 105,
            "label": "Cuba Banana"
        },
        {
            "value": 107,
            "label": "Sting"
        },
        {
            "value": 109,
            "label": "Xa xi original"
        },
        {
            "value": 110,
            "label": "Xa xi premium"
        },
        {
            "value": 112,
            "label": "WATER"
        },
        {
            "value": 113,
            "label": "Redbull"
        },
        {
            "value": 115,
            "label": "Pork Noodle"
        },
        {
            "value": 132,
            "label": "TestNoUnitType"
        },
        {
            "value": 135,
            "label": "UI Test Type 001"
        },
        {
            "value": 136,
            "label": "TestNoUnitType003"
        },
        {
            "value": 138,
            "label": "TestNewEvent001"
        },
        {
            "value": 143,
            "label": "Phở bò gói"
        },
        {
            "value": 144,
            "label": "Phờ gà gói"
        },
        {
            "value": 145,
            "label": "Phở nai gói"
        },
        {
            "value": 146,
            "label": "TestNewEvent002"
        }
    ];
    return Promise.resolve(mock);
}

export const mockIngredient = () => {
    const mock = {
        "id": 1,
        "clientId": 1,
        "name": "Milk",
        "code": "11223344",
        "description": "Milk",
        "unit": "bottle",
        "unitType": "whole",
        "createAt": "2021-10-03 22:27:07",
        "updateAt": "2021-10-03 22:27:07"
    };
    return Promise.resolve(mock);
}

export const mockIngredientItem = () => {
    const mock = {
        "id": 17,
        "clientId": 1,
        "ingredient": {
            "id": 23,
            "clientId": 1,
            "name": "Coca cola",
            "code": "00331133",
            "description": "Coca cola",
            "unit": "can",
            "unitType": "whole",
            "createAt": "2021-10-07T02:18:36.061655500Z",
            "updateAt": "2021-10-07T02:18:36.061655500Z"
        },
        "name": "British Coca cola",
        "code": "CCCL01",
        "description": "British Coca cola",
        "unit": "can",
        "unitType": "whole",
        "expiredAt": "2021-12-21"
    };
    return Promise.resolve(mock);
}

export const mockPageInventory = () => {
    const mock = {
        "content": [
            {
                "id": 14,
                "clientId": 1,
                "ingredient": {
                    "id": 2,
                    "clientId": 1,
                    "name": "New Zealand Cow Milk",
                    "code": "NZCM",
                    "description": "New Zealand Cow Milk",
                    "unit": "bottle",
                    "unitType": "whole",
                    "createAt": "2021-10-03 22:27:06",
                    "updateAt": "2021-12-23T08:52:27.675310100Z"
                },
                "name": "New Zealand Cow Milk NZCM",
                "description": "New Zealand Cow Milk",
                "quantity": 0.0,
                "reserved": 0.0,
                "available": 0.0,
                "unit": "bottle",
                "unitType": "whole"
            },
            {
                "id": 15,
                "clientId": 1,
                "ingredient": {
                    "id": 3,
                    "clientId": 1,
                    "name": "Queen land Goat milk",
                    "code": "QLGM",
                    "description": "Queen land Goat Milk",
                    "unit": "bottle",
                    "unitType": "whole",
                    "createAt": "2021-10-03 22:27:08",
                    "updateAt": "2021-10-05T15:22:04.989878200Z"
                },
                "name": "Queen land Goat milk QLGM",
                "description": "Queen land Goat milk",
                "quantity": 0.0,
                "reserved": 0.0,
                "available": 0.0,
                "unit": "bottle",
                "unitType": "whole"
            },
            {
                "id": 16,
                "clientId": 1,
                "ingredient": {
                    "id": 23,
                    "clientId": 1,
                    "name": "Coca cola",
                    "code": "00331133",
                    "description": "Coca cola",
                    "unit": "can",
                    "unitType": "whole",
                    "createAt": "2021-10-07T02:18:36.061655500Z",
                    "updateAt": "2021-10-07T02:18:36.061655500Z"
                },
                "name": "Coca cola 00331133",
                "description": "Coca cola",
                "quantity": 1.0,
                "reserved": 0.0,
                "available": 1.0,
                "unit": "can",
                "unitType": "whole"
            },
            {
                "id": 18,
                "clientId": 1,
                "ingredient": {
                    "id": 28,
                    "clientId": 1,
                    "name": "Mirinda",
                    "code": "88331188",
                    "description": "Mirinda",
                    "unit": "bottle",
                    "unitType": "whole",
                    "createAt": "2021-10-07T14:16:52.357651500Z",
                    "updateAt": "2021-10-07T14:16:52.357651500Z"
                },
                "name": "Mirinda 88331188",
                "description": "Mirinda 88331188",
                "quantity": 0.0,
                "reserved": 0.0,
                "available": 0.0,
                "unit": "bottle",
                "unitType": "whole"
            },
            {
                "id": 19,
                "clientId": 1,
                "ingredient": {
                    "id": 37,
                    "clientId": 1,
                    "name": "Spritee",
                    "code": "12312347",
                    "description": "Sprite",
                    "unit": "bottle",
                    "unitType": "whole",
                    "createAt": "2021-10-22T15:01:35.067161100Z",
                    "updateAt": "2021-11-12T15:10:14.408033500Z"
                },
                "name": "Sprite In Japan",
                "description": "Sprite In Japan",
                "quantity": 0.0,
                "reserved": 0.0,
                "available": 0.0,
                "unit": "bottle",
                "unitType": "whole"
            },
            {
                "id": 20,
                "clientId": 1,
                "ingredient": {
                    "id": 47,
                    "clientId": 1,
                    "name": "coke",
                    "code": "COKE01",
                    "description": "cock",
                    "unit": "pack",
                    "unitType": "whole",
                    "createAt": "2021-10-29T02:55:53.554212300Z",
                    "updateAt": "2021-11-09T14:55:08.244264800Z"
                },
                "name": "Crap Crap234",
                "description": "Sprite 12312347",
                "quantity": 0.0,
                "reserved": 0.0,
                "available": 0.0,
                "unit": "pack",
                "unitType": "whole"
            },
            {
                "id": 21,
                "clientId": 1,
                "ingredient": {
                    "id": 83,
                    "clientId": 1,
                    "name": "DoubleMint",
                    "code": "TestTransactionType987",
                    "description": "TestTransactionType987",
                    "unit": "pack",
                    "unitType": "whole",
                    "createAt": "2021-11-01T15:41:20.399939500Z",
                    "updateAt": "2021-11-01T15:41:20.399939500Z"
                },
                "name": "TestTransactionType987 TestTransactionType987",
                "description": "TestTransactionType987",
                "quantity": 0.0,
                "reserved": 0.0,
                "available": 0.0,
                "unit": "pack",
                "unitType": "whole"
            },
            {
                "id": 25,
                "clientId": 1,
                "ingredient": {
                    "id": 95,
                    "clientId": 1,
                    "name": "Japan Pepsi",
                    "code": "JP0012123",
                    "description": "Japan Pepsy",
                    "unit": "can",
                    "unitType": "whole",
                    "createAt": "2021-11-02T13:54:39.620574900Z",
                    "updateAt": "2021-11-03T06:59:49.281972300Z"
                },
                "name": "Japan Pepsi JP0012123",
                "description": "Japan Pepsi",
                "quantity": 8.0,
                "reserved": 0.0,
                "available": 8.0,
                "unit": "can",
                "unitType": "whole"
            },
            {
                "id": 26,
                "clientId": 1,
                "ingredient": {
                    "id": 100,
                    "clientId": 1,
                    "name": "fanta",
                    "code": "FANTA",
                    "description": "fanta",
                    "unit": "can",
                    "unitType": "whole",
                    "createAt": "2021-11-03T07:02:04.799679Z",
                    "updateAt": "2021-11-03T07:02:04.799679Z"
                },
                "name": "fanta FANTA",
                "description": "fanta",
                "quantity": 0.0,
                "reserved": 0.0,
                "available": 0.0,
                "unit": "can",
                "unitType": "whole"
            },
            {
                "id": 27,
                "clientId": 1,
                "ingredient": {
                    "id": 105,
                    "clientId": 1,
                    "name": "Cuba Banana",
                    "code": "23133121241241",
                    "description": "12e12e12",
                    "unit": "kilogram",
                    "unitType": "weight",
                    "createAt": "2021-11-03T07:02:04.799679Z",
                    "updateAt": "2021-11-03T07:02:04.799679Z"
                },
                "name": "Chúi 1 23133121241241",
                "description": "12e12e12",
                "quantity": 0.0,
                "reserved": 0.0,
                "available": 0.0,
                "unit": "kilogram",
                "unitType": "weight"
            }
        ],
        "pageable": {
            "sort": {
                "empty": false,
                "sorted": true,
                "unsorted": false
            },
            "offset": 0,
            "pageSize": 10,
            "pageNumber": 0,
            "paged": true,
            "unpaged": false
        },
        "last": false,
        "totalPages": 3,
        "totalElements": 23,
        "number": 0,
        "size": 10,
        "sort": {
            "empty": false,
            "sorted": true,
            "unsorted": false
        },
        "first": true,
        "numberOfElements": 10,
        "empty": false
    }
    return Promise.resolve(mock);
}