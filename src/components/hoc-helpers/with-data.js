import React, {Component} from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null,
            error: false
        };

        onError = (err) => {
            this.setState({
                error: true,
            });
        };
    
        componentDidMount() {
    
            getData()
            .then((data) => {
                this.setState({
                    data
                });
            })
            .catch(this.onError);
        }

        render() {
            
            const { data, error } = this.state;
            const errorMessage = error ? <ErrorIndicator/> : null;
       

            if (!data) {
                return <Spinner/>;
            }

            return (
                <div>
                    {errorMessage}
                    <View {...this.props} data={data}/>
                </div>   
            );
        }
    };
};

export default withData;