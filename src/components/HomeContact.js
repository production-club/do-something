import React, {Component} from 'react';
import '../App.css'
export class HomeContact extends Component {
    componentDidMount(){
        const script = document.createElement("script");
        script.src="https://productionclub.activehosted.com/f/embed.php?id=42"; 
        document.body.appendChild(script);
    }
    render(){
        return <div className="_form_42"></div>;
    }
}
export default HomeContact;
