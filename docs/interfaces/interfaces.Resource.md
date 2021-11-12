[jsonplaceholder-tests](../README.md) / [Exports](../modules.md) / [interfaces](../modules/interfaces.md) / Resource

# Interface: Resource<Data\>

[interfaces](../modules/interfaces.md).Resource

Interface that represents the app's resources.
A resource must contain these fields and methods.
ResponseType is the type returned by the network requests handler.

## Type parameters

| Name |
| :------ |
| `Data` |

## Table of contents

### Methods

- [delete](interfaces.Resource.md#delete)
- [get](interfaces.Resource.md#get)
- [getBy](interfaces.Resource.md#getby)
- [listAll](interfaces.Resource.md#listall)
- [patch](interfaces.Resource.md#patch)
- [update](interfaces.Resource.md#update)

## Methods

### delete

▸ **delete**(`by`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | [`Identifiers`](interfaces.Identifiers.md) |

#### Returns

`Promise`<`Response`\>

#### Defined in

interfaces.ts:21

___

### get

▸ **get**(`by`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `by` | [`Identifiers`](interfaces.Identifiers.md) |

#### Returns

`Promise`<`Response`\>

#### Defined in

interfaces.ts:17

___

### getBy

▸ **getBy**(`values`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Partial`<`Data`\> |

#### Returns

`Promise`<`Response`\>

#### Defined in

interfaces.ts:18

___

### listAll

▸ **listAll**(): `Promise`<`Response`\>

#### Returns

`Promise`<`Response`\>

#### Defined in

interfaces.ts:16

___

### patch

▸ **patch**(`values`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`Identifiers`](interfaces.Identifiers.md) & `Partial`<`Data`\> |

#### Returns

`Promise`<`Response`\>

#### Defined in

interfaces.ts:20

___

### update

▸ **update**(`values`): `Promise`<`Response`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `Data` |

#### Returns

`Promise`<`Response`\>

#### Defined in

interfaces.ts:19
