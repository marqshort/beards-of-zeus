var ToggleDescription = require('./toggleDescription.jsx');

module.exports = React.createClass({
  displayName: "Activity",
  render: function() {
    return (
        <div className="row">
          <div className="large-12 columns panel activity radius">
            <div className="row">
              <div className="small-2 columns"><img className="img-round owner" src={this.props.avatar} /></div>
              <h3 className="small-8 columns activity-title">{this.props.title}</h3>
              <form className="small-1 columns join" action="/data/join" method="post">
                <input type='hidden' name='user_id' value={this.props.user_id}/>
                <input type='hidden' name='activity_id' value={this.props.id}/>
                <button type="submit"><i className="fa fa-plus"></i></button>
              </form>             
            </div>
            <ToggleDescription description={this.props.description} />
            <div className="row activity-info">
              <p className="small-6 column location">{this.props.location}</p>
              <p className="small-6 column keywords">{this.props.keywords}</p>
            </div>
          </div>
        </div>
      )
  }
});