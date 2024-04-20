import { useWatch } from 'react-hook-form'
import CustomInput from '../../../ui/input/CustomInput'
import { INPUT_VALIDATION_1 } from '../../../../utils/validation'
import { StorageTypes } from '../../../../types/types.d.ts'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'

export function StorageWatched({ control, register, errors }) {
	const type = useWatch({
		control,
		name: 'type',
		defaultValue: ''
	})

	return (
		<>
			{type.value == StorageTypes.FILE_TYPE && (
				<>
					<CustomInput
						isRequired
						inputName='Format'
						inputId='fileFormat'
						errors={errors}
						register={register}
						validation={INPUT_VALIDATION_1}
					/>
					<CustomInput
						isRequired
						inputName='URL'
						inputId='fileUrl'
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
						inputName='URL'
						inputId='remoteUrl'
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
						inputName='Table'
						inputId='table'
						errors={errors}
						register={register}
						validation={INPUT_VALIDATION_1}
					/>
					<CustomTextarea
						textareaName='Columns'
						textareaId='columns'
						errors={errors}
						register={register}
						placeholder={'Comma separated columns'}
					/>
				</>
			)}
		</>
	)
}
