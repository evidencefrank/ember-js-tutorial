import Service from '@ember/service';
import

export default class ShoppingCartService extends Service {
  itemList = [{ name: '1' }, { name: '2' }];

  addItem(item){
    console.log(item);
  }
}
