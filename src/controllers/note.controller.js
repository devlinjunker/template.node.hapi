/**
 * @flow
 */
import { HapiRequest } from 'app/base/server.js';
import { NoteDataservice, Note } from 'app/dataservices/note.service.js';

/**
 * Container Controller for Note CRUD Functions
 */
export class NoteController {
  /**
   * Returns a note, specified by Id
   * @param  {HapiRequest} request RequestObject
   * @return {Note}         Note corresponding to Id passed in
   */
  static getNoteById({ params }: HapiRequest): Promise<Note> {
    console.log(params);

    return NoteDataservice.getNote({ id: params.id });
  }

  /**
   * Create a new Note
   * @param  {HapiRequest} request RequestObject
   * @return {Note}        [description]
   */
  static createNote({ payload }: HapiRequest): Promise<Note> {
    // TODO: Debug this?
    console.log(payload);
    return NoteDataservice.createNote({ name: payload.name });
  }

  /**
   * Update a note, specified by id
   * @param  {HapiRequest} request RequestObject
   * @return {Note}        [description]
   */
  static updateNote({ payload }: HapiRequest) {
    console.log(payload);
  }

  /**
   * Delete a note, specified by id
   * @param  {HapiRequest} request RequestObject
   * @return {boolean}        [description]
   */
  static deleteNote({ params }: HapiRequest) {
    console.log(params);
  }
}

export default [
  {
    path: '/note/{id}',
    method: 'GET',
    controller: NoteController.getNoteById
  },
  {
    path: '/note',
    method: 'POST',
    controller: NoteController.createNote
  },
  {
    path: '/note/{id?}',
    method: 'PUT',
    controller: NoteController.updateNote
  },
  {
    path: '/note/{id}',
    method: 'DELETE',
    controller: NoteController.deleteNote
  }
];
