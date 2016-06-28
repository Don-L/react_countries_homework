var React = require('react');

var BorderingCountries = React.createClass({

  render: function(){
    var borderingCountries = this.props.countries;
    var array = borderingCountries.map(function(countryCode){
      return <button
                value={countryCode}
                onClick={this.handleClick}
                key={countryCode}
             >
             {countryCode}
             </button>
    }.bind(this))
    return (<div>
              <p>Bordering Countries -</p>
              {array}
            </div>)
  },

  handleClick: function(e){
    e.preventDefault();
    this.props.onButtonClick(e.target.value);
  }
})

module.exports = BorderingCountries;
