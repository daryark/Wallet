export const categoryCheck = function (category) {
  let categ = '';
  switch (category) {
    case 'Education':
      categ = 'Освіта';
      break;
    case 'Main expenses':
      categ = 'Основні витрати';
      break;
    case 'Products':
      categ = 'Продукти';
      break;
    case 'Car':
      categ = 'Машина';
      break;
    case 'Self care':
      categ = 'Турбота про себе';
      break;
    case 'Child care':
      categ = 'Турбота про дитину';
      break;
    case 'Household products':
      categ = 'Побутові вироби';
      break;
    case 'Leisure':
      categ = 'Дозвілля';
      break;
    case 'Entertainment':
      categ = 'Розваги';
      break;
    default:
      categ = 'Інші витрати';
  }
  return categ;
};

export const typeCheck = function (type) {
  let catType = '';
  switch (type) {
    case 'INCOME':
      catType = 'Дохід';
      break;

    default:
      catType = 'Витрати';
  }
  return catType;
};
