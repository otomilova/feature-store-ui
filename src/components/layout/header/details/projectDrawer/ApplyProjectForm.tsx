import * as React from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import CustomInput from '../../../ui/input/CustomInput'
import CustomTextarea from '../../../ui/textarea/CustomTextarea'
import { useProject } from '../../../hooks/useProject.js'
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
import Loader from '../../../ui/Loader'

const ApplyEntityForm = ({
	id,

	backlink
}: {
	id: string

	backlink: string | undefined
}) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		setValue
	} = useForm({
		mode: 'onChange'
	})

	//const navigate = useNavigate()

	const { project } = useProject()

	//const [labels, setLabels] = useState([])

	const { mutate, isPending } = useApplyEntity()

	const onSubmit = (formData: IEntityFormData) => {
		console.log(formData)
		const request: IApplyEntityRequest = makeRequestFromEntityFormData(
			formData,
			project
		)
		mutate(request)
	}

	// const checkKeyDown = e => {
	// 	if (e.key === 'Enter') e.preventDefault()
	// }

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				//onKeyDown={e => checkKeyDown(e)}
				id='projectForm'
				key='projectForm'
			>
				<Flex direction='column' width='700px'>
					{isPending && <Loader rows={12} />}

					<CustomInput
						inputName='Name'
						inputId='entityName'
						errors={errors}
						register={register}
						validation={INPUT_VALIDATION}
					/>

					<CustomSelect
						changeable={true}
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
						control={control}
						tags={labels}
						setTags={setLabels}
						selectName={LABELS.title}
						selectId={LABELS.id}
					/>
				</Flex>

				<Center mt='2em'>
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
							Create Entity
						</Button>
					</Flex>
				</Center>
			</form>
		</>
	)
}

export default ApplyEntityForm
