import { useEffect, useState } from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CustomInput from '../../../ui/input/CustomInput'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { useProject } from '../../../hooks/useProject'
import {
	IApplyEntityRequest,
	IEntityFormData
} from '../../../../types/types.d.ts'
import {
	DESCRIPTION,
	LABELS,
	SELECT_TYPE_OPTIONS
} from '../../../../utils/constants'
import { makeRequestFromEntityFormData } from '../../../../utils/adapters'
import MultiSelect from '../../../ui/select/MultiSelect'
import { INPUT_VALIDATION } from '../../../../utils/validation'
import CustomSelect from '../../../ui/select/CustomSelect'
import { useApplyEntity } from '../hooks/useApplyEntity'
import SpinnerLoader from '../../../ui/SpinnerLoader'

interface ApplyEntityFormProps {
	id: string
	backlink: string | undefined
	action: 'create' | 'edit'
	entity: IEntityFormData | undefined
}

const ApplyEntityForm = ({
	id,
	backlink,
	entity,
	action
}: ApplyEntityFormProps) => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const isCreate = action === 'create'
	const navigate = useNavigate()

	const { project } = useProject()

	const [labels, setLabels] = useState(entity ? entity.labels : [])

	const { mutate, isPending } = useApplyEntity()

	const onSubmit = (formData: IEntityFormData) => {
		formData.labels = labels
		const request: IApplyEntityRequest = makeRequestFromEntityFormData(
			formData,
			project
		)
		mutate(request)
	}

	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	useEffect(() => {
		if (entity) {
			setValue('entityName', entity.entityName)
			setValue('type', entity.type)
			setValue(DESCRIPTION.id, entity.description)
		}
	}, [])

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				onKeyDown={e => checkKeyDown(e)}
				id={id}
				key={1}
			>
				<Flex direction='column' width='700px'>
					{isPending && <SpinnerLoader />}

					<CustomInput
						changeable={isCreate}
						isRequired
						inputName='Entity Name'
						inputId='entityName'
						errors={errors}
						register={register}
						validation={INPUT_VALIDATION}
					/>

					<CustomSelect
						isRequired
						changeable={isCreate}
						control={control}
						options={SELECT_TYPE_OPTIONS}
						selectName='Type'
						selectId='type'
					/>

					<CustomTextarea
						textareaName={DESCRIPTION.title}
						textareaId={DESCRIPTION.id}
						errors={errors}
						register={register}
					/>

					<MultiSelect
						color='twitter'
						control={control}
						tags={labels}
						setTags={setLabels}
						selectName={LABELS.title}
						selectId={LABELS.id}
					/>
				</Flex>

				<Center mt='3em'>
					<Flex gap='15px'>
						<Button
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
							form={id}
							colorScheme='blue'
							variant='outline'
							onClick={() => {
								navigate(backlink)
							}}
						>
							Cancel
						</Button>
						<Button
							isLoading={isPending}
							size={{ md: 'md', lg: 'md', xl: 'lg' }}
							type='submit'
							colorScheme='button'
						>
							{isCreate ? 'Create Entity' : 'Apply Changes'}
						</Button>
					</Flex>
				</Center>
			</form>
		</>
	)
}

export default ApplyEntityForm
