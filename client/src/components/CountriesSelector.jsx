var React = require('react');

var CountriesSelector = React.createClass({
  getInitialState: function(){
    return {selectedIndex: null,
            countryOptions: []};
  },

  handleChange: function(e){
    e.preventDefault();
    var newIndex = e.target.value;
    this.setState({selectedIndex: newIndex});
    var selectedCountry = this.state.countryOptions[newIndex];
    this.props.onSelectCountry(selectedCountry);
  },

  handleRegionChange: function(e){
    e.preventDefault();
    var region = e.target.value;
    var countries = this.props.countries.filter(function(country){
      return country.region === region;
    })
    this.setState({countryOptions: countries});
  },

  render: function(){
    var allCountries = this.props.countries;
    var regions = [];
    for (var country of allCountries) {
      if (regions.indexOf(country.region) === -1) {
        regions.push(country.region)
      }
    }
    var regions = regions.map(function(region, index){
      return(
        <option key={index} value={region}>{region}</option>
      )
    })
    var options = this.state.countryOptions.map(function(country, index){
      return(
        <option value={index} key={country.alpha2Code}>{country.name}</option>
      )
    })
    return (
      <div>
      <select value={this.state.selectedRegion}
              onChange={this.handleRegionChange}
      >
      {regions}
      </select>
      <select value={this.state.selectedIndex}
              onChange={this.handleChange}
      >
      {options}
      </select>
      </div>
    )
  }
})

module.exports = CountriesSelector;
