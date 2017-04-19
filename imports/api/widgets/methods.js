import { Meteor } from 'meteor/meteor';

import widgetsCollection from './collection';

Meteor.methods({
  myMethod(options) {
    const fails = [];
    options.records.forEach((record, i) => {
      try {
        widgetsCollection.insert(record);
        throw new Error('Oh no!');
      } catch (e) {
        fails.push({ index: i, error: e });
      }
    });
    console.log(fails);
    return { fails };
  },
});
