class LatestCommitComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      date: ""
    };
  }
  componentDidMount() {
    fetch(
      "https://api.github.com/repos/tegorinternational/Dukaan-App/branches/master"
    )
      .then(response => {
        response.json().then(json => {
          console.log(json);
          this.setState({
            author: json.commit.author.login,
            date: json.commit.commit.author.date
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div class="text-base font-light text-gray-600">{this.state.author}</div>
        <div class="text-2xl font-medium text-blue-600">{this.state.date}</div>
      </div>
    );
  }
}
ReactDOM.render(<LatestCommitComponent />, document.getElementById("updated_date"));
