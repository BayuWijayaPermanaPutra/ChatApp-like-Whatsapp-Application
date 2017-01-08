import Moment from 'moment';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Chats } from '../../../lib/collections';

export default class ChatsCtrl extends Controller {
	constructor() {
		super(...arguments);

		this.helpers({
	      data() {
	        return Chats.find();
	      }
	    });
		/*this.data = [
			{
				_id: 0,
				name: 'Yoga Tri Nugroho',
				picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
				lastMessage: {
					text: 'Hey, masih dimana?',
					timestamp: Moment().subtract(1, 'hours').toDate()
				}
			},
			{
				_id: 1,
				name: 'Rizkha Zennita R P',
				picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
				lastMessage: {
					text: 'Bayu, ini aku Rizkha',
					timestamp: Moment().subtract(2, 'hours').toDate()
				}
			},
			{
				_id: 2,
				name: 'Sarah Julia',
				picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
				lastMessage: {
					text: 'Aku seharusnya baca buku Data Mining',
					timestamp: Moment().subtract(4, 'days').toDate()
				}
			},
			{
				_id: 3,
				name: 'Bimo Prasetyo',
				picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
				lastMessage: {
					text: 'Nanti saja saya mah Bay',
					timestamp: Moment().subtract(2, 'weeks').toDate()
				}
			}
		];*/
	}

	showNewChatModal() {
	    this.NewChat.showModal();
	}

	remove(chat) {
    	//this.data.splice(this.data.indexOf(chat), 1);
  		this.callMethod('removeChat', chat._id);
  	}
}
 
ChatsCtrl.$name = 'ChatsCtrl';
ChatsCtrl.$inject = ['NewChat'];