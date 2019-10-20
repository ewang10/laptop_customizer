import React, { Component } from 'react';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import FeatureItem from './FeatureItem/FeatureItem';
import Feature from './Feature/Feature';
import './FeaturesForm.css';


class FeaturesForm extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <FeatureItem
                        itemHash={itemHash}
                        feature={feature}
                        item={item}
                        selectOption={this.props.selectOption}
                        handleUpdate={this.props.handleUpdate}
                    />
                );
            });

            return (
                <Feature
                    featureHash={featureHash}
                    feature={feature}
                    options={options}
                />

            );
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        );
    }
}

FeaturesForm.defaultProps = {
    features: {}
};

export default FeaturesForm;
