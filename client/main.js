import { Meteor } from 'meteor/meteor';

const options = {
  records: [
    { name: 'Widget 1' },
    { name: 'Widget 2' },
    { name: 'Widget 3' },
  ],
};

Meteor.call('myMethod', options, (err, res) => {
  console.log(err, res);
});
