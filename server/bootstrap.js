//import Moment from 'moment';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
//import { Chats, Messages } from '../lib/collections';

Meteor.startup(function() {
  if (Meteor.users.find().count() != 0) return;
 
  Accounts.createUserWithPhone({
    phone: '+6289601599904',
    profile: {
      name: 'Yoga Tri Nugroho'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+6289653391696',
    profile: {
      name: 'Rizkha Zennita R P'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+6289651411321',
    profile: {
      name: 'Sarah Julia'
    }
  });
 /*
 if (Chats.find().count() !== 0) return;
 
  Messages.remove({});
 
  const messages = [
    {
      text: 'Hey, masih dimana?',
      timestamp: Moment().subtract(1, 'hours').toDate()
    },
    {
      text: 'Bayu, ini aku Rizkha',
      timestamp: Moment().subtract(2, 'hours').toDate()
    },
    {
      text: 'Aku seharusnya baca buku Data Mining',
      timestamp: Moment().subtract(4, 'days').toDate()
    },
    {
      text: 'Nanti saja saya mah Bay',
      timestamp: Moment().subtract(2, 'weeks').toDate()
    }
  ];
 
  messages.forEach((m) => {
    Messages.insert(m);
  });

  const chats = [
    {
      name: 'Yoga Tri Nugroho',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    },
    {
      name: 'Rizkha Zennita R P',
      picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
    },
    {
      name: 'Sarah Julia',
      picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
    },
    {
      name: 'Bimo Prasetyo',
      picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
    }
  ];
 
  chats.forEach((chat) => {
    const message = Messages.findOne({ chatId: { $exists: false } });
    chat.lastMessage = message;
    const chatId = Chats.insert(chat);
    Messages.update(message._id, { $set: { chatId } });
  });
  */
});
