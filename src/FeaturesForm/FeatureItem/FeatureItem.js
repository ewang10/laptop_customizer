import React, { Component } from 'react';
import slugify from 'slugify';
import './FeatureItem.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});

class FeatureItem extends Component {
    render() {
        const {itemHash, feature, item, selectOption} = this.props;
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === selectOption[feature].name}
                    onChange={() => this.props.handleUpdate(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
            </div>
        );
    }
}

export default FeatureItem;