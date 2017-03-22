

class CountryList extends React.Component {
  // Have to manually bind "this" with our componenet because it's a custome component
  constructor(props) {
    super(props);
    //Have to use state to keep track of counts 
    this.state = {
      countries: [],
    };

    this.handleCountryUpVote = this.handleCountryUpVote.bind(this);
  }

  componentDidMount() {
    this.setState({ countries: Seed.countries });
  }

  
  handleCountryUpVote(countryId) {
    const nextCountries = this.state.countries.map((country) => {
      if (country.id === countryId) {
        return Object.assign({}, country, {
          votes: country.votes + 1,
        });
      } else {
        return country;
      }
    });
    this.setState({
      countries: nextCountries,
    });
  }

  //Renders multiple countries at once
  render() {
    // The sorting method
    const countries = this.state.countries.sort((a, b) => (
      b.votes - a.votes
    ));
    const countryComponents = countries.map((country) => (
      <Country
        key={'country-' + country.id}
        id={country.id}
        title={country.title}
        description={country.description}
        url={country.url}
        votes={country.votes}
        submitterAvatarUrl={country.submitterAvatarUrl}
        countryImageUrl={country.countryImageUrl}
        //Pass down the function as a prop
        onVote={this.handleCountryUpVote}
      />
    ));
    return (
      <div className='ui unstackable items'>
        {countryComponents}
      </div>
    );
  }
}

{/*Country Markup, which includes image, description, who submitted it, and vote counts*/}
class Country extends React.Component {
  handleUpVote = () => (
    this.props.onVote(this.props.id)
  );


  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className='item'>
        <div className='image'>
          <img src={this.props.countryImageUrl} />
        </div>
        <div className='middle aligned content'>
          <div className='header'>
            {/*onClick method to tie with handleUpVote*/}
            <a onClick={this.handleUpVote}>
              <i className='large caret up icon' />
            </a>
            {this.props.votes}
          </div>
          <div className='description'>
            <a href={this.props.url}>
              {this.props.title}
            </a>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img
              className='ui avatar image'
              src={this.props.submitterAvatarUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <CountryList />,
  document.getElementById('content')
);
