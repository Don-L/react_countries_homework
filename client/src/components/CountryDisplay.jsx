var React = require('react');
var BorderingCountries = require('./BorderingCountries.jsx');

var CountryDisplay = React.createClass({
  render: function(){
    var country = this.props.country;
    var allKeys = Object.keys(country);
    var filteredKeys = allKeys.filter(function(key){
      return (key != 'translations' && key != 'borders' && key != 'altSpellings' && key != 'latlng');
    });
    var allData = [];
      for (var i = 0; i < filteredKeys.length; i++) {
        allData.push(<p key={i}>{filteredKeys[i]}: {country[filteredKeys[i]]}</p>)
      };
    return(
           <div>
           {allData}
           <BorderingCountries onButtonClick = {this.props.buttonClicked} countries={this.props.country.borders}/>
           </div>
      );
  }
})

module.exports = CountryDisplay;
