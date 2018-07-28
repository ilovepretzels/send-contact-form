import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = {
			FirstName: "",
			LastName: "",
			MailAddress: "",
			PhoneNumber: "",
			nameOk: false,
			lnameOk: false,
			phoneOk: false,
			nameError: "",
			lnameError: "",
			phoneError: ""
    };

  	this.handleInputChange = this.handleInputChange.bind(this);
		this.nameCheck = this.nameCheck.bind(this);
		this.lnameCheck = this.lnameCheck.bind(this);
		this.phoneCheck = this.phoneCheck.bind(this);
  }

  handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
  }

	nameCheck(e) {
		if (e.target.value.length >= 2 && /^[a-zA-Z]+$/.test(e.target.value)) {
			this.setState({ nameOk: true, nameError: "" });
		} else if (e.target.value.length < 2) {
			this.setState({ nameOk: false, nameError: "First name should be at least 2 characters long" });
		} else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
			this.setState({ nameOk: false, nameError: "First name should contain only alphabet letters (a-z/A-Z)" });
		}
	}

	lnameCheck(e) {
		if (e.target.value.length >= 2 && /^[a-zA-Z]+$/.test(e.target.value)) {
			this.setState({ lnameOk: true, lnameError: "" });
		} else if (e.target.value.length < 2) {
			this.setState({ lnameOk: false, lnameError: "Last name should be at least 2 characters long" });
		} else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
			this.setState({ lnameOk: false, lnameError: "Last name should contain only alphabet letters (a-z/A-Z)" });
		}
	}

	phoneCheck(e) {
		if (e.target.value.length === 10 && /^[0-9]+$/.test(e.target.value)) {
			this.setState({ phoneOk: true, phoneError: "" });
		} else if (e.target.value.length !== 10) {
			this.setState({ phoneOk: false, phoneError: "Phone Number should be 10 characters long" });
		} else if (!/^[0-9]+$/.test(e.target.value)) {
			this.setState({ phoneOk: false, phoneError: "Phone Number should contain only numbers (0-9)" });
		}
	}


  render() {
		const { nameOk, lnameOk, phoneOk, nameError, lnameError, phoneError } = this.state;
		return (
			<form action="https://formspree.io/send_testmail@yahoo.com" method="POST">
				<input type="hidden" name="_subject" value="New Lead" />
				<input type="hidden" name="_next" value="http://localhost:3000" />
				<h2>Contact Form</h2>
				<div>
					<label>First Name</label>
					<div className="formgroup">
						<input required	name="FirstName"	type="text"
							value={this.state.firstname}
							onChange={this.handleInputChange}
							onBlur={this.nameCheck}
						/>
						<div className="error">{nameError}</div>
					</div>
				</div>
				<div>
					<label>Last Name</label>
					<div className="formgroup">
						<input required	name="LastName" type="text"
							value={this.state.lastname}
							onChange={this.handleInputChange}
							onBlur={this.lnameCheck}
						/>
						<div className="error">{lnameError}</div>
					</div>
				</div>
				<div>
					<label>Mail Address</label>
					<div className="formgroup">
						<input required	name="MailAddress"	type="email"
							value={this.state.email}
							onChange={this.handleInputChange}
						/>
					</div>
        </div>
				<div>
					<label>Phone Number</label>
					<div className="formgroup">
						<input required	maxlength="10" name="PhoneNumber" type="text"
							value={this.state.phone}
							onChange={this.handleInputChange}
							onBlur={this.phoneCheck}
						/>
						<div className="error">{phoneError}</div>
					</div>
				</div>
				<input type="submit" className={nameOk && lnameOk && phoneOk ? "bttn" : "disabled"} value="Submit" />
      </form>
    );
  }
}

export default App;
