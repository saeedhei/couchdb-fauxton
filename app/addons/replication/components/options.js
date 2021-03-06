// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.
import React from 'react';
import Constants from '../constants';
import Components from '../../components/react-components.react';

const { StyledSelect } = Components;

const getReplicationTypeOptions = () => {
  return [
    { value: Constants.REPLICATION_TYPE.ONE_TIME, label: 'One time' },
    { value: Constants.REPLICATION_TYPE.CONTINUOUS, label: 'Continuous' }
  ].map(option => <option value={option.value} key={option.value}>{option.label}</option>);
};

const ReplicationType = ({value, onChange}) => {
  return (
    <div className="replication__section">
      <div className="replication__input-label">
        Replication Type:
      </div>
      <div className="replication__input-select">
        <StyledSelect
          selectContent={getReplicationTypeOptions()}
          selectChange={(e) => onChange(e.target.value)}
          selectId="replication-target"
          selectValue={value} />
      </div>
    </div>
  );
};

ReplicationType.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

const ReplicationDoc = ({value, onChange}) =>
<div className="replication__section">
  <div className="replication__input-label">
    Replication Document:
  </div>
  <div className="replication__doc-name">
    <span className="fonticon fonticon-cancel replication__doc-name-icon" title="Clear field"
      onClick={() => onChange('')} />
    <input
      type="text"
      className="replication__doc-name-input"
      placeholder="Custom ID (optional)"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
</div>;

ReplicationDoc.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export class ReplicationOptions extends React.Component {

  render () {
    const {replicationType, replicationDocName, onDocChange, onTypeChange} = this.props;

    return (
      <div>
        <ReplicationType
          onChange={onTypeChange}
          value={replicationType}
        />
        <ReplicationDoc
          onChange={onDocChange}
          value={replicationDocName}
        />
      </div>
    );
  }

}

ReplicationOptions.propTypes = {
  replicationDocName: React.PropTypes.string.isRequired,
  replicationType: React.PropTypes.string.isRequired,
  onDocChange: React.PropTypes.func.isRequired,
  onTypeChange: React.PropTypes.func.isRequired
};
