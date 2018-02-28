import * as React from 'react';
import './LinkButton.css';

export interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const LinkButton: React.StatelessComponent<LinkButtonProps> = (props) => (
	<button type="button" className="LinkButton" {...props} />
);

export default LinkButton;
