import { useWatch } from 'react-hook-form'
import CustomInput from '../../../ui/input/CustomInput'
import { INPUT_VALIDATION_1 } from '../../../../utils/validation'
import { StorageTypes } from '../../../../types/types.d.ts'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { useEffect } from 'react'
import { COLUMNS, FORMAT, TABLE, URL } from '../../../../utils/constants'

export function StorageWatched({ control, register, errors, item, setValue }) {
	const type = useWatch({
		control,
		name: 'type',
		defaultValue: ''
	})

	useEffect(() => {
		switch (item?.type) {
			case StorageTypes.FILE_TYPE:
				setValue(FORMAT.id_fileFormat, item.fileOptions?.fileFormat)
				setValue(URL.id, item.fileOptions?.fileUrl)
				break

			case StorageTypes.REMOTE_TYPE:
				setValue(URL.id_remote, item.remoteOptions?.remoteUrl)
				break
			case StorageTypes.HIVE_TYPE:
				setValue(COLUMNS.id, item.hiveOptions?.columns)
				setValue(TABLE.id, item.hiveOptions?.table)
				break
		}
	}, [])

	return (
		<>
			{type.value == StorageTypes.FILE_TYPE && (
				<>
					<CustomInput
						isRequired
						inputName={FORMAT.title}
						inputId={FORMAT.id_fileFormat}
						errors={errors}
						register={register}
						validation={INPUT_VALIDATION_1}
					/>
					<CustomInput
						isRequired
						inputName={URL.title}
						inputId={URL.id}
						errors={errors}
						register={register}
						validation={INPUT_VALIDATION_1}
					/>
				</>
			)}
			{type.value == StorageTypes.REMOTE_TYPE && (
				<>
					<CustomInput
						isRequired
						inputName={URL.title}
						inputId={URL.id_remote}
						errors={errors}
						register={register}
						validation={INPUT_VALIDATION_1}
					/>
				</>
			)}
			{type.value == StorageTypes.HIVE_TYPE && (
				<>
					<CustomInput
						isRequired
						inputName={TABLE.title}
						inputId={TABLE.id}
						errors={errors}
						register={register}
						validation={INPUT_VALIDATION_1}
					/>
					<CustomTextarea
						textareaName={COLUMNS.title}
						textareaId={COLUMNS.id}
						errors={errors}
						register={register}
						placeholder={'Comma separated columns'}
						validation={{}}
					/>
				</>
			)}
		</>
	)
}
