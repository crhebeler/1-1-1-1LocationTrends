import React from 'react';
import Responsive from 'react-responsive-decorator';


@Responsive
class MyComponent extends React.Component {
state = {
    isMobile: false
  }
componentDidMount() {
    this.props.media({ minWidth: 768 }, () => {
      this.setState({
        isMobile: false
      });
    });
this.props.media({ maxWidth: 768 }, () => {
      this.setState({
        isMobile: true
      });
    });
  }
render() {
    const { isMobile } = this.state;
return (
      <div>
      {isMobile ?
        <div>Mobile</div> :
          <div>Not mobile</div>
      }
      </div>
    );
  }
}
export default MyComponent;