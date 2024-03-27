import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const API_URL = `${import.meta.env.SERVER_URL}/api`

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	}
})

const entities = [
	{
		data: {
			name: 'userid',
			valueType: 'STRING',
			description: 'User Identifier',
			labels: ['user']
		},
		metadata: {
			createdTimestamp: '2023-03-24T12:51:22Z',
			lastUpdatedTimestamp: '2023-03-24T12:51:22Z'
		}
	},
	{
		data: {
			name: 'dist_groupid',
			valueType: 'INT64',
			description:
				'Identifier of distance group. Each distance belongs to one or more groups.',
			labels: ['distances', 'drivers', 'groups']
		},
		metadata: {
			createdTimestamp: '2023-05-17T17:52:21Z',
			lastUpdatedTimestamp: '2023-05-17T17:52:21Z'
		}
	},
	{
		data: {
			name: 'internalTransactionId',
			valueType: 'STRING',
			description: 'Internal Transaction Id',
			labels: ['drivers']
		},
		metadata: {
			createdTimestamp: '2023-05-29T08:00:45Z',
			lastUpdatedTimestamp: '2023-05-29T08:00:45Z'
		}
	},
	{
		data: {
			name: 'transaction',
			valueType: 'STRING',
			description: 'Transaction Id',
			labels: ['drivers']
		},
		metadata: {
			createdTimestamp: '2023-06-03T14:05:02Z',
			lastUpdatedTimestamp: '2023-06-03T14:05:02Z'
		}
	},
	{
		data: {
			name: 'routeid',
			valueType: 'INT64',
			description: 'Route identifier',
			labels: ['drivers', 'routes']
		},
		metadata: {
			createdTimestamp: '2023-06-09T06:55:06Z',
			lastUpdatedTimestamp: '2023-06-09T06:55:06Z'
		}
	},
	{
		data: {
			name: 'drivetimer',
			valueType: 'INT64',
			description: 'Drive timer instance identifier',
			labels: ['driver']
		},
		metadata: {
			createdTimestamp: '2023-06-15T09:57:41Z',
			lastUpdatedTimestamp: '2023-06-15T09:57:41Z'
		}
	},

	{
		data: {
			name: 'advertisingid',
			valueType: 'STRING',
			description:
				'Advertising identifier of the device (advertisingVendorId (idfv) - ios, deviceAdvertisingId - android)',
			labels: ['drivers', 'advertising']
		},
		metadata: {
			createdTimestamp: '2023-06-21T08:02:28Z',
			lastUpdatedTimestamp: '2023-06-21T08:02:28Z'
		}
	},
	{
		data: {
			name: 'taxiid',
			valueType: 'INT64',
			description: 'Taxi Identifier',
			labels: ['drivers', 'taxi']
		},
		metadata: {
			createdTimestamp: '2023-08-24T09:56:33Z',
			lastUpdatedTimestamp: '2023-08-24T09:56:33Z'
		}
	},

	{
		data: {
			name: 'feature_name',
			valueType: 'STRING',
			description: 'Name of feature (used to get statistics of the feature)',
			labels: ['drivers', 'taxi']
		},
		metadata: {
			createdTimestamp: '2023-10-04T10:06:17Z',
			lastUpdatedTimestamp: '2023-10-04T10:06:17Z'
		}
	}
]

