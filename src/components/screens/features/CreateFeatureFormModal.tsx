import * as React from 'react'
import { useState } from 'react'
import { Button, Center, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import CustomSelect from '../../ui/select/CustomSelect'
import MultiSelect from '../../ui/select/MultiSelect'
import CustomInput from '../../ui/input/CustomInput'
import CustomTextarea from '../../ui/textarea/CustomTextarea'
import { ValueTypes } from '../../../types/types.d.ts'
import {
	DESCRIPTION,
	FEATURE_TITLES,
	LABELS,
	SELECT_TYPE_OPTIONS,
	TYPE
} from '../../../utils/constants'
import { extractValueFromSelectObj } from '../../../utils/helpers.ts'

const CreateFeatureForm = ({
	changeable,
	id,
	onClose,
	setFeatures,
	features
}) => {
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		data.type = ValueTypes[extractValueFromSelectObj(data.type)]
		setFeatures([...features, data])
		reset()
		onClose()
	}

	const navigate = useNavigate()
	const [labels, setLabels] = useState([])
	const checkKeyDown = e => {
		if (e.key === 'Enter') e.preventDefault()
	}

	return (
		<form
			key={2}
			onSubmit={handleSubmit(onSubmit)}
			onKeyDown={e => checkKeyDown(e)}
			id={id}
		>
			<Flex gap='30px' direction='row' alignItems='end'>
				<Flex direction='column'>
					<CustomInput
						changeable={changeable}
						inputName={FEATURE_TITLES.title}
						inputId={FEATURE_TITLES.id}
						errors={errors}
						register={register}
					/>
				</Flex>
				<Flex direction='column'>
					<CustomSelect
						selectName={TYPE.title}
						selectId={TYPE.id}
						changeable={changeable}
						control={control}
						options={SELECT_TYPE_OPTIONS}
					/>
				</Flex>
			</Flex>
			<CustomTextarea
				textareaName={DESCRIPTION.title}
				textareaId={DESCRIPTION.id}
				errors={errors}
				register={register}
			/>

			<MultiSelect
				control={control}
				selectName={LABELS.title}
				selectId={LABELS.id}
				setTags={setLabels}
				tags={labels}
			/>

			<Center>
				<Flex gap='15px'>
					<Button
						onClick={onClose}
						colorScheme='blue'
						variant='outline'
						mt='60px'
						// onClick={() => {
						// 	navigate('/features')
						// }}
					>
						Cancel
					</Button>
					<Button
						form={id}
						type='button'
						colorScheme='button'
						mt='60px'
						onClick={() => {
							handleSubmit(onSubmit)()
						}}
					>
						{changeable ? 'Apply Changes' : 'Create Feature'}
					</Button>
				</Flex>
			</Center>
		</form>
	)
}

export default CreateFeatureForm
