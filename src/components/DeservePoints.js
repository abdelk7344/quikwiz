import React from 'react'
import {Button} from 'react-bootstrap'


class DeservePoints extends React.Component{


    render(){

        let cleanAnswer= this.props.answer;
        return(
            
            <div>
                <h4 className="deserveform">The correct answer is <b>{cleanAnswer}</b>, Do you believe that your answer would be marked correct?</h4>
                <Button className='buttonSpace' variant='primary' onClick={this.props.yes}>Yes</Button>
                <Button className='buttonSpace' variant='primary' onClick={this.props.no}>No</Button>
            </div>
        )
        
    }


}


export default DeservePoints










