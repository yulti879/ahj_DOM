import initGame from './app';

beforeEach(() => {
  document.body.innerHTML = '<div class="game"></div>'; // Создаём элемент DOM  
});

test('initGame should append goblin to a cell', () => {
  initGame();

  const goblin = document.querySelector('.goblin');

  expect(goblin).not.toBeNull(); // Проверяем, что гоблин добавлен
});

test('goblin should move to a new cell after interval', () => {  
  jest.useFakeTimers(); // Мокируем таймеры

  initGame();

  const goblin = document.querySelector('.goblin');

  const initialCell = goblin.parentElement; // Сохраняем начальную ячейку

  jest.advanceTimersByTime(1200); // Перемещаем время вперёд на 1200 мс

  const newCell = goblin.parentElement; // Получаем новую ячейку

  expect(newCell).not.toBe(initialCell); // Проверяем, что гоблин переместился

  jest.useRealTimers(); // Восстанавливаем настоящие таймеры
});