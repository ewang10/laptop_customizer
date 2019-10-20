import React, { Component } from 'react';
import Summary from './Summary/Summary';
import './TotalSummary.css';

class TotalSummary extends Component {
    render() {
        const { selectOption } = this.props;

        const summary = Object.keys(selectOption).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = selectOption[feature];

            return (
                <Summary 
                    featureHash={featureHash}
                    feature={feature}
                    selectedOption={selectedOption}                  
                />
            );
        });

        const total = Object.keys(selectOption).reduce(
            (acc, curr) => acc + selectOption[curr].cost,
            0
        );
        
        // This object will allow us to
        // easily convert numbers into US dollar values
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <div className="summary__total">
                    <div className="summary__total__label">Total</div>
                    <div className="summary__total__value">
                        {USCurrencyFormat.format(total)}
                    </div>
                </div>
            </section>
        );
    }
}

export default TotalSummary;