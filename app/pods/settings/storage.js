import StorageObject from 'ember-local-storage/local/object';

const Storage = StorageObject.extend();

Storage.reopenClass({
  initialState() {
    return { language: 'en-us', darkMode: false };
  },
});

export default Storage;
