var id = 0;

interface Data {
  id: number;
  fullName: string;
  departmentID: number;
  balanceSum: number;
}

const dataEmployee: Data[] = [
    { id: ++id, fullName: 'Тетерин Аввакум Гордеевич', departmentID: 5, balanceSum: 1200},
    { id: ++id, fullName: 'Петухов Владлен Агафонович', departmentID: 4, balanceSum: 0},
    { id: ++id, fullName: 'Николаев Роберт Миронович', departmentID: 4, balanceSum: 656},
    { id: ++id, fullName: 'Воронцов Мстислав Лукьевич', departmentID: 6, balanceSum: 123},
    { id: ++id, fullName: 'Борисов Гордий Святославович', departmentID: 9, balanceSum: 5},
    { id: ++id, fullName: 'Корнилов Нисон Валентинович', departmentID: 4, balanceSum: 3132},
    { id: ++id, fullName: 'Зуев Игнатий Кимович', departmentID: 2, balanceSum: 875},
    { id: ++id, fullName: 'Шаров Мечеслав Андреевич', departmentID: 4, balanceSum: 318},
    { id: ++id, fullName: 'Денисов Альберт Ефимович', departmentID: 6, balanceSum: 645},
    { id: ++id, fullName: 'Меркушев Корнелий Святославович', departmentID: 4, balanceSum: 130},
    { id: ++id, fullName: 'Мартынов Вальтеер Богуславович', departmentID: 8, balanceSum: 0},
    { id: ++id, fullName: 'Крюков Платон Эдуардович', departmentID: 3, balanceSum: 970},
    { id: ++id, fullName: 'Елисеев Дмитрий Адольфович', departmentID: 1, balanceSum: 2131},
    { id: ++id, fullName: 'Суворов Степан Юрьевич', departmentID: 2, balanceSum: 1000},
    { id: ++id, fullName: 'Михайлов Устин Даниилович', departmentID: 4, balanceSum: 0},
    { id: ++id, fullName: 'Прохоров Велор Авдеевич', departmentID: 6, balanceSum: 4141},
    { id: ++id, fullName: 'Александров Руслан Макарович', departmentID: 8, balanceSum: 166},
    { id: ++id, fullName: 'Красильников Альфред Филатович', departmentID: 7, balanceSum: 666},
    { id: ++id, fullName: 'Морозов Ибрагил Дмитрьевич', departmentID: 4, balanceSum: 777},
    { id: ++id, fullName: 'Рыбаков Августин Якунович', departmentID: 9, balanceSum: 821},
  ];

  export default function GetData() {
    return dataEmployee; }
