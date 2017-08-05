import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Session} from 'meteor/session';

export const NoteListHeader = (props) => {
  return (
    <div>
      <button onClick={() => {
        props.meteorCall('notes.insert', (err, res) => {
          if(res) {
            props.Session.set('selectedNoteId', res);
          }
        });
      }}> Add Note </button>
    </div>
  );
};

NoteListHeader.PropTypes = {
  meteorCall: PropTypes.func.isRequired,
  Session: PropTypes.object.isRequired
}

export default createContainer(() => {
  return {
    meteorCall: Meteor.call,
    Session
  };
}, NoteListHeader);
