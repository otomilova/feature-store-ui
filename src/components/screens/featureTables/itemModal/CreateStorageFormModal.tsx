import { Button, Center, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import CustomSelect from '../../../ui/select/CustomSelect'
import {
	IFeatureTableFormData,
	StorageTypes
} from '../../../../types/types.d.ts'
import { SELECT_STORAGE_TYPE_OPTIONS, TYPE } from '../../../../utils/constants'
import { extractValueFromSelectObj } from '../../../../utils/helpers.ts'
import { StorageWatched } from './StorageWatched'

interface CreateStorageFormProps {
	id: string
	onClose: () => void
	setStorage: (
		storage: Array<Pick<IFeatureTableFormData, 'offlineStorage'>>
	) => void
	storage: Array<Pick<IFeatureTableFormData, 'offlineStorage'>>
}

const CreateStorageFormModal = ({
	id,
	onClose,
	setStorage,
	storage
}: CreateStorageFormProps) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		const { fileFormat, fileUrl, remoteUrl, table, columns } = data
		data.type = StorageTypes[extractValueFromSelectObj(data.type)]
		switch (data.type) {
			case StorageTypes.FILE_TYPE:
				data.fileOptions = { fileFormat: fileFormat, fileUrl: fileUrl }
				delete data.fileUrl
				delete data.fileFormat
				break
			case StorageTypes.REMOTE_TYPE:
				data.remoteOptions = { remoteUrl: remoteUrl }
				delete data.remoteUrl
				break
			case StorageTypes.HIVE_TYPE:
				data.hiveOptions = {
					table: table,
					columns: columns?.split(',').map(c => c.trim())
				}
				delete data.table
				delete data.columns
				break
		}
		data.name = data.type
		setStorage([data])
		reset()
		onClose()
	}

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	return (
		<form
			key={5}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
		>
			<Flex gap='30px' direction='row' alignItems='end'>
				<Flex direction='column' width='100%'>
					<CustomSelect
						isRequired
						selectName={TYPE.title}
						selectId={TYPE.id}
						control={control}
						options={SELECT_STORAGE_TYPE_OPTIONS}
					/>
				</Flex>
			</Flex>
			<StorageWatched control={control} errors={errors} register={register} />

			<Center mt='2em'>
				<Flex gap='15px'>
					<Button
						size={{ md: 'md', lg: 'md', xl: 'lg' }}
						onClick={onClose}
						colorScheme='blue'
						variant='outline'
					>
						Cancel
					</Button>
					<Button
						size={{ md: 'md', lg: 'md', xl: 'lg' }}
						form={id}
						type='button'
						colorScheme='button'
						onClick={() => {
							handleSubmit(onSubmit)()
						}}
					>
						Create Storage
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateStorageFormModal
