//  1. Добавьте пустые классы для Корзины товаров и Элемента корзины товаров. Продумайте,
// какие методы понадобятся для работы с этими сущностями.

class Basket {  
    constructor(container = '.products') {
      this.container = container;     
      this.goods = [];
      this.allProducts = [];
      this.render();
      this.addtoBasket();      // Добавить товар в корзину
      this.removefromBasket(); //удалить товар из корзины
      this.totalpriceBasket(); //расчет суммарной стоимости корзины
      this.continueShopping(); //продолжить покупки

    }
  };

class BasketItem {
    constructor(product, img='https://placehold.it/200x150') {
      this.title = product.title;
      this.price = product.price;
      this.id = product.id;
      this.img = img;
      this.size = size;
      this.quantity = quantity; // количество товаров
      this.calcDiscount();      // расчет скидок
    }
  };

// 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.

class ProductList {
  #goods;
  #allProducts;

  constructor(container = '.products') {    
    this.container = container;    
    this.#goods = [];
    this.#allProducts = [];

    this.fetchGoods();
    //this.#render();
    this.sum();
  }
  fetchGoods() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  sum = () => {
    return this.goods.reduce((sum, {price}) => sum + price, 0);
  };
  console.log(sum()); // почему у меня не получилось проверить полученную сумму
}

const productList = new ProductList();

