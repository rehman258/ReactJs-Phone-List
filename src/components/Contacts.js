import React from 'react'
import PropTypes from 'prop-types'
import Filter from './Filter'
import Form from './Form'


const Contacts = props =>
			<div>
				<Filter contacts = {props.contacts}/>
				<Form addContact ={props.addContact}/>
			</div>

Contacts.propTypes = {
		contacts: PropTypes.array.isRequired,
		addContact: PropTypes.func
	}

export default Contacts;