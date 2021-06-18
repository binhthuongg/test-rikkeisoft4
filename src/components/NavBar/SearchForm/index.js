import React from 'react';
import { Field, Form } from 'react-final-form';
import { StyledComponent } from './styles';

function SearchForm(props) {
	const initialFormValue = {
		search: '',
	};
	const onSubmit = (values) => {
		alert(JSON.stringify(values));
	};
	return (
		<StyledComponent>
			<div className='searchForm'>
				<Form
					onSubmit={onSubmit}
					initialValues={initialFormValue}
					render={({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<Field name='search'>
								{({ input, meta }) => (
									<div className='inputElement'>
										<input
											{...input}
											type='text'
											placeholder='Images, #tags, @users oh my!'
										/>
										{meta.touched && meta.error && (
											<div className='error'>
												{meta.error}
											</div>
										)}
									</div>
								)}
							</Field>
							<div
								className='button'
								onClick={() => handleSubmit()}
							>
								<i
									className='fa fa-search'
									aria-hidden='true'
								></i>
							</div>
						</form>
					)}
				/>
			</div>
		</StyledComponent>
	);
}

export default SearchForm;
