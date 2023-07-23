import useInput from '../hooks/use-input';

// https://academind.com/tutorials/reactjs-a-custom-useform-hook/

const BasicForm = (props) => {
	const {
		value: firstNameValue,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangerHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName,
	} = useInput((value) => value.trim() !== '');

	const {
		value: secondNameValue,
		isValid: secondNameIsValid,
		hasError: secondNameHasError,
		valueChangerHandler: secondNameChangeHandler,
		inputBlurHandler: secondNameBlurHandler,
		reset: resetSecondName,
	} = useInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailInputHasError,
		valueChangerHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes('@'));

	let formIsValid = false;

	if (firstNameIsValid && secondNameIsValid && emailIsValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!formIsValid) {
			return;
		}

		resetFirstName();
		resetSecondName();
		resetEmailInput();
	};

	const nameInputClasses = firstNameHasError
		? 'form-control invalid'
		: 'form-control';

	const secondClasses = secondNameHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailInputHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className='control-group'>
				<div className={nameInputClasses}>
					<label htmlFor='name'>First Name</label>
					<input
						type='text'
						id='name'
						value={firstNameValue}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameHasError && (
						<p className='error-text'>Please entred a first name.</p>
					)}
				</div>
				<div className={secondClasses}>
					<label htmlFor='name'>Last Name</label>
					<input
						type='text'
						id='name'
						value={secondNameValue}
						onChange={secondNameChangeHandler}
						onBlur={secondNameBlurHandler}
					/>
					{secondNameHasError && (
						<p className='error-text'>Please entred a last name.</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='text'
					id='name'
					value={enteredEmail}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				{emailInputHasError && (
					<p className='error-text'>Please entred a email.</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
