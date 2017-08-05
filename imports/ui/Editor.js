import React from 'react';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';

import { Notes } from '../api/notes';

export class Editor extends React.Component {
  handleBodyChange(e) {
    this.props.call('notes.update', this.props.note._id, {
      body: e.target.value
    });
  }

  handleTitleChange(e) {
    this.props.call('notes.update', this.props.note._id, {
      title: e.target.value
    });
  }

  render() {

    if(this.props.note) {
      return (
        <div>
          <input value={this.props.note.title} placeholder="Untitled" onChange={this.handleTitleChange.bind(this)}/>
            <textarea value={this.props.note.body} placeholder="Start typing..." onChange={this.handleBodyChange.bind(this)}></textarea>
            <button>Delete Note</button>
        </div>
      );
    } else if (this.props.selectedNoteId) {
      return <p>Note Not Found</p>
    } else {
      return <p>Choose/Create a note</p>
    }
  }
};

Editor.PropTypes = {
  note: PropTypes.object,
  selectedNoteId: PropTypes.string,
  call: PropTypes.func,
};

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');

  return {
    selectedNoteId,
    note: Notes.findOne(selectedNoteId),
    call: Meteor.call
  };
}, Editor);
