import React, { PureComponent } from 'react';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { getProjects, signIn } from '../../helpers/api';

class Home extends PureComponent {
    constructor() {
        super();
        this.state = {
            isFetching: false,
            options: [],
            selected: [],
        }
    }
    componentDidMount() {
         signIn();
    }

    handleChange = (e, { value }) => {
        this.setState({ 
            selected: [
                ...this.state.selected,
                value
            ]
         }, () => console.log(this.state.selected));
    };

    handleSearchChange = async (e, { searchQuery }) => {
        this.setState({ isFetching: true })

        const options = await getProjects(searchQuery);
        this.setState({ isFetching: false, options:  options})
    };

  render() {
      const { options, value, isFetching, selected } = this.state;
      console.log(options);
    return (
      <div>
          <div>
            <ul>
                {selected.map(project =>
                <li key={project}>{project}</li>)}
            </ul>
          </div>
          <Dropdown
            selection
            search
            options={options}
            value={value}
            placeholder='Add Project'
            onChange={this.handleChange}
            onSearchChange={this.handleSearchChange}
            disabled={isFetching}
            loading={isFetching}
          />      
        </div>
    );
  }
}

export default Home;
