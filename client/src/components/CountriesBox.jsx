var React = require('react');
var CountriesSelector = require('./CountriesSelector.jsx');
var CountryDisplay = require('./CountryDisplay.jsx');

var CountriesBox = React.createClass({

  getInitialState: function(){
    return {countries: [], displayCountry: null}
  },

  setDisplayCountry: function(country){
    this.setState({displayCountry: country});
  },

  componentDidMount: function(){ //we don't need to call this ourselves, react will do it
    console.log('CDM was called');
    var url = "https://restcountries.eu/rest/v1/all"
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      console.log('Got the data');
      var data = JSON.parse(request.responseText);
      this.setState({countries: data});
    }.bind(this)
    request.send();
  },

  handleButtonClick: function(countryCode){
    var foundCountry = null;
    for (var country of this.state.countries) {
      if (country.alpha3Code === countryCode) {
        foundCountry = country;
      }
    };
    this.setDisplayCountry(foundCountry);
  },

  render: function(){
    var displayElement = <h4>No country selected</h4>
    if (this.state.displayCountry){
      displayElement = <CountryDisplay buttonClicked={this.handleButtonClick} country={this.state.displayCountry}/>
    }
    return (
      <div>
        <h4>Countries Box</h4>
        <CountriesSelector
            countries={this.state.countries}
            onSelectCountry={this.setDisplayCountry}
        />
        {displayElement}
      </div>
    )
  }
});

module.exports = CountriesBox;
