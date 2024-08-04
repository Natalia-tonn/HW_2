
import './App.css';
import Greeting from './components/Greeting';
import ShoppingList from './components/ShoppingList';
import OrderStatus from './components/OrderStatus';

function App() {
  const foodProducts = ['Яблоко', 'Хлеб', 'Молоко', 'Сыр', 'Мясо'];
  const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 456, status: 'доставлен' },
    { orderId: 789, status: 'в ожидании' }
  ];
  return (
  
    <div>
      <h1>Привет <Greeting name={"Annabella"} ></Greeting></h1>
      <ShoppingList items={foodProducts} />

            <h1>Список заказов</h1>
            {orders.map(order => (
                <OrderStatus key={order.orderId} orderId={order.orderId} status={order.status} />
            ))}
        




    </div>
  );
}

export default App;