const featureTables = [
	{
		data: {
			name: 'sessions',
			description: 'Table to display session info',
			entities: ['userid', 'driver'],
			features: [
				{
					name: 'net_id',
					valueType: 'INT64',
					description: 'Net ID',
					labels: ['Flabel1', 'Flabel2']
				},
				{
					name: 'taxi_code',
					valueType: 'STRING'
				},
				{
					name: 'reg',
					valueType: 'INT64'
				},
				{
					name: 'driver_level',
					valueType: 'INT32'
				}
			],
			labels: ['label1', 'label2'],
			ttlMinutes: 456,
			multiRecord: true,
			job: {
				sources: [
					{
						options: {
							path: 'drivers_sessions'
						},
						alias: 'sessions',
						columns: [
							'userid',
							'platf as i_platf',
							'cast(netid as int) as i_netid',
							'deviceadvertisingid',
							'advertisingvendorid',
							'countvisited'
						],
						format: 'hive'
					}
				],
				tasks: [
					{
						query:
							'select distinct userid, i_platf, i_netid, i_advid from \\n(select userid, i_platf, i_netid, \\ncase\\nwhen i_netid = 7 then advertisingvendorid\\nwhen i_netid = 22 then deviceadvertisingid\\nend as i_advid\\nfrom sessions\\nwhere i_netid in (7, 22) and countvisited = 1) a\\nwhere i_advid is not null\\n',
						alias: 'final_result'
					}
				],
				sinks: [
					{
						input: 'final_result',
						options: {
							project: 'drivers',
							feature_table: 'sessions'
						},
						partitionBy: ['123'],
						columns: ['sdfg'],
						mode: 'dfg',
						format: 'cfv'
					}
				]
			}
		},
		metadata: {
			createdTimestamp: '2023-05-04T11:59:56Z',
			lastUpdatedTimestamp: '2023-06-05T13:23:36Z',
			revision: '1',
			hash: '7f30035e'
		}
	},
	{
		data: {
			name: 'transactions_multi',
			entities: ['userid'],
			features: [
				{
					name: 'value',
					valueType: 'DOUBLE'
				}
			],
			ttlMinutes: 129600,
			multiRecord: true
		},
		metadata: {
			createdTimestamp: '2023-05-04T12:00:25Z',
			lastUpdatedTimestamp: '2023-11-13T08:02:00Z',
			revision: '5',
			hash: 'fd03b169'
		}
	},
	{
		data: {
			name: 'transactions',
			entities: ['trasaction', 'userid', 'internalTrasactionId'],
			features: [
				{
					name: 'currency_value',
					valueType: 'DOUBLE'
				},
				{
					name: 'offerId',
					valueType: 'INT32'
				},
				{
					name: 'currency_type',
					valueType: 'STRING'
				},
				{
					name: 'taxi_code',
					valueType: 'STRING'
				},
				{
					name: 'reg',
					valueType: 'INT64'
				},
				{
					name: 'paymentProviderId',
					valueType: 'INT32'
				},
				{
					name: 'last_deposit_any',
					valueType: 'DOUBLE'
				},
				{
					name: 'transaction',
					valueType: 'STRING'
				}
			]
		},
		metadata: {
			createdTimestamp: '2023-05-04T11:59:57Z',
			lastUpdatedTimestamp: '2023-06-04T11:10:34Z',
			revision: '4',
			hash: '861c048a'
		}
	},
	{
		data: {
			name: 'ds_persoffer',
			entities: ['userid'],
			features: [
				{
					name: 'tag',
					valueType: 'INT64'
				}
			],
			ttlMinutes: 180
		},
		metadata: {
			createdTimestamp: '2023-03-24T12:51:51Z',
			lastUpdatedTimestamp: '2023-06-20T06:59:26Z',
			revision: '5',
			hash: '5eeb5a32'
		}
	},
	{
		data: {
			name: 'user_profiles',
			entities: ['userid', 'taxiid'],
			features: [
				{
					name: 'driver_level',
					valueType: 'INT32'
				},
				{
					name: 'taxi_code',
					valueType: 'STRING'
				},
				{
					name: 'reg',
					valueType: 'INT64'
				}
			]
		},
		metadata: {
			createdTimestamp: '2023-06-04T11:09:35Z',
			lastUpdatedTimestamp: '2023-06-20T11:46:07Z',
			revision: '6',
			hash: '82d61983'
		}
	},
	{
		data: {
			name: 'segmentation',
			entities: ['userid', 'routeid'],
			features: [
				{
					name: 'city_id',
					valueType: 'INT32_LIST'
				},
				{
					name: 'driver_id',
					valueType: 'INT32_LIST'
				}
			]
		},
		metadata: {
			createdTimestamp: '2023-05-17T17:23:48Z',
			lastUpdatedTimestamp: '2023-09-12T10:13:15Z',
			revision: '9',
			hash: '40b226a0'
		}
	}
]

const mock = new MockAdapter($axios)
mock.onGet(`/projects`).reply(200, {
	projects: ['taxi', 'taxi_stage', 'taxi_dev', 'drivers', 'Choose project']
})
mock.onGet(/feature-tables\/?.*project.*/).reply(200, {
	featureTables: featureTables
})

mock.onGet(/entities\/?.*project.*/).reply(200, {
	entities: entities
})

mock
	.onGet(`/feature-tables/sessions`) //todo add name as path param
	//.reply(200, featureTables.filter(table => table.data.name === name)[0])
	.reply(200, featureTables.filter(table => table.data.name === 'sessions')[0])

mock.onPost('/feature-tables/apply').reply(200)
mock.onPost('/entities/apply').reply(200)
mock.onPost('/projects/apply').reply(200)
