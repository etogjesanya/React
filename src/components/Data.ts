var id = 0;

interface Data {
  id: number;
  fullName: string;
  departmentID: number;
}

const dataEmployee: Data[] = [
    { id: ++id, fullName: 'Тетерин Аввакум Гордеевич', departmentID: 5},
    { id: ++id, fullName: 'Петухов Владлен Агафонович', departmentID: 4},
    { id: ++id, fullName: 'Николаев Роберт Миронович', departmentID: 4},
    { id: ++id, fullName: 'Воронцов Мстислав Лукьевич', departmentID: 6},
    { id: ++id, fullName: 'Борисов Гордий Святославович', departmentID: 9},
    { id: ++id, fullName: 'Корнилов Нисон Валентинович', departmentID: 4},
    { id: ++id, fullName: 'Зуев Игнатий Кимович', departmentID: 2},
    { id: ++id, fullName: 'Шаров Мечеслав Андреевич', departmentID: 4},
    { id: ++id, fullName: 'Денисов Альберт Ефимович', departmentID: 6},
    { id: ++id, fullName: 'Меркушев Корнелий Святославович', departmentID: 4},
    { id: ++id, fullName: 'Мартынов Вальтеер Богуславович', departmentID: 8},
    { id: ++id, fullName: 'Крюков Платон Эдуардович', departmentID: 3},
    { id: ++id, fullName: 'Елисеев Дмитрий Адольфович', departmentID: 1},
    { id: ++id, fullName: 'Суворов Степан Юрьевич', departmentID: 2},
    { id: ++id, fullName: 'Михайлов Устин Даниилович', departmentID: 4},
    { id: ++id, fullName: 'Прохоров Велор Авдеевич', departmentID: 6},
    { id: ++id, fullName: 'Александров Руслан Макарович', departmentID: 8},
    { id: ++id, fullName: 'Красильников Альфред Филатович', departmentID: 7},
    { id: ++id, fullName: 'Морозов Ибрагил Дмитрьевич', departmentID: 4},
    { id: ++id, fullName: 'Рыбаков Августин Якунович', departmentID: 9},
  ];

  // сделать метод выдачи данных без експорт
  export default dataEmployee;