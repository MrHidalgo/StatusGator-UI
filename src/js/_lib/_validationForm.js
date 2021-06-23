

/**
 * @name initValidation
 *
 * @description
 */
const initValidation = () => {

	/**
	 *
	 * @param form
	 */
	const validationSubmitHandler = (form) => {
		$.ajax({
			type: "POST",
			url: $(form).attr('action'),
			data: $(form).serialize(),
			success: (response) => {
				const data = $.parseJSON(response);

				if (data.status === 'success') {
					// do something
				} else {
					// do something
				}
			}
		});
	};

	/**
	 *
	 * @param error
	 * @param element
	 */
	const validationErrorPlacement = function(error, element) {
		error.appendTo(element.closest('.c-form__field'));
	};

	/**
	 *
	 * @param element
	 */
	const validationHighlight = (element) => {
		$(element).closest('.c-form__field').addClass('is-error');
	};

	/**
	 *
	 * @param element
	 */
	const validationUnhighlight = (element) => {
		$(element).closest('.c-form__field').removeClass('is-error');
	};

	/**
	 * @description
	 */
	$("#formName").validate({
		submitHandler: validationSubmitHandler,
		errorPlacement: validationErrorPlacement,
		highlight: validationHighlight,
		unhighlight: validationUnhighlight,
		rules: {
			name: 'required',
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 8
			},
			message: 'required',
			select: 'required',
			radio: 'required',
			checkbox: 'required'
		}
	});
};