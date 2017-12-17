import React,{Component} from 'react'
import caret_down from '../../imgs/caret-down.png'
import validateInput from '../../validations/signup';
import classnames from 'classnames';
import $ from 'jquery'

class InputForm extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	   	  firstname: "",
	   	  lastname: "",		
	      errors: {},
	      isLoading: false
	    };

	    this.onSubmit = this.onSubmit.bind(this);
	    this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		$('.checkbox__field_form').click(function(){
			var cbx = $(this).find('input[type="radio"]')
			if(cbx.prop('checked',false)){
				cbx.prop('checked',true)
			}
			else{
				cbx.prop('checked',false)
			}
		})
	}

	isValid() {
	    const { errorsInput, isValidInput } = validateInput(this.state);

	    if (!isValidInput) {
	      this.setState({ errors: {validateInput:"This field is required"}, isLoading: true })
	    }
	    
	    return isValidInput;
	}

	onSubmit(e) {
	    e.preventDefault();
	    if (this.isValid()) {
	      	$('.message__header').addClass('active')
	      	$('body,html').animate({
	    		scrollTop: $('.message__header').offset() ? $('.message__header').offset().top : 0
	    	})
	    }
	    else{
	    	$('body,html').animate({
	    		scrollTop: $('.has-error').offset() ? $('.has-error').offset().top : 0
	    	})
	    }
	}

	onChange(e) {
	    this.setState({ [e.target.name]: e.target.value });
	}

	render(){
		const { errors } = this.state;

		return(
			<form className="input_form__wrapper" onSubmit={this.onSubmit}>
				<div className={classnames('field_form__input_form', { 'has-error': errors.validateInput })}>
					<h3>First Name</h3>
					<input type="text" 
						name="firstname"
						value={this.state.firstname}
						onChange={this.onChange}
					/>
					<span className="validation">Input your first name.</span>
					{errors.validateInput && <span className="error">Required</span>}
					{errors.validateInput && <span className="notify">Please refresh page to typing again!</span>}
				</div>
				<div className={classnames('field_form__input_form', { 'has-error': errors.validateInput })}>
					<h3>Last Name</h3>
					<input type="text" 
						name="lastname"
						value={this.state.lastname}
						onChange={this.onChange}
					/>
					<span className="validation">Input your last name.</span>
					{errors.validateInput && <span className="error">Required</span>}
					{errors.validateInput && <span className="notify">Please refresh page to typing again!</span>}
				</div>
				<div className="field_form__input_form">
					<h3>Where do you live?</h3>
					<div className="checkbox_wrapper">
						<div className="checkbox__field_form col-lg-6 first s-w">
							<input type="radio" value="Vietnam" checked="false" name="office"/>
							<label htmlFor="" className="radio-custom-label">Vietnam</label>
						</div>
						<div className="checkbox__field_form col-lg-6 s-w">
							<input type="radio" value="Others" checked="false" name="office"/>
							<label htmlFor="" className="radio-custom-label">Others</label>
						</div>
					</div>
					<div className="fw_custom_select__field_form">
						<img src={caret_down} alt=""/>
						<select name="" id="">
							<option>Select your area</option>
							<option>England</option>
							<option>Japan</option>
							<option>China</option>
						</select>
					</div>
				</div>
				<div className="field_form__input_form">
					<h3>When were you born?</h3>
					<div className="fw_custom_select__field_form">
						<img src={caret_down} alt=""/>
						<select name="" id="">
							<option>Select your birth date</option>
							<option>England</option>
							<option>Japan</option>
							<option>China</option>
						</select>
					</div>
				</div>
				<div className="field_form__input_form">
					<h3>And, Your phone number?</h3>
					<input type="text" placeholder="Input Your Number"/>
					<span className="validation art-cl">Please make sure your phone is active. We will contact your over the phone in case of we really really want to talk with you immidiately because you are so talented!! :)</span>
				</div>
				<div className="field_form__input_form">
					<h3>Let us know your current situation.</h3>
					<div className="checkbox_wrapper list">
						<div className="checkbox__field_form">
							<input type="radio" name="offical1"/>
							<label htmlFor="" className="radio-custom-label">
								<i className="fa fa-check"></i>
								<span>Yes! I'm 100% looking for new opportunities.</span>
							</label>
						</div>
						<div className="checkbox__field_form">
							<input type="radio" name="offical1"/>
							<label htmlFor="" className="radio-custom-label">
								<i className="fa fa-check"></i>
								<span>I want to apply for innovatube immidiately!</span>
							</label>
						</div>
						<div className="checkbox__field_form">
							<input type="radio" name="offical1"/>
							<label htmlFor="" className="radio-custom-label"><i className="fa fa-check"></i><span>I want to grab some coffee together and want to hear more about innovatube.</span></label>
						</div>
						<div className="checkbox__field_form">
							<input type="radio" name="offical1"/>
							<label htmlFor="" className="radio-custom-label"><i className="fa fa-check"></i><span>I want to visit innovatube innovative office!</span></label>
						</div>
						<div className="checkbox__field_form">
							<input type="radio" name="offical1"/>
							<label htmlFor="" className="radio-custom-label"><i className="fa fa-check"></i><span>Others</span></label>
						</div>
					</div>
				</div>
				<div className="field_form__input_form">
					<h3>If you check "Others", could you tell me about it more specific?</h3>
					<textarea name="" id="" cols="30" rows="10" placeholder="Your specific reason why do you want to connect with innovatube"></textarea>
				</div>
				<div className="field_form__input_form">
					<button className="classic_btn" disabled={this.state.isLoading} >Send it to innovatube</button>
				</div>
			</form>
		)
	}

}

export default InputForm